var  React = require('react');
var ReactDom = require('react-dom');
var $ = require('jquery');


class Dialog extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: null,
			content: null
		}
	}
	render() {
		return (
			<div className="formular">
				<label htmlFor="tab_title" className="label" id="id-label1">Title</label>
				<input className="insert-text" placeholder="Tab title" type="text" onChange={this.onChangeInput.bind(this)}></input>
				<label htmlFor="tab-content" className="label" id="id-label2">Content</label>
				<textarea name="tab-content" id="tab-content" placeholder="Content" className="insert-text" onChange={this.onChangeTextarea.bind(this)}></textarea>
				<div className="formular-actions">
				<button className="ok" onClick={this.onClickButton.bind(this)}>OK</button>
				</div>
			</div>
		)
	}
	onChangeInput(e) {
		this.setState({title: e.target.value});
	}
	onChangeTextarea(e) {
		this.setState({content: e.target.value});
	}
	onClickButton(){
		this.props.onDialogOk(this.state.title,this.state.content);
	}
}

module.exports = Dialog;