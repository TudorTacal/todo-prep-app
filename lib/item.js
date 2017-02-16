function Item(text) {
  this.text = text;
}

Item.prototype.getText = function () {
  return this.text;
}
