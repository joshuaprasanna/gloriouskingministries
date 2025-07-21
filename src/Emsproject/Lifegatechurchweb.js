import React from "react";
import { Row } from "react-bootstrap";
import logo from "./Nft.jpg";
import logo1 from "./founder2.png";
import { Emstabs } from "./Emstabs";

export function Lifegatechurchweb() {
  return (
    <>
      <Row>
        <div
          style={{
            background: "linear-gradient(135deg, rgb(219, 214, 228), rgb(37, 15, 136))",
            padding: "30px 20px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            margin: "30px 0",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "200px",
          }}
        >
          {/* Left Logo */}
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "120px",
              width: "auto",
              marginLeft: "20px",
            }}
          />

          {/* Title and Slogan Centered */}
        <div
  style={{
    textAlign: "center",
    flexGrow: 1,
    marginLeft: "-100px", // centers between logos
  }}
>
  <h1
    style={{
      fontFamily: "'Playfair Display', serif",
      color: "white",
      fontSize: "3.5rem",
      textShadow: "2px 2px 6px rgba(0,0,0,0.4)",
      margin: "0",
      lineHeight: "1.1", // makes title and subtitle tighter vertically
    }}
  >
    New Foundation Trust
  </h1>

  <p
    style={{
      fontSize: "1.3rem",
      color: "#ffe",
      fontFamily: "'Open Sans', sans-serif",
      fontStyle: "italic",
      textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
      letterSpacing: "1px",
      marginLeft: "260px", // No spacing at all
      lineHeight: "1",
    }}
  >
    ...Building Better Lives
  </p>
</div>


          {/* Right Logo and Name */}
          <div
            style={{
              marginRight: "20px",
              textAlign: "center",
            }}
          >
            <img
              src={logo1}
              alt="Founder"
              style={{
                height: "130px",
                width: "auto",
              }}
            />
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
                color: "#fff",
                marginTop: "5px",
                textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
              }}
            >
              Dr. Jeevan Jyothi
            </div>
          </div>
        </div>
      </Row>

      {/* Tabs Section */}
      <Emstabs />
    </>
  );
}
