import { Action } from '@ngrx/store';

export enum LoginActionTypes { 
    LogIn = '[Login] Log In',
    LogOut = '[Login] Log Out'
}

export class LogIn implements Action{
    public readonly type = LoginActionTypes.LogIn;
    constructor(public empCred: {
        empId: string,
    }) {}
};

export class LogOut implements Action{
    public readonly type = LoginActionTypes.LogOut;
};


export type LoginActions = 
        | LogIn
        | LogOut