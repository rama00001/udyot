import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "./employee.modal";

const baseUrl = "http://localhost:3000";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  employees:any = [
    {
      firstname: "Ravi",
      lastname: "R",
      email: "Ravi@gmail.com",
      mobile: "7477474",
      gender: "Male",
      address: "door-no:30,dollors colony",
      city: "Delhi"
    },
    {
      firstname: "Meghana",
      lastname: "M",
      email: "Meghana@gmail.com",
      mobile: "7477474333",
      gender: "FeMale",
      address: "Door-no:4,dollors colony",
      city: "Hyderabad"
    },
    {
      firstname: "Pranav",
      lastname: "Z",
      email: "Pranav@gmail.com",
      mobile: "74774743332",
      gender: "Male",
      address: "Door-no:2,dollors colony",
      city: "Chennai"
    }
  ];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Employee[]> {
    return this.employees;
    // return this.http.get<Employee[]>(baseUrl+'/employees/');
  }
  create(data: {}): Observable<any> {
    return this.http.post(baseUrl + "/employee/", data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}`, data);
  }
  updateStatus(id: any, status: any): Observable<any> {
    return this.http.put(`${baseUrl}+'/employees/'${id}/${status}`, {});
  }
}
