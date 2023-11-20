export default function AddonItem({
  addon,
  selectedAddons,
  setSelectedAddons,
}) {
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
    <div
      className={`addon-item ${
        selectedAddons.find(
          (selectedAddon) => selectedAddon.type === addon.type
        )
          ? "addon-active"
          : ""
      }`}
    >
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
      {/*Reminder : Handle plan type wise price rendering */}
      <p className="addon-price">+${addon.price.monthlyPrice}/mo</p>
    </div>
  );
}
