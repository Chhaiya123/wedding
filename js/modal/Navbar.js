export class Navbar
{
    render() {
        const navbar = document.createElement("nav");

        navbar.innerHTML = `
            <nav  id="navbar" class="navbar-btn">
                <a id="home" class="nav-btn backdrop-blur-sm text-teal-100 bg-teal-900/50 bg-gradient-to-r hover:bg-teal-900/80 font-bold px-5 py-2.5 rounded-full shadow-lg transition transform hover:scale-102 battambang-font border border-teal-300 text-xs sm:text-sm w-full sm:w-auto" href="/">
                    សូមគោរពអញ្ចើញ
                </a>
                <a id="about" class="nav-btn backdrop-blur-sm text-teal-100 bg-teal-900/30 bg-gradient-to-r hover:bg-teal-900/60 font-bold px-5 py-2.5 rounded-full shadow-lg transition transform hover:scale-102 battambang-font border border-teal-300 text-xs sm:text-sm w-full sm:w-auto" href="/about">
                    សិរីមង្គលអាពាហ៍ពិពាហ៍
                </a>
            </nav>
        `;

        return navbar;

    }

}