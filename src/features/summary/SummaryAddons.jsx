export default function SummaryAddons({ addonData, render }) {
  return <div className="summary-addons">{addonData.map(render)}</div>;
}
