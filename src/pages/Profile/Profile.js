import React from "react";
import _ from "lodash";

const Profile = ({ me }) => {
  const email = _.get(me, "email");

  return (
    <p>
      My name is <b>{email}</b>
    </p>
  );
};

export default Profile;
