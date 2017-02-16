describe("ItemList", function () {
  var itemList, item;

  beforeEach(function (){
    itemList = new ItemList();
    item = {
      getText: function(){
        return true
      },
      setText: function(text) {
        return text
      }
    }

  })

  it("should be type of ItemList", function (){
    expect(itemList).toEqual(jasmine.any(ItemList))
  })

  it("is initialized with an empty array", function(){
    expect(itemList.getItems()).toEqual([]);
  });

  describe("#addItem", function (){
    it('add an item object to the items array', function(){
      itemList.addItem(item);
      expect(itemList.getItems()).toEqual([item]);
    });
  });

  describe("#deleteItem", function(){
    it("should remove an item from the list", function(){
      itemList.addItem(item);
      itemList.deleteItem(1);
      expect(itemList.getItems()).toEqual([]);
    })
  });

  describe("#updateItem", function(){
    it("should update and item from the list", function(){
      spyOn(item, "setText")
      itemList.addItem(item);
      itemList.updateItem(1, "Hello");
      expect(item.setText).toHaveBeenCalledWith("Hello")
    });
  });
});
