import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function Project({
  title,
  img,
  des,
  plat,
  lang,
  key,
  link,
}) {
  return (
    <Card key={key}>
      <Card.Img src={img}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{des}</Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>Platforms: {plat}</ListGroup.Item>
          <ListGroup.Item>Languages: {lang}</ListGroup.Item>
        </ListGroup>
        <Button
          size='sm'
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          Try Me!
        </Button>
      </Card.Body>
    </Card>
  );
}
