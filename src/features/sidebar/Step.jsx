import { NavLink } from "react-router-dom";

export default function Step({ stepNumber, stepName, to }) {
  return (
    <div className="step-container">
      <div className="step-number">
        <NavLink to={to}>{stepNumber}</NavLink>
      </div>
      <div className="step-details">
        <p>Step {stepNumber}</p>
        <p>{stepName}</p>
      </div>
    </div>
  );
}
