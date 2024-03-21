import { useState } from "react";
import "./rating.scss";
import ThanksPanel from "./ThanksPanel";

const Rating = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const handleRating = (rating: number) => {
    setRating(rating);
  };

  const handleClicked = () => {
    setRating(null);
    setIsSubmited(false);
  };

  const handleFormSubmited = (e: React.FormEvent) => {
    if (rating !== null) {
      e.preventDefault();
      setIsSubmited(true);
    }
  };

  return isSubmited ? (
    <ThanksPanel rating={rating} handleClicked={handleClicked} />
  ) : (
    <div className="panel">
      <img className="panel__star" src="/icon-star.svg" />
      <h1 className="panel__title">How did we do?</h1>
      <span className="panel__description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </span>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((rating, index) => (
          <button
            key={index}
            className="rating__button"
            onClick={() => handleRating(rating)}
          >
            {rating}
          </button>
        ))}
      </div>
      <button
        className="submit"
        disabled={setRating === undefined}
        onClick={handleFormSubmited}
      >
        submit
      </button>
    </div>
  );
};

export default Rating;
