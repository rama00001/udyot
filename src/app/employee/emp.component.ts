import { Component, ViewChild } from "@angular/core";
import { EmployeeService } from "src/app/employee.service";
import { Employee } from "../employee.modal";
import { Router } from "@angular/router";

@Component({
  selector: "app-employee",
  templateUrl: "./emp.component.html",
  styleUrls: ["./emp.component.css"]
})
export class EmployeeComponent {
  employee: Employee = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: ""
  };

  employees: any = [];
  employee_info: any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    let empData: any = sessionStorage.getItem("employee_info");
    this.employee_info = JSON.parse(empData);
    this.getEmployees();
  }
  getEmployees(): void {
    // this.employeeService.getAll()
    //   .subscribe({
    //     next: (data:any) => {
    //       this.employees = data;
    //       console.log(data);
    //     },
    //     error: (e) => console.error(e)
    //   });
    this.employees = this.employeeService.getAll();
    if (Object.keys(this.employee_info).length !== 0) {
      this.employees.push(this.employee_info);
    }
  }
  edit(employee: any) {
    sessionStorage.setItem("employee_info", JSON.stringify(employee));
    this.router.navigateByUrl("/employees/", employee._id);
  }
  changeStatus(id: any, status: any): void {
    this.employeeService
      .updateStatus(id, status)
      .subscribe(data => console.log(data));
  }
  delete(id: any) {
    debugger;
    this.employees.splice(id,1);
  }
}
