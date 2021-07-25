// Optional params
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? extra : ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Flour", "something extra");

// Optional fields
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

// Traditional way
function getEmail(user: User): string {
  return user.info && user.info.email ? user.info.email : "No email!";
}

// TS easy way
function getEmailEasy(user: User): string {
  return user?.info?.email ?? "No email";
}

// Optional callback
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  // if(callback) callback()

  // Easier way to safely call your function
  callback?.();
}
