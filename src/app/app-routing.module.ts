import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "src/app/app.component";
import { CreateEmpComponent } from "src/app/employee/create-emp.component";
import { UpdateEmpComponent } from "src/app/employee/update-emp.component";
import { EmployeeComponent } from "src/app/employee/emp.component";

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeComponent },
  { path: 'employees/create', component: CreateEmpComponent },
  { path: 'employees/:id', component: UpdateEmpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
