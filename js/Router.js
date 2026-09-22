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
        const base = "/wedding";

        let currentPath = window.location.pathname;

        if (currentPath.startsWith(base)) {
            currentPath = currentPath.substring(base.length);
        }

        if (currentPath === "") {
            currentPath = "/";
        }

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
                    params[name] = match[index + 1];
                });

                route.callback(params);
                return;
            }
        }

        document.querySelector("#app").innerHTML = `
            <h1>404 - Page Not Found 1 </h1>
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