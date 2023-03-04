import React, {useState, useEffect} from "react";

//create your first component
const Home = () => {
  const [color, setColor] = useState({
    purpura: "",
    rojo: "",
    ambar: "",
    verde: "",
  });
const [visible, setVisible] = useState(false);

  useEffect(() => {
    setColor({rojo: "brillo"});
  }, []);

  return (
  <>  <div className="container">

{visible && <div id="purple" className={"purpura " + color.purpura}  onClick={() =>
      setColor({
        purpura: "brillo-purpura",
        rojo: "",
        ambar: "",
        verde: "",
      })
    }></div>}
     
  <div
    className={"rojo " + color.rojo}
    onClick={() =>
      setColor({
        purpura: "",
        rojo: "brillo-rojo",
        ambar: "",
        verde: "",
      })
    }
  ></div>
  <div
    className={"ambar " + color.ambar}
    onClick={() =>
      setColor({
        purpura: "",
        rojo: "",
        ambar: "brillo-ambar",
        verde: "",
      })
    }
  ></div>
  <div
    className={"verde " + color.verde}
    onClick={() =>
      setColor({
        purpura: "",
        rojo: "",
        ambar: "",
        verde: "brillo-verde",
      })
    }
  ></div>
</div>
<button onClick={() => {
        setVisible(!visible);
        setClassName(visible ? 'hidden' : 'purple');
      }}>
        {visible ? 'Hide new color' : 'Show new color'}
      </button>
</>
      

  );
};

export default Home;
