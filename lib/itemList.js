function ItemList() {
  this._items = [];
}

ItemList.prototype.getItems = function(){
  return this._items;
};

ItemList.prototype.addItem = function(item) {
  this._items.push(item);
}

ItemList.prototype.deleteItem = function(number){
  this._items.splice(number - 1, 1);
}

ItemList.prototype.updateItem = function(number, text) {
  var item = this._items[number - 1];
  return item.setText(text);
}
