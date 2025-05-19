import "./Header.css";
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = ({title,theme,setTheme}) => {

  function toggleTheme(){
      if(theme==="light"){
        setTheme("dark")
      }else{
        setTheme("light")
      }
  }

  return (
    <nav>
      <h1>{title}</h1>
      <span onClick={toggleTheme}>
            {theme==="light" ? <MdSunny size={30}/> : <BsFillMoonStarsFill size={30}/>}
      </span>
    </nav>
  );
};

export default Header;
