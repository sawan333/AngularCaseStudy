import { Action } from "@ngrx/store";
import { Employee } from "../../models/Employee";
import { EmployeeActionTypes, GetEmployeeDetailsSuccess } from "../actions/employee.actions";

export interface EmployeesState{
    employees: ReadonlyArray<Employee>
    loading: boolean
}

const initialState: EmployeesState = {
    employees: [],
    loading: false
}

export function EmployeeReducer(state = initialState, action: Action): EmployeesState{
    switch(action.type){
        case EmployeeActionTypes.GetEmployeeDetailsSuccess:
            if(action instanceof GetEmployeeDetailsSuccess)
                return {
                    ...state,
                    employees: [...state.employees, ...action.payload],
                    loading: true
                }
            return state
        default:
            return state
    }
}