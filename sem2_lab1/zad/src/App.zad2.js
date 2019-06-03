import React from "react";

class AppZad2 extends React.Component {
  state = {
    imie: "",
    nazwisko: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const { imie, nazwisko } = this.state;

    console.log("onSubmit", {
      imie,
      nazwisko
    });
  };

  render() {
    const { imie, nazwisko } = this.state;

    return (
      <div>
        <h1>Hello</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="imie"
            value={imie}
            onChange={this.handleInput("imie")}
          />
          <input
            type="text"
            placeholder="nazwisko"
            onChange={this.handleInput("nazwisko")}
            value={nazwisko}
          />
          <input type="submit" value="Wyslij" />
        </form>
      </div>
    );
  }
}

export default AppZad2;
