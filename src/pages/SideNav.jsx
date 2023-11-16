import Step from "../features/sidebar/Step";

export default function SideNav() {
  return (
    <div className="nav-sidebar">
      <Step stepNumber="1" stepName="user info" to="/userinfo" />

      <Step stepNumber="2" stepName="select plan" to="/plans" />

      <Step stepNumber="3" stepName="add-ons" to="/addons" />

      <Step stepNumber="4" stepName="summary" to="/summary" />
    </div>
  );
}
