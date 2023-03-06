import React, {useState, useEffect} from "react";

const initialState = { //objeto para los distintos colores, empieza en vacío
  purpura: "",
  rojo: "",
  ambar: "",
  verde: "",
}

const Home = () => {
  const [color, setColor] = useState({initialState}); //color, set del color = objeto que hemos creado con los colores

  useEffect(() => { //se usa para setear el color a brillo-rojo al cargar la web, por eso se usa el [] después de la función
    setColor({rojo: "brillo-rojo"});
  }, []); // lo hace solo una vez

const [visible, setVisible] = useState(false); //visible, cambiar de visible a no visible = empezamos en false para que no se vea


  return (
  <>  <div className="container">

{visible && <div className={"purpura " + color.purpura}  onClick={() => //empieza en false 
      setColor({
        purpura: "brillo-purpura" //le añade el brillo purpura al pulsar
      })
    }></div>}
     
  <div
    className={"rojo " + color.rojo} //le añade el color a la clase, lo demás queda vacío
    onClick={() => //cuando se pulsa el div
      setColor({ //le añade el brillo
        rojo: "brillo-rojo" 
      })
    }
  ></div>
  <div
    className={"ambar " + color.ambar}
    onClick={() =>
      setColor({
        ambar: "brillo-ambar"  
      })
    }
  ></div>
  <div
    className={"verde " + color.verde}
    onClick={() =>
      setColor({
        verde: "brillo-verde"
      })
    }
  ></div>
</div>

<button onClick={() =>{ 
 
if (!visible) // si no está visible el purpura
{ color.verde === "brillo-verde"  //si está en verde
 ?  setColor({
   ambar: "brillo-ambar"  , //cambia a ambar y vacía el verde
   verde: ""
 })
 : color.ambar === "brillo-ambar" //si está en ambar
 ? setColor({
   rojo: "brillo-rojo"  , //cambia a rojo y vacía el ambar
   ambar: ""
 })
 : setColor({
   verde: "brillo-verde"  , //si no, cambia a verde y vacía el rojo
   rojo: ""
 })}
else //si está visible el purpura 

{ color.verde === "brillo-verde"  //si está en verde

 ?  setColor({
   ambar: "brillo-ambar"  , //cambia a ambar y vacía el verde
   verde: ""
 })
 : color.ambar === "brillo-ambar" //si está en ambar
 ? setColor({
   rojo: "brillo-rojo"  , //cambia a rojo y vacía el ambar
   ambar: ""
 })
 :color.purpura === "brillo-purpura" //si está en purpura
 ?setColor({
  verde: "brillo-verde"  , //cambia al verde y vacía el purpura
  purpura: ""
})
 : setColor({ //si no, cambia al purpura y vacía el rojo
   purpura: "brillo-purpura"  , 
   rojo: ""
 }) }


}}> Change the light</button>

<button onClick={() => { //al pulsar cambia el estado de visible a true y cambia el texto del boton
        setVisible(!visible);
      }}>
        {visible ? 'Hide new color' : 'Show new color'}  
      </button> 
</>
      

  );
};

export default Home;
