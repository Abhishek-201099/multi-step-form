import { useSelector } from "react-redux";
import { getSelectedPlan } from "../plans/PlanSlice";

export default function AddonItem({
  addon,
  selectedAddons,
  setSelectedAddons,
}) {
  const { type: selectedPlanType } = useSelector(getSelectedPlan);

  const isChecked = selectedAddons.find(
    (selectedAddon) => selectedAddon.type === addon.type
  )
    ? true
    : false;

  function handleChange() {
    setSelectedAddons((selectedAddons) => {
      return selectedAddons.find(
        (selectedAddon) => selectedAddon.type === addon.type
      )
        ? selectedAddons.filter(
            (selectedAddon) => selectedAddon.type !== addon.type
          )
        : [...selectedAddons, addon];
    });
  }

  return (
    <div className={`addon-item ${isChecked ? "addon-active" : ""}`}>
      <input
        type="checkbox"
        checked={isChecked}
        value={addon}
        onChange={() => handleChange()}
      />

      <div className="addon-details">
        <p className="addon-type">{addon.type}</p>
        <p className="addon-description">{addon.description}</p>
      </div>
      <p className="addon-price">
        +$
        {selectedPlanType === "monthly"
          ? `${addon.price.monthlyPrice}/mo`
          : selectedPlanType === "yearly"
          ? `${addon.price.yearlyPrice}/yr`
          : ""}
      </p>
    </div>
  );
}
