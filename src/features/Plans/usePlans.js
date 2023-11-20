import { useSelector } from "react-redux";
import { getSelectedPlan } from "./PlanSlice";
import { useState } from "react";

export function usePlans(plans) {
  let planData = useSelector(getSelectedPlan) || [];
  let selectedPlanType = "monthly";

  if (Object.keys(planData).length !== 0) {
    selectedPlanType = planData.type === "monthly" ? "monthly" : "yearly";
    planData = plans.filter(
      (plan) =>
        (planData.type === "monthly" &&
          plan.monthlyPrice === planData.planPrice) ||
        (planData.type === "yearly" && plan.yearly.price === planData.planPrice)
    );
  }

  const [planType, setPlanType] = useState(selectedPlanType);
  const [selectedPlan, setSelectedPlan] = useState(
    planData.length ? planData[0] : plans.at(0)
  );

  return { planType, selectedPlan, setPlanType, setSelectedPlan };
}
