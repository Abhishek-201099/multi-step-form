export default function PlanToggle({ setPlanType, planType }) {
  return (
    <div className="plans-toggle">
      <p>Monthly</p>
      <label className="switch">
        <input
          type="checkbox"
          checked={planType === "yearly" ? true : false}
          // checked={true}
          onChange={() =>
            setPlanType((planType) =>
              planType === "monthly" ? "yearly" : "monthly"
            )
          }
        />
        <span className="slider round"></span>
      </label>
      <p>Yearly</p>
    </div>
  );
}
