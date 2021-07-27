function myLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}

const logger = myLogFunction();
logger("my string");

function createLoggerClass() {
  return class MyLoggerClass {};
}
