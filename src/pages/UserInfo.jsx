import UserInfoForm from "../features/userinfo/UserInfoForm";

export default function UserInfo() {
  return (
    <div className="userinfo-container">
      <h2 className="userinfo-heading">Personal info</h2>
      <p className="userinfo-text">
        Please provide your name, email address and phone number.
      </p>

      <UserInfoForm />
    </div>
  );
}
