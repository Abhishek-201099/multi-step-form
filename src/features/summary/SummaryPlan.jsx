import { Link } from "react-router-dom";

export default function SummaryPlan({ planData, planPattern }) {
  return (
    <div className="summary-plan">
      <div className="plan">
        <p className="plan-type">{`${planData.planName} (${planData.type})`}</p>
        <Link to="/plans">Change</Link>
      </div>
      <p className="plan-price">
        ${planData.planPrice}/{planPattern}
      </p>
    </div>
  );
}
