import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

// Imports for your custom demos
// Note: These point to the .ts files. Ensure the filenames match exactly.
import { PageNotFoundComponent } from './page-not-found/page-not-found';
import { HybridDemoComponent } from './hybrid-demo/hybrid-demo';
import { BootstrapDemoComponent } from './bootstrap-demo/bootstrap-demo';
import { TailwindDemo } from './tailwind-demo/tailwind-demo';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'data-binding', component: DataBindingComponent },

    // The Demo Pages
    { path: 'hybrid', component: HybridDemoComponent },
    { path: 'bootstrap', component: BootstrapDemoComponent },
    { path: 'tailwind', component: TailwindDemo },

    // 404 Wildcard (Must be last)
    { path: '**', component: PageNotFoundComponent }
];
