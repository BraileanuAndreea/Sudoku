var React = require('react');

class Content extends React.Component{
	render(){
		return (
			<div className="content">
				{this.props.content}
			</div>
		)
	}
}
console.dir(Content);
module.exports = Content;