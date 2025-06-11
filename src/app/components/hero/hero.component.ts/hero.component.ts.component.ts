import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section id="home" class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden font-sans">
      <!-- Animated background elements -->
      <div class="absolute inset-0 z-0">
        <!-- Gradient background with metallic sheen -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-900/95 to-gray-950/90"></div>

        <!-- Subtle 3D particles -->
        <div class="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-indigo-900/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-gray-800/10 to-transparent rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>

        <!-- Neural network-inspired pattern -->
        <div class="absolute inset-0 opacity-3">
          <div class="neural-pattern-hero"></div>
        </div>

        <!-- Animated particles -->
        <div class="particles-container">
          <div class="particle particle-1"></div>
          <div class="particle particle-2"></div>
          <div class="particle particle-3"></div>
          <div class="particle particle-4"></div>
        </div>
      </div>

      <!-- Main content -->
      <div class="max-w-6xl mx-auto text-center z-10 relative">
        <!-- Glassmorphism container -->
        <div class="bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-800/50 p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)] transition-all duration-500 tilt-container">
          <div class="animate-fade-in">
            <!-- Status badge -->
            <div class="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium tracking-wide mb-6 animate-slide-down shadow-inner shadow-gray-900/50">
              <div class="w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
              <span>Available for Work</span>
            </div>

            <!-- Name and profile picture side by side -->
            <div class="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div class="order-2 md:order-1">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-indigo-200 tracking-tight hover:scale-105 transition-transform duration-300 cursor-default">
                  Iyed Omri
                </h1>
                <!-- Typing animation subtitle -->
                <div class="mt-4 h-6">
                  <p class="text-lg md:text-xl text-gray-400 typing-animation tracking-tight">
                    Software Engineering Student
                  </p>
                </div>
              </div>

              <!-- Enhanced profile picture -->
              <div class="relative animate-float order-1 md:order-2">
                <!-- Glowing ring -->
                <div class="absolute -inset-3 bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500 rounded-full opacity-20 blur-lg animate-spin-slow"></div>

                <!-- Profile picture container -->
                <div class="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden backdrop-blur-sm bg-gradient-to-br from-gray-800/20 to-gray-900/10 border-2 border-gray-700/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <img
                    src="assets/images/profile.jpg"
                    alt="Iyed Omri"
                    class="w-full h-full object-cover transition-all duration-700 hover:scale-105 hover:brightness-105"
                  />
                  <!-- Overlay gradient on hover -->
                  <div class="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <!-- Subtle animated particles -->
                <div class="absolute -top-2 -left-2 w-2 h-2 bg-indigo-400/50 rounded-full animate-ping opacity-60"></div>
                <div class="absolute -bottom-2 -right-2 w-2 h-2 bg-indigo-400/50 rounded-full animate-ping opacity-60 animation-delay-1000"></div>
              </div>
            </div>

            <!-- Info cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/30 p-4 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-300 hover:scale-105 shadow-inner shadow-gray-900/50">
                <div class="flex items-center justify-center gap-3 text-gray-300">
                  <div class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-lg flex items-center justify-center shadow-[0_0_6px_rgba(79,70,229,0.3)]">
                    <i class="fas fa-map-marker-alt text-gray-100 text-xs"></i>
                  </div>
                  <div class="text-left">
                    <div class="text-xs text-gray-500 uppercase tracking-wider">Location</div>
                    <div class="font-semibold text-sm text-gray-200">Tunisia</div>
                  </div>
                </div>
              </div>

              <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/30 p-4 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-300 hover:scale-105 shadow-inner shadow-gray-900/50">
                <div class="flex items-center justify-center gap-3 text-gray-300">
                  <div class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-lg flex items-center justify-center shadow-[0_0_6px_rgba(79,70,229,0.3)]">
                    <i class="fas fa-graduation-cap text-gray-100 text-xs"></i>
                  </div>
                  <div class="text-left">
                    <div class="text-xs text-gray-500 uppercase tracking-wider">Education</div>
                    <div class="font-semibold text-sm text-gray-200">4th-Year Student</div>
                  </div>
                </div>
              </div>

              <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/30 p-4 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-300 hover:scale-105 shadow-inner shadow-gray-900/50">
                <div class="flex items-center justify-center gap-3 text-gray-300">
                  <div class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-lg flex items-center justify-center shadow-[0_0_6px_rgba(79,70,229,0.3)]">
                    <i class="fas fa-code text-gray-100 text-xs"></i>
                  </div>
                  <div class="text-left">
                    <div class="text-xs text-gray-500 uppercase tracking-wider">Focus</div>
                    <div class="font-semibold text-sm text-gray-200">Full-Stack Dev</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Call-to-action buttons -->
            <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                (click)="scrollToProjects()"
                class="group relative px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full font-semibold text-gray-100 text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_20px_rgba(79,70,229,0.3)] overflow-hidden tracking-tight"
              >
                <span class="relative z-10 flex items-center gap-2">
                  <i class="fas fa-eye"></i>
                  View My Work
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </button>

              <button
                (click)="downloadCV()"
                class="group relative px-6 py-3 bg-transparent border-2 border-gray-700/30 rounded-full font-semibold text-gray-200 text-sm hover:border-indigo-500/30 transition-all duration-300 hover:scale-105 hover:bg-indigo-500/5 tracking-tight">
                <span class="flex items-center gap-2">
                  <i class="fas fa-download"></i>
                  Download CV
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div class="flex flex-col items-center gap-2 animate-bounce">
          <span class="text-xs text-gray-500 uppercase tracking-wider">Scroll Down</span>
          <div class="w-5 h-8 border-2 border-gray-700/30 rounded-full flex justify-center">
            <div class="w-1 h-2 bg-indigo-400 rounded-full mt-2 animate-scroll-indicator"></div>
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

    @keyframes fade-in {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slide-down {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse-slow {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.6; }
    }

    @keyframes scroll-indicator {
      0% { transform: translateY(-5px); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(5px); opacity: 0; }
    }

    @keyframes float-pulse {
      0%, 100% { transform: translateX(0px) translateY(0px); }
      25% { transform: translateX(5px) translateY(-5px); }
      50% { transform: translateX(-5px) translateY(-5px); }
      75% { transform: translateX(-5px) translateY(5px); }
    }

    @keyframes typing {
      from { width: 0; }
      to { width: 100%; }
    }

    @keyframes blink-caret {
      from, to { border-color: transparent; }
      50% { border-color: rgb(129, 140, 248); }
    }

    /* Animation effects */
    .animate-float-slow {
      animation: float-slow 6s ease-in-out infinite;
    }

    .animate-fade-in {
      animation: fade-in 0.5s ease-out;
    }

    .animate-slide-down {
      animation: slide-down 0.5s ease-out;
    }

    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }

    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }

    .animate-scroll-indicator {
      animation: scroll-indicator 1.5s ease-in-out infinite;
    }

    .animation-delay-1000 { animation-delay: 1s; }
    .animation-delay-3000 { animation-delay: 3s; }

    /* Neural Network Pattern */
    .neural-pattern-hero {
      background-image:
        radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 60px 240px;
      background-position: 0 0, 30px 30px;
      width: 100%;
      height: 100%;
    }

    /* Particles */
    .particles-container {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .particle {
      position: absolute;
      background: linear-gradient(45deg, #4f46e5, #818cf8);
      border-radius: 50%;
      opacity: 0.5;
      animation: float-pulse 0.4s linear infinite;
    }

    .particle-1 {
      width: 3px;
      height: 3px;
      top: 30%;
      left: 15%;
      animation-delay: 0s;
    }

    .particle-2 {
      width: 4px;
      height: 4px;
      top: 50%;
      left: 85%;
      animation-delay: 0.5s;
    }

    .particle-3 {
      width: 2px;
      height: 2px;
      top: 70%;
      left: 25%;
      animation-delay: 1s;
    }

    .particle-4 {
      width: 3px;
      height: 3px;
      top: 20%;
      left: 75%;
      animation-delay: 1.5s;
    }

    /* Typing animation */
    .typing-animation {
      overflow: hidden;
      border-right: 2px solid #818cf8;
      white-space: nowrap;
      animation: typing 3s steps(30, end), blink-caret 0.6s step-end infinite;
    }

    /* Enhanced glassmorphism */
    .backdrop-blur-lg {
      backdrop-filter: blur(12px);
    }

    /* Tilt Effect (requires JavaScript library like VanillaTilt.js for full effect) */
    .tilt-container {
      transform-style: preserve-3d;
      transition: transform 0.3s ease-out;
    }

    /* Hover effects */
    .hover\:brightness-105:hover {
      filter: brightness(1.05);
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
export class HeroComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/documents/Iyed_Omri_CV.pdf';
    link.download = 'Iyed_Omri_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  scrollToProjects() {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
