import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import affiliates from "../../content/affiliates";

const Dashboard = ({ user }) => {
  return (
    <Layout id="dashboard" user={user}>
      <h3>Welcome {user.displayName}!</h3>
      <h4>Main Tools</h4>
      <div>
        <h5>Automated Bulk Niche Tweet Generator</h5>
        <p>
          With this tool, you can easily search for relevant competitors in your
          niche, scrape tweet content from goodreads, twitter, and more. The
          scraped tweets are run through an algorithm and presented in a Tinder
          Swipe interface. Select and (optionally) rewrite the tweets then swipe
          right to queue for export, or swipe right to move on. Once you've had
          enough, click the export icon in the upper left corner and download a
          .csv. Take This beautified csv of tweets and import it into your{" "}
          <a href={affiliates.hypefury.link}>Hypefury</a> account.
        </p>
        <Link to="/generate">Generate Tweets Now!</Link>
      </div>
    </Layout>
  );
};

export default Dashboard;
