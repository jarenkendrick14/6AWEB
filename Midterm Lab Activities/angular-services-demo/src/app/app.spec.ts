import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Added for formatting if needed
import { Myservice } from './myservice';
import { NewCmp } from './new-cmp/new-cmp';
import { ProductsService } from './productservice'; // 1. Import the new service

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewCmp, CommonModule],
  templateUrl: './app.html', // Note: Your file is app.html, not app.component.html
  styleUrl: './app.css'
})
export class App {
  todaydate;
  products: any[] = []; // 2. Variable to hold product data

  // 3. Inject ProductsService in the constructor
  constructor(private myservice: Myservice, private productsService: ProductsService) {
    this.todaydate = this.myservice.showTodayDate();

    // 4. Fetch the data
    this.products = this.productsService.getProducts();
  }
}
