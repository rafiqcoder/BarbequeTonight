export const SET_USER = "SET_USER";
export const SIGN_OUT = "SIGN_OUT";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const NEED_VERIFICATION = 'NEED_VERIFICATION';
export const SET_SUCCESS = "SET_SUCCESS";

export interface User {
    firstName: string;
    email: string;
    id: string;
    createdAt: any;
}
export interface AuthState {
    user: User| null;
    authenticated: boolean;
    laoding: boolean;
    error: string;
    needVerification: boolean;
    success: string;
}

export interface SignUpData {
  firstName: string;
  email: string;
  password: string;
}

//actions

interface SetUserAction{
    type: typeof SIGN_OUT;
}
interface SignOutAction{
    type: typeof SET_USER;
    payload: User;
}
interface SetLoadingAction{
    type: typeof SET_LOADING;
    payload: boolean;
}
interface SetErrorAction{
    type: typeof SET_ERROR;
    payload: string;

}

interface NeedVerificationAction{
    type: typeof NEED_VERIFICATION;
}

interface SetSuccessAction {
    type: typeof SET_SUCCESS;
    payload: string;
}

export type Authentication = SetUserAction | SetLoadingAction | SignOutAction | SetErrorAction | NeedVerificationAction | SetSuccessAction;