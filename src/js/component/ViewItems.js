/**
 * Created by gurushantu on 1/28/2016.
 */
import React from 'react';
import TodoRow from './TodoRow';

class ViewItems extends React.Component {
        constructor(){
            super();
            this.state = {
                color:'',
                rowId:'',
                bcColor:''
            }
        }
        handleStyle(id) {
            this.setState({rowId:id});
            this.setState({color:'lightgray'});
        }

        todoDelete(id) {
            this.props.todoDelete(id);
        }
        render(){
            var rows = [];
            if(this.props.items.length > 1) {
                this.props.items.map((item)=> {
                    if(item.item != '')
                        if(item.id == this.state.rowId)
                        rows.push(<TodoRow
                            item = {item.item}
                            id={item.id}
                            key={item.id}
                            handleStyle={this.handleStyle.bind(this)}
                            rowStyle = {this.state.color}
                            todoDelete = {this.todoDelete.bind(this)}
                        />);
                    else
                        rows.push(<TodoRow
                            item = {item.item}
                            id={item.id}
                            key={item.id}
                            handleStyle={this.handleStyle.bind(this)}
                            rowStyle = {this.state.bcColor}
                            todoDelete = {this.todoDelete.bind(this)}
                        />);
                });
            }
            return (
                <ul>
                    {rows}
                </ul>
            );
        }
}



export default ViewItems;