import { Request, Response } from "express";

import { Pet } from "../models/Pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    //res.send("home");

    let menu = createMenuObject("all");

    res.render("pages/page", {
        menu: menu,
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        list: list
    });
};

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType("dog");

    let menu = createMenuObject("dogs");

    res.render("pages/page", {
        menu: menu,
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg"
        },
        list: list
    });
};

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType("cat");

    let menu = createMenuObject("cats");

    res.render("pages/page", {
        menu: menu,
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg"
        },
        list: list
    });
};

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType("fish");

    let menu = createMenuObject("fishes");

    res.render("pages/page", {
        menu: menu,
        banner: {
            title: "Peixes",
            background: "banner_fish.jpg"
        },
        list: list
    });
};