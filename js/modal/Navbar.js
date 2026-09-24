export class Navbar
{
    render() {
        const navbar = document.createElement("nav");

        navbar.innerHTML = `
            <nav  id="navbar" class="navbar-btn">
                <a id="home" class="nav-btn bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-red-950 font-bold px-5 py-2.5 rounded-full shadow-lg transition transform hover:scale-102 battambang-font text-xs sm:text-sm w-full sm:w-auto" href="/">
                    សូមគោរពអញ្ចើញ
                </a>
                <a id="about" class="nav-btn bg-red-900/80 hover:bg-red-800 text-amber-200 border border-amber-400/50 font-semibold px-4 py-2.5 rounded-full shadow transition transform hover:scale-102 battambang-font text-xs sm:text-sm w-full sm:w-auto" href="/about">
                    សិរីមង្គលអាពាហ៍ពិពាហ៍
                </a>
            </nav>
        `;

        return navbar;

    }

}