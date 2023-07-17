import React from "react"
import Card from "react-bootstrap/Card"
import Bow from './bow.jpg'

function BusinessCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={Bow} />
        <Card.Body>
            <Card.Title>Bows before Bros</Card.Title>
            <Card.Text>
            The best place to buy cheer bows.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default BusinessCard