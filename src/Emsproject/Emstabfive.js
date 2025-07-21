
import contactImg from "./contactImg.avif"
export function Emstabfive()
{

    return(

        <>
       (
    <div style={{
      padding: '30px',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}><b></b></h2>

      {/* Layout with image and details */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {/* Image */}
        <div style={{ flex: '1 1 300px' }}>
          <img
            src={contactImg}
            alt="Contact"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>

        {/* Info */}
        <div style={{ flex: '1 1 300px', padding: '10px' }}>
          <p><strong>Address:</strong><br />#4-55,Krishnapuram<br />Boddavalsa Panchayath,Denkada Mandal,<br/>Vizianagaram-535 005,<br/>Andra Pradesh.</p>
          <p><strong>Email:</strong><br /><a href="mailto:info@example.com">jeevanjyothip@yahoo.com</a></p>
          <p><strong>Phone:</strong><br />(+91) 7989298148,<br/>(+91) 9848303750.</p>
          <p><strong>Hours:</strong><br />Mon - Fri, 9am - 6pm</p>
        </div>
      </div>

      {/* Google Map */}
      <div style={{ width: '100%', height: '400px' }}>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8502178225696!2d-74.0060153!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMzLCsDQyJzQ2LjAiTiA3NMKwMDAnMjQuOCJX!5e0!3m2!1sen!2sus!4v1612984477668!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
        </>
    )
}