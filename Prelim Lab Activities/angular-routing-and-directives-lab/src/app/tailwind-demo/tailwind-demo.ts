import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tailwind-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Main Container with Dark Gradient Background -->
    <div class="min-h-screen bg-slate-900 text-white font-sans p-8">

      <!-- Navbar / Header -->
      <header class="flex justify-between items-center mb-12">
        <h1 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Tailwind<span class="text-white">UI</span>
        </h1>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-lg shadow-indigo-500/50">
          Connect Wallet
        </button>
      </header>

      <!-- Hero Section Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 class="text-5xl font-bold leading-tight mb-6">
            Build modern websites <br>
            <span class="text-blue-400">without CSS files.</span>
          </h2>
          <p class="text-slate-400 text-lg mb-8">
            This entire layout is styled using utility classes. We are using gradients, hover states, shadows, and flexbox layouts directly in the HTML.
          </p>
          <div class="flex space-x-4">
            <button class="bg-white text-slate-900 font-semibold py-3 px-8 rounded-lg hover:bg-slate-200 transition">
              Get Started
            </button>
            <button class="border border-slate-600 text-slate-300 font-semibold py-3 px-8 rounded-lg hover:border-white hover:text-white transition">
              Documentation
            </button>
          </div>
        </div>

        <!-- Glassmorphism Card Effect -->
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative bg-slate-800 ring-1 ring-gray-900/5 rounded-2xl leading-none flex items-top justify-start space-x-6">
            <div class="p-8">
              <div class="flex items-center space-x-4 mb-4">
                <div class="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-xl">JS</div>
                <div>
                  <div class="text-xl font-medium text-white">Advanced Component</div>
                  <p class="text-slate-400">Angular + Tailwind</p>
                </div>
              </div>
              <p class="text-slate-300">
                "The utility-first approach helps you build complex designs without ever leaving your HTML. It's fast, responsive, and maintainable."
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats / Grid Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Stat Card 1 -->
        <div class="p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition cursor-pointer border border-slate-700">
          <div class="text-indigo-400 mb-2">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Lightning Fast</h3>
          <p class="text-slate-400">Zero runtime overhead. Tailwind generates standard CSS at build time.</p>
        </div>

        <!-- Stat Card 2 -->
        <div class="p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition cursor-pointer border border-slate-700">
          <div class="text-pink-400 mb-2">
             <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Responsive</h3>
          <p class="text-slate-400">Mobile-first breakpoints make it easy to build complex responsive interfaces.</p>
        </div>

        <!-- Stat Card 3 -->
        <div class="p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition cursor-pointer border border-slate-700">
           <div class="text-green-400 mb-2">
             <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Customizable</h3>
          <p class="text-slate-400">Configure your theme, colors, fonts, and breakpoints in tailwind.config.js.</p>
        </div>
      </div>
    </div>
  `
})
export class TailwindDemo {}
