function Item(text) {
  this.text = text;
}

Item.prototype.getText = function () {
  return this.text;
}

Item.prototype.setText = function(text){
  this.text = text;
}
