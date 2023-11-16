export default function UserInfoFormLabel({ children, errors, label }) {
  return (
    <div className="form-field">
      <div className="label-errors">
        <label htmlFor={children.props.id}>{label}</label>
        {errors?.[children.props.id]?.message && (
          <p className="userinfo-errors">
            {errors?.[children.props.id]?.message}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
