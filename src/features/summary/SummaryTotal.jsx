export default function SummaryTotal({ planData, planTotal, planPattern }) {
  return (
    <div className="summary-total">
      <p className="total-text">
        Total (per{" "}
        {planData.type === "monthly"
          ? "month"
          : planData.type === "yearly"
          ? "year"
          : ""}
        )
      </p>
      <p className="total-price">
        ${planTotal}/{planPattern}
      </p>
    </div>
  );
}
