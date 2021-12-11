import React, { useEffect, useState } from "react";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

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
      <Container style={{ marginTop: "6rem" }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </>
  );
}

export default App;
