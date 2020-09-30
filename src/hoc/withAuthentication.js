import React, { Component } from "react";
import { auth } from "../api/firebase";

const withAuthProtection = (redirectRoute) => (WrappedComponent) => {
  class WithAuthProtection extends Component {
    componentDidMount() {
      const { history } = this.props;
      if (!auth.currentUser) {
        return history.push(redirectRoute);
      }
    }

    componentWillReceiveProps(nextProps) {
      const { user, history } = this.props;
      const { user: nextUser } = nextProps;
      if (user && !nextUser) {
        return history.push(redirectRoute);
      }
    }

    render() {
      const { user } = this.props;
      if (!user) {
        return null;
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithAuthProtection;
};

export default withAuthProtection;
