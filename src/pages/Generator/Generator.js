import React from "react";
import Layout from "../../components/Layout";

export default function Generator({ user, props }) {
  return (
    <Layout id="generator" user={user} {...props}>
      Generator
    </Layout>
  );
}
