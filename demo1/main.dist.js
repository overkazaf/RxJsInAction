'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Rx.Observable.of(1,2,3)', _Rx2.default.Observable.of(1, 2, 3));

var button = document.querySelector('button');

_Rx2.default.Observable.fromEvent(button, 'click').subscribe('click', function () {
	console.log('Button has been clicked');
});

var subject = new _Rx2.default.Subject();

var observable = _Rx2.default.Observable.from([1, 2, 3, 4, 5]).take(4).throttleTime(1000);

subject.subscribe(function (v) {
	console.log('logA:', v);
});

subject.subscribe(function (v) {
	console.log('logB:', v);
});

observable.subscribe(subject);
