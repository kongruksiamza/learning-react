import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

export default function User({item,deleteUser}) {
  return (
    <>
      <li
        style={{
          borderStyle: "solid",
          borderColor: item.gender == "ชาย" ? "green" : "pink",
        }}
      >
        <img src={item.gender == "ชาย" ? boy : girl} width={50} height={50} />
        <p>{item.name}</p>
        <div className="control">
          <button onClick={()=>deleteUser(item.id)}>ลบ</button>
        </div>
      </li>
    </>
  );
}
