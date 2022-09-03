import { Component } from "@angular/core";
import { EmployeeService } from "src/app/employee.service";
import { Employee } from "../employee.modal";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-emp.component.html"
})
export class CreateEmpComponent {
  employee: Employee = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    gender: ""
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  saveEmployee(createEmployeeForm: any): void {
    const data = {
      firstname: this.employee.firstName,
      lastname: this.employee.lastName,
      email: this.employee.email,
      mobile: this.employee.mobile,
      gender: this.employee.gender,
      city: this.employee.city,
      address: this.employee.address
    };
    sessionStorage.setItem("employee_info", JSON.stringify(data));
    this.router.navigateByUrl("/employees");
    // this.employeeService.create(data).subscribe({
    //   next: res => {
    //     console.log(res);
    //     this.router.navigateByUrl("/employees/");
    //   },
    //   error: e => console.error(e)
    // });
  }
}
