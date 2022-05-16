import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import '../css/AboutUs.css'
import Footer from '../components/footer/Footer'
import { TailSpin } from 'react-loader-spinner'

function AboutUs() {
  const [loading, setLoading] = useState(true)

  document.title = 'Om oss | KvammaLAN'
  return (
    <Container style={loading === false ? {} : { overflow: 'hidden', position: 'fixed' }} fluid className="d-flex flex-column m-0 p-0 aboutus">
        {loading === true ?
          <Container className="d-flex flex-column p-0 m-0 home text-light" fluid style={loading === true ? { alignItems: 'center', justifyContent: 'center', height: '100vh', overflow: 'hidden' }: {}}>
              <TailSpin
                color="#00BFFF"
                height={100}
                width={100}
            />    
            <span>Lastar inn...</span>
          </Container>
          : null}
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid onLoad={() => setLoading(false)} style={loading ? { overflow: 'hidden' }: {}} className="d-flex flex-column mb-5">
            <h2 className="fw-bolder text-light display-5 align-self-center mt-5">OM OSS</h2>
            <h2 style={{ marginLeft: '2.5%' }} className="text-light fw-bold mt-3">Kven arrangerer KvammaLAN?</h2>
            <p style={{ fontSize: '1.1rem', marginLeft: '5%', width: '85%' }} className="text-light mt-3">
                KvammaLAN vert arrangert av Kvam E-sport. Kvam E-sport er ein lokal e-sportklubb som held til
                i Øystese. Klubben har som formål å driva eit fritidstilbod for spelinteresserte ungdomar i Kvam.
                Tidlegare har Ung Fritid i Kvam arrangert LAN for ungdomane i kommunen, men sidan oppstarten av Kvam E-sport
                hausten 2021 har klubben teke over denne tradisjonen med å arrangera LAN for ungdomane i kvar skuleferie.
                KvammaLAN vert arrangert på friviljugheit og alle som stiller opp som vaktar og arrangørar på desse arrangementa
                gjer dette på dugnad og brenn for at ungdomane skal ha noko kjekt å sjå fram til!
            </p>
            <img
                src={require('../img/logo.png')}
                alt=''
                style={{ alignSelf: 'center', width: '40%', height: 'auto', objectFit: 'contain' }}
                className="mt-5"
            />
        </Container>
        <Footer />
    </Container>
  )
}

export default AboutUs