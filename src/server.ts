import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config(); // Carrega o arquivo ".env" com suas configuracoes

const server = express();

server.set("view engine", "mustache"); // Seto o view engine a ser utilizado no projeto
server.set("views", path.join(__dirname, "views")); // Seto uma pasta para armazenar as views do projeto
server.engine("mustache", mustache()); // Passo o callback da view engine a ser utilizada

server.use(express.static(path.join(__dirname, "../public"))); // Seto a pasta estatica(publica) que vai conter os arquivos css e imagens

// Rotas
server.use(mainRoutes);

// Caso o usuario tente acessar uma rota que nao existe, vai carregar a view "404"
server.use((req: Request, res: Response) => {
    res.render("pages/404");
});

server.listen(process.env.PORT);