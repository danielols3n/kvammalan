import React, { useState } from 'react'
import { Container, Form, Row, Col, Button, Modal } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar' 
import Footer from '../components/footer/Footer'
import '../css/CheckoutInfo.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { db } from '../Firebase'
import { collection, addDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment/moment'
import axios from 'axios'

function CheckoutInfo() {
  document.title = 'Checkout | KvammaLAN'

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('')
  const [selectedGames, setSelectedGames] = useState([])

  const [parent1_name, setParent1Name] = useState('')
  const [parent1_email, setParent1Email] = useState('')
  const [parent1_phone, setParent1Phone] = useState('')
  const [parent2_name, setParent2Name] = useState('')
  const [parent2_email, setParent2Email] = useState('')
  const [parent2_phone, setParent2Phone] = useState('')

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [validate, setValidate] = useState(false)

  const [fortnite, setFortnite] = useState('')
  const [csgo, setCsgo] = useState('')
  const [valorant, setValorant] = useState('')
  const [fh5, setFh5] = useState('')
  const [mc, setMc] = useState('')
  const [rl, setRl] = useState('')
  const [lol, setLol] = useState('')

  const [modal, setModal] = useState(false)

  const submit = (event) => {
    event.preventDefault()

    if (name === '' && name !== parent1_name || phone === '' && phone !== parent1_phone || email === ''  || address === '' || zipcode === '' || city === '' || country === '' || birthdate === '' || (parent1_email === '' && moment().diff(new Date(birthdate), 'years', true) < 18) || (parent1_name === '' && moment().diff(new Date(birthdate), 'years', true) < 18) || (parent1_phone === '' && moment().diff(new Date(birthdate), 'years', true) < 18) || birthdate === ' ' || gender === '') {
      setValidate(true)
      window.scrollTo(0, 0)
      console.log(validate)
    } else {
      if (searchParams.get('ticketId') === 'Medlem') {
        axios.post('https://kvam-e-sport-or-api.olsendaniel04.repl.co/member-check',{
          memberName: name,
        }).then((res) => {
          if (res.data.memberStatus === true) {
            setValidate(false)
            const id = uuidv4()

            const colRef = collection(db, 'events', 'kvammalan2023', 'registrations')

            addDoc(colRef, {
              name: name, 
              phone: phone, 
              email: email,
              address: address,
              zipcode: zipcode, 
              city: city, 
              country: country,
              birthdate: birthdate, 
              gender: gender, 
              selectedGames: selectedGames,
              fortnite: fortnite, 
              csgo: csgo, 
              valorant: valorant,
              fh5: fh5, 
              mc: mc, 
              rl: rl,
              lol: lol,
              parent1_name: parent1_name, 
              parent1_email: parent1_email,
              parent1_phone: parent1_phone,
              parent2_name: parent2_name, 
              parent2_email: parent2_email, 
              parent2_phone: parent2_phone,
              reservationId: id,
              seatId: searchParams.get('seatId'),
              ticketId: searchParams.get('ticketId')
            }).then(() => {
              navigate(`/kvammalan/checkout/confirmation?ticketId=${searchParams.get('ticketId')}&seatId=${searchParams.get('seatId')}&reservationId=${id}`)
            })
          } else {
            setModal(true)
          }
        }).catch(error => console.error(error))
      } else {
        setValidate(false)
        const id = uuidv4()

        const colRef = collection(db, 'events', 'kvammalan2023', 'registrations')

        addDoc(colRef, {
          name: name, 
          phone: phone, 
          email: email,
          address: address,
          zipcode: zipcode, 
          city: city, 
          country: country,
          birthdate: birthdate, 
          gender: gender, 
          selectedGames: selectedGames,
          fortnite: fortnite, 
          csgo: csgo, 
          valorant: valorant,
          fh5: fh5, 
          mc: mc, 
          rl: rl,
          lol: lol,
          parent1_name: parent1_name, 
          parent1_email: parent1_email,
          parent1_phone: parent1_phone,
          parent2_name: parent2_name, 
          parent2_email: parent2_email, 
          parent2_phone: parent2_phone,
          reservationId: id,
          seatId: searchParams.get('seatId'),
          ticketId: searchParams.get('ticketId')
        }).then(() => {
          navigate(`/kvammalan/checkout/confirmation?ticketId=${searchParams.get('ticketId')}&seatId=${searchParams.get('seatId')}&reservationId=${id}`)
        })
      }
    }

    
  }

  const games = ['Fortnite', 'Counter-Strike: Global Offensive', 'Valorant', 'Forza Horizon 5', 'Minecraft', 'Rocket League', 'League of Legends']

  return (
    <Container fluid className="checkoutinfo d-flex flex-column m-0 p-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column align-items-center p-0 m-0 mb-5">
          <h1 className="fw-bolder text-light text-center mt-3">DELTAKARINFORMASJON</h1>
          {validate === true ? <p className="text-danger fw-bolder mt-3 m-0 my-auto p-0">Ein eller fleire av dei obligatoriske felta er ikkje fylte ut. Fyll ut dei resterande felta og prøv på nytt.</p> : null}
          <Container fluid className="d-flex flex-column align-items-center">
            <Form className="checkout-form mt-5" onSubmit={submit}>
              <Row className="w-100 my-3">
                <Form.Group controlId='formName' className="my-2" as={Col} lg={6}>
                  <Form.FloatingLabel label='NAMN'>
                    <Form.Control placeholder='NAMN' value={name} onChange={(e) => setName(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                  {name === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                </Form.Group>
                <Form.Group controlId='formPhone' className='my-2' as={Col} lg={6}>
                  <Form.FloatingLabel label='TELEFONNUMMER'>
                    <Form.Control placeholder='TELEFONNUMMER' value={phone} onChange={(e) => setPhone(e.target.value)} type='tel' />
                  </Form.FloatingLabel>
                  {phone === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group controlId='formEmail' as={Col} lg={12}>
                  <Form.FloatingLabel label='E-POSTADRESSE'>
                    <Form.Control placeholder='E-POSTADRESSE' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                  </Form.FloatingLabel>
                  {email === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                </Form.Group>
              </Row>
              <Row className="w-100">
                &nbsp;
              </Row>
              <Row className="w-100 my-3 mt-5">
                <Form.Group controlId="formAddress" as={Col} lg={12}>
                  <Form.FloatingLabel label='ADRESSE'>
                    <Form.Control placeholder='ADRESSE' value={address} onChange={(e) => setAddress(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                  {address === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group controlId='formZip' className="my-2" as={Col} lg={3}>
                  <Form.FloatingLabel label='POSTNUMMER'>
                    <Form.Control placeholder='POSTNUMMER' value={zipcode} onChange={(e) => setZipcode(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                  {zipcode === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                </Form.Group>
                <Form.Group controlId='formCity' className="my-2" as={Col} lg={9}>
                  <Form.FloatingLabel label='POSTSTAD'>
                    <Form.Control placeholder='POSTSTAD' value={city} onChange={(e) => setCity(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                  {city === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group controlId='formCountry' as={Col} lg={12}>
                  <Form.FloatingLabel label='LAND'>
                    <Form.Control placeholder='LAND' value={country} onChange={(e) => setCountry(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                  {country === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                </Form.Group>
              </Row>
              <Row className="w-100">
                &nbsp;
              </Row>
              <Row className="w-100 my-3 mt-5">
                <Form.Group controlId='formBirthdate' className="my-2" as={Col} lg={6}>
                  <Form.FloatingLabel label='FØDSELSDATO'>
                    <Form.Control value={birthdate} onChange={(e) => setBirthdate(e.target.value)} type='date' />
                  </Form.FloatingLabel>
                  {birthdate === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                </Form.Group>
                <Form.Group controlId='formGender' className='my-2' as={Col} lg={6}>
                  <Form.Select className="py-3" onChange={(e) => setGender(e.target.value)}>
                    <option value=' '>VEL KJØNN</option>
                    <option value='Mann'>Mann</option>
                    <option value='Kvinne'>Kvinne</option>
                    <option value='Annet'>Annet</option>
                  </Form.Select>
                  {gender === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                </Form.Group>
              </Row>
              <Row className="w-100">
                &nbsp;
              </Row>
              {moment().diff(new Date(birthdate), 'years', true) < 18 ? 
                <>
                  <Row>
                  <h2 className="fw-bolder text-light mt-3">FORESATTE - KONTAKTINFORMASJON</h2>
                </Row>
                <Row className="w-100 my-3 mt-3">
                  <h3 className="fw-bolder text-light mx-4">Foresatt 1</h3>
                  <Form.Group controlId='formName2' className='my-2' as={Col} lg={6}>
                    <Form.FloatingLabel label='NAMN'>
                      <Form.Control placeholder='NAMN' value={parent1_name} onChange={(e) => setParent1Name(e.target.value)} type='text' />
                    </Form.FloatingLabel>
                    {parent1_name === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                    {name === parent1_name ? <p className="text-danger mt-2">Namnet til den foresatte kan ikkje vera det same som deltakaren</p> : null}
                  </Form.Group>
                  <Form.Group controlId='formPhone2' className="my-2" as={Col} lg={6}>
                    <Form.FloatingLabel label='TELEFONNUMMER'>
                      <Form.Control placeholder='TELEFONNUMMER' value={parent1_phone} onChange={(e) => setParent1Phone(e.target.value)} type='tel' />
                    </Form.FloatingLabel>
                    {parent1_phone === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                    {phone === parent1_phone ? <p className="text-danger mt-2">Telefonnummeret til den foresatte kan ikkje vera det same som deltakaren</p> : null}
                  </Form.Group>
                </Row>
                <Row className="w-100 my-3">
                  <Form.Group controlId='formEmail2' as={Col} lg={12}>
                    <Form.FloatingLabel label='E-POSTADRESSE'>
                      <Form.Control placeholder='E-POSTADRESSE' value={parent1_email} onChange={(e) => setParent1Email(e.target.value)} type='email' />
                    </Form.FloatingLabel>
                    {parent1_email === '' && validate === true ? <p className="text-danger mt-2">Dette feltet er ikkje fylt ut.</p> : null}
                    {email === parent1_email ? <p className="text-danger mt-2">E-postadressa til den foresatte kan ikkje vera det same som deltakaren</p> : null}
                  </Form.Group>
                </Row>
                <Row className="w-100 my-3 mt-5">
                  <h3 className="fw-bolder text-light mx-4">Foresatt 2</h3>
                  <Form.Group className="my-2" as={Col} lg={6}>
                    <Form.FloatingLabel label='NAMN'>
                      <Form.Control placeholder='NAMN' value={parent2_name} onChange={(e) => setParent2Name(e.target.value)} type='text' />
                    </Form.FloatingLabel>
                  </Form.Group>
                  <Form.Group className="my-2" as={Col} lg={6}>
                    <Form.FloatingLabel label='TELEFONNUMMER'>
                      <Form.Control placeholder='TELEFONNUMMER' value={parent2_phone} onChange={(e) => setParent2Phone(e.target.value)} type='tel' />
                    </Form.FloatingLabel>
                  </Form.Group>
                </Row>
                <Row className="w-100 my-3">
                  <Form.Group as={Col} lg={12}>
                    <Form.FloatingLabel label='E-POSTADRESSE'>
                      <Form.Control placeholder='E-POSTADRESSE' value={parent2_email} onChange={(e) => setParent2Email(e.target.value)} type='email' />
                    </Form.FloatingLabel>
                  </Form.Group>
                </Row>
                </>
                : null
              }
              <Row className="w-100">
                &nbsp;
              </Row>
              <Row className="w-100 mt-3 d-flex flex-column">
                <h2 className="fw-bolder text-light">SPELINFORMASJON</h2>
                <p className="text-light mt-2">
                  Her kan du velja konkurransane du ynskjer å delta i under LANet. Du kan endra meining seinare.
                </p>
              </Row>
              <Row className="w-100 my-3 mt-5 d-flex flex-column align-items-center">
                <Form.Group as={Col} lg={12}>
                  {games.map((game) => {
                    return(
                      <Form.Check
                        id={`${game}_${Math.random(1,100)}`}
                        label={game}
                        value={game}
                        type='checkbox'
                        className="text-light my-2"
                        onChange={(e) => {
                          if (selectedGames.includes(game)) {
                            setSelectedGames(selectedGames.filter(item => item !== game))
                            console.log(selectedGames)
                          } else {
                            setSelectedGames([...selectedGames, e.target.value])
                          }
                        }}
                      />
                    )
                  })}
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                {selectedGames.includes('Fortnite') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - Fortnite'>
                        <Form.Control placeholder='Brukarnamn - Fortnite' type='text' value={fortnite} onChange={e => setFortnite(e.target.value)} />
                      </Form.FloatingLabel>
                      {selectedGames.includes('Fortnite') && fortnite === '' ? <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback> : null}
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 my-3">
                {selectedGames.includes('Counter-Strike: Global Offensive') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - Counter-Strike: Global Offensive'>
                        <Form.Control placeholder='Brukarnamn - Counter-Strike: Global Offensive' type='text' value={csgo} onChange={e => setCsgo(e.target.value)} />
                      </Form.FloatingLabel>
                      {selectedGames.includes('Counter-Strike: Global Offensive') && csgo === '' ? <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback> : null}
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 my-3">
                {selectedGames.includes('Valorant') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - Valorant'>
                        <Form.Control placeholder='Brukarnamn - Valorant' type='text' value={valorant} onChange={e => setValorant(e.target.value)} />
                      </Form.FloatingLabel>
                      {selectedGames.includes('Valorant') && valorant === '' ? <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback> : null}
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 my-3">
                {selectedGames.includes('Forza Horizon 5') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - Forza Horizon 5'>
                        <Form.Control placeholder='Brukarnamn - Forza Horizon 5' type='text' value={fh5} onChange={e => setFh5(e.target.value)} />
                      </Form.FloatingLabel>
                      {selectedGames.includes('Forza Horizon 5') && fh5 === '' ? <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback> : null}
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 my-3">
                {selectedGames.includes('Minecraft') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - Minecraft'>
                        <Form.Control placeholder='Brukarnamn - Minecraft' type='text' value={mc} onChange={e => setMc(e.target.value)} />
                      </Form.FloatingLabel>
                      {selectedGames.includes('Minecraft') && mc === '' ? <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback> : null}
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 my-3">
                {selectedGames.includes('Rocket League') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - Rocket League'>
                        <Form.Control placeholder='Brukarnamn - Rocket League' type='text' value={rl} onChange={e => setRl(e.target.value)} />
                      </Form.FloatingLabel>
                      {selectedGames.includes('Rocket League') && rl === '' ? <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback> : null}
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 my-3">
                {selectedGames.includes('League of Legends') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - League of Legends'>
                        <Form.Control placeholder='Brukarnamn - League of Legends' type='text' value={lol} onChange={e => setLol(e.target.value)} />
                      </Form.FloatingLabel>
                      {selectedGames.includes('League of Legends') && lol === '' ? <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback> : null}
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 d-flex">
                <Button className="my-2 p-1" variant="secondary" onClick={() => navigate(`/kvammalan/checkout/cancel?reservationId=${searchParams.get('reservationId')}`)}>AVBRYT</Button>
                <Button className="my-2 p-1" variant="primary" type='submit'>GÅ TIL BEKREFTELSE</Button>
              </Row>
            </Form>
          </Container>
        </Container>
        <Modal show={modal} onHide={() => setModal(false)} centered backdrop>
          <Modal.Header closeButton>
            <h2 className="fw-bolder text-center">IKKJE REGISTRERT SOM MEDLEM</h2>
          </Modal.Header>
          <Modal.Body>
            <p className="text-center">
              Du er ikkje registrert som medlem i Kvam E-sport. Dersom du meiner dette er feil, vèr venleg å ta kontakt med 
              Kvam E-sport på e-post <a href="mailto:kvammalan@kvam-esport.no">kvammalan@kvam-esport.no</a>. Dersom du har trykka på 
              medlems-billetten ved ein feil, kan du gå tilbake ved å trykkja på knappen under.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={() => navigate('/kvammalan')}>GÅ TIL FRAMSIDA</Button>
          </Modal.Footer>
        </Modal>
        <Footer />
    </Container>
  )
}

export default CheckoutInfo