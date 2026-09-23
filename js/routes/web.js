import { Home } from '../home.js';
import { About } from '../about.js';
import { Admin } from '../login.js';

export function webRoutes(router) {

    const home = new Home();
    const about = new About();
    const admin = new Admin();

    router.get("/", () => {
        const homeUrl = localStorage.getItem("home") ?? "ឈ្មោះ_ភ្ញៀវកិត្តិយស";
        home.index(homeUrl);
    });

    router.get("/about", () => {
        about.index();
    });

    // router.get("/login", () => {
    //     admin.index();
    // });

    router.get("/:name", (params) => {
        const name = decodeURIComponent(params.name);
        const displayName = name.replaceAll("_", " ");
        localStorage.setItem("home", displayName);
        home.find(displayName);
    });
    
}