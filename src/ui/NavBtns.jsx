export default function NavBtns({ handleBack, handleNext, nextBtnName }) {
  return (
    <div className="nav-btns">
      <button className="back-btn" onClick={handleBack}>
        Go Back
      </button>
      <button className="next-btn" onClick={handleNext}>
        {nextBtnName ? nextBtnName : "Next Step"}
      </button>
    </div>
  );
}
