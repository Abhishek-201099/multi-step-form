import AddonItem from "./AddonItem";

export default function AddonsList({
  addons,
  selectedAddons,
  setSelectedAddons,
}) {
  return (
    <div className="addons-list">
      {addons.map((addon, index) => {
        return (
          <AddonItem
            key={index}
            addon={addon}
            selectedAddons={selectedAddons}
            setSelectedAddons={setSelectedAddons}
          />
        );
      })}
    </div>
  );
}
