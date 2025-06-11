import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="py-24 px-6 relative z-10 overflow-hidden font-sans">
      <!-- Background elements -->
      <div class="absolute inset-0 z-0">
        <!-- Gradient background with metallic sheen -->
        <div class="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-900/95 to-gray-950/90"></div>
        
        <!-- Subtle 3D particles -->
        <div class="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-indigo-900/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-gray-800/10 to-transparent rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
        
        <!-- Neural network-inspired pattern -->
        <div class="absolute inset-0 opacity-3">
          <div class="neural-pattern-about"></div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        <!-- Header section -->
        <div class="text-center mb-20">
          <div class="inline-block mb-4 relative">
            <span class="px-5 py-2.5 bg-gray-900/60 border border-gray-700/30 rounded-full text-gray-200 text-sm font-medium tracking-wide animate-slide-down backdrop-blur-sm shadow-inner shadow-gray-800/50">
              Get to Know Me
            </span>
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-indigo-200 tracking-tight">
            About Iyed Omri
          </h2>
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-0.5 bg-gradient-to-r from-transparent to-indigo-400 rounded-full animate-slide-right"></div>
            <div class="w-6 h-0.5 bg-indigo-400 rounded-full animate-pulse-slow"></div>
            <div class="w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-transparent rounded-full animate-slide-left"></div>
          </div>
          <p class="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            4th-Year Software Engineering Student at ESPRIT
          </p>
        </div>
        
        <!-- Main content grid -->
        <div class="grid lg:grid-cols-3 gap-6 mb-16">
          <!-- Professional Journey Card -->
          <div class="lg:col-span-2">
            <div class="group relative bg-gray-900/40 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-gray-800/50 hover:border-indigo-500/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)] tilt-container animate-slide-up">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-[0_0_6px_rgba(79,70,229,0.3)]">
                    <svg class="w-6 h-6 text-gray-100" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="m22 21-3-3m0 0a5 5 0 1 0-7-7 5 5 0 0 0 7 7z"></path>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-semibold mb-2 text-gray-100 group-hover:text-indigo-300 transition-colors duration-300 tracking-tight">
                    Professional Journey
                  </h3>
                  <p class="text-gray-400 text-sm leading-relaxed mb-4">
                    Passionate full-stack developer experienced in Angular and Spring Boot. Focused on delivering clean, scalable solutions and user-friendly interfaces. Committed to high performance, continuous learning, and real-world problem-solving.
                  </p>
                  <div class="flex flex-wrap gap-1.5">
                    <span class="px-2.5 py-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 text-gray-300 rounded-full text-xs font-medium hover:bg-indigo-500/10 hover:border-indigo-500/20 hover:text-indigo-300 transition-all duration-300">
                      Full-Stack Developer
                    </span>
                    <span class="px-2.5 py-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 text-gray-300 rounded-full text-xs font-medium hover:bg-indigo-500/10 hover:border-indigo-500/20 hover:text-indigo-300 transition-all duration-300">
                      Angular Specialist
                    </span>
                    <span class="px-2.5 py-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 text-gray-300 rounded-full text-xs font-medium hover:bg-indigo-500/10 hover:border-indigo-500/20 hover:text-indigo-300 transition-all duration-300">
                      Spring Boot Expert
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Quick Stats Card -->
          <div class="space-y-4">
            <div class="group relative bg-gray-900/40 backdrop-blur-lg p-4 rounded-2xl border border-gray-800/50 hover:border-indigo-500/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)] animate-slide-up" style="animation-delay: 0.15s;">
              <div class="text-center">
                <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-[0_0_6px_rgba(79,70,229,0.3)]">
                  <svg class="w-5 h-5 text-gray-100" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <div class="text-2xl font-semibold text-indigo-300 mb-1 tracking-tight">4</div>
                <div class="text-gray-500 text-xs">Years at ESPRIT</div>
              </div>
            </div>
            
            <div class="group relative bg-gray-900/40 backdrop-blur-lg p-4 rounded-2xl border border-gray-800/50 hover:border-indigo-500/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)] animate-slide-up" style="animation-delay: 0.3s;">
              <div class="text-center">
                <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-[0_0_6px_rgba(79,70,229,0.3)]">
                  <svg class="w-5 h-5 text-gray-100" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <div class="text-2xl font-semibold text-indigo-300 mb-1 tracking-tight">2+</div>
                <div class="text-gray-500 text-xs">Major Projects</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Technical Focus and Skills Section -->
        <div class="grid md:grid-cols-2 gap-6 mb-16">
          <!-- Technical Focus Card -->
          <div class="group relative bg-gray-900/40 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-gray-800/50 hover:border-indigo-500/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)] tilt-container animate-slide-up" style="animation-delay: 0.45s;">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-[0_0_6px_rgba(79,70,229,0.3)]">
                  <svg class="w-6 h-6 text-gray-100" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold mb-2 text-gray-100 group-hover:text-indigo-300 transition-colors duration-300 tracking-tight">
                  Technical Focus
                </h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-4">
                  I specialize in building scalable web applications using Angular 16 for dynamic frontends and Spring Boot for robust REST APIs. My expertise includes creating user-friendly interfaces and secure backend systems, enhanced by tools like Git, Maven, and Postman.
                </p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    <span class="text-gray-400 text-xs">Angular</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    <span class="text-gray-400 text-xs">Spring Boot</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    <span class="text-gray-400 text-xs">REST API Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Core Values Card -->
          <div class="group relative bg-gray-900/40 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-gray-800/50 hover:border-indigo-500/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)] tilt-container animate-slide-up" style="animation-delay: 0.6s;">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-[0_0_6px_rgba(79,70,229,0.3)]">
                  <svg class="w-6 h-6 text-gray-100" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold mb-2 text-gray-100 group-hover:text-indigo-300 transition-colors duration-300 tracking-tight">
                  Core Values
                </h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-4">
                  I am driven by a commitment to clean code, continuous learning, and solving real-world problems. My work reflects a dedication to performance, scalability, and user-centric design.
                </p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    <span class="text-gray-400 text-xs">Clean Code</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    <span class="text-gray-400 text-xs">Continuous Learning</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    <span class="text-gray-400 text-xs">Problem Solving</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Technology Stack -->
        <div class="group relative bg-gray-900/40 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-gray-800/50 hover:border-indigo-500/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)] tilt-container animate-slide-up" style="animation-delay: 0.75s;">
          <div class="text-center mb-6">
            <h3 class="text-lg font-semibold mb-2 text-gray-100 group-hover:text-indigo-300 transition-colors duration-300 tracking-tight">
              Technology Stack
            </h3>
            <p class="text-gray-500 text-xs tracking-tight">Technologies I leverage to build impactful solutions</p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <!-- Angular -->
            <div class="group text-center animate-fade-in-up" style="animation-delay: 0.9s;">
              <div class="w-12 h-12 mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-lg flex items-center justify-center mb-2 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300">
                <img src="assets/icons/angular.png" alt="Angular" class="w-6 h-6 text-indigo-300" />
              </div>
              <div class="text-gray-400 text-xs font-medium tracking-tight">Angular 16</div>
            </div>
            
            <!-- Spring Boot -->
            <div class="group text-center animate-fade-in-up" style="animation-delay: 0.95s;">
              <div class="w-12 h-12 mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-lg flex items-center justify-center mb-2 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300">
                <img src="assets/icons/spring.png" alt="Spring Boot" class="w-6 h-6 text-indigo-300" />
              </div>
              <div class="text-gray-400 text-xs font-medium tracking-tight">Spring Boot</div>
            </div>
            
            <!-- PHP -->
            <div class="group text-center animate-fade-in-up" style="animation-delay: 1s;">
              <div class="w-12 h-12 mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-lg flex items-center justify-center mb-2 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300">
                <img src="assets/icons/php.png" alt="PHP" class="w-6 h-6 text-indigo-300" />
              </div>
              <div class="text-gray-400 text-xs font-medium tracking-tight">PHP</div>
            </div>
            
            <!-- JavaScript -->
            <div class="group text-center animate-fade-in-up" style="animation-delay: 1.05s;">
              <div class="w-12 h-12 mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-lg flex items-center justify-center mb-2 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300">
                <img src="assets/icons/javascript.png" alt="JavaScript" class="w-6 h-6 text-indigo-300" />
              </div>
              <div class="text-gray-400 text-xs font-medium tracking-tight">JavaScript</div>
            </div>
            
            <!-- PostgreSQL/MySQL -->
            <div class="group text-center animate-fade-in-up" style="animation-delay: 1.1s;">
              <div class="w-12 h-12 mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-lg flex items-center justify-center mb-2 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300">
                <img src="assets/icons/postgresql.png" alt="PostgreSQL/MySQL" class="w-6 h-6 text-indigo-300" />
              </div>
              <div class="text-gray-400 text-xs font-medium tracking-tight">PostgreSQL/MySQL</div>
            </div>
            
            <!-- Git -->
            <div class="group text-center animate-fade-in-up" style="animation-delay: 1.15s;">
              <div class="w-12 h-12 mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-lg flex items-center justify-center mb-2 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300">
                <img src="assets/icons/git.png" alt="Git" class="w-6 h-6 text-indigo-300" />
              </div>
              <div class="text-gray-400 text-xs font-medium tracking-tight">Git</div>
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
    
    .animate-fade-in-up {
      animation: fade-in-up 0.4s ease-out forwards;
      opacity: 0;
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }
    
    /* Animation Delays */
    .animation-delay-3000 {
      animation-delay: 3s;
    }
    
    /* Neural Network Pattern */
    .neural-pattern-about {
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
    }
    
    /* Typography Enhancements */
    .font-sans {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  `]
})
export class AboutComponent { }