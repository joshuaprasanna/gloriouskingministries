import { Card, Col, Row } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";

const Jbody = () => {
  const images = [
    { url: "https://jnbnivas.apcfss.in/img/789.jpeg" },
    { url: "https://jnanabhumi.ap.gov.in/img/slide12.jpg" },
    {
      url: "https://jnanabhumi.ap.gov.in/img/denied1.png",
    },
    { url: "https://jnanabhumi.ap.gov.in/img_2_0/corporate.png" },
  ];

  return (
    // <div
    //   style={{
    //     backgroundColor: "white",
    //     marginTop: "-70px",
    //     //border: "1px solid black",
    //   }}
    // >
    //   {" "}
    //   <Row>
    //     <Col colspan="2">
    //       <SimpleImageSlider
    //         width={1500}
    //         height={500}
    //         images={images}
    //         showBullets={true}
    //         showNavs={true}
    //       />
    //     </Col>
    //   </Row>
    // </div>
    //here we write another ...............
    <div
      style={{
        backgroundColor: "white",
        marginTop: "-70px",
        padding: "1px",
        //border: "1px solid black",
      }}
    >
      <table
        class="table table-bordered"
        style={{
          padding: "1px",
          //border: "1px solid black",
        }}
      >
        <td>
          {" "}
          <SimpleImageSlider
            width={1500}
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </td>
        <div
          class="p-3 mb-2 bg-info text-white"
          style={{
            border: "1px solid black",
            width: "500px",
            height: "1000px",
          }}
        >
          <div
            style={{
              backgroundColor: "text-light bg-dark",
            }}
          >
            <Card
              style={{
                border: "1px solid black",
                width: "500px",
                height: "500px",
              }}
            ></Card>
            <Card
              style={{
                border: "1px solid black",
                width: "500px",
                height: "500px",
              }}
            ></Card>
          </div>
        </div>
      </table>
    </div>
  );
};
export default Jbody;
