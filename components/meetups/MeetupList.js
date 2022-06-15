import { useRouter } from "next/router";
import React from "react";
import { Button, Card } from "react-bootstrap";

const MeetupList = ({ meetups }) => {
  const router = useRouter();
  const showDetailsHandler = (id) => {
    router.push(`/${id}`);
    
  };
  return (
    <div>
      {meetups.map((post) => {
        return (
          <div key={post.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={post.image} alt={post.title} />
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
          </div>
        );
      })}
    </div>
  );
};

export default MeetupList;
