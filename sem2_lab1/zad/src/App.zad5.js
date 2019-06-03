import React from "react";

class AppZad5 extends React.Component {
  state = {
    user: null,
    isLoading: true,
    isError: false
  };

  async componentDidMount() {
    this.fetchRandomUser();
  }

  async fetchRandomUser() {
    try {
      this.setState({
        isLoading: true
      });

      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      const [user] = data.results;

      this.setState({
        user,
        isLoading: false
      });
    } catch (e) {
      this.setState({
        isError: true,
        isLoading: false
      });
    }
  }

  handleReset = () => {
    this.fetchRandomUser();
  };

  render() {
    const { user, isLoading, isError } = this.state;

    if (isError) {
      return <h2>Error while loading... </h2>;
    }

    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div>
        <img src={user.picture.medium} />
        <p>
          Name: {user.name.first} {user.name.last}
        </p>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

export default AppZad5;
