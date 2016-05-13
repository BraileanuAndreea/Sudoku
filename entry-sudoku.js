require('./sudoku.scss');

var $ = require('jquery');
var  React = require('react');
var ReactDom = require('react-dom');

class Matrix extends React.Component{
	constructor(props){
		super(props)
		var initialMatrix = [
				[6,0,9,0,0,0,0,0,0],
				[0,0,0,9,0,0,0,7,0],
				[7,0,4,6,3,0,0,8,9],
				[5,4,0,0,0,0,9,3,0],
				[0,9,6,0,3,0,4,1,0],
				[0,7,3,0,0,0,0,6,5],
				[3,6,0,0,7,2,8,0,4],
				[0,8,0,0,0,4,0,0,0],
				[0,0,0,0,0,0,3,0,6]
			];
		this.state = {
			matrix: initialMatrix.map(function(row) {
				return row.map(function(n) {
					return {
						value: n,
						canChange: n === 0
					}
				})
			}),
			showPicker: false
		}
	}
	render(){
		console.log(this.state);
		return (
			<div>
			{this.renderPicker()}
			<div className="matrix">
				{this.state.matrix.map(this.renderCells.bind(this))}
			</div>
			</div>
		);
		
	}
	renderCells(elem,rowIndex){
		return(
			<div className="cells">
				{elem.map(this.renderCell.bind(this,rowIndex))}
			</div>
		);
	}
	renderCell(rowIndex, elem, colIndex){
		return(
			<div className={'cell c-' + rowIndex + '-' + colIndex} onClick={this.onClickCell.bind(this, elem, rowIndex, colIndex)}>
				{elem.value ? elem.value : null}
			</div>
		);
	}
	renderPicker() {
		if(!this.state.showPicker) {
			return null;
		}
		return (
			<div id="picker"></div>
		)
	}
	onClickCell(elem, rowIndex, colIndex){
		if(!elem.canChange){
			return;
		}
		this.state.matrix[rowIndex][colIndex].value = prompt("Your number:");
		this.setState({ matrix: this.state.matrix })

	}
	//metoda de validare a nr, daca a mai fost pus
	//cand dau click pe casuta showPicker: true
	//de facut o componenta picker
}

ReactDom.render(<Matrix />, document.getElementById('app'));