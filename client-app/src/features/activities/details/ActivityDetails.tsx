import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
}

export default function ActivityDetails({ activity }: Props) {
  return (
    <>
      <Card style={{ width: "100%" }}>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} alt={activity.title} />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span>{activity.date}</span>
          </Card.Meta>
          <Card.Description>{activity.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths="2">
            <Button basic color="blue" content="Edit"></Button>
            <Button basic color="grey" content="Cancel"></Button>
          </Button.Group>
        </Card.Content>
      </Card>
    </>
  );
}
