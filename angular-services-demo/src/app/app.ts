import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// Import Services
import { Myservice } from './myservice';
import { ProductsService } from './productservice';
import { EmployeeService } from './employeeservice';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Removed NewCmp from imports if you aren't using it in HTML, otherwise keep it
  providers: [Myservice], // 2. Add to Providers
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todaydate;
  products: any[] = [];
  employees: any[] = []; // 3. Variable for employees

  constructor(
    private myservice: Myservice,
    private productsService: ProductsService,
    private employeeService: EmployeeService // 4. Inject Service
  ) {
    this.todaydate = this.myservice.showTodayDate();
    this.products = this.productsService.getProducts();
    this.employees = this.employeeService.getEmployees(); // 5. Fetch Data
  }
}





