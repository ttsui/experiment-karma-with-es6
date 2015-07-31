define(['es6!src/Hello'], function(hello) {
  describe("Hello", function() {
    it("says hello", function() {
      expect(hello()).toEqual("Hello World");
    });
  });
});
