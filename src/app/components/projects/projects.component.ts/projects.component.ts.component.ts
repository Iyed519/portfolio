import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  tech: string[];
  category: string;
  status: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  template: `
    <section id="projects" class="py-24 px-6 relative z-10 overflow-hidden font-sans">
      <!-- Background elements -->
      <div class="absolute inset-0 z-0">
        <!-- Gradient background with metallic sheen -->
        <div class="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-900/95 to-gray-950/90"></div>

        <!-- Subtle 3D particles -->
        <div
          class="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-indigo-900/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div
          class="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tl from-gray-800/10 to-transparent rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>

        <!-- Neural network-inspired pattern -->
        <div class="absolute inset-0 opacity-3">
          <div class="neural-pattern-projects"></div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        <!-- Header section -->
        <div class="text-center mb-20">
          <div class="inline-block mb-4 relative">
            <span
              class="px-5 py-2.5 bg-gray-900/60 border border-gray-700/30 rounded-full text-gray-200 text-sm font-medium tracking-wide animate-slide-down backdrop-blur-sm shadow-inner shadow-gray-800/50">
              My Work & Creations
            </span>
            <!-- Glow effect -->
            <div
              class="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <h2
            class="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-indigo-200 tracking-tight">
            Featured Projects
          </h2>
          <div class="flex items-center justify-center gap-3 mb-4">
            <div
              class="w-12 h-0.5 bg-gradient-to-r from-transparent to-indigo-400 rounded-full animate-slide-right"></div>
            <div class="w-6 h-0.5 bg-indigo-400 rounded-full animate-pulse-slow"></div>
            <div
              class="w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-transparent rounded-full animate-slide-left"></div>
          </div>
          <p class="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Showcasing innovative solutions built with modern technologies
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid lg:grid-cols-2 gap-6">
          <div
            *ngFor="let project of projects; let i = index"
            class="group relative bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-800/50 overflow-hidden hover:border-indigo-500/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)]"
            [class.animate-slide-up]="true"
            [style.animation-delay]="(i * 0.15) + 's'"
          >
            <!-- 3D tilt effect container -->
            <div
              class="tilt-container p-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 rounded-2xl">
              <!-- Project Image Section -->
              <div class="relative overflow-hidden h-60">
                <!-- Placeholder for projects in development -->
                <div *ngIf="project.image.includes('/api/placeholder')"
                     class="h-full bg-gradient-to-br from-indigo-900/20 via-gray-900/40 to-gray-800/20 flex items-center justify-center relative overflow-hidden">
                  <!-- Animated background pattern -->
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-gray-800/5 animate-pulse-slow"></div>
                  <div class="text-center relative z-10">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_10px_rgba(79,70,229,0.3)]">
                      <svg class="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" stroke-width="2"
                           viewBox="0 0 24 24">
                        <path d="M21 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2m4-8l4-4m0 0l4 4m-4-4v12"></path>
                      </svg>
                    </div>
                    <p class="text-gray-200 text-sm font-medium tracking-tight">Project Coming Soon</p>
                    <p class="text-gray-500 text-xs mt-1">Currently in development</p>
                  </div>
                  <!-- Floating particles effect -->
                  <div class="absolute top-4 left-4 w-1.5 h-1.5 bg-indigo-400/50 rounded-full animate-bounce"></div>
                  <div class="absolute bottom-6 right-6 w-1 h-1 bg-indigo-400/50 rounded-full animate-ping"></div>
                </div>

                <!-- Actual project image -->
                <div class="h-full overflow-hidden relative">
                  <img
                    [src] = "project.image"
                    [alt] ="project.title + ' screenshot'"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    (error)="onImageError($event)"
                  />
                  <!-- Image overlay gradient -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <!-- Status badge -->
                <div class="absolute top-4 right-4">
                  <span [class]="getStatusClass(project.status)"
                        class="backdrop-blur-sm border shadow-inner shadow-gray-900/50 text-xs font-semibold flex items-center tracking-tight">
                    <span class="inline-block w-1.5 h-1.5 rounded-full mr-1.5"
                          [class]="getStatusDotClass(project.status)"></span>
                    {{ project.status }}
                  </span>
                </div>

                <!-- Project overlay with quick actions -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-5">
                  <div
                    class="flex gap-2.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <button
                      class="px-3.5 py-1.5 bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20 rounded-full text-indigo-300 text-xs font-medium hover:bg-indigo-500/20 transition-all duration-300 flex items-center gap-1.5 shadow-sm">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      View Live
                    </button>
                    <button
                      onclick="window.open('https://github.com/Iyed519/cyberknights', '_blank')"
                      class="px-3.5 py-1.5 bg-gray-500/10 backdrop-blur-sm border border-gray-400/20 rounded-full text-gray-300 text-xs font-medium hover:bg-gray-500/20 transition-all duration-300 flex items-center gap-1.5 shadow-sm">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </button>
                  </div>
                </div>
              </div>

              <!-- Project Content -->
              <div class="p-6">
                <!-- Category and Links -->
                <div class="flex items-center justify-between mb-4">
                  <span
                    class="px-2.5 py-1 bg-indigo-500/5 border border-indigo-500/15 rounded-full text-indigo-300 text-xs font-medium tracking-tight">
                    {{ project.category }}
                  </span>
                  <div class="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#"
                       class="text-gray-500 hover:text-indigo-300 transition-colors p-1.5 rounded-full hover:bg-indigo-500/10">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <a href="#"
                       class="text-gray-500 hover:text-indigo-300 transition-colors p-1.5 rounded-full hover:bg-indigo-500/10">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <!-- Project Title and Subtitle -->
                <h3
                  class="text-lg font-semibold text-gray-100 mb-1.5 group-hover:text-indigo-300 transition-colors duration-300 tracking-tight">
                  {{ project.title }}
                </h3>
                <p class="text-indigo-300/80 text-sm font-medium mb-3 tracking-tight">{{ project.subtitle }}</p>

                <!-- Description -->
                <p class="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3 tracking-tight">
                  {{ project.description }}
                </p>

                <!-- Technology Stack -->
                <div class="space-y-2">
                  <h4 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Tech Stack</h4>
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      *ngFor="let tech of project.tech; let techIndex = index"
                      class="px-2.5 py-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 text-gray-300 rounded-full text-xs font-medium transition-all duration-300 hover:bg-indigo-500/10 hover:border-indigo-500/20 hover:text-indigo-300 cursor-default"
                      [style.animation-delay]="(techIndex * 0.08) + 's'"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
    .neural-pattern-projects {
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

    /* Text Clamp */
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
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
    }

    /* Typography Enhancements */
    .font-sans {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: "COCONSULT",
      subtitle: "ISO 9001 Certification Automation",
      tech: ["Angular", "Spring Boot", "AI Chatbot APIs"],
      category: "Web Platform",
      status: "In Development",
      image: "assets/images/COCONSULT.png",
      description: "A web platform that automates ISO 9001 certification processes using AI-driven agents and chatbot workflows. Designed to simplify bureaucratic procedures and accelerate compliance for businesses, featuring intuitive interfaces and seamless integration with certification standards."
    },
    {
      id: 2,
      title: "BloodCare",
      subtitle: "Blood Donation Management System",
      tech: ["C", "Glade"],
      category: "Desktop Application",
      status: "In Development",
      image: "assets/images/BLOODCARE.jpg",
      description: "A full-stack application to manage blood donors, track stock inventory, and facilitate real-time hospital coordination for emergencies. Includes features like donor registration, blood stock monitoring, and emergency request management with secure APIs."
    }
  ];

  getStatusClass(status: string): string {
    const baseClass = "px-2.5 py-1 rounded-full text-xs font-semibold flex items-center ";
    switch (status.toLowerCase()) {
      case 'completed':
        return baseClass + "bg-green-500/10 border-green-500/20 text-green-300";
      case 'in development':
        return baseClass + "bg-indigo-500/10 border-indigo-500/20 text-indigo-300";
      default:
        return baseClass + "bg-gray-500/10 border-gray-500/20 text-gray-300";
    }
  }

  getStatusDotClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return "bg-green-400 animate-pulse";
      case 'in development':
        return "bg-indigo-400 animate-pulse";
      default:
        return "bg-gray-400 animate-pulse";
    }
  }

  onImageError(event: any) {
    console.warn('Failed to load project image:', event.target.src);
    event.target.src = this.projects[0].image;
  }
}
