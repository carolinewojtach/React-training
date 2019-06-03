import React, { useEffect } from "react";

const AppZad5 = ({ user, isLoading, isError, fetchRandomUser }) => {
  useEffect(() => {
    fetchRandomUser();
  }, []);

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
      <button onClick={fetchRandomUser}>reset</button>
    </div>
  );
};

export default AppZad5;
