export class Modal {
    openRSVP() {
        document.getElementById('rsvpModal').classList.remove('hidden');
    }

    closeRSVP() {
        document.getElementById('rsvpModal').classList.add('hidden');
    }
    shareCard() {
        const url = window.location.href;
        const textarea = document.createElement("textarea");
        

        textarea.value = url;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";

        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand("copy");

        textarea.remove();
        const tast = document.getElementById("tasts");
        
        tast.innerText = "🔗 តំណភ្ជាប់ត្រូវបានចម្លង!";
        setTimeout(() => {
            tast.classList.add('hidden')
        },3000)
        tast.classList.remove('hidden')
        
    }
    createParticles() {

        const particlesContainer =
            document.getElementById("particles");

        for (let i = 0; i < 100; i++) {

            // Create div
            const particle =
                document.createElement("div");

            // Add class
            particle.className = "particle";

            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;

            // Random animation
            const delay = Math.random() * 8;
            const duration = Math.random() * 4 + 4;

            // Apply styles
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;

            // Add to container
            particlesContainer.appendChild(particle);
        }
    }

}