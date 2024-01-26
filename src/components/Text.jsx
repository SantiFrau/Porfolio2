
import { useEffect } from "react"


export default function ColoredText() {
    useEffect(() => {
      const p = document.getElementById("p");
      if (p) {
        const words = p.innerText.split(" ");
        const coloredWords = words.map((word) => {
          const randomColorClass = getRandomColorClass();
          return `<span class="${randomColorClass}">${word}</span>`;
        });
        p.innerHTML = coloredWords.join(" ");
      }
    }, []);
  
    const getRandomColorClass = () => {
      
      const colorClasses = ["text-violeta-op-200","text-azul-op-200", "text-gris-op-200", "text-verde-op-200","text-naranja-op-200","text-rojo-op-200"];
      const randomIndex = Math.floor(Math.random() * colorClasses.length);
      return colorClasses[randomIndex];
    };
  
    return (
      <p id="p" className="font-mono p-3 mx-5">
        ¡Hola! Soy Santiago Frau, un apasionado desarrollador web front-end de Argentina.
        Obtuve experiencia en diversos proyectos personales.Empece en la programacion de forma autodidacta y
        mi fascinación por la tecnología me impulsa a mantenerme constantemente actualizado con las últimas tendencias y herramientas en
        el mundo del desarrollo web.
        Considero que cada proyecto es una oportunidad para explorar nuevas tecnologías y técnicas,
        llevando mis habilidades al siguiente y comprometido con la excelencia y la mejora constante.
      </p>
    );
  }
  





