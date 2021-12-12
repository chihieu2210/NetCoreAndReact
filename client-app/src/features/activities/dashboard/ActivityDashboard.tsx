import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
}

export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity
}: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities} selectActivity={selectActivity}></ActivityList>
      </Grid.Column>
      {selectedActivity && (
        <Grid.Column width="6">
          <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />
          <ActivityForm />
        </Grid.Column>
      )}
    </Grid>
  );
}
