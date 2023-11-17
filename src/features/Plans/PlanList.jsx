import { useState } from "react";

export default function PlanList({ plans, planType }) {
  const [selectedPlan, setSelectedPlan] = useState(plans.at(0));

  return (
    <div className="plans-list">
      {plans.map((plan, index) => {
        return (
          <div
            key={index}
            className={`plan-item ${
              plan.type === selectedPlan.type ? "plan-active" : ""
            }`}
            onClick={() => setSelectedPlan(plan)}
          >
            <img
              src={`./public/icon-${plan.type}.svg`}
              alt="plan icon"
              className="plan-icon"
            />
            <div className="plan-details">
              <h4 className="plan-type">{plan.type}</h4>
              <p className="plan-price">
                {planType === "monthly"
                  ? `$${plan.monthlyPrice}/mo`
                  : `$${plan.yearly.price}/yr`}
              </p>
              {planType === "yearly" && (
                <p className="plan-offer">
                  {plan.yearly.monthsFree} months free
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
