// Crio um tipo que so pode ter as strings abaixo
type MenuOptions = "" | "all" | "dogs" | "cats" | "fishes";

// Crio e exporto uma funcao com um parametro do tipo criado acima
export const createMenuObject = (activeMenu: MenuOptions) => {
    // Crio um objeto com todas as opcoes em falso
    let returnObject = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    };

    // Caso tenha um parametro sendo passado, defino o valor do parametro no objeto como verdadeiro
    if(activeMenu != "") {
        returnObject[activeMenu] = true;
    }
    
    return returnObject;
};