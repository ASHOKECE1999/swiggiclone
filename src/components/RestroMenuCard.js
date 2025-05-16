import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import ErrorPage from "./ErrorPage";
const RestroMenuCard = () => {
  //   const [userData, userDataSetter] = useState(null);
  const { id } = useParams();
  console.log(id, "ashok");

  const userData = useFetchData(id);

  if (userData === null) return <ErrorPage />;

  return (
    <div>
      <h1>{userData.name}</h1>
      <h1>{userData.phone}</h1>
      <h1>{userData.username}</h1>
      <h1>ProfileInfo</h1>
      <div>
        {userData.address?.city}
        {userData.address?.street}
        {userData.address?.suite}
        {userData.address?.zipcode}
      </div>
      <Link to="/">GoToHomePage</Link>
    </div>
  );
};

export default RestroMenuCard;
