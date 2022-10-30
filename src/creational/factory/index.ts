abstract class Creator {
  abstract factoryMethod(): Product;

  someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator code has just worked with ${product.operation()}`;
  }
}

class ConcreteCreator1 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

interface Product {
  operation(): string;
}

class ConcreteProduct1 implements Product {
  operation(): string {
    return "{Result of the Concrete Product 1}";
  }
}

class ConcreteProduct2 implements Product {
  operation(): string {
    return "{Result of the Concrete Product 2}";
  }
}

// client code will work with the base class Creator, so that any subclass can be passed
function clientCode(creator: Creator) {
  // .... code
  console.log(
    "Client: I'm not aware of the creator's class , but it still works."
  );
  console.log(creator.someOperation());
}

// application code
console.log("App: Launched with the ConcreteCreator1");
clientCode(new ConcreteCreator1());

console.log("App: Launched with the ConcreteCreator2");
clientCode(new ConcreteCreator2());
