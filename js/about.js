import { Modal } from './modal/Modal.js';

export class About
{
    index() {
        document.querySelector("#app").innerHTML = `
            <div class="max-w-xl w-full bg-gradient-to-b from-red-950 via-red-900 to-red-950 text-amber-100 p-4 sm:p-10 rounded-2xl gold-border relative overflow-hidden shadow-2xl my-4">
        
                <!-- Traditional Corner Ornaments -->
                <div class="absolute top-2 left-2 sm:top-3 sm:left-3 w-12 h-12 border-t-2 border-l-2 border-amber-300"></div>
                <div class="absolute top-2 right-2 sm:top-3 sm:right-3 w-12 h-12 border-t-2 border-r-2 border-amber-300"></div>
                <div class="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-12 h-12 border-b-2 border-l-2 border-amber-300"></div>
                <div class="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-12 h-12 border-b-2 border-r-2 border-amber-300"></div>

                <!-- Header / Invitation Title -->
                <div class="text-center space-y-2 mb-6">
                    <p class="text-amber-300 text-xs sm:text-sm tracking-widest uppercase battambang-font">ព្រះរាជាណាចក្រកម្ពុជា</p>
                    <p class="text-amber-200 text-xs italic">ជាទីគោរពស្រលាញ់ដ៏ជ្រាលជ្រៅ</p>
                    <h1 class="moul-font text-2xl sm:text-3xl gold-gradient mt-2 py-2">សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>
                    <div class="w-32 h-0.5 bg-amber-400 mx-auto my-3"></div>
                    <div class="flex items-center justify-between header sm:px-5">
                        <div class="text-start moul-font text-amber-200/80">
                            <h6>លោក សុង យឿន</h6>
                            <h6>លោកស្រី ថោង គន្ធា</h6>
                        </div>
                        <div class="text-start moul-font text-amber-200/80">
                            <h6>លោក ហែម តៅ</h6>
                            <h6>លោកស្រី សាន សោភា</h6>
                        </div>
                    </div>
                    <p class="battambang-font text-xs sm:text-sm sm:px-5 text-amber-100 leading-relaxed pt-2">
                        យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និង ប្រិយមិត្តទាំងអស់អញ្ចើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយលដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្ដី ជ័យមង្គ័លក្នុង ពិធីរៀបអាពារណ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ ។
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row items-center justify-around gap-6 my-8 bg-black/20 p-6 rounded-xl border border-amber-500/30 relative">
                    <div class="geometric-background" id="geometric-background"></div>
                    <!-- Groom -->
                    <div class="text-center space-y-2">
                        <div class="w-32 h-32 mx-auto rounded-full border-2 border-amber-400 overflow-hidden shadow-lg bg-amber-900/40 flex items-center justify-center animate-pulse-slow relative group">
                            <img src="./photo/photo_1_2026-09-21_21-41-23.jpg" 
                                alt="កូនប្រុស យឿន ឆៃយ៉ា"
                                class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        </div>
                        <p class="text-xs text-amber-300 battambang-font uppercase">កូនប្រុស</p>
                        <h2 class="moul-font text-base sm:text-lg text-amber-200">យឿន ឆៃយ៉ា</h2>
                    </div>

                    <!-- Heart Symbol -->
                    <div class="text-amber-400 text-3xl font-bold animate-bounce">
                        ❤️
                    </div>

                    <!-- Bride -->
                    <div class="text-center space-y-2">
                        <div class="w-32 h-32 mx-auto rounded-full border-2 border-amber-400 overflow-hidden shadow-lg bg-amber-900/40 flex items-center justify-center animate-pulse-slow relative group">
                            <img src="./photo/photo_2_2026-09-21_21-41-23.jpg" 
                                alt="កូនស្រី ហែម សុខហ័រ" 
                                class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        </div>
                        <p class="text-xs text-amber-300 battambang-font uppercase">កូនស្រី</p>
                        <h2 class="moul-font text-base sm:text-lg text-amber-200">ហែម សុខហ័រ</h2>
                    </div>

                </div>

                <div class="text-center bg-amber-950/20 p-5 rounded-xl border border-amber-400/20 space-y-3 mb-6 shadow-inner">
                    <p class="text-amber-300 text-base moul-font">សូមអញ្ជើញភ្ញៀវកិត្តិយស</p>
                    <p class="battambang-font text-xs sm:text-sm sm:px-5 text-amber-100 leading-relaxed">
                        មកទទួលទានភោជនាហារដែលប្រព្រឹតទៅនៅ ថ្ងៃ អាទិត្យ ទី១៧ ខែមករា ឆ្នាំ២០២៧ ត្រូវនឹងថ្ងៃ ១០ កើត ខែបុស្ស ឆ្នាំមមី អដ្ឋស័ក ព.ស ២៥៧០ វេលាម៉ោង ៥:០០ នាទីល្ងាច នៅគេហដ្ឋានខាងស្រី ស្ថិតនៅ​ ភូមិ តាសេក ឃុំ ព្រែកអំបិល ស្រុក ស្អាង ខេត្ត កណ្ដាល
                        <p class="font-semibold text-amber-300 text-base">ដោយមេត្រីភាព</p>
                    </p>
                </div>

                <!-- Couple Photo Gallery Section -->
                <div class="mb-6 bg-black/20 p-4 rounded-xl border border-amber-500/20 text-center space-y-3">
                    <p class="moul-font text-sm text-amber-300">រូបភាពអនុស្សាវរីយ៍</p>
                    <div class="grid grid-cols-3 gap-2">
                        <div class="rounded-lg overflow-hidden border border-amber-400/40 aspect-square group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80" alt="Wedding 1" class="w-full h-full object-cover group-hover:scale-110 transition duration-300">
                        </div>
                        <div class="rounded-lg overflow-hidden border border-amber-400/40 aspect-square group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=300&q=80" alt="Wedding 2" class="w-full h-full object-cover group-hover:scale-110 transition duration-300">
                        </div>
                        <div class="rounded-lg overflow-hidden border border-amber-400/40 aspect-square group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=300&q=80" alt="Wedding 3" class="w-full h-full object-cover group-hover:scale-110 transition duration-300">
                        </div>
                    </div>
                </div>

                <div class="text-center bg-amber-950/70 p-5 rounded-xl border border-amber-400/40 space-y-3 mb-6 shadow-inner">
                    <p class="text-xs text-amber-300 uppercase tracking-widest battambang-font">ថ្ងៃប្រារព្ធពិធីមង្គលការ</p>
                    <p class="moul-font text-lg sm:text-xl text-amber-300">ថ្ងៃសៅរ៍ និង ថ្ងៃអាទិត្យ</p>
                    <p class="battambang-font text-base sm:text-lg text-amber-100 font-bold">
                        ទី ១៦ និង ១៧ ខែមករា ឆ្នាំ ២០២៧
                    </p>
                    <p class="text-xs text-amber-200 italic">ត្រូវនឹងថ្ងៃ ០៩ និង ១០ កើត ខែបុស្ស ឆ្នាំមមី អដ្ឋស័ក ពុទ្ធសករាជ ២៥៧០</p>
                    
                    <div id="particles"></div>
                    <!-- Live Countdown -->
                    <div id="countdown" class="grid grid-cols-4 gap-2 pt-3 max-w-sm mx-auto text-amber-200">
                        <div class="bg-black/40 p-2 rounded border border-amber-500/30">
                            <span id="days" class="block font-bold text-lg text-amber-300">00</span>
                            <span class="text-[10px] battambang-font">ថ្ងៃ</span>
                        </div>
                        <div class="bg-black/40 p-2 rounded border border-amber-500/30">
                            <span id="hours" class="block font-bold text-lg text-amber-300">00</span>
                            <span class="text-[10px] battambang-font">ម៉ោង</span>
                        </div>
                        <div class="bg-black/40 p-2 rounded border border-amber-500/30">
                            <span id="minutes" class="block font-bold text-lg text-amber-300">00</span>
                            <span class="text-[10px] battambang-font">នាទី</span>
                        </div>
                        <div class="bg-black/40 p-2 rounded border border-amber-500/30">
                            <span id="seconds" class="block font-bold text-lg text-amber-300">00</span>
                            <span class="text-[10px] battambang-font">វិនាទី</span>
                        </div>
                    </div>
                </div>

                <div class="text-center space-y-3 text-xs sm:text-sm text-amber-200 battambang-font mb-6">
                    <p class="font-semibold text-amber-300 text-base">ទីតាំងកម្មពិធី៖</p>
                    <p class="bg-black/20 p-3 rounded-lg border border-amber-500/20">
                        🏡 គេហដ្ឋានផ្ទះខាងស្រី (ភូមិ តាសេក ឃុំ ព្រែកអំបិល ស្រុក ស្អាង ខេត្ត កណ្ដាល)
                    </p>
                    
                    <div class="flex flex-wrap justify-center gap-3 pt-3">
                        <button id="openRSVP" class="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-red-950 font-bold px-5 py-2.5 rounded-full shadow-lg transition transform hover:scale-102 battambang-font text-xs sm:text-sm w-full sm:w-auto">
                            ✨ ទំនាក់ទំនង-Contact
                        </button>
                        <button id="shareCard" class="bg-red-900/80 hover:bg-red-800 text-amber-200 border border-amber-400/50 font-semibold px-4 py-2.5 rounded-full shadow transition transform hover:scale-102 battambang-font text-xs sm:text-sm w-full sm:w-auto">
                            🔗 ចែករំលែកកាតអញ្ជើញ
                        </button>
                    </div>
                    <a href="https://maps.app.goo.gl/SVizjvToVoLENRj47" target="_blank" class="inline-block bg-gradient-to-r to-yellow-600 hover:bg-red-800 text-amber-200 border border-amber-400/50 font-semibold px-4 py-2.5 rounded-full shadow transition transform hover:scale-102 battambang-font text-xs sm:text-sm w-full sm:w-auto">
                        💒 ទីតាំងពិធីមង្គលការ
                    </a>
                </div>

                <!-- Footer Blessings -->
                <div class="text-center border-t border-amber-500/30 pt-4 space-y-1 text-xs text-amber-300 italic battambang-font">
                    <p class="font-medium">វត្តមានដ៏ខ្ពង់ខ្ពស់របស់ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី គឺជាកិត្តិយសដ៏ក្រៃលែងសម្រាប់យើងខ្ញុំ។</p>
                    <p class="text-[10px] text-amber-400/70 pt-2">រៀបចំដោយ: ក្រុមការងារអញ្ជើញមង្គលការឌីជីថល</p>
                </div>

            </div>

            <!-- Lightbox Modal -->
            <div id="lightboxModal" class="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 hidden" onclick="closeLightbox()">
                <div class="relative max-w-lg w-full">
                    <button class="absolute -top-10 right-0 text-amber-300 text-2xl font-bold">&times;</button>
                    <img id="lightboxImg" src="" alt="Enlarged Wedding Photo" class="w-full rounded-lg border-2 border-amber-400 shadow-2xl">
                </div>
            </div>

           <!-- RSVP Modal Popup -->
            <div id="rsvpModal" class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 hidden">
                <div class="Modal-body bg-red-950 border-2 border-amber-400 p-6 rounded-2xl max-w-md w-full text-amber-100 shadow-2xl relative">
                    <button id="closeRSVP" class="absolute top-3 right-3 text-amber-300 hover:text-white text-xl font-bold">&times;</button>
                    <h3 class="moul-font my-text-lg text-amber-300 text-center mb-4">ទំនាក់ទំនង</h3>
                    <div class="contact">
                        <a href="https://t.me/yoeunchhaiya" target="_blank" class="link bg-linear-to-r from-red-900 via-orange-600 to-orange-400 hover:bg-linear-to-tr hover:scale-102 font-bold px-4 py-2 rounded-full shadow transition text-xs sm:text-sm w-full">
                            <img src="./photo/telegram.png" alt="No photo">
                            ទំនាក់ទំនង Telegram កូមកំលោះ
                        </a>
                        <a href="https://t.me/yoeunchhaiya" target="_blank" class="link bg-linear-to-r from-red-800 via-orange-500 to-orange-300 hover:bg-linear-to-tr hover:scale-102 font-bold px-4 py-2 rounded-full shadow transition text-xs sm:text-sm w-full">
                            <img src="./photo/telegram.png" alt="No photo">
                            ទំនាក់ទំនង Telegram កូនក្រមុំ
                        </a>
                    </div>
                </div>
            </div>

            <!-- RSVP Modal Popup -->
            <div id="tasts" class="tasts hidden text-sm bg-emerald-800 p-3 rounded-lg border border-amber-500/40"></div>
        `;
        const modal = new Modal();
        document
            .getElementById("openRSVP")
            .addEventListener("click", () => {
                modal.openRSVP();
            });

        document
            .getElementById("closeRSVP")
            .addEventListener("click", () => {
                modal.closeRSVP();
            });
        document
            .getElementById("shareCard")
            .addEventListener("click", () => {
                modal.shareCard();
            });
    }

}

