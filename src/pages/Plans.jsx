import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanList from "../features/Plans/PlanList";
import PlanToggle from "../features/Plans/PlanToggle";
import NavBtns from "../ui/NavBtns";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedPlan,
  updateSelectedPlan,
} from "../features/Plans/PlanSlice";

const plans = [
  {
    type: "Arcade",
    monthlyPrice: 9,
    yearly: {
      price: 90,
      monthsFree: 2,
    },
  },
  {
    type: "Advanced",
    monthlyPrice: 12,
    yearly: {
      price: 120,
      monthsFree: 2,
    },
  },
  {
    type: "Pro",
    monthlyPrice: 15,
    yearly: {
      price: 150,
      monthsFree: 2,
    },
  },
];

export default function Plans() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let planData = useSelector(getSelectedPlan) || [];
  let selectedPlanType;
  if (Object.keys(planData).length !== 0) {
    if (planData.type === "monthly") {
      selectedPlanType = "monthly";
      planData = plans.filter(
        (plan) => plan.monthlyPrice === planData.planPrice
      );
    }
    if (planData.type === "yearly") {
      selectedPlanType = "yearly";
      planData = plans.filter(
        (plan) => plan.yearly.price === planData.planPrice
      );
    }
  }
  const [planType, setPlanType] = useState(selectedPlanType || "monthly");
  const [selectedPlan, setSelectedPlan] = useState(
    planData.length ? planData[0] : plans.at(0)
  );

  function handlePlanData() {
    let planData;
    if (planType === "monthly")
      planData = { type: planType, planPrice: selectedPlan.monthlyPrice };

    if (planType === "yearly")
      planData = { type: planType, planPrice: selectedPlan.yearly.price };

    dispatch(updateSelectedPlan(planData));

    navigate("/addons");
  }

  return (
    <div className="plans-container">
      <h2 className="plans-heading">Select your plan</h2>
      <p className="plans-text">
        You have the option of monthly or yearly billing.
      </p>

      <PlanList
        plans={plans}
        planType={planType}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />

      <PlanToggle setPlanType={setPlanType} />

      <NavBtns
        handleBack={() => navigate("/userinfo")}
        handleNext={() => handlePlanData()}
      />
    </div>
  );
}
