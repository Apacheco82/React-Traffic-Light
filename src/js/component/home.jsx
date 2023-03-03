import React, {useState, useEffect} from "react";

//create your first component
const Home = () => {
  const [color, setColor] = useState({
    purpura: "",
    rojo: "",
    ambar: "",
    verde: "",
  });

  useEffect(() => {
    setColor({rojo: "brillo"});
  }, []);

  return (
  <>  <div className="container">


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

</>
      

  );
};

export default Home;
