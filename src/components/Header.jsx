import { useState } from "react"


export default function Header(){

    const [menu,setMenu] = useState("hidden")

    return(<>
        <nav onClick={()=>{
         setMenu((menu)=>{
            if(menu=="flex"){
                return "hidden"
            } else{return "flex"}
         })
        }} className="w-full opacity-85  md:hidden h-10 fixed top-0 text-center bg-gray-900"><p className="p-1 hover:bg-gray-700 rounded-xl px-5">Menu</p></nav>
        <nav onClick={()=>{
         setMenu((menu)=>{
            if(menu=="flex"){
                return "hidden"
            } else{return "flex"}
         })
        }} class={`${menu}  opacity-85 w-3/5 md:flex border border-white top-8 md:top-0 fixed transition-all duration-300 bg-gray-900 m-2 md:rounded-full px-10 flex-col md:flex-row gap-10 items-center justify-center`}>
     
    <a class="p-3 hover:bg-gray-700 rounded-xl px-5" href="#top">Inicio</a>
    <a class="p-3 hover:bg-gray-700 rounded-xl" href="#sobre-mi">Sobre mi</a>
    <a class="p-3 hover:bg-gray-700 rounded-xl" href="#proyectos">Proyectos</a>
    <a class="p-3 hover:bg-gray-700 rounded-xl" href="#contacto">Contacto</a>

</nav></>
    )
}

