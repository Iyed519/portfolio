import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
  color: string;
  bgColor: string;
  borderColor: string;
}

@Component({
  selector: 'app-skills',
  template: `
    <section id="skills" class="py-24 px-6 relative z-10 overflow-hidden font-sans">
      <!-- Background elements -->
      <div class="absolute inset-0 z-0">
        <!-- Gradient background with metallic sheen -->
        <div class="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-900/95 to-gray-950/90"></div>
        
        <!-- Subtle 3D particles -->
        <div class="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-indigo-900/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-gray-800/10 to-transparent rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
        
        <!-- Neural network-inspired pattern -->
        <div class="absolute inset-0 opacity-3">
          <div class="neural-pattern-skills"></div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        <!-- Header section -->
        <div class="text-center mb-20">
          <div class="inline-block mb-4 relative">
            <span class="px-5 py-2.5 bg-gray-900/60 border border-gray-700/30 rounded-full text-gray-200 text-sm font-medium tracking-wide animate-slide-down backdrop-blur-sm shadow-inner shadow-gray-800/50">
              Expertise & Proficiency
            </span>
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-indigo-200 tracking-tight">
            Technical Skills
          </h2>
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-0.5 bg-gradient-to-r from-transparent to-indigo-400 rounded-full animate-slide-right"></div>
            <div class="w-6 h-0.5 bg-indigo-400 rounded-full animate-pulse-slow"></div>
            <div class="w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-transparent rounded-full animate-slide-left"></div>
          </div>
          <p class="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Mastery of modern technologies and frameworks, crafted for innovative solutions
          </p>
        </div>

        <!-- Skills Categories Grid -->
        <div class="grid lg:grid-cols-2 gap-6">
          <div
            *ngFor="let category of skillCategories; let i = index"
            class="group relative bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-800/50 overflow-hidden hover:border-indigo-500/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)]"
            [class.animate-slide-up]="true"
            [style.animation-delay]="(i * 0.15) + 's'"
          >
            <!-- 3D tilt effect container -->
            <div class="tilt-container p-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 rounded-2xl">
              <!-- Category Header -->
              <div class="p-5 border-b border-gray-800/30">
                <div class="flex items-center gap-3">
                  <div [class]="'w-10 h-10 rounded-lg flex items-center justify-center ' + category.bgColor + ' shadow-inner shadow-gray-900/50 group-hover:scale-105 transition-transform duration-300'">
                    <svg class="w-5 h-5" [class]="category.color" fill="currentColor" viewBox="0 0 24 24">
                      <path *ngIf="category.name === 'Frontend'" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      <path *ngIf="category.name === 'Backend'" d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                      <path *ngIf="category.name === 'Database'" d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zM4 14v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
                      <path *ngIf="category.name === 'Tools'" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                      <path *ngIf="category.name === 'Languages'" d="M5 9h14v2H5zm0 4h14v2H5zm-2 4h18v2H3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-100 group-hover:text-indigo-300 transition-colors duration-300 tracking-tight">
                      {{ category.name }}
                    </h3>
                    <p class="text-gray-500 text-xs tracking-wide">{{ category.skills.length }} {{ category.name === 'Languages' ? 'Languages' : 'Technologies' }}</p>
                  </div>
                </div>
              </div>

              <!-- Skills List -->
              <div class="p-5 space-y-3">
                <div
                  *ngFor="let skill of category.skills; let skillIndex = index"
                  class="skill-item opacity-0 animate-fade-in-up"
                  [style.animation-delay]="((i * 0.15) + (skillIndex * 0.08)) + 's'"
                >
                  <!-- Skill Header -->
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-gray-200 text-sm font-medium tracking-tight">{{ skill.name }}</span>
                    <span class="text-xs font-semibold text-indigo-300 tracking-tight">
                      {{ skill.level }}%
                    </span>
                  </div>
                  
                  <!-- Skill Progress Bar -->
                  <div class="relative h-1.5 bg-gray-800/50 rounded-full overflow-hidden">
                    <!-- Background glow -->
                    <div class="absolute inset-0 bg-indigo-500/5 rounded-full"></div>
                    
                    <!-- Progress fill -->
                    <div 
                      class="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full transition-all duration-1500 ease-out skill-progress-bar shadow-[0_0_8px_rgba(79,70,229,0.3)]"
                      [style.width]="'0%'"
                      [attr.data-width]="skill.level + '%'"
                    >
                      <!-- Animated shimmer effect -->
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                    </div>
                    
                    <!-- Progress indicator dot -->
                    <div 
                      class="absolute top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-indigo-200 rounded-full shadow-[0_0_6px_rgba(165,180,252,0.8)] transition-all duration-1500 ease-out skill-indicator opacity-0"
                      [style.left]="'0%'"
                      [attr.data-left]="skill.level + '%'"
                    ></div>
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
    .neural-pattern-skills {
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
    
    /* Skill Progress Bar Animation */
    .skill-progress-bar {
      transform-origin: left center;
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
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { name: "Angular 16", level: 85, category: "Frontend" },
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "Spring Boot", level: 80, category: "Backend" },
    { name: "PHP", level: 75, category: "Backend" },
    { name: "PostgreSQL/MySQL", level: 70, category: "Database" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "Maven", level: 70, category: "Tools" },
    { name: "Postman", level: 75, category: "Tools" },
    { name: "Arabic", level: 100, category: "Languages" },
    { name: "English", level: 90, category: "Languages" },
    { name: "French", level: 85, category: "Languages" }
  ];

  skillCategories: SkillCategory[] = [];

  ngOnInit() {
    this.organizeSkillsByCategory();
    setTimeout(() => {
      this.animateSkillBars();
    }, 800);
  }

  private organizeSkillsByCategory() {
    const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Languages'];
    const categoryColors = {
      'Frontend': { color: 'text-indigo-300', bgColor: 'bg-indigo-500/5', borderColor: 'border-indigo-500/15' },
      'Backend': { color: 'text-indigo-300', bgColor: 'bg-indigo-500/5', borderColor: 'border-indigo-500/15' },
      'Database': { color: 'text-indigo-300', bgColor: 'bg-indigo-500/5', borderColor: 'border-indigo-500/15' },
      'Tools': { color: 'text-indigo-300', bgColor: 'bg-indigo-500/5', borderColor: 'border-indigo-500/15' },
      'Languages': { color: 'text-indigo-300', bgColor: 'bg-indigo-500/5', borderColor: 'border-indigo-500/15' }
    };

    this.skillCategories = categories.map(category => ({
      name: category,
      skills: this.skills.filter(skill => skill.category === category),
      ...categoryColors[category as keyof typeof categoryColors]
    }));
  }

  private animateSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress-bar');
    const indicators = document.querySelectorAll('.skill-indicator');
    
    progressBars.forEach((bar, index) => {
      const width = bar.getAttribute('data-width');
      if (width) {
        setTimeout(() => {
          (bar as HTMLElement).style.width = width;
        }, index * 80);
      }
    });

    indicators.forEach((indicator, index) => {
      const left = indicator.getAttribute('data-left');
      if (left) {
        setTimeout(() => {
          (indicator as HTMLElement).style.left = `calc(${left} - 5px)`;
          (indicator as HTMLElement).style.opacity = '1';
        }, index * 80 + 400);
      }
    });
  }
}