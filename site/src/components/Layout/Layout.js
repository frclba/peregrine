import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import { auth } from "../../api/firebase";

import styles from "./Layout.module.scss";
import logo from "./logo.png";

export default function Layout({ pageId, children, user }) {
  const [showModal, setModalShown] = useState(false);
  const handleCloseModal = () => setModalShown(false);

  return (
    <div className={styles.App} id={pageId}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <div className={styles.text}>
          <h1>
            Twitter Growth Hacker <small>(alpha 0.0.1)</small>
          </h1>
          <h2>Catalyze Your Twitter Growth Our Premier Automation Toolsuite</h2>
        </div>
        <div className={styles.navigation}>
          {user && <Button onClick={() => auth.signOut()}>Sign Out</Button>}
        </div>
      </header>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Example</Modal.Title>
        </Modal.Header>

        <Modal.Body></Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Cool!
          </Button>
        </Modal.Footer>
      </Modal>

      {children}

      <footer></footer>
    </div>
  );
}
