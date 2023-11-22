import SummaryAddons from "./SummaryAddons";
import SummaryAddon from "./SummaryAddon";
import SummaryPlan from "./SummaryPlan";
import SummaryTotal from "./SummaryTotal";

export default function SummaryTable({
  planData,
  addonData,
  planPattern,
  planTotal,
}) {
  return (
    <div className="summary-details">
      <div className="summary-table">
        <SummaryPlan planData={planData} planPattern={planPattern} />

        <SummaryAddons
          addonData={addonData}
          planPattern={planPattern}
          render={(addon, index) => (
            <SummaryAddon key={index} addon={addon} planPattern={planPattern} />
          )}
        />
      </div>

      <SummaryTotal
        planData={planData}
        planTotal={planTotal}
        planPattern={planPattern}
      />
    </div>
  );
}
