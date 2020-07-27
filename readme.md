# SMBarber Project

This is one of my favorite projects, the reason? First of all I use a beautiful template from https://www.free-css.com (i'm not a grafic designer so I need some help just with the esthetic of the webpage - all code its mine or probably I recicle few codelines). Second, I use a lot of entresting actions and CRUD options on it. You can prove a TODO list, Contact List, User interaction, Blog functionalities and more on this project.

This project has been made with HTML, CSS, JavaScript (React) and Python (Flask). And there's a lot of dependencies like jQuery, Bootstrap, Fontawesome, Popper.js, Flask... (You can see more information on front/package.json and back/Pipfile).

## Installation

If you can stop for a minute, you have the backend and the frontend on this repo. My recommendation is to launch first the BACK and then the FRONT.

1. Clone or download this repo.
2. Open on you favorite source code editor the entire folder. I use Visual Studio Code.
3. Open terminal and launch Backend:
    (a) Move to back folder:
    ```bash
    cd back
    ```
    (b) Create a virtual environment:
    ```bash
    pipenv shell
    ```
    (c) Install pipenv:
    ```bash
    pipenv install
    ```
    (d) I preload some information, easily to launch back, you can use the loaddb file on back folder:
    ```bash
    bash loaddb
    ```
    (You can see the entire process, erase migration folder, erase database, init, migrate, upgrade, load information and run server)
4. Open a NEW terminal and Launch Frontend:
    (a) Move to Front folder:
    ```bash
    cd front
    ```
    (b) Install NPM package (node_modules folder) - this take few minutes and its downloaded from internet:
    ```bash
    npm install
    ```
    (c) Run the page:
    ```bash
    npm run start
    ```

    And thats all!!! My recommendation is to register and sign in because there's a lot of "premium" information on the website for the registered users. You have 2 different roles: "admin" and "customer" and both of them have different dashboard views.

## Contributing

Thank you to take your time to see my project and thanks to everyone that "permitted" me to "stole" your photos to use on it (this is a non-profitable work and just for educational purposes) and everyone else who works on open source companies.