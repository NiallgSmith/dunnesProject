describe("my function sum", function() {

  it("should exist", function() {
    expect(sum).toBeDefined();
  });

  it("should return 3 when called as sum(1,2)", function() {
    var result = sum(1,2)
    expect(result).toBe(3);
  });

  it("should return 5 when called as sum(2,3)", function() {
    var result = sum(2,3)
    expect(result).toBe(5);
  });

  it('should return 5 when called as sum("2",3)', function() {
    var result = sum("2",3)
    expect(result).toBe(5);
  });

});
