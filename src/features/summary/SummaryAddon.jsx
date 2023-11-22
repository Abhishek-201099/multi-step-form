export default function SummaryAddon({ addon, planPattern }) {
  return (
    <div className="summary-addon">
      <p className="addon-type">{addon.type}</p>
      <p className="addon-price">
        +${addon.price}/{planPattern}
      </p>
    </div>
  );
}
