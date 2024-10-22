interface Person {
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    sayHello: () => string;
}

let person: Person= {
    name: "Michael",
    code: "123",
    charge: 1,
    description: "Hola",
    sayHello: () => {
        return "Hello"
    },
};

let secondPerson: Person ={
    name: "",
    code: "",
    charge: 0,
    sayHello: () => "Hello",
};

secondPerson.description?.toUpperCase