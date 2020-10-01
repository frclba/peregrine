import React, { useState } from "react";
import { Modal, Button, Navbar, Container } from "react-bootstrap";

import { auth } from "../../api/firebase";

import styles from "./Layout.module.scss";
import logo from "../../assets/img/logo.png";

export default function Layout({ pageId, children, user, mainClass }) {
  const [showModal, setModalShown] = useState(false);
  const handleModalState = () => setModalShown(!showModal);

  return (
    <div className={styles.App} id={pageId}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className={styles.navbarBrand} href="#home">
            <img src={logo} className={styles.logo} alt="logo" />
            <div className={styles.text}>
              {window.innerWidth >= 700 ? (
                <>
                  <h1>
                    Peregrine <small>(alpha 0.0.1)</small>
                  </h1>
                  <h2>Catalyze Your Twitter Growth</h2>
                </>
              ) : (
                <>
                  <h1>Peregrine</h1>
                  <h2>Twitter Growth Suite</h2>
                </>
              )}
            </div>
          </Navbar.Brand>
          {user ? (
            <button onClick={handleModalState} className={styles.userMenu}>
              <img alt={user.displayName} src={user.photoURL} />
            </button>
          ) : (
            <div className={styles.userMenuDefault}>
              <img
                alt="placeholder"
                src={require("../../assets/img/user-placeholder.png")}
              />
            </div>
          )}
        </Container>
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

      <main className={`${mainClass ? mainClass : ""}`}>{children}</main>

      {/* <footer>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </footer> */}
    </div>
  );
}
