import NavBtns from "../ui/NavBtns";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedPlan } from "../features/plans/PlanSlice";
import { getAddons } from "../features/addons/AddonSlice";
import SummaryTable from "../features/summary/SummaryTable";
import { useNavigate } from "react-router-dom";
import { updateSummary } from "../features/summary/SummarySlice";

export default function Summary() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const planData = useSelector(getSelectedPlan);
  const addonData = useSelector(getAddons);

  const planPattern =
    planData.type === "monthly" ? "mo" : planData.type === "yearly" ? "yr" : "";

  const planTotal =
    planData.planPrice + addonData.reduce((acc, addon) => acc + addon.price, 0);

  function handleConfirm() {
    dispatch(updateSummary({ planData, addonData }));
    navigate("/confirm");
  }

  return (
    <div className="summary-container">
      <h2 className="summary-heading">Finishing up</h2>
      <p className="summary-text">
        Double-check everything looks OK before confirming.
      </p>

      <SummaryTable
        planData={planData}
        addonData={addonData}
        planPattern={planPattern}
        planTotal={planTotal}
      />

      <NavBtns
        nextBtnName="Confirm"
        handleBack={() => navigate("/addons")}
        handleNext={() => handleConfirm()}
      />
    </div>
  );
}
