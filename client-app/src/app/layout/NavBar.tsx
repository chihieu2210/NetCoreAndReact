import { NavLink } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
  const { activityStore } = useStore();

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Activities"></Menu.Item>
        <Menu.Item as={NavLink} to="/createActivity">
          <Button onClick={() => activityStore.openForm()} positive content="Create Activity"></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
