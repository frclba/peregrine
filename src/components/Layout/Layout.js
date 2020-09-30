import React, { useState } from "react";
import { Modal, Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import _ from "lodash";

import { auth } from "../../api/firebase";

import styles from "./Layout.module.scss";
import logo from "./logo.png";

export default function Layout({ pageId, children, user }) {
  const [showModal, setModalShown] = useState(false);
  const handleModalState = () => setModalShown(!showModal);

  return (
    <div className={styles.App} id={pageId}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className={styles.navbarBrand} href="#home">
          <img src={logo} className={styles.logo} alt="logo" />
          <div className={styles.text}>
            {window.innerWidth >= 700 ? (
              <>
                <h1>
                  Twitter Growth Hacker <small>(alpha 0.0.1)</small>
                </h1>
                <h2>
                  Catalyze Your Twitter Growth Our Premier Automation Toolsuite
                </h2>
              </>
            ) : (
              <>
                <h1>Twitter Growth Hacker</h1>
                <h2>Version 0.0.1</h2>
              </>
            )}
          </div>
        </Navbar.Brand>
        {user && (
          <button onClick={handleModalState} className={styles.userMenu}>
            <img alt={user.displayName} src={user.photoURL} />
          </button>
        )}
      </Navbar>

      {user && (
        <Modal show={showModal} onHide={handleModalState}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Out</Modal.Title>
          </Modal.Header>

          <Modal.Body>Are you sure you want to sign out?</Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleModalState}>
              Not yet!
            </Button>
            <Button onClick={() => auth.signOut()}>Sign Out</Button>
          </Modal.Footer>
        </Modal>
      )}

      {children}

      <footer>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </footer>
    </div>
  );
}
