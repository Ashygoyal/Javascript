// include underscore.js from cdn in your html file
// <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"></script>

var arr1 = [1, 2, 3];

var arr2 = _.map(arr1, function(item) {
  return item * 3;
});

console.log(arr2);

var arr3 = _.filter([2, 3, 4, 5, 6, 7], function(item) {
  return item % 2 === 0;
});

console.log(arr3);
