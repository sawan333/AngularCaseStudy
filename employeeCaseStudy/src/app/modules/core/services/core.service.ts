import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../models/Employee";

@Injectable({
    providedIn: 'root'
})
export class CoreService {
    baseUrl = 'http://localhost:3000'

    constructor(private http: HttpClient){ }

    getEmployees(){
        return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
    }
}