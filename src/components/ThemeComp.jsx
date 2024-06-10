"use client"
import React,{ useState,useEffect } from "react";
import { MdOutlineDarkMode,MdOutlineLightMode} from "react-icons/md";
import { useTheme } from "next-themes";
const ThemeComp = () => {
    const [mounted,setMounted]=useState(false)
    const {systemTheme,theme,setTheme}=useTheme();

    //Sayfa acildiktan sonra sayfayi setlemek icin useEffect gerekli;

    useEffect(()=>{
        setMounted(true)
    },[])

    //themeMod ile dark mode ile light mode kontrolu

    const themeMode = theme === 'system' ? systemTheme : theme
    /*enableSystem={true}: Bu özellik, sistem temasını etkinleştirmeyi sağlar. Yani, kullanıcılarının işletim sistemi temasına uygun bir tema seçmelerine olanak tanır.
    attribute='class': Tema modunu değiştirmek için kullanılacak HTML özniteliğini belirtir. Bu durumda, class özniteliği kullanılacak demektir. Örneğin, temaya göre <body> etiketinin sınıfını değiştirir.
    */
  
    return (
        <div>
              {
            mounted && (
                themeMode === "dark" ?
                <MdOutlineDarkMode onClick={()=>setTheme("light")} className='cursor-pointer' size={24}/>:
                <MdOutlineLightMode onClick={()=>setTheme("dark")} className='cursor-pointer' size={24}/>
            )

              }
        </div>
    )   
}

export default ThemeComp;
