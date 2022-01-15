import { AuthClient } from "@dfinity/auth-client";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setAuthStatusAction } from "./actions/actions";
import { ApplicationState } from "./reducers/rootReducer";

type Props = MapStateToProps & MapDispatchToProps;

function Login({ authClient, setAuthStatus }: Props) {
  async function login() {
    const days = BigInt(1);
    const hours = BigInt(24);
    const nanoseconds = BigInt(3600000000000);
    console.log("authClient", authClient);
    await authClient.login({
      onSuccess: async () => {
        console.log("Authentication successful");
        setAuthStatus(true);
      },
      // TODO onError:
      identityProvider:
        process.env.DFX_NETWORK === "ic"
          ? "https://identity.ic0.app/#authorize"
          : process.env.LOCAL_II_CANISTER,
      // Maximum authorization expiration is 8 days
      maxTimeToLive: days * hours * nanoseconds,
    });
  }
  return (
    <div>
      Click this button to login
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  );
}

interface MapStateToProps {
  authClient: AuthClient;
}

interface MapDispatchToProps {
  setAuthStatus: (authStatus: boolean) => void;
}

function mapStateToProps(state: ApplicationState): MapStateToProps {
  const { authClient } = state.sessionState;
  return {
    authClient,
  };
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToProps {
  return {
    setAuthStatus: (authStatus: boolean) =>
      dispatch(setAuthStatusAction(authStatus)),
  };
}

export default connect<MapStateToProps, MapDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(Login);
