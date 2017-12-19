'use strict'

function replaceProperties(obj, replaceObj) {
    var keyToModify = JSON.stringify(obj);
    for (var key in replaceObj) {
        keyToModify = keyToModify.split(key).join(replaceObj[key]);
    }

    var finalObj = JSON.parse(keyToModify)
    return finalObj;
}

module.exports = replaceProperties;