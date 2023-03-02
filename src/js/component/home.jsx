import React, {useState, useEffect} from "react";

//create your first component
const Home = () => {

	const [color, setColor] = useState({
    rojo:"",
    ambar: "",
    verde:""
	});

  useEffect(()=>{
    setColor({rojo:"brillo"}) 
  },[])


  return <div className="container">
      <div class={"rojo " + color.rojo } onClick ={() => setColor({
        rojo:"brillo",
        ambar: "",
        verde:""

      })} > 
      </div>
      <div  class={"ambar " + color.ambar} onClick ={() => setColor({
        rojo:"",
        ambar: "brillo",
        verde:""
      })}  >
      </div>
	  <div class={"verde " + color.verde}onClick ={() => setColor({
        rojo:"",
        ambar: "",
        verde:"brillo"
      })} >
      </div>
    </div>

  
};

export default Home;
