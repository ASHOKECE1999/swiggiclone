// ErrorPage.jsx
import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error)
  console.error(error,"hehehehe");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Oops!</h1>
      <p>Something went wrong or the page you're looking for doesn't exist.</p>
      
    </div>
  );
}
