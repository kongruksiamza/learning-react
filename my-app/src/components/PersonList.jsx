import { useState } from "react";
import "./PersonList.css";
import User from "./User";
import { FaRegEye } from "react-icons/fa";//เปิดตา
import { FaRegEyeSlash } from "react-icons/fa";//ปิดตา

function PersonList({data,deleteUser}) {
  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <div className="header">
        <h2 style={{color:"red",fontSize:"25px"}}>จำนวนประชากร {data.length} คน</h2>
        <span onClick={() => setShow(!show)}>
            {show ? <FaRegEyeSlash size={30}/> : <FaRegEye size={30}/>}
        </span>
      </div>
      <ul>
        {show &&
          data.map((item) => (
              <User key={item.id} item={item} deleteUser={deleteUser}/>
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
