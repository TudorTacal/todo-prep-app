function ItemList() {
  this._items = [];
}

ItemList.prototype.getItems = function(){
  return this._items;
};

ItemList.prototype.addItem = function(item) {
  this._items.push(item);
}
