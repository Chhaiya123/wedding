import { users } from "./data/users.js";
import { Modal } from './modal/Modal.js';
import { Navbar } from './modal/Navbar.js';

export class Home
{
    index(name) {
        const app = document.querySelector("#app");
     
        const navbars = new Navbar();

        // Add Navbar
        app.appendChild(navbars.render());
        app.insertAdjacentHTML("beforeend", `
            <!-- bg-gradient-to-b from-teal-950 via-teal-600 to-teal-700 -->
            <div class="frame max-w-xl w-full bg-gradient-to-b from-teal-950 via-teal-600 to-teal-700 text-amber-100 p-4 sm:p-10 gold-border relative shadow-2xl my-4">
                <!-- Traditional Corner Ornaments -->
                <img class="conner-top" src="./photo/conner-top.png" alt="no image">
                <img class="conner-left" src="./photo/images-left.png" alt="no image">
                <img class="conner-right" src="./photo/images-left.png" alt="no image">
                <img class="conner-bottom-right" src="./photo/images-left.png" alt="no image">
                <img class="conner-bottom-left" src="./photo/images-left.png" alt="no image">
                <!-- 
                <div class="absolute top-2 left-2 sm:top-3 sm:left-3 w-12 h-12 border-t-2 border-l-2 border-amber-300"></div>
                <div class="absolute top-2 right-2 sm:top-3 sm:right-3 w-12 h-12 border-t-2 border-r-2 border-amber-300"></div>
                <div class="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-12 h-12 border-b-2 border-l-2 border-amber-300"></div>
                <div class="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-12 h-12 border-b-2 border-r-2 border-amber-300"></div>
                -->
                <!-- Header / Invitation Title -->
                <div class="text-center space-y-2 mb-6" data-aos="fade-down">
                    <p class="moul-font text-amber-300 text-xs tracking-widest uppercase text-shadow-lg/20">ព្រះរាជាណាចក្រកម្ពុជា</p>
                    <p class="moul-font text-amber-200 text-xs italic text-shadow-lg/20">ជាទីគោរពស្រលាញ់ដ៏ជ្រាលជ្រៅ</p>
                    <h1 class="moul-font text-2xl sm:text-3xl text-yellow-500 gold-gradient mt-2 py-2 text-shadow-lg text-pretty" data-aos="fade-down" data-aos-duration="1500">សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>
                    <!-- <div class="w-32 h-0.5 bg-amber-400 mx-auto my-3"></div> -->
                    <img width="120px " class="mx-auto" src="./photo/border-style.png" alt="no image">
                    
                </div>

                <div class="flex flex-row sm:flex-row items-center justify-around gap-0 sm:gap-6 my-8 bg-black/20 p-2 sm:p-6 rounded-xl backdrop-blur-sm border border-teal-100/20 relative" data-aos="zoom-out" data-aos-duration="3000">
                
                    <!-- Groom -->
                    <div class="text-center space-y-2">
                        <p class="text-xs text-amber-300 moul-font uppercase">កូនប្រុស</p>
                        <h2 class="moul-font text-base sm:text-lg text-amber-200 text-shadow-sm">យឿន ឆៃយ៉ា</h2>
                    </div>

                    <!-- Heart Symbol -->
                    <!-- <div class="text-amber-400 text-3xl font-bold animate-bounce"> --> 
                    <div class="text-amber-400 text-3xl font-bold animate-bounce">
                        <img class="love" src="./photo/balloon.png" alt="no image" data-aos="fade-down">
                    </div>

                    <!-- Bride -->
                    <div class="text-center space-y-2">
                        <p class="text-xs text-amber-300 moul-font uppercase">កូនស្រី</p>
                        <h2 class="moul-font text-base sm:text-lg text-amber-200 text-shadow-sm">ហែម សុខហ័រ</h2>
                    </div>
                </div>
                
                <div id="particles"></div>
                <!-- Guest Name -->
                <h2 class="moul-font text-center mb-4 text-md sm:text-lg text-amber-200 text-shadow-md" data-aos="fade-down" data-aos-duration="1500">សូមគោរពអញ្ចើញ</h2>
                <div class="text-center py-5 bg-linear-[90deg,#ffd0d700,#f6f6f63e,#ffd0d700] space-y-3 mb-6" data-aos="fade-up">
                    <h2 class="moul-font text-md sm:text-lg text-olive-50 text-shadow-sm" data-aos="zoom-out" data-aos-duration="2000">${name}</h2>
                </div>

                <div class="text-center bg-amber-950/20 p-5 rounded-xl backdrop-blur-sm border border-teal-100/20 space-y-3 mb-6 shadow-inner" data-aos="fade-up">
                    <p class="text-amber-300 text-base moul-font">សូមអញ្ជើញភ្ញៀវកិត្តិយស</p>
                    <p class="battambang-font text-xs sm:text-sm sm:px-5 text-amber-100 leading-relaxed">
                        មកទទួលទានភោជនាហារដែលប្រព្រឹតទៅនៅ ថ្ងៃ អាទិត្យ ទី១៧ ខែមករា ឆ្នាំ២០២៧ ត្រូវនឹងថ្ងៃ ១០ កើត ខែបុស្ស ឆ្នាំមមី អដ្ឋស័ក ព.ស ២៥៧០ វេលាម៉ោង ៥:០០ នាទីល្ងាច នៅគេហដ្ឋានខាងស្រី ស្ថិតនៅ​ ភូមិ តាសេក ឃុំ ព្រែកអំបិល ស្រុក ស្អាង ខេត្ត កណ្ដាល
                        <p class="font-semibold text-amber-300 text-base">ដោយមេត្រីភាព</p>
                    </p>
                </div>

                <div class="text-center space-y-3 text-xs sm:text-sm text-amber-200 battambang-font mb-6" data-aos="fade-up">
                    <p class="font-semibold text-amber-300 text-base" data-aos="fade-up">ទីតាំងកម្មពិធី៖</p>
                    <p class="bg-black/20 p-3 rounded-lg border border-amber-500/20" data-aos="fade-up">
                        🏡 គេហដ្ឋានផ្ទះខាងស្រី (ភូមិ តាសេក ឃុំ ព្រែកអំបិល ស្រុក ស្អាង ខេត្ត កណ្ដាល)
                    </p>
                    
                    <div class="flex flex-wrap justify-center gap-3 pt-3" data-aos="fade-up" data-aos-duration="2000">
                        <button id="openRSVP" class="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-red-950 font-bold px-5 py-2.5 rounded-full shadow-lg transition transform hover:scale-102 battambang-font text-xs sm:text-sm w-full sm:w-auto">
                            ✨ ទំនាក់ទំនង-Contact
                        </button>
                        <button id="shareCard" class="bg-red-900/80 hover:bg-red-800 text-amber-200 border border-amber-400/50 font-semibold px-4 py-2.5 rounded-full shadow transition transform hover:scale-102 battambang-font text-xs sm:text-sm w-full sm:w-auto">
                            🔗 ចែករំលែកកាតអញ្ជើញ
                        </button>
                    </div>
                    <a href="https://maps.app.goo.gl/SVizjvToVoLENRj47" target="_blank" class="inline-block bg-gradient-to-r to-yellow-600 hover:bg-red-800 text-amber-200 border border-amber-400/50 font-semibold px-4 py-2.5 rounded-full shadow transition transform hover:scale-102 battambang-font text-xs sm:text-sm w-full sm:w-auto" data-aos="zoom-in" data-aos-duration="2000">
                        💒 ទីតាំងពិធីមង្គលការ
                    </a>
                </div>

                <!-- Footer Blessings -->
                <div class="text-center border-t border-amber-500/30 pt-4 space-y-1 text-xs text-amber-300 italic battambang-font" data-aos="zoom-in">
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
            <div id="rsvpModal" class="backdrop-blur-sm fixed top-0 inset-0 flex items-center justify-center p-4 z-50 hidden">
                <div class="Modal-body bg-teal-900/40 border-2 border-teal-100/40 shadow p-6 rounded-2xl max-w-md w-full text-amber-100 shadow-2xl relative">
                    <button id="closeRSVP" class="absolute top-3 right-3 text-amber-300 hover:text-white text-xl font-bold">&times;</button>
                    <h3 class="moul-font my-text-lg text-amber-300 text-center mb-4">ទំនាក់ទំនង</h3>
                    <div class="contact">
                        <a href="https://t.me/yoeunchhaiya" target="_blank" class="link text-teal-50 bg-linear-to-r from-teal-400 via-teal-600 to-teal-400 hover:bg-linear-to-tr hover:scale-102 font-bold px-4 py-2 rounded-full shadow transition text-xs sm:text-sm w-full">
                            <img src="./photo/telegram.png" alt="No photo">
                            ទំនាក់ទំនង Telegram កូមកំលោះ
                        </a>
                        <a href="https://t.me/yoeunchhaiya" target="_blank" class="link text-teal-50 bg-linear-to-r from-teal-400 via-teal-600 to-teal-400 hover:bg-linear-to-tr hover:scale-102 font-bold px-4 py-2 rounded-full shadow transition text-xs sm:text-sm w-full">
                            <img src="./photo/telegram.png" alt="No photo">
                            ទំនាក់ទំនង Telegram កូនក្រមុំ
                        </a>
                    </div>
                </div>
            </div>

            <!-- RSVP Modal Popup -->
            <div id="tasts" class="tasts text-teal-50 hidden text-sm bg-teal-50/30 p-3 backdrop-blur-md rounded-lg border border-teal-50/40"></div>
        `);

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
        modal.createParticles();

        
        const homeUrl = localStorage.getItem("home");
        const home = document.getElementById("home");
        const navbar = document.getElementById("navbar");

        if (home && homeUrl) {
            home.href = homeUrl;
        }

        if (navbar) {
            let lastScrollY = window.scrollY;

            window.addEventListener("scroll", () => {

                const currentScrollY = window.scrollY;

                // នៅខាងលើ
                if (currentScrollY < 100) {
                    navbar.classList.remove("fixed", "hide");
                }

                // ចុះក្រោម
                if (currentScrollY > 100) {

                    if (currentScrollY > lastScrollY) {
                        // Scroll Down
                        navbar.classList.add("fixed");
                        navbar.classList.remove("hide");
                    }

                    if (currentScrollY < lastScrollY) {
                        // Scroll Up
                        navbar.classList.add("hide");
                    }
                }

                lastScrollY = currentScrollY;
            });
        }
    }

    find(name) {
        const homeUrl = localStorage.getItem("home");
        
        const user = users.find(user =>
            user.name.toLowerCase() === name.toLowerCase()
        );
        if (!user) {
            this.index(name);
            return;
        }
        this.index(name);
    }


}