class Wedding {

    // =========================
    // Create Geometric Shapes
    // =========================
    createShapes() {

        const background =
            document.getElementById("geometric-background");

        const shapeTypes = [
            "square",
            "circle",
            "triangle",
            "rectangle"
        ];

        for (let i = 0; i < 40; i++) {

            // Create div
            const shape = document.createElement("div");

            // Random shape type
            const shapeClass =
                shapeTypes[
                    Math.floor(
                        Math.random() * shapeTypes.length
                    )
                ];

            // Add class
            shape.className = `shape ${shapeClass}`;

            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;

            // Random animation
            const delay = Math.random() * 10;
            const duration = Math.random() * 10 + 10;

            // Apply styles
            shape.style.left = `${posX}%`;
            shape.style.top = `${posY}%`;
            shape.style.animationDelay = `${delay}s`;
            shape.style.animationDuration = `${duration}s`;

            // Add to background
            background.appendChild(shape);
        }
    }


    // =========================
    // Create Particles
    // =========================
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


    // =========================
    // Mouse Movement
    // =========================
    addMouseInteraction() {

        document.addEventListener("mousemove", (e) => {

            // Mouse position 0 → 1
            const x =
                e.clientX / window.innerWidth;

            const y =
                e.clientY / window.innerHeight;

            // Get all shapes
            const shapes =
                document.querySelectorAll(".shape");

            shapes.forEach((shape) => {

                const speed = 0.05;

                // Current position
                const shapeX =
                    parseFloat(shape.style.left);

                const shapeY =
                    parseFloat(shape.style.top);

                // Move shape
                shape.style.left =
                    `${shapeX + (x - 0.5) * speed}%`;

                shape.style.top =
                    `${shapeY + (y - 0.5) * speed}%`;
            });
        });
    }


