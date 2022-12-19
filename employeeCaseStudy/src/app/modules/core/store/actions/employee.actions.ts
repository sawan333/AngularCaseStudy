import { Action } from "@ngrx/store";
import { Employee } from "../../models/Employee";

export enum EmployeeActionTypes {
    GetEmployeeDetails = '[Employee] Retrieve Employee INFO',
    GetEmployeeDetailsSuccess = '[Employee] Successful Retrieval Employee INFO'
}

export class GetEmployeeDetails implements Action {
    public readonly type = EmployeeActionTypes.GetEmployeeDetails   
}

export class GetEmployeeDetailsSuccess implements Action{
    public readonly type = EmployeeActionTypes.GetEmployeeDetailsSuccess
    constructor(public payload: Employee[]){}
}

export type EmployeeAction = 
    | GetEmployeeDetails 
    | GetEmployeeDetailsSuccess