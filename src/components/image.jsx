 import { useState , useEffect } from "react"; 

export default function Image ({id}){

  const [src, setSrc] = useState(1);

  const handleClick = () => {
    setSrc((prevSrc) => (prevSrc === 2 ? 1 : 2));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSrc((prevSrc) => (prevSrc === 2 ? 1 : 2));
    }, 3000);

    return () => {
      // Limpiar el intervalo al desmontar el componente
      clearInterval(interval);
    };
  }, []);

  
    //se creamos un componente react se vuelve a cargar las clases y la nimacion se resetea y se ejecuta
    //cada vez que cambia la src si estuviera dentro del componente prinsipal no lo hace solo cambia la src
    return(
     <div className="flex justify-center w-full  rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
          <img onClick={handleClick} className="animation-1 rounded-lg w-96" src={`/public/media/${id}/${src}.png`} alt="" />
        </div>
    )
  }