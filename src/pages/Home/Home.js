import React from "react";
import AuthForm from "./AuthForm";
import Layout from "../../components/Layout";

import styles from "./Home.module.scss";

const Home = ({ user, setLoading }) => {
  return (
    <Layout id="home" user={user} mainClass={styles.main}>
      <div className={styles.eyeCatcher}>
        <h3>What the product is to the user</h3>
        <p>
          Differientiate the product from its competitors. This is a three part
          list on the main benefits from using this product.
        </p>
        <h4>Call To Action</h4>
        <p>
          P.S. before you sign up, remind them of one awesome bonus they get
        </p>
        <div
          onClick={() => setLoading(true)}
          className={styles.buttonContainer}
        >
          <AuthForm setLoading={setLoading} />
        </div>
      </div>
      <div className={styles.overlay} />
    </Layout>
  );
};

export default Home;
