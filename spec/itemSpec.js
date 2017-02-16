describe("Item", function(){
  var item;


  beforeEach(function() {
    item = new Item();
  });

  it("should return true", function(){
    expect(item).toEqual(jasmine.any(Item));
  });




})
