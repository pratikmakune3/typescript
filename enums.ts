enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

const isLoading = (state: LoadingState) => {
  state === LoadingState.loading;
};

// isLoading("dog") not allowed, not included in LoadingState

// Literal types -
// how to constraint dice number - number literal
function rollDice(dice: 1 | 2 | 3): number {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice(4)); // not allowed

// String literal
// Function overload
function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`Event : ${[name, data]}`);
}

sendEvent("addToCart", { productId: 1000 });
sendEvent("checkout", { cartCount: 10 });
sendEvent("yoyo", {}); // not allowed
