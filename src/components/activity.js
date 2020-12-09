import { useState } from "react";
import styled from "styled-components";

import { ActivityForm } from "./activity-form";

const Container = styled.div`
  margin: 20px 0;
`;

export const Activity = ({
  type,
  text,
  createdAt,
  activities,
  setActivities,
  index,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const editActivities = (activity) => {
    setActivities(newActivities);
  };

  return (
    <Container>
      {isEdit ? (
        <ActivityForm
          activities={activities}
          setActivities={editActivities}
          onAfterSubmit={() => setIsEdit(false)}
        />
      ) : (
        <>
          <div>{type}</div>
          <div>{createdAt.toString()}</div>
          <div>{text}</div>
          <button onClick={() => setIsEdit(true)}>Edit</button>
        </>
      )}
    </Container>
  );
};
