import { Action, State } from "@ngrx/store";
import { Employee } from "../../models/Employee";
import { LoggedEmp } from "../../models/LoggedEmp";
import { LogIn, LoginActionTypes, LogOut} from "../actions/login.actions";

export interface LoginState{
    empId: string,
    isLogged: boolean
    loading: boolean
}

const initialState: LoginState = {
    empId: "",
    isLogged: false,
    loading: false
};

export function LoginReducer(state = initialState, action: Action): LoginState {
    switch (action.type){
        case LoginActionTypes.LogIn:
            if(action instanceof LogIn)
            return {
                ...state,
                ...action.empCred,
                isLogged : true,
                loading: true
            };  
            return state
        case LoginActionTypes.LogOut:
            return {
                ...state,
                ...initialState
            };
        default:
            return state;
    }
}