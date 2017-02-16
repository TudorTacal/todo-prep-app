describe("ItemList", function () {
  var itemList;
  beforeEach(function (){
    itemList = new ItemList();
  })
  it("should be type of ItemList", function (){
    expect(itemList).toEqual(jasmine.any(ItemList))
  })
})
