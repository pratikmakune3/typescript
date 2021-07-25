// Keytype extend keyof DataType == KeyType has to be one of the keys inside DataType
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
) {
  return items.map((item) => item[key]);
}

const r = pluck(
  [
    { user: "barney", age: 36 },
    { user: "fred", age: 40 },
  ],
  "user"
);

console.log(r);

// Analytics events -
interface BaseEvent {
  time: number;
  user: string;
}

// & -> append type
interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: number };
  checkout: BaseEvent;
}

function sendEvent<T extends keyof EventMap>(name: T, data: EventMap[T]) {
  console.log([name, data]);
}

sendEvent("addToCart", { productId: 1, user: "pratik", quantity: 1, time: 0 });
sendEvent("checkout", { time: 11, user: "bob" });
