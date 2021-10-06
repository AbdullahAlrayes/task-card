import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationModal = ({ show, handleClose, score, total, message }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleClose(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <Modal show={show} onHide={handleClose} animation={false} centered>
      <Modal.Body className="bg-dark">
        <div className="text-center py-5">
          <h1 className="text-light">{message}</h1>
          <hr className="text-light" />
          <h4 className="text-white">
            Your Result is {score} / {total}
          </h4>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationModal;
