import { useForm } from "react-hook-form";
import UserInfoFormLabel from "./UserInfoFormLabel";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, updateUserInfo } from "./UserInfoSlice";
import { useNavigate } from "react-router-dom";

export default function UserInfoForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fullName: name, email, phoneNumber } = useSelector(getUserInfo);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    dispatch(updateUserInfo(data));
    navigate("/plans");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="userinfo-form">
      <UserInfoFormLabel label="Name" errors={errors}>
        <input
          type="text"
          id="name"
          className={errors?.name?.message ? "input-error" : ""}
          {...register("name", {
            required: "This field is required",
          })}
          placeholder="e.g. Michael Jackson"
          defaultValue={name ? name : ""}
        />
      </UserInfoFormLabel>

      <UserInfoFormLabel label="Email" errors={errors}>
        <input
          type="email"
          id="email"
          className={errors?.email?.message ? "input-error" : ""}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          })}
          placeholder="e.g. michael@gmail.com"
          defaultValue={email ? email : ""}
        />
      </UserInfoFormLabel>

      <UserInfoFormLabel label="Phone Number" errors={errors}>
        <input
          type="text"
          id="phoneNumber"
          className={errors?.phoneNumber?.message ? "input-error" : ""}
          {...register("phoneNumber", {
            required: "This field is required",
          })}
          placeholder="e.g. +91 7899854423"
          defaultValue={phoneNumber ? phoneNumber : ""}
        />
      </UserInfoFormLabel>

      <button type="submit">Next step</button>
    </form>
  );
}
