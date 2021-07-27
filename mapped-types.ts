// name - required field
// & Record<string, string> - you can add anu no of records as long as it matches
// Record<string, string>
type MyFlexibleDog = {
  name: string;
} & Record<string, string | number>;

const myDog: MyFlexibleDog = {
  name: "LG",
  breed: "mutt",
  age: 10,
};

// We can do it w/o using Record<KeyType, ValType>
type MyFlexibleDogWORecordType = {
  name: string;
  // Mapped type ->
  [key: string]: string | number;
};

const myAnotherDog: MyFlexibleDogWORecordType = {
  name: "chattie",
  breed: "labra",
  age: "10 months",
  girfriends: 2,
};
