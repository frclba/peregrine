import React from "react";
import Layout from "../../components/Layout";

const Profile = ({ user }) => {
  return (
    <Layout id="profile" user={user}>
      Welcome!
    </Layout>
  );
};

export default Profile;
