import { Link } from "react-router-dom";
const RestroCard = (props) => {
  const { data } = props;
  const { name, phone, username, website ,id} = data;
  console.log(id)
  return (
    <Link to={`/restorents/${id}`}>
    <div className="res-card">
       
      <div
        style={{
          minHeight: "90px",
          width: "100px",
          backgroundColor: "red",
          borderRadius: "60%",
        }}
      ></div>
      <h1>{name}</h1>
      <h1>{username}</h1>
      <h3>{phone}</h3>
      <h1>{website}</h1>
     
    </div>
    </Link>
  );
};
export default RestroCard;
