describe("toDo", function(){

  var todo, itemList;

  beforeEach(function(){
    itemList = {

    }
    todo = new ToDo(itemList);
  });

  it("should be type of a ToDo constructor", function(){
    expect(todo).toEqual(jasmine.any(ToDo));
  });

  it("should be initialized with an ItemList object", function (){
    expect(todo.getItemList()).toEqual(itemList)
  })
});
