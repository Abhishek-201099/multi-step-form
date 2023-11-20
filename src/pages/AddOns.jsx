import { useNavigate } from "react-router-dom";
import NavBtns from "../ui/NavBtns";
import AddonsList from "../features/addons/AddonsList";
import { useState } from "react";

const addons = [
  {
    type: "Online service",
    description: "Access to multiplayer games",
    price: {
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
  },
  {
    type: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: {
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  },
  {
    type: "Customizable profile",
    description: "Custom theme on your profile",
    price: {
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  },
];

export default function AddOns() {
  const navigate = useNavigate();
  const [selectedAddons, setSelectedAddons] = useState([addons.at(0)]);

  function handleAddonData() {
    // DO redux operation to save addons data.
    navigate("/summary");
  }

  return (
    <div className="addons-container">
      <h2 className="addons-heading">Pick add-ons</h2>
      <p className="addons-text">
        Add-ons help enhance your gaming experience.
      </p>

      <AddonsList
        addons={addons}
        selectedAddons={selectedAddons}
        setSelectedAddons={setSelectedAddons}
      />

      <NavBtns
        handleBack={() => navigate("/plans")}
        handleNext={() => handleAddonData()}
      />
    </div>
  );
}
