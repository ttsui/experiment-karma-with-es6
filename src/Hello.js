sourceMapSupport.install();

function hello() {
  const say = (message) => {
    foo();
    return message;
  }

  return say("Hello World");
}