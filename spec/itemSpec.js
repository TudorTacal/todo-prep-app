describe("Item", function(){
  var item;


  beforeEach(function() {
    item = new Item("Hello");
  });

  it("should return true", function(){
    expect(item).toEqual(jasmine.any(Item));
  });

  describe("#getText", function () {
    it("returns the item's text", function () {
      expect(item.getText()).toEqual("Hello")
    });
  });

})
