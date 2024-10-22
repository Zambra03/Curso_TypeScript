type Person = {
    name: string,
    code: string | number,
    description?: string
};

const newPerson: Person = {
    code: "42",
    name: "Michael",
};

type ServicePerson = string | null | number | undefined;
let response: ServicePerson;

type UserCharges = "admin" | "normal" | "superUser";
const myUserType: UserCharges = "superUser";