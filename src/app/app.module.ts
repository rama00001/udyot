import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from "src/app/employee.service";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmpComponent } from "src/app/employee/create-emp.component";
import { UpdateEmpComponent } from "src/app/employee/update-emp.component";
import { EmployeeComponent } from "src/app/employee/emp.component";

@NgModule({
  declarations: [
    AppComponent,
    UpdateEmpComponent,
    CreateEmpComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
