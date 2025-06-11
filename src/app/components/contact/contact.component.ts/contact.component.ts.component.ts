import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="py-24 px-6 relative z-10 overflow-hidden font-sans">
      <!-- Background elements -->
      <div class="absolute inset-0 z-0">
        <!-- Gradient background with metallic sheen -->
        <div class="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-900/95 to-gray-950/90"></div>

        <!-- Subtle 3D particles -->
        <div class="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-indigo-900/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-gray-800/10 to-transparent rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>

        <!-- Neural network-inspired pattern -->
        <div class="absolute inset-0 opacity-3">
          <div class="neural-pattern-contact"></div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        <!-- Header section -->
        <div class="text-center mb-20">
          <div class="inline-block mb-4 relative">
            <span class="px-5 py-2.5 bg-gray-900/60 border border-gray-700/30 rounded-full text-gray-200 text-sm font-medium tracking-wide animate-slide-down backdrop-blur-sm shadow-inner shadow-gray-800/50">
              Let's Connect & Collaborate
            </span>
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-indigo-200 tracking-tight">
            Get In Touch
          </h2>
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-0.5 bg-gradient-to-r from-transparent to-indigo-400 rounded-full animate-slide-right"></div>
            <div class="w-6 h-0.5 bg-indigo-400 rounded-full animate-pulse-slow"></div>
            <div class="w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-transparent rounded-full animate-slide-left"></div>
          </div>
          <p class="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <!-- Contact Methods Grid -->


        <div class=" grid md:grid-cols-3 lg:grid-cols-3 gap-6 mb-16 justify-center">
          <a
            href="mailto:omri.iyed@esprit.tn"
            *ngFor="let contact of contactMethods; let i = index"
            [href]="contact.link"
            [target]="contact.external ? '_blank' : '_self'"
            class="group relative bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-800/50 overflow-hidden hover:border-indigo-500/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)] tilt-container animate-slide-up"
            [style.animation-delay]="(i * 0.15) + 's'"
          >
            <!-- Contact Icon -->
            <div [class]="'w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center bg-indigo-500/10 shadow-inner shadow-gray-900/50 transition-all duration-300 group-hover:scale-105 ' + contact.bgColor">
              <lucide-icon [name]="contact.icon" class="w-6 h-6 text-indigo-300"></lucide-icon>
            </div>

            <!-- Contact Info -->
            <h3 class="text-base font-semibold mb-1 text-gray-100 group-hover:text-indigo-300 transition-colors duration-300 tracking-tight">
              {{ contact.title }}
            </h3>
            <p class="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300 tracking-tight">
              {{ contact.subtitle }}
            </p>
          </a>
        </div>

        <!-- Contact Form -->
        <div class="max-w-3xl mx-auto">
          <div class="group relative bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-800/50 overflow-hidden hover:border-indigo-500/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)] tilt-container animate-slide-up" style="animation-delay: 0.6s;">
            <!-- Form Header -->
            <div class="p-6 border-b border-gray-800/30">
              <div class="flex items-center gap-3 justify-center">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-500/10 shadow-inner shadow-gray-900/50 group-hover:scale-105 transition-transform duration-300">
                  <lucide-icon name="send" class="w-5 h-5 text-indigo-300"></lucide-icon>
                </div>
                <div class="text-center">
                  <h3 class="text-lg font-semibold text-gray-100 group-hover:text-indigo-300 transition-colors duration-300 tracking-tight">
                    Send a Message
                  </h3>
                  <p class="text-gray-500 text-xs tracking-tight">I'll get back to you within 24 hours</p>
                </div>
              </div>
            </div>

            <!-- Form Content -->
            <div class="p-6">
              <form (ngSubmit)="onSubmit()" class="space-y-5">
                <!-- Name Field -->
                <div class="form-group animate-fade-in-up" style="animation-delay: 0.8s;">
                  <label for="name" class="block text-xs font-medium text-gray-300 mb-1.5 tracking-tight">
                    <lucide-icon name="user" class="w-3.5 h-3.5 inline mr-1.5"></lucide-icon>
                    Full Name
                  </label>
                  <div class="relative">
                    <input
                      id="name"
                      [(ngModel)]="name"
                      name="name"
                      type="text"
                      required
                      class="w-full px-3 py-2.5 bg-gray-800/30 border border-gray-700/20 rounded-lg text-gray-100 text-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 backdrop-blur-sm placeholder-gray-500"
                      placeholder="Enter your full name"
                    >
                    <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/5 transition-all duration-300 pointer-events-none rounded-lg"></div>
                  </div>
                </div>

                <!-- Contact Field -->
                <div class="form-group animate-fade-in-up" style="animation-delay: 1s;">
                  <label for="contact" class="block text-xs font-medium text-gray-300 mb-1.5 tracking-tight">
                    <lucide-icon name="mail" class="w-3.5 h-3.5 inline mr-1.5"></lucide-icon>
                    Email or Phone
                  </label>
                  <div class="relative">
                    <input
                      id="contact"
                      [(ngModel)]="contact"
                      name="contact"
                      type="text"
                      required
                      class="w-full px-3 py-2.5 bg-gray-800/30 border border-gray-700/20 rounded-lg text-gray-100 text-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 backdrop-blur-sm placeholder-gray-500"
                      placeholder="your.email@example.com or +1234567890"
                    >
                    <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/5 transition-all duration-300 pointer-events-none rounded-lg"></div>
                  </div>
                </div>

                <!-- Message Field -->
                <div class="form-group animate-fade-in-up" style="animation-delay: 1.2s;">
                  <label for="description" class="block text-xs font-medium text-gray-300 mb-1.5 tracking-tight">
                    <lucide-icon name="message-square" class="w-3.5 h-3.5 inline mr-1.5"></lucide-icon>
                    Project Description
                  </label>
                  <div class="relative">
                    <textarea
                      id="description"
                      [(ngModel)]="description"
                      name="description"
                      required
                      rows="5"
                      class="w-full px-3 py-2.5 bg-gray-800/30 border border-gray-700/20 rounded-lg text-gray-100 text-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 backdrop-blur-sm placeholder-gray-500 resize-none"
                      placeholder="Tell me about your project, goals, timeline, and how I can help you achieve success..."
                    ></textarea>
                    <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/5 transition-all duration-300 pointer-events-none rounded-lg"></div>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="text-center animate-fade-in-up" style="animation-delay: 1.4s;">
                  <button
                    type="submit"
                    class="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-lg font-semibold text-gray-100 text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_20px_rgba(79,70,229,0.3)] overflow-hidden tracking-tight"
                  >
                    <!-- Button content -->
                    <lucide-icon name="send" class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300"></lucide-icon>
                    <span>Send Message</span>
                    <!-- Animated shimmer effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Contact Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div
            *ngFor="let stat of contactStats; let i = index"
            class="text-center group bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-800/50 p-4 hover:border-indigo-500/40 transition-all duration-500 animate-slide-up shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)]"
            [style.animation-delay]="(1.6 + i * 0.15) + 's'"
          >
            <div class="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-200 mb-1 tracking-tight">
              {{ stat.value }}
            </div>
            <div class="text-gray-500 text-xs font-medium tracking-tight">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Animation Keyframes */
    @keyframes float-slow {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(2deg); }
    }

    @keyframes slide-down {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slide-up {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slide-right {
      from { opacity: 0; transform: translateX(-8px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slide-left {
      from { opacity: 0; transform: translateX(8px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulse-slow {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.6; }
    }

    @keyframes shimmer {
      0% { transform: translateX(-150%); }
      100% { transform: translateX(150%); }
    }

    /* Animation Classes */

    /* ******************************** */

    .animate-float-slow {
      animation: float-slow 6s ease-in-out infinite;
    }

    .animate-slide-down {
      animation: slide-down 0.5s ease-out;
    }

    .animate-slide-up {
      animation: slide-up 0.5s ease-out forwards;
      opacity: 0;
    }

    .animate-slide-right {
      animation: slide-right 0.6s ease-out;
    }

    .animate-slide-left {
      animation: slide-left 0.6s ease-out;
    }

    .animate-fade-in-up {
      animation: fade-in-up 0.4s ease-out forwards;
      opacity: 0;
    }

    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }

    .animate-shimmer {
      animation: shimmer 2s infinite;
    }

    /* Animation Delays */
    .animation-delay-3000 {
      animation-delay: 3s;
    }

    /* Neural Network Pattern */
    .neural-pattern-contact {
      background-image:
        radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      background-position: 0 0, 30px 30px;
      width: 100%;
      height: 100%;
    }

    /* Enhanced Glassmorphism */
    .backdrop-blur-lg {
      backdrop-filter: blur(12px);
    }

    /* Tilt Effect (requires JavaScript library like VanillaTilt.js for full effect) */
    .tilt-container {
      transform-style: preserve-3d;
      transition: transform 0.3s ease-out;
    }

    /* Smooth Transitions */
    .group:hover .group-hover\\:scale-105 {
      transform: scale(1.05);
    }

    .group:hover .group-hover\\:text-indigo-300 {
      color: rgb(129, 140, 248);
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #4f46e5, #818cf8);
      border-radius: 2.5px;
    }

    /* Responsive Design Enhancements */
    @media (max-width: 768px) {
      .text-4xl { font-size: 1.75rem; }
      .text-5xl { font-size: 2.25rem; }
      .text-6xl { font-size: 2.75rem; }
      .grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
    }


    /* Typography Enhancements */
    .font-sans {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    contact: '',
    description: ''
  };

  contactMethods = [
    {
      title: 'Email',
      subtitle: 'omri.iyed@esprit.tn',
      icon: 'mail',
      link: 'mailto:omri.iyed@esprit.tn',
      bgColor: 'bg-indigo-500/5',
      external: false
    },
    {
      title: 'LinkedIn',
      subtitle: 'Professional Network',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/iyed-omri-233243237',
      bgColor: 'bg-indigo-500/5',
      external: true
    }
  ];

  contactStats = [
    { value: '< 24h', label: 'Response Time' },
    { value: '100%', label: 'Reply Rate' },
    { value: '10+', label: 'Happy Clients' },
    { value: '24/7', label: 'Availability' }
  ];
name: any;
contact: any;
description: any;

  onSubmit() {
    const subject = encodeURIComponent('Contact Form Submission from Portfolio');
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\n` +
      `Contact: ${this.formData.contact}\n` +
      `Message: ${this.formData.description}`
    );
    window.location.href = `mailto:omri.iyed@esprit.tn?subject=${subject}&body=${body}`;
  }
}
