import React from "react";
import Image from "next/image";
import { Card } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
const MeetupDetail = ({ meetupData }) => {
  return (
    <div className={styles.container}>
      <Card style={{ width: "18rem" }}>
        <Image src={meetupData.image} alt={meetupData.title} width={500} height={400} />
        {/* <Card.Img variant="top" src={meetupData.image} alt={meetupData.title} /> */}
        <Card.Body>
          <Card.Title>{meetupData.title}</Card.Title>
          <Card.Text>{meetupData.address}</Card.Text>
          <Card.Text>{meetupData.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MeetupDetail;



// abcd1234ABCD1234