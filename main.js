let Immutable = require('immutable');
let map1 = Immutable.Map({'a': 1, 'b': 2});
let map2 = map1.set('b', 32);
let obj = {
	'basename': 'errorFile',
	'path': 'rootPath'
};
let map3 = map1.merge(map2, obj);
console.log(map1);
console.log(map2);
console.log(map3);
