import React, { useState, useEffect } from 'react';
import Card from './Card';
import Title from './Title';
import ConfirmationModal from './ModalConfimation';

const CardList = ({ data }) => {
  const [list, setList] = useState(data);
  const [selectedCards, setSelectedCards] = useState([]);
  const [failedCounter, setFailedCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [seconds, setSeconds] = React.useState(60);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('BOOOOM! times up');
      setMessage('Times up, maybe next time ! Nooobe');
      setShowModal(true);
    }
  });

  const handleSelect = (selectedCard) => {
    const flippedList = flipCard(selectedCard);
    setList(flippedList);
    setSelectedCards([...selectedCards, selectedCard.match]);
    if (selectedCards.length >= 2) {
      const isMatching = allEqual(selectedCards);
      if (!isMatching) {
        setSelectedCards([]);
        setList(unflipAll(flippedList));
        setFailedCounter(failedCounter + 1);
        setTotal(total + 1);
      } else {
        setSelectedCards([]);
        setList(kepFlipped(selectedCards[0]));
        setScore(score + 1);
        setTotal(total + 1);
      }
    }
    checkIfWinning();
  };

  const checkIfWinning = () => {
    const matchingList = list.filter((card) => card.isFlipped);
    console.log(matchingList.length);
    if (matchingList.length - 1 >= 11) {
      setMessage('YOU ARE A CHAMPION !!! WOOOW');
      setShowModal(true);
    }
  };

  const kepFlipped = (match) => {
    return list.map((card) => {
      if (card.match === match)
        return { ...card, isMatching: true, isFlipped: true };
      else return { ...card };
    });
  };

  const flipCard = (selectedCard) => {
    return list.map((card) => {
      if (card.id === selectedCard.id) return { ...card, isFlipped: true };
      else return { ...card };
    });
  };
  const unflipAll = (flippedList) => {
    return flippedList.map((card) => {
      if (card.isMatching === false) {
        return { ...card, isFlipped: false };
      } else {
        return { ...card, isFlipped: true };
      }
    });
  };
  const allEqual = (arr) => {
    if (arr[0] === arr[1]) return true;
    else return false;
  };
  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  useEffect(() => {
    const newData = shuffleArray(data);
    setList(newData);
  }, []);

  return (
    <>
      <Title
        failedCounter={failedCounter}
        score={score}
        total={total}
        seconds={seconds}
      />

      <div className="row">
        {list.map((card, index) => (
          <Card key={index} card={card} handleSelect={handleSelect} />
        ))}
      </div>
      <ConfirmationModal
        message={message}
        show={showModal}
        handleClose={setShowModal}
        score={score}
        total={total}
      />
    </>
  );
};

export default CardList;
