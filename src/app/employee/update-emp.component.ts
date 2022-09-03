import { Component } from "@angular/core";
import { EmployeeService } from "src/app/employee.service";
import { Employee } from "../employee.modal";
import { Router } from "@angular/router";

@Component({
  selector: "app-update-employee",
  templateUrl: "./update-emp.component.html"
})
export class UpdateEmpComponent {
  employee: Employee = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: ""
  };
  employee_info: any;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
    debugger;
    let empData: any = sessionStorage.getItem("employee_info");
    this.employee_info = JSON.parse(empData);
  }
  ngOnInit(): void {}
  updateEmployee(): void {
    var data = {
      firstname: this.employee_info.firstName,
      lastname: this.employee_info.lastName,
      email: this.employee_info.email,
      mobile: this.employee_info.mobile,
      gender: this.employee_info.gender,
      city: this.employee_info.city,
      address: this.employee_info.address
    };
    sessionStorage.setItem("employee_info", JSON.stringify(data));
    this.router.navigateByUrl("/employees/");
    // this.employeeService.update(data,this.employee_info._id)
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //     },
    //     error: (e) => console.error(e)
    //   });
  }
}
