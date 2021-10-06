import React from 'react';

const Card = ({ card, handleSelect }) => {
  return (
    <div className="col-lg-3">
      <img
        src={card.isFlipped ? card.frontPic : card.backPic}
        alt="test"
        className="img-fluid mt-2 rounded"
        onClick={() => handleSelect(card)}
      />
    </div>
  );
};

export default Card;
