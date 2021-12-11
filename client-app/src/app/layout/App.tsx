import React, { useEffect, useState } from "react";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("http://localhost:5271/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <List>
        {activities.map((activity) => {
          return <List.Item key={activity.id}>{activity.title}</List.Item>;
        })}
      </List>
    </>
  );
}

export default App;
