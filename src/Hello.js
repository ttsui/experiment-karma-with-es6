define(['browser-source-map-support'], function(sourceMapSupport) {
  sourceMapSupport.install();

  function hello() {
    const say = (message) => {
      return message;
    };

    return say("Hello World");
  }

  return hello;
});
