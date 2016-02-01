/**
 * Created by gurushantu on 1/28/2016.
 */

import React from 'react';
import {Grid, Row,Col,Panel,Input,ButtonInput,Popover,Button} from 'react-bootstrap';

class ViewInput extends React.Component {

    changeEvent(e) {
        var todoText = e.target.value;
        this.props.handleChange(todoText);
    }

    buttonClick(e) {
        e.preventDefault();
        this.props.handleClick();
    }

    render() {
        return (
          <Grid>
            <Row className="show-grid">
                <Col md={4}>
                    <Input type="text" placeholder="Enter todo" value={this.props.inputValue} onChange={this.changeEvent.bind(this)}/>
                </Col>

                <Col md={4}>
                    <Button bsStyle="success" onClick={this.buttonClick.bind(this)}>Submit</Button>
                </Col>
            </Row>

          </Grid>
        );
    }
}

export default ViewInput;
