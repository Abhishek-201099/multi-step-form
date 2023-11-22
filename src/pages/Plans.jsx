import { useNavigate } from "react-router-dom";
import PlanList from "../features/plans/PlanList";
import PlanToggle from "../features/plans/PlanToggle";
import NavBtns from "../ui/NavBtns";
import { useDispatch } from "react-redux";
import { updateSelectedPlan } from "../features/plans/PlanSlice";
import { usePlans } from "../features/plans/usePlans";

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
  const { planType, selectedPlan, setPlanType, setSelectedPlan } =
    usePlans(plans);

  function handlePlanData() {
    const planData =
      planType === "monthly"
        ? {
            planName: selectedPlan.type,
            type: planType,
            planPrice: selectedPlan.monthlyPrice,
          }
        : planType === "yearly"
        ? {
            planName: selectedPlan.type,
            type: planType,
            planPrice: selectedPlan.yearly.price,
          }
        : null;

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

      <PlanToggle setPlanType={setPlanType} planType={planType} />

      <NavBtns
        handleBack={() => navigate("/userinfo")}
        handleNext={() => handlePlanData()}
      />
    </div>
  );
}
