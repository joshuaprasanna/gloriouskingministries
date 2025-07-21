import logo from "./Nft.jpg";
import logo1 from "./fonder1.png";
import logo2 from "./logo2.webp";
import img1 from "./img1.jpeg"
import img2 from "./img2.jpeg"
import good from "./good.webp"


import { Emstabs } from "./Emstabs";
import SimpleImageSlider from "react-simple-image-slider";


export function Emstabone()
{


    const images = [
      
       
      
        { url:img1},
        { url:img2},
         { url:good}
      ];


    return(

        <>
   <div>
       <marquee
  direction="left"
  scrollamount="7"
  style={{
    background: "linear-gradient(90deg, #ffecd2, #fcb69f, #a1c4fd, #c2e9fb)", // rainbowish gradient
    padding: "18px 0",
    borderTop: "3px solid #fff",
    borderBottom: "3px solid #fff",
    boxShadow: "0 0 20px rgba(0,0,0,0.3) inset",
    height:"70px"
  }}
>
  <b
    style={{
      fontFamily: "'Trebuchet MS', sans-serif",
      fontSize: "1.5rem",
      display: "inline-flex",
      alignItems: "center",
      color: "#fff",
      background: "linear-gradient(to right, #ff6a00, #ee0979, #00c9ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
      letterSpacing: "1.5px",
      animation: "glow 2s ease-in-out infinite alternate",
    }}
  >
    <img
      src={logo2}
      alt="Logo"
      style={{
        height: "30px",
        marginRight: "20px",
        filter: "drop-shadow(2px 2px 5px #000000aa)",
      }}
    />
    BUILDING BETTER LIVES. JOIN HANDS WITH US TO SPEED UP THE FULFILLMENT OF THE GREAT COMMISSION.
  </b>
</marquee>

                   <SimpleImageSlider
                                width={1360}
                                height={400}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                                autoPlay={true}
                                autoPlayDelay={3.0} 
                                slideDuration={0.5} 
                              /></div>
        </>
    )
}