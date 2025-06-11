import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- Background elements -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <!-- Gradient background -->
      <div class="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-900/90 to-gray-950/80"></div>
      
      <!-- Subtle 3D particles -->
      <div class="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-indigo-900/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute top-20 right-10 w-80 h-80 bg-gradient-to-tl from-gray-800/10 to-transparent rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
      
      <!-- Neural network-inspired pattern -->
      <div class="absolute inset-0 opacity-3">
        <div class="neural-pattern-header"></div>
      </div>
    </div>

    <nav [class]="'fixed top-0 w-full z-50 transition-all duration-500 font-sans ' + (isScrolled ? 'bg-gray-900/40 backdrop-blur-lg border-b border-gray-800/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)]' : 'bg-transparent')">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <!-- Brand/Logo Area -->
          <div class="flex items-center gap-4">
            <div class="relative group">
              <!-- Animated logo/icon -->
              <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-lg flex items-center justify-center shadow-[0_4px_20px_rgba(79,70,229,0.3)] group-hover:shadow-[0_6px_30px_rgba(79,70,229,0.4)] transition-all duration-300 group-hover:scale-105">
                <svg class="w-5 h-5 text-gray-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <!-- Glow effect -->
                <div class="absolute inset-0 bg-indigo-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <!-- Brand text -->
            <div class="hidden sm:block">
              <div class="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-indigo-200 tracking-tight">
                Portfolio
              </div>
              <div class="text-xs text-gray-500 font-medium tracking-tight">
                Iyed Omri
              </div>
            </div>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-1">
            <button
              *ngFor="let item of navItems; let i = index"
              (click)="scrollToSection(item.id)"
              [class]="'relative px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm group ' + 
                      (activeSection === item.id ? 
                        'text-indigo-300 bg-gray-800/50 backdrop-blur-sm border-gray-700/30 shadow-inner shadow-gray-900/50' : 
                        'text-gray-400 hover:text-indigo-100 hover:bg-gray-800/30 hover:border-gray-700/20')"
              [style.animation-delay]="(i * 0.1) + 's'"
            >
              <!-- Icon -->
              <div class="flex items-center gap-1.5 relative z-10">
                <lucide-icon [name]="item.icon" class="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-105"></lucide-icon>
                <span class="tracking-tight">{{ item.label }}</span>
              </div>
              
              <!-- Active indicator -->
              <div 
                *ngIf="activeSection === item.id"
                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse-slow">
              </div>
              
              <!-- Hover effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/5 transition-all duration-300 rounded-lg"></div>
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden relative p-2 rounded-lg bg-gray-900/40 backdrop-blur-lg border border-gray-800/50 hover:border-indigo-500/40 transition-all duration-300 hover:bg-indigo-500/10 group"
            (click)="toggleMobileMenu()"
          >
            <!-- Hamburger/Close Animation -->
            <div class="w-5 h-5 flex flex-col justify-center items-center">
              <span [class]="'bg-gray-300 h-0.5 w-5 rounded-full transition-all duration-300 ' + (mobileMenuOpen ? 'rotate-45 translate-y-1.5' : '')"></span>
              <span [class]="'bg-gray-300 h-0.5 rounded-full transition-all duration-300 mt-1 ' + (mobileMenuOpen ? 'w-0 opacity-0' : 'w-5')"></span>
              <span [class]="'bg-gray-300 h-0.5 w-5 rounded-full transition-all duration-300 mt-1 ' + (mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : '')"></span>
            </div>
            
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-indigo-500/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div 
          [class]="'md:hidden overflow-hidden transition-all duration-500 ease-in-out ' + (mobileMenuOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 mt-0 opacity-0')"
        >
          <div class="bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-800/50 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <div class="space-y-2">
              <button
                *ngFor="let item of navItems; let i = index"
                (click)="scrollToSection(item.id); toggleMobileMenu()"
                [class]="'w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm group ' + 
                        (activeSection === item.id ? 
                          'text-indigo-300 bg-gray-800/50 border border-gray-700/30 shadow-inner shadow-gray-900/50' : 
                          'text-gray-400 hover:text-indigo-100 hover:bg-gray-800/30')"
                [style.animation-delay]="(i * 0.1) + 's'"
              >
                <!-- Icon -->
                <lucide-icon [name]="item.icon" class="w-4 h-4 transition-transform duration-300 group-hover:scale-105"></lucide-icon>
                <span class="tracking-tight">{{ item.label }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    /* Animation Keyframes */
    @keyframes float-slow {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(2deg); }
    }
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.6; }
    }
    
    /* Animation Classes */
    .animate-float-slow {
      animation: float-slow 6s ease-in-out infinite;
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }
    
    /* Animation Delays */
    .animation-delay-3000 {
      animation-delay: 3s;
    }
    
    /* Neural Network Pattern */
    .neural-pattern-header {
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
    
    /* Smooth Transitions */
    .group:hover .group-hover\\:scale-105 {
      transform: scale(1.05);
    }
    
    /* Mobile menu animation */
    .max-h-0 {
      max-height: 0;
    }
    
    .max-h-96 {
      max-height: 24rem;
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
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .text-lg { font-size: 1rem; }
    }
    
    /* Typography Enhancements */
    .font-sans {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  `]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isScrolled = false;
  activeSection = 'home';
  mobileMenuOpen = false;

  navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'user' },
    { id: 'projects', label: 'Projects', icon: 'folder' },
    { id: 'skills', label: 'Skills', icon: 'award' },
    { id: 'contact', label: 'Contact', icon: 'mail' }
  ];

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  ngAfterViewInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    setTimeout(() => {
      this.navItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);
  }
}