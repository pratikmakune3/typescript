// We can make anything generic - function, class, interface by passing in the type we want

function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [st1getter, st1setter] = simpleState(1);

console.log(st1getter());
st1setter(60);
console.log(st1getter());

// Overriding inferred generic type
const [st2getter, st2setter] = simpleState<string | null>(null);

console.log(st2getter());
st2setter("pqr");
console.log(st2getter());
