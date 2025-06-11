import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="py-8 px-6 border-t border-blue-500/20 relative z-10">
      <div class="max-w-6xl mx-auto text-center">
        <p class="text-gray-400">
          © 2025 Iyed Omri. Crafted with passion and precision.
        </p>
      </div>
    </footer>
  `
})
export class FooterComponent { }