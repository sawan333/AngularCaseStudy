import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "../reducers/login.reducers";

const getLoginState = createFeatureSelector<LoginState>('login');

export const isLogged = createSelector(
    getLoginState,
    (state) => {
        return state.isLogged
    }
)

export const getLoggedEmp = createSelector(
    getLoginState,
    (state) => {
        return {empId : state.empId}
    }
)