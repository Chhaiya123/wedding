import { Home } from '../home.js';
import { About } from '../about.js';

export function webRoutes(router) {

    const home = new Home();
    const about = new About();

    router.get("/", () => {
        const homeUrl = localStorage.getItem("home") ?? "ឈ្មោះ ភ្ញៀវកិត្តិយស";
   
        home.index(homeUrl);
    });

    router.get("/about", () => {
    
        about.index();
    });

    router.get("/:name", (params) => {
        const name = decodeURIComponent(params.name);
        const displayName = name
            .replace("_និង_", "<br>និង<br>")
            .replaceAll("_", " ");
        localStorage.setItem("home", displayName);
        home.find(displayName);
    });
    
}