import { users } from './data/users.js';

export class Admin {
    index() {
        document.querySelector("#app").innerHTML = ` 
            <form id="login">
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="User name"
                >

                <input 
                    type="password" 
                    name="pass" 
                    id="pass" 
                    placeholder="Password"
                >

                <button type="submit" id="submit">
                    Login
                </button>
            </form>
        `;

        document.querySelector("#login").addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.querySelector("#name").value;
            const pass = document.querySelector("#pass").value;

            this.login(name, pass);
        });
    }

    login(name, pass) {
        const username ="admin";
        const password = "123456";
        if(name == username && pass == password) {
            this.insert();
        }else{
            console.log("User or password invalid.");
        }
    }

    insert() {
        document.querySelector("#app").innerHTML = ` 
            <form id="store">
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Guest name"
                >

                <button type="submit" id="submit">
                    Save
                </button>
            </form>
        `;

        document.querySelector("#store").addEventListener("submit", (e) => {
            e.preventDefault();

             const name = document.querySelector("#name").value;

            // create new data
            const newUser = {
                id: users.length + 1,
                name: name,
                age: 20
            };

            // insert data
            users.push(newUser);

            console.log(users);
           
        });
    }
}