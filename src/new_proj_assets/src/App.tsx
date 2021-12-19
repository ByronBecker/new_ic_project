import * as React from 'react'
import { AuthClient } from '@dfinity/auth-client';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setAuthClientAction } from './actions/actions';
import AuthenticatedApp from './AuthenticatedApp';
import ConnectedLogin from './Login';
import { ApplicationState } from './reducers/rootReducer';

type Props = MapStateToProps & MapDispatchToProps

function App(props: Props) {
  if (!props.authClient) {
    AuthClient.create().then(props.setAuthClient)
  }

  return props.authStatus ?
    AuthenticatedApp() :
    <ConnectedLogin/>
}

interface MapStateToProps {
  authClient: AuthClient
  authStatus: boolean
}

interface MapDispatchToProps {
  setAuthClient: (authClient: AuthClient) => void
}

function mapStateToProps(state: ApplicationState): MapStateToProps {
  const { authClient, authStatus } = state.sessionState
  return {
    authClient,
    authStatus
  }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToProps {
  return {
    setAuthClient: (authClient: AuthClient) => dispatch(setAuthClientAction(authClient))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);