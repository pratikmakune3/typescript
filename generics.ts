function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

simpleState("a");
simpleState(1);

// Overriding inferred generic type, inferred = null, overrided with <string | null>
simpleState<string | null>(null);
