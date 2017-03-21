import Rx from 'rxjs/Rx';
console.log('Rx.Observable.of(1,2,3)', Rx.Observable.of(1,2,3));


let button = document.querySelector('button');

Rx.Observable.fromEvent(button, 'click')
.subscribe('click', () => {
	console.log('Button has been clicked');
});


let subject = new Rx.Subject();

let observable = Rx.Observable.from([1, 2, 3, 4, 5])
				   .take(4)
				   .throttleTime(1000);

subject.subscribe(v => {
	console.log('logA:', v);
});

subject.subscribe(v => {
	console.log('logB:', v);
});

observable.subscribe(subject);