import "./thanks-panel.scss";

interface ThanksPanelProps {
  rating: number | null;
  handleClicked: () => void;
}

const ThanksPanel = ({ rating, handleClicked }: ThanksPanelProps) => {
  return (
    <div className="thanksPanel">
      <img src="illustration-thank-you.svg" className="thanksPanel__image" />
      <button className="thanksPanel__button" onClick={handleClicked}>
        You selected out {rating} of 5
      </button>
      <div className="thanksPanel__info">
        <h1 className="thanksPanel__title">Thank you!</h1>
        <p className="thanksPanel__description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThanksPanel;
