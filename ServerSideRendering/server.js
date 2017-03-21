var express = require('express');
var app = express();
 
var React = require('react'),
	ReactDOMServer = require('react-dom/server');
 
var App = React.createFactory(require('./APP'));
 
app.get('/', function(req, res) {
	var html = ReactDOMServer.renderToString(
		React.DOM.body(
			null,
			React.DOM.div({id: 'root',
				dangerouslySetInnerHTML: {
					__html: ReactDOMServer.renderToStaticMarkup(App())
				}
			})
		)
	);

	console.log('inside');
 
	res.end(html);
});
 
app.listen(3000, function() {
	console.log('running on port ' + 3000);
});