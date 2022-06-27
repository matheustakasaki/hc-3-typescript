// Classes e funções
class UserExample {
  public name;
  public age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Player extends UserExample {
  public game;

  constructor(name: string, age: number, game: string) {
    super(name, age);

    this.game = game;
  }

  //   Método não estático - Acessível somente na instância
  dizerOJogoAtual() {
    return `Estou jogando no momento: ${this.game}`;
  }

  //   Método Estático - Acessível a partir da classe
  static queHorasSao() {}
}
const jogador = new Player("Matheus", 20, "Guardians of the Galaxy");
console.log(jogador);

console.log(jogador.dizerOJogoAtual());

// Static (métodos estáticos)
console.log("Acionando método estático da classe player", Player.queHorasSao());

// public: atributo acessível de forma geral (dentro e fora da classe)
// private: atributo é acessível apenas dentro da classe de onde foi criado
// protected: acessível apenas dentro da classe (e subclasses) onde o atributo foi criado.
class Game {
  protected name;

  constructor(name: string) {
    this.name = name;
  }

  dizerNome() {
    return this.name;
  }
}

const ghost = new Game("Ghost of Tsushima");

console.log(ghost.dizerNome());

// class GameWithDescription extends Game {
//   private description;

//   constructor(name: string, description: string) {
//     super(name);

//     this.description = description;
//   }

//   dizerNomeComDescricao() {
//     return `O nome com descrição é ${this.name}`;
//   }
// }

// Interfaces

interface IGameWithDescription {
  //   nome: string;
  descricao: string;
  dizerNomeComDescricao(): string;
}
class GameWithDescription extends Game implements IGameWithDescription {
  public descricao: string;

  constructor(name: string, description: string) {
    super(name);

    this.descricao = description;
  }

  dizerNomeComDescricao() {
    return `O nome com descrição é ${this.name}`;
  }
}
