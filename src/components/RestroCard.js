import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LogContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestroCard = (props) => {
  const { data } = props;
  const { name, phone, username, website ,id} = data;
  const dispatch=useDispatch()
  const {logedInUser}=useContext(LogContext)
  const addHandler=(data)=>{
    dispatch(addItem(data))
  }
  console.log(id)
  return (
    <Link to={`/restorents/${id}`}>
    <div className="w-[300] bg-gray-200 rounded-lg border-3 m-4 h-[350] flex flex-col items-center justify-between hover:bg-gray-700 hover:text-white p-9">
       
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
      <h1>{logedInUser}</h1>
     <button className="bg-black text-white p-2" onClick={()=>addHandler(data)}>addItem</button>
    </div>
    </Link>
  );
};
export default RestroCard;
