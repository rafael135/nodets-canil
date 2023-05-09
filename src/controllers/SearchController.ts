import { Request, Response } from "express";

import { Pet } from "../models/Pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
    let searchTerm: string;

    if(req.query.searchTerm) { // Checo se existe um input com o nome "searchTerm"
        searchTerm = req.query.searchTerm as string;
    } else { // Caso o usuario nao digite nada no input de pesquisa, o redireciono para a pagina principal
        res.redirect("/");
        return;
    }

    let list;
    if(searchTerm != "") {
        list = Pet.getFromName(searchTerm);
    }

    res.render("pages/page", {
        menu: createMenuObject(""),
        list: list,
        searchTerm: searchTerm
    });

};