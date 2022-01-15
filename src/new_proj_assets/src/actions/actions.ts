import { AuthClient } from "@dfinity/auth-client";

export enum ActionType {
  SET_AUTH_CLIENT = "SET_AUTH_CLIENT",
  SET_AUTH_STATUS = "SET_AUTH_STATUS",
}

export interface SetAuthClientAction {
  type: ActionType.SET_AUTH_CLIENT;
  authClient: AuthClient;
}

export interface SetAuthStatusAction {
  type: ActionType.SET_AUTH_STATUS;
  authStatus: boolean;
}

export type SessionAction = SetAuthClientAction | SetAuthStatusAction;

export type Action = SetAuthClientAction;

export function setAuthClientAction(
  authClient: AuthClient
): SetAuthClientAction {
  return { type: ActionType.SET_AUTH_CLIENT, authClient };
}

export function setAuthStatusAction(authStatus: boolean): SetAuthStatusAction {
  return { type: ActionType.SET_AUTH_STATUS, authStatus };
}
