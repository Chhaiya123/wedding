export class Router {
    constructor() {
        this.routes = [];
    }

    get(path, callback) {
        this.routes.push({
            method: "GET",
            path,
            callback
        });
    }

    navigate(path) {
        history.pushState({}, "", path);
        this.load();
    }

    load() {
        const currentPath = window.location.pathname;

        for (const route of this.routes) {

            const names = [];

            const pattern = route.path.replace(
                /:([^/]+)/g,
                (_, name) => {
                    names.push(name);
                    return "([^/]+)";
                }
            );

            const regex = new RegExp(`^${pattern}$`);

            const match = currentPath.match(regex);

            if (match) {

                const params = {};

                names.forEach((name, index) => {
                    params[name] = decodeURIComponent(match[index + 1]);
                });

                route.callback(params);
                return;
            }
        }

        document.querySelector("#app").innerHTML = `
        <h1>404 - Page Not Found1 </h1>
    `;
    }
}




// navigate(path) {
//     history.pushState({}, "", `#${path}`);
//     this.load();
// }

// load() {
//     const path = window.location.hash.slice(1) || "/";

//     const callback = this.routes[path];

//     if (callback) {
//         callback();
//     } else {
//         document.querySelector("#app").innerHTML = `
//             <h1>404 - Page Not Found</h1>
//         `;
//     }
// }