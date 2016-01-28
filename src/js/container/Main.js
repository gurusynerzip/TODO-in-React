/**
 * Created by nikhila on 29/12/15.
 */

import React from 'react';
import Input from './Input';
import ViewItems from './ViewItems';

export default class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            items:[{'id':'0','item':''}],
            inputValue:''
        }
    }

    handleChange(e){
        this.setState({inputValue: e.target.value});
    }
    handleClick(e) {
        e.preventDefault();
        this.state.items.push({'id':this.state.items.length +1,'item':this.state.inputValue});
        var blankInput='';
        this.setState({items: this.state.items});
        this.setState({inputValue: blankInput});
    }
    render() {
        return (
            <div><h3>TODOS</h3>
                <Input
                    handleChange = {this.handleChange.bind(this)}
                    inputValue={this.state.inputValue}
                    handleClick = {this.handleClick.bind(this)}
                />
                    <br/>
                <ViewItems items={this.state.items}/>

            </div>
        );
    }
}