function ItemList() {
  this._items = [];
}

ItemList.prototype.getItems = function(){
  return this._items;
};

ItemList.prototype.addItem = function(item) {
  this._items.push(item);
}

ItemList.prototype.testSpy = function(item){
  item.getText();
}

ItemList.prototype.deleteItem = function(number){
  this._items.splice(number - 1, 1);
}
