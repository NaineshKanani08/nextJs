import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const MeetupList = ({ meetups }) => {
  const router = useRouter();
  const showDetailsHandler = (id) => {
    router.push(`/meetup/${id}`);
  };

  return (
    <Container fluid>
      <Row>
        {meetups &&
          meetups.length &&
          meetups.map((post) => {
            return (
              <Col key={post.id}>
                <Card style={{ width: "18rem" }}>
                  {/* <Card.Img variant="top" src={post.image} alt={post.title} /> */}
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={400}
                  />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.address}</Card.Text>
                  </Card.Body>
                  <Button
                    variant="dark"
                    onClick={() => showDetailsHandler(post.id)}
                  >
                    Show Details
                  </Button>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default MeetupList;
