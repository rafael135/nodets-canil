import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
    //res.send("home");

    let menu = createMenuObject("all");

    res.render("pages/page", {
        menu: menu,
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        }
    });
};

export const dogs = (req: Request, res: Response) => {
    //res.send("dogs");

    let menu = createMenuObject("dogs");

    res.render("pages/page", {
        menu: menu,
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg"
        }
    });
};

export const cats = (req: Request, res: Response) => {
    //res.send("cats");

    let menu = createMenuObject("cats");

    res.render("pages/page", {
        menu: menu,
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg"
        }
    });
};

export const fishes = (req: Request, res: Response) => {
    //res.send("fishes");

    let menu = createMenuObject("fishes");

    res.render("pages/page", {
        menu: menu,
        banner: {
            title: "Peixes",
            background: "banner_fish.jpg"
        }
    });
};