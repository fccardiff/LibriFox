// First test, used to check if stripHTMLTags is working properly
var app = requireApp("/js/app");
describe("stripHTMLTags", function(){
  it('should return -1 when the value is not present', function(){
    assert.equal("Test?", "Test?");
  });
});