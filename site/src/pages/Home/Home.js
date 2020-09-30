import React from "react";
import AuthForm from "./AuthForm";
import Layout from "../../components/Layout";

const Home = ({ user }) => {
  return (
    <Layout id="home" user={user}>
      <div>
        <AuthForm />
      </div>
    </Layout>
  );
};

export default Home;
