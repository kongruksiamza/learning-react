import Header from "./components/Header";
import PersonList from "./components/PersonList";
import AddForm from "./components/AddForm";
import { useState ,useEffect } from "react";
import "./App.css";
function App() {

  const [data, setData] = useState([
    { id: 1, name: "ก้อง", gender: "ชาย" },
    { id: 2, name: "น้ำ", gender: "หญิง" },
    { id: 3, name: "โจ้", gender: "ชาย" },
    { id: 4, name: "พลอย", gender: "หญิง" },
  ]);

  const [theme,setTheme] = useState(localStorage.getItem("mode") || "light")

  function deleteUser(id){//3
      const result = data.filter((user)=>user.id!==id) //array ใหม่
      setData(result)
  }

  useEffect(()=>{
    localStorage.setItem("mode",theme)
  },[theme])

  return (
    <div className={theme}>
    <div className="App">
      <Header title="My Application" theme={theme} setTheme={setTheme}/>
      <main>
        <AddForm data={data} setData={setData}/>
        <PersonList data={data} deleteUser={deleteUser}/>
      </main>
    </div>
    </div>
  );
}

export default App;
