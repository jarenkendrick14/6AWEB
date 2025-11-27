import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'data-binding', component: DataBindingComponent }
];
