/**
 * Created by nikhila on 29/12/15.
 */

import React from 'react';
import ViewInput from '../component/ViewInput';
import ViewItems from '../component/ViewItems';
import {Grid, Row,Col,Panel,Input,ButtonInput,Popover,Button} from 'react-bootstrap';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            items:[{'id':0,'item':''}],
            inputValue:''
        }
    }

    handleChange(todoText){
        if(todoText != ''){
            this.setState({inputValue: todoText.trim()});
        }
    }
    handleClick() {
        this.state.items.push({'id':this.state.items.length +1,'item':this.state.inputValue});
        var blankInput='';
        this.setState({items: this.state.items});
        this.setState({inputValue: blankInput});
    }
    todoDelete(id) {
        var itemList = this.state.items.filter(function(el) {
            return el.id != id;
        });
        this.setState({items: itemList});
    }
    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }

    render() {
        console.log("render");
        return (
            <div ><h3>TODOS</h3>
                <ViewInput
                    handleChange = {this.handleChange.bind(this)}
                    inputValue={this.state.inputValue}
                    handleClick = {this.handleClick.bind(this)}
                />
                <br/>
                <ViewItems items={this.state.items} todoDelete={this.todoDelete.bind(this)}/>

            </div>
        );
    }
}