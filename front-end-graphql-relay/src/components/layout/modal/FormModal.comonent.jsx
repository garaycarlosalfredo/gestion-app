import { prop } from "ramda";
import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function FormModal(props) {
  const {
    externalShow,
    optionalCloseCondition,
    modalTitle,
    buttonTitle,
    footerTitle,
    children,
  } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (externalShow) {
      handleShow();
    } else {
      handleClose();
    }
  }, [externalShow]);

  useEffect(() => {
    if (optionalCloseCondition) {
      handleClose();
    }
  }, [optionalCloseCondition]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {buttonTitle}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>{footerTitle}</Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModal;
