import { useEffect, useState } from "react";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";

function App() {
  const { activityStore } = useStore();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  const handleDeleteActivity = (id: string) => {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter((x) => x.id !== id)]);
      setSubmitting(false);
    });
  };

  if (activityStore.loadingInitial) {
    return <LoadingComponent />;
  }

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "6rem" }}>
        <ActivityDashboard
          activities={activityStore.activities}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
      </Container>
    </>
  );
}

export default observer(App);
