import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button className={s.btn} name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={s.btn} name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={s.btn} name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
