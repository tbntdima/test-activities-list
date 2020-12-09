import { Formik, Form, Field } from "formik";

import { types } from "../consts/activity-types";

export const ActivityForm = ({
  activities,
  setActivities,
  isEdit = false,
  onAfterSubmit = () => {},
}) => {
  return (
    <div>
      <Formik
        initialValues={{ text: "", type: types[0] }}
        onSubmit={(values, { resetForm }) => {
          {
            isEdit
              ? setActivities({
                  type: values.type,
                  text: values.text,
                })
              : setActivities([
                  {
                    type: values.type,
                    text: values.text,
                    createdAt: new Date(),
                  },
                  ...activities,
                ]);
          }

          resetForm();
          onAfterSubmit();
        }}
      >
        {() => {
          return (
            <Form>
              <div>
                <div>
                  <Field type="text" name="text" />
                </div>
                <div>
                  {types.map((t) => (
                    <div key={t}>
                      <label htmlFor={t}>{t}</label>
                      <Field id={t} type="radio" name="type" value={t} />
                    </div>
                  ))}
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
