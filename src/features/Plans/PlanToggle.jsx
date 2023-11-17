export default function PlanToggle({ setPlanType }) {
  return (
    <div className="plans-toggle">
      <p>Monthly</p>
      <label className="switch">
        <input
          type="checkbox"
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
