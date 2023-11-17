import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanList from "../features/Plans/PlanList";
import PlanToggle from "../features/Plans/PlanToggle";
import NavBtns from "../ui/NavBtns";

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
  const [planType, setPlanType] = useState("monthly");

  return (
    <div className="plans-container">
      <h2 className="plans-heading">Select your plan</h2>
      <p className="plans-text">
        You have the option of monthly or yearly billing.
      </p>

      <PlanList plans={plans} planType={planType} />

      <PlanToggle setPlanType={setPlanType} />

      <NavBtns
        handleBack={() => navigate("/userinfo")}
        handleNext={() => {
          navigate("/addons");
        }}
      />
    </div>
  );
}