    // =========================
    // Countdown
    // =========================
    updateCountdown() {

        // Wedding date
        const weddingDate =
            new Date(
                "January 16, 2027 07:00:00"
            ).getTime();

        // Current time
        const now =
            new Date().getTime();

        // Remaining time
        const distance =
            weddingDate - now;


        // =========================
        // Check wedding status
        // =========================

        const dayss =
            Math.floor(
                distance /
                (24 * 60 * 60 * 1000)
            );


        // Wedding is starting
        if (dayss < 2 && dayss >= 0) {

            const active =
                dayss + 1;

            const text =
                active === 1
                    ? "ថ្ងៃទី ១"
                    : "ថ្ងៃទី ២";

            document.getElementById(
                "countdown"
            ).innerHTML = `
                <p class="col-span-4 text-center font-bold text-amber-300">
                    ពិធីមង្គលការកំពុងចាប់ផ្ដើម ${text}
                </p>
            `;

        }

        // Wedding already finished
        else if (dayss < 0) {

            document.getElementById(
                "countdown"
            ).innerHTML = `
                <p class="col-span-4 text-center font-bold text-amber-300">
                    ពិធីមង្គលការបានប្រារព្ធរួចរាល់ហើយ!
                </p>
            `;

            return;
        }


        // =========================
        // Calculate countdown
        // =========================

        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60)) /
                1000
            );


        // =========================
        // Display
        // =========================

        document.getElementById("days")
            .innerText =
            String(days).padStart(2, "0");

        document.getElementById("hours")
            .innerText =
            String(hours).padStart(2, "0");

        document.getElementById("minutes")
            .innerText =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds")
            .innerText =
            String(seconds).padStart(2, "0");
    }


    // =========================
    // Initialize
    // =========================
    init() {

        this.createShapes();

        this.createParticles();

        this.addMouseInteraction();

        // Run countdown immediately
        this.updateCountdown();

        // Update every 1 second
        setInterval(() => {
            this.updateCountdown();
        }, 1000);
    }
}


// =========================
// Start Application
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const wedding = new Wedding();

    wedding.init();

});