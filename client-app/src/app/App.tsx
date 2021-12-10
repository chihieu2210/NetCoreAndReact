import React, { useEffect, useState } from "react";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5271/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Activities" />
      <List>
        {activities.map((activity: any) => {
          return <List.Item key={activity.id}>{activity.title}</List.Item>;
        })}
      </List>
    </div>
  );
}

export default App;
