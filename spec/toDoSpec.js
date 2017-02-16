describe("toDo", function(){

  var todo

  beforeEach(function(){
    todo = new ToDo();
  });

  it("should be type of a ToDo constructor", function(){
    expect(todo).toEqual(jasmine.any(ToDo));
  });
});
