// jQuery doesnt add any extra feature to the browser or Javascript, it handles the browser's quirks.
// It lets you manipulate the DOM inside a browser. Its separate from Javascript engine. It looks at
// html and decides how to render it on screen. A tree like structure that stores a representation
// of the html. jQuery makes it easy to look at DOM to find elements on page and manipulate them.

var q = $("ul.people li"); // $ or jQuery
console.log(q); // jQuery.fn.init(3)

// behind the scenes
/*

jQuery = function (selector, context){

return new jQuery.fn.init(selector, context);

}
*/

//jQuery here, is a function that returns an object by calling
// the function constructor (new keyword)



