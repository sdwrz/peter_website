function removeRepeat(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

function sort(arr) {
    return arr.sort();
}

var arr = [5, 2, 0, 1, 3, 1, 4];
var result = sort(removeRepeat(arr));
console.log(result);