
import { Router } from './Router.js';
import { webRoutes } from './routes/web.js';

const router = new Router();

webRoutes(router);

// document.addEventListener('click', (e) => {

//     const link = e.target.closest('[data-link]');

//     if (!link) return;

//     e.preventDefault();

//     router.navigate(link.getAttribute('href'));
// });

// window.addEventListener('popstate', () => {
//     router.load();
// });

router.load();
document.addEventListener("click", (e) => {

    const link = e.target.closest("[data-link]");

    if (!link) return;

    e.preventDefault();

    router.navigate(link.getAttribute("href"));
});

window.addEventListener("popstate", () => {
    router.load();
});
