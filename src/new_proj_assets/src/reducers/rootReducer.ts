import { Action } from "../actions/actions";
import { INITIAL_SESSION_STATE, SessionState, updateSessionState } from "./sessionReducer";


export interface ApplicationState {
  sessionState: SessionState
}

const INITIAL_APPLICATION_STATE = {
  sessionState: INITIAL_SESSION_STATE
}

function applicationStore (state: ApplicationState = INITIAL_APPLICATION_STATE, action: Action) {
  return {
    sessionState: updateSessionState(state.sessionState, action)
  };
}

export default applicationStore;