import { useState } from "react";
import { ActivityForm } from "./components/activity-form";
import { Activity } from "./components/activity";

function App() {
  const [activities, setActivities] = useState([]);

  return (
    <div>
      <ActivityForm activities={activities} setActivities={setActivities} />
      {/* List */}
      {activities.map((a, i) => {
        return (
          <Activity
            key={`${a.type}${i}`}
            type={a.type}
            createdAt={a.createdAt.toString()}
            text={a.text}
            index={i}
            activities={activities}
            setActivities={setActivities}
          />
        );
      })}
    </div>
  );
}

export default App;
