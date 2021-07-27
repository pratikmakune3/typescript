// Utility types in TS - mechanism to generate new types from the existing ones

// 1. Partial<Type>
interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

// Now this has to be tracked, whenever you change MyUser type... Bad design!!! :(
// interface MyUserOptional {
//   name?: string;
//   id?: string;
//   email?: string;
// }

// Solution - user Partial<Type> utility type. That's clean!!! :)
type MyUserOptional = Partial<MyUser>;

function merge(user: MyUser, overrides: MyUserOptional): MyUser {
  return {
    ...user,
    ...overrides,
  };
}

console.log(
  merge(
    {
      name: "pratik",
      id: "1",
      email: "pratik@hotmail.com",
    },
    {
      name: "pratik new",
      email: "pratikfoo@hotmail.com",
    }
  )
);

// 2. Required<Type> - opposite of Partial<type>
type RequiredUser = Required<MyUser>;

// 3. Pick<Type, Keys>
type JustNameAndEmail = Pick<MyUser, "name" | "email">;
