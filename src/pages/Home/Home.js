import React from "react";
import AuthForm from "./AuthForm";
import Layout from "../../components/Layout";

const Home = ({ user, setLoading }) => {
  return (
    <Layout id="home" user={user}>
      <div>
        <AuthForm setLoading={setLoading} />
      </div>
    </Layout>
  );
};

export default Home;
