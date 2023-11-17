import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanList from "../features/Plans/PlanList";
import PlanToggle from "../features/Plans/PlanToggle";
import NavBtns from "../ui/NavBtns";
import { useDispatch } from "react-redux";
import { updateSelectedPlan } from "../features/Plans/PlanSlice";

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
      price: 90,
      monthsFree: 2,
    },
  },
  {
    type: "Pro",
    monthlyPrice: 15,
    yearly: {
      price: 90,
      monthsFree: 2,
    },
  },
];

export default function Plans() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [planType, setPlanType] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(plans.at(0));

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
