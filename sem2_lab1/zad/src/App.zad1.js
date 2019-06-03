import React from "react";

class AppZad1 extends React.Component {
  imieRef = React.createRef();
  nazwiskoRef = React.createRef();

  onSubmit = e => {
    e.preventDefault();
    const imie = this.imieRef.current.value;
    const nazwisko = this.nazwiskoRef.current.value;

    console.log("onSubmit", {
      imie,
      nazwisko
    });
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="imie" ref={this.imieRef} />
          <input type="text" placeholder="nazwisko" ref={this.nazwiskoRef} />
          <input type="submit" value="Wyslij" />
        </form>
      </div>
    );
  }
}

export default AppZad1;
