import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Employee } from "../../models/Employee";
import { EmployeesState } from "../reducers/Employee.reducers";

const getEmployeesState = createFeatureSelector<EmployeesState>('employee');

export const allEmployeesSelector = createSelector(
    getEmployeesState,
    (state) => {
        return [...state.employees];
    }
    // (employees: ReadonlyArray<Employee>) => employees
)
