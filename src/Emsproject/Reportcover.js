import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ProjectCover = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Community_Service_Project_Report",
  });

  const styles = {
    page: {
      width: "21cm",
      height: "29.7cm",
      padding: "2cm",
      backgroundImage: "url('')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      boxSizing: "border-box",
      fontFamily: "'Times New Roman', serif",
    },
    content: {
      backgroundColor: "rgba(255, 255, 255, 0.92)",
      padding: "2rem",
      width: "100%",
      height: "100%",
      textAlign: "center",
      boxShadow: "0 0 20px rgba(0,0,0,0.2)",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    heading1: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#B22222",
      textShadow: "2px 2px #ffcccc",
    },
    heading2: {
      fontSize: "22px",
      color: "navy",
      fontWeight: "bold",
      textShadow: "1px 1px #d0e1ff",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      background: "linear-gradient(to right, #28a745, #007bff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      margin: "30px 0 20px",
    },
    info: {
      fontSize: "18px",
      margin: "10px 0",
      color: "#333",
    },
    label: {
      color: "navy",
      fontWeight: "bold",
    },
    course: {
      fontSize: "20px",
      color: "darkred",
      fontWeight: "bold",
      marginTop: "20px",
    },
    year: {
      fontSize: "20px",
      color: "green",
      fontWeight: "bold",
    },
    mentorLabel: {
      fontSize: "16px",
      color: "navy",
      marginTop: "20px",
    },
    mentorName: {
      fontSize: "18px",
      color: "#800000",
      fontWeight: "bold",
    },
    footer: {
      fontSize: "14px",
      color: "navy",
      marginTop: "30px",
    },
    button: {
      marginTop: "30px",
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div ref={componentRef} style={styles.page}>
          <div style={styles.content}>
            <div style={styles.heading1}>GOVERNMENT DEGREE COLLEGE</div>
            <div style={styles.heading2}>VIZIANAGARAM TOWN</div>

            <div style={styles.title}>Community Service Project Report</div>

            <div style={styles.info}>
              <span style={styles.label}>Name:</span> PUVVALA LAKSHMANA RAO
            </div>
            <div style={styles.info}>
              <span style={styles.label}>Hall Ticket No:</span> 122117501010
            </div>

            <div style={styles.course}>II B.A (HEC)</div>
            <div style={styles.year}>2022–2023</div>

            <div style={styles.mentorLabel}>Report Submitted to:</div>
            <div style={styles.mentorName}>Mentor Name: Durga Devi</div>

            <div style={styles.footer}>
              Government Degree College, Vizianagaram
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button style={styles.button} onClick={handlePrint}>
          📥 Download as PDF
        </button>
      </div>
    </>
  );
};

export default ProjectCover;
