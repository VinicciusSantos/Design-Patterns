// Fonecer uma interface para a criação de familias de objetos 
// relacionados sem especificar as suas classes concretas

import View from "../../../src/creational/abstract_factory/View";

test("Deve criar uma interface gráfica com tema claro", () => {
    const view = new View("light")
    expect(view.label.color).toBe("black")
    expect(view.button.color).toBe("white")
    expect(view.button.backgroundColor).toBe("blue")
});

test("Deve criar uma interface gráfica com tema escuro", () => {
    const view = new View("dark")
    expect(view.label.color).toBe("white")
    expect(view.button.color).toBe("white")
    expect(view.button.backgroundColor).toBe("black")
});
