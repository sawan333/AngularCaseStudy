import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { CoreService } from "../../services/core.service";
import { EmployeeAction, EmployeeActionTypes, GetEmployeeDetails, GetEmployeeDetailsSuccess } from "../actions/employee.actions";

@Injectable()
export class EmployeeEffects {
    constructor(
        private actions$: Actions,
        private coreService: CoreService
    ){}
    
    GetEmployeeDetails$ = createEffect( () => 
        this.actions$.pipe(
            ofType<GetEmployeeDetails>(EmployeeActionTypes.GetEmployeeDetails),
            mergeMap(
                () => this.coreService.getEmployees().pipe(
                    map(data => {
                        return new GetEmployeeDetailsSuccess(data)
                    }),
                )
            )
        )
    )
}