//==========================
        // Create geometric shapes
        function createShapes() {
            const background = document.getElementById('geometric-background');
            const shapeTypes = ['square', 'circle', 'triangle', 'rectangle'];
            
            for (let i = 0; i < 40; i++) {
                const shape = document.createElement('div');
                const shapeClass = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
                shape.className = `shape ${shapeClass}`;
                
                // Random positions
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                // Random animation properties
                const delay = Math.random() * 10;
                const duration = Math.random() * 10 + 10;
                
                // Apply styles
                shape.style.left = `${posX}%`;
                shape.style.top = `${posY}%`;
                shape.style.animationDelay = `${delay}s`;
                shape.style.animationDuration = `${duration}s`;
                
                background.appendChild(shape);
            }
        }

        // Create particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            
            for (let i = 0; i < 100; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random positions
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                // Random animation properties
                const delay = Math.random() * 8;
                const duration = Math.random() * 4 + 4;
                
                // Apply styles
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.animationDelay = `${delay}s`;
                particle.style.animationDuration = `${duration}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Mouse movement interaction
        function addMouseInteraction() {
            document.addEventListener('mousemove', (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                const shapes = document.querySelectorAll('.shape');
                shapes.forEach(shape => {
                    const speed = 0.05;
                    const shapeX = parseFloat(shape.style.left);
                    const shapeY = parseFloat(shape.style.top);
                    
                    shape.style.left = `${shapeX + (x - 0.5) * speed}%`;
                    shape.style.top = `${shapeY + (y - 0.5) * speed}%`;
                });
            });
        }

        // Initialize animation
        document.addEventListener('DOMContentLoaded', () => {
            createShapes();
            createParticles();
            addMouseInteraction();
        });
        // Countdown target date: January 16, 2027 07:00:00
        const weddingDate = new Date("January 16, 2027 07:00:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            // const countdownn = distance + (2 * 24 * 60 * 60 * 1000);
            
            const dayss = Math.floor(distance / (24 * 60 * 60 * 1000)) ;

            // document.getElementById("countdown").innerHTML = "<p class='col-span-4 text-center font-bold text-amber-300'>"+ dayss +"!</p>";
           
            if (dayss < 2 && dayss >= 0) {
                const active = (dayss + 1);
                const text = active == 1 ? 'ថ្ងៃទី ១' : 'ថ្ងៃទី ២';
                document.getElementById("countdown").innerHTML = "<p class='col-span-4 text-center font-bold text-amber-300'>ពិធីមង្គលការកំពុងចាប់ផ្ដើម"+ text +"</p>";
                // return dayss;
            }else if(dayss < 0) {
                document.getElementById("countdown").innerHTML = "<p class='col-span-4 text-center font-bold text-amber-300'>ពិធីមង្គលការបានប្រារព្ធរួចរាល់ហើយ!</p>";
                return;
            }
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = String(days).padStart(2, '0');
            document.getElementById("hours").innerText = String(hours).padStart(2, '0');
            document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
            document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        function openLightbox(src) {
            const modal = document.getElementById('lightboxModal');
            const img = document.getElementById('lightboxImg');
            img.src = src;
            modal.classList.remove('hidden');
        }

        function closeLightbox() {
            document.getElementById('lightboxModal').classList.add('hidden');
        }

        function openRSVP() {
            document.getElementById('rsvpModal').classList.remove('hidden');
        }

        function closeRSVP() {
            document.getElementById('rsvpModal').classList.add('hidden');
        }

        function shareCard() {
            const dummyUrl = window.location.href;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(dummyUrl).then(() => {
                    showNotification("តំណភ្ជាប់កាតត្រូវបានចម្លងចូលក្នុង Clipboard រួចរាល់!");
                });
            } else {
                showNotification("តំណភ្ជាប់៖ " + dummyUrl);
            }
        }