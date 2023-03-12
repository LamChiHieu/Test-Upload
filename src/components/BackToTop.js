import React from "react";
import { useEffect, useState } from "react";

function BackToTop() {
    const [BackToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 300) {
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

   return (<div>
        {BackToTop && (<button className="btn-top" onClick={scrollUp}>^</button>)}
   </div>)
}

export default BackToTop;