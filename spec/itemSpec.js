describe("Item", function(){
  var item;


  beforeEach(function() {
    item = new Item("Hello");
  });

  it("be type of Item", function(){
    expect(item).toEqual(jasmine.any(Item));
  });

  describe("#getText", function () {
    it("returns the item's text", function () {
      expect(item.getText()).toEqual("Hello")
    });

    it("should be able to modify it's text", function(){
      item.setText("Hola");
      expect(item.getText()).toEqual("Hola");
    });
  });

})
