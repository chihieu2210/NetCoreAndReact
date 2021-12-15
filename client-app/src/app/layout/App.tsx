import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import HomePage from "../../features/home/HomePage";
import { Route } from "react-router-dom";
import ActivityForm from "../../features/activities/form/ActivityForm";

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "6rem" }}>
        <Route path="/" exact component={HomePage} />
        <Route path="/activities" component={ActivityDashboard} />
        <Route path="/createActivity" component={ActivityForm} />
      </Container>
    </>
  );
}

export default observer(App);
