import React from 'react';
import { Button,Container,Row,Col,Card,ProgressBar,Alert } from 'react-bootstrap';

import "./Class.css";

export default class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: "12 student",
      classname: "Class 3",
      visible: false,
      AverageButton: 'Show Average'

    }
     this.showAverage = this.showAverage.bind(this);
  }

   showAverage() {
      this.setState(state => ({
      visible: !state.visible
    }));
    }



  render() {
    const elements = ['one', 'two', 'three','four'];

    var items = []

    for (const [index, value] of elements.entries()) {
      items.push(<Col md={6}><Card style={{ width: '18rem' }}>
                        <Card.Body>
                           <Row>
                              <Col><Card.Subtitle className="gap">Student 1</Card.Subtitle></Col>
                              <Col><Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle></Col>
                           </Row>
                           <Row>
                              <Col><h6>Math </h6></Col>
                              <Col><ProgressBar variant="info" now={20}/></Col>
                              <Col><h6>20%</h6></Col>
                           </Row>
                           <Row>
                              <Col> <h6>Science </h6></Col>
                              <Col><ProgressBar variant="info" now={30}/></Col>
                              <Col> <h6>30% </h6></Col>
                           </Row>
                           <Row>
                              <Col><h6>English </h6></Col>
                              <Col><ProgressBar variant="info" now={80}/></Col>
                              <Col><h6>80% </h6></Col>
                           </Row>
                      </Card.Body>
                    </Card></Col>)
  }
  
  
    return (
      <div className="main">
      <Container>
         <Row>
            <Col> 
            <h3> {this.state.classname}</h3>
            <h3> {this.state.student}</h3>
            </Col>
            <Col >
            <Button type="button" onClick={()=>{this.showAverage()}}>{this.state.AverageButton}</Button>
            </Col>
             
         </Row>
          <Alert variant="info" show={this.state.visible} >
        <center>Class Room Average Performance</center>
      </Alert>
       </Container>
       <hr></hr>
       <Container-fluid>
            <Row>

               {items}
            </Row>
        </Container-fluid>
      </div>
    );
  }
}
