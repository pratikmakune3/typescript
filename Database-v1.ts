interface Database1 {
  get(id: string): string;
  set(id: string, value: string): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class InMemoryDatabase1 implements Database1 {
  protected db: Record<string, string> = {};

  get(id: string): string {
    return this.db[id];
  }

  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB1 extends InMemoryDatabase1 implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDb1 = new PersistentMemoryDB1();
myDb1.set("foo", "bar");
console.log(myDb1.get("foo"));

// myDb1.db["a"] = "b"; private db, so not allowed

console.log(myDb1.saveToString());
