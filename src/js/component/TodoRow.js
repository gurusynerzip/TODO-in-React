/**
 * Created by gurushantu on 2/1/2016.
 */
import React from 'react';

class TodoRow extends React.Component {
    handleColor(e) {
        var rowId = e.target.id;
        this.props.handleStyle(rowId);
    }
    handleDelete(t) {
        var id = t.target.id;
        this.props.todoDelete(id);
    }

    render() {
        return (
            <li id={this.props.id} onClick={this.handleColor.bind(this)} style={{background:this.props.rowStyle}}>
                {this.props.item}  <button id={this.props.id} onClick={this.handleDelete.bind(this)}>X</button>
            </li>
        );
    }
}

export default TodoRow;
