var replaceProp = require('./index')
var obj = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3'
}

var replaceObj = {
    'key1': 'newKey1',
    'key2': 'newKey2',
    'key3': 'newKey3',
}

console.log(replaceProp(obj, replaceObj));

//output 
// {
//     'newKey1': 'value1',
//     'newKey2': 'value2',
//     'newKey3': 'value3'
// }