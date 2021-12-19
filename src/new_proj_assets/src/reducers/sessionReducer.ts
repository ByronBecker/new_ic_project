import { AuthClient } from "@dfinity/auth-client";
import { ActionType, SessionAction } from "../actions/actions";

export interface SessionState {
  authClient: AuthClient
  authStatus: boolean
}

export const INITIAL_SESSION_STATE: SessionState = {
  authClient: null,
  authStatus: false
}

export function updateSessionState(sessionState: SessionState = INITIAL_SESSION_STATE, action: SessionAction) {
  switch(action.type) {
    case ActionType.SET_AUTH_CLIENT:
      return {
        ...sessionState,
        authClient: action.authClient
      } 
    case ActionType.SET_AUTH_STATUS:
      return {
        ...sessionState,
        authStatus: action.authStatus
      }
    default:
      return sessionState
  }
}