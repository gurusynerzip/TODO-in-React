/**
 * Created by gurushantu on 1/28/2016.
 */
import React from 'react';

class ViewItems extends React.Component {
        constructor(){
            super();
            this.state = {
                color:'',
                rowId:''
            }
        }

        handleColor(e) {
            this.setState({rowId:e.target.id});
            alert(this.state.rowId);
            this.setState({color:'lightgray'});
        }
        render(){
            var rows = [];
            if(this.props.items.length > 0) {
                this.props.items.map((item)=> {
                    if(this.state.rowId == item.id){
                        rows.push(<tr  style={{backgroundColor:this.state.color}} onClick={this.handleColor.bind(this)}><td id={item.id}>{item.item}</td></tr>);
                    } else {
                        rows.push(<tr  onClick={this.handleColor.bind(this)}><td id={item.id}>{item.item}</td></tr>);
                    }

                });
            }
            return(
                <table>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            );
        }
}

export default ViewItems;