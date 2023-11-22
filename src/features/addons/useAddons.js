import { useState } from "react";
import { useSelector } from "react-redux";
import { getAddons } from "./AddonSlice";

export default function useAddons(addons) {
  const userSelectedAddons = useSelector(getAddons);

  const [selectedAddons, setSelectedAddons] = useState(
    !userSelectedAddons.length
      ? [addons.at(0)]
      : userSelectedAddons.reduce((acc, userSelectedAddon) => {
          const matchingAddon = addons.find(
            (addon) => addon.type === userSelectedAddon.type
          );
          if (matchingAddon) acc.push(matchingAddon);
          return acc;
        }, [])
  );

  return { selectedAddons, setSelectedAddons };
}
