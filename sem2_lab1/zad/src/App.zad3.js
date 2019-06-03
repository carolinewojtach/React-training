import React from "react";
import { Form, Field } from "react-final-form";

const MyInput = ({ input, meta }) => (
  <div>
    {/*<pre>{JSON.stringify(meta, null, 2)}</pre>*/}
    <input type="text" {...input} />
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

const required = value => (value ? null : "Pole wymagane");

class AppZad3 extends React.Component {
  onSubmit = values => {
    console.log("handleSubmit", values);
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="imie" component={MyInput} validate={required} />
              <Field name="nazwisko" component={MyInput} validate={required} />
              <input type="submit" value="Wyslij" />
            </form>
          )}
        />
      </div>
    );
  }
}

export default AppZad3;
