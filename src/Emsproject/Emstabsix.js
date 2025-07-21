
import founder2 from "./founder2.png";
import { motion } from 'framer-motion';

export function Emstabsix()
{

    return(

        <>
       <div style={{
      background: 'linear-gradient(to bottom right, #1e3c72, #2a5298)',
      padding: '50px 20px',
      borderRadius: '30px',
      boxShadow: '0 15px 60px rgba(0,0,0,0.4)',
      maxWidth: '1100px',
      margin: '40px auto',
      fontFamily: '"Poppins", sans-serif',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating glowing shapes */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent)',
        filter: 'blur(50px)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        right: '-50px',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle at center, rgba(255, 153, 102, 0.3), transparent)',
        filter: 'blur(40px)',
        zIndex: 0
      }} />

      <div style={{ textAlign: 'center', marginBottom: '30px', zIndex: 2, position: 'relative' }}>
        <motion.img
          src={founder2}
          alt="Rev. Dr. P. Jeevan Jyothi"
          style={{
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '6px solid #fff',
            boxShadow: '0 0 35px rgba(255,255,255,0.6)',
            marginBottom: '20px'
          }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.h1
          style={{
            fontSize: '3rem',
            color: '#ffee58',
            textShadow: '0 0 20px rgba(255,255,255,0.4)'
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Rev. Dr. P. Jeevan Jyothi
        </motion.h1>
        <h3 style={{ color: '#80deea', fontWeight: 500 }}>
          Founding Trustee/Chairman
        </h3>
      </div>

      <div style={{
        background: '#ffffff11',
        padding: '30px',
        borderRadius: '20px',
        lineHeight: '1.8',
        fontSize: '1.15rem',
        textAlign: 'justify',
        boxShadow: 'inset 0 0 15px rgba(255,255,255,0.05)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(255,255,255,0.2)',
        zIndex: 2,
        position: 'relative'
      }}>
        <p>
          <strong style={{ color: '#ffc107' }}>Rev. Dr. P. Jeevan Jyothi</strong> is the Senior Pastor of <strong style={{ color: '#03a9f4' }}>LifeGate Church</strong> and Founder of <strong style={{ color: '#ff7043' }}>New Foundation Trust</strong>, established in September 2020.
        </p>
        <p>
          With over <strong style={{ background: '#fff3e0', color: '#3e2723', padding: '2px 6px', borderRadius: '6px' }}>36 years</strong> of full-time ministry, he has preached with revival fire and Spirit-led power. His ministry is rooted in intimacy with the Holy Spirit, leading thousands to salvation, healing, deliverance, and Kingdom transformation.
        </p>
        <p>
          He now carries a global mandate: to restore apostolic glory, revive biblical truth, and ignite the Church with the <span style={{ color: '#ff1744', fontWeight: 'bold' }}>fire of God’s testimony</span>.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px', zIndex: 2, position: 'relative' }}>
        <p style={{
          fontSize: '1.2rem',
          background: 'linear-gradient(to right, #ff8a65, #f4511e)',
          color: '#fff',
          padding: '12px 30px',
          borderRadius: '30px',
          display: 'inline-block',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}>
          🔥 Revival • Restoration • Fire • Glory 🔥
        </p>
      </div>
    </div>
        </>
    )
}