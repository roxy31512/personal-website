class ParticleBackground extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<canvas id="particle-canvas"></canvas>';
    this.initParticles();
  }
  
  initParticles() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    
    const mouse = { x: null, y: null, radius: 150 };
    
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.density = (Math.random() * 30) + 1;
        
        const greyShades = [
          'rgba(192, 192, 192, 0.6)',
          'rgba(169, 169, 169, 0.5)',
          'rgba(211, 211, 211, 0.4)',
          'rgba(128, 128, 128, 0.5)',
          'rgba(220, 220, 220, 0.3)'
        ];
        this.color = greyShades[Math.floor(Math.random() * greyShades.length)];
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
        
        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius;
            let directionX = (dx / distance) * force * this.density;
            let directionY = (dy / distance) * force * this.density;
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }
    }
    
    const init = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 9000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };
    
    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = 1 - (distance / 120);
            ctx.strokeStyle = `rgba(192, 192, 192, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[b].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      connect();
      requestAnimationFrame(animate);
    };
    
    // Set canvas size and init - MOVED AFTER function definitions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
  }
}

customElements.define('particle-background', ParticleBackground);