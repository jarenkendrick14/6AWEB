import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bootstrap-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-light min-vh-100 pb-5">
      <!-- Hero Section -->
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold text-body-emphasis">Enterprise Solutions</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap. This is a demo of an advanced layout using grid systems and cards.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Get Started</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Learn More</button>
          </div>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">

          <!-- Free Tier -->
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Free</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
              </div>
            </div>
          </div>

          <!-- Pro Tier -->
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm border-primary">
              <div class="card-header py-3 text-white bg-primary border-primary">
                <h4 class="my-0 fw-normal">Pro</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
              </div>
            </div>
          </div>

          <!-- Enterprise Tier -->
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Enterprise</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Featurettes -->
        <div class="row featurette mt-5 align-items-center">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <div class="bg-secondary text-white d-flex align-items-center justify-content-center rounded" style="width: 100%; height: 250px;">
                <span>Placeholder Image 500x500</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class BootstrapDemoComponent {}
