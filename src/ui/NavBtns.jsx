export default function NavBtns({ handleBack, handleNext }) {
  return (
    <div className="nav-btns">
      <button className="back-btn" onClick={handleBack}>
        Go Back
      </button>
      <button className="next-btn" onClick={handleNext}>
        Next Step
      </button>
    </div>
  );
}
