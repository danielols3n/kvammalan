import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar' 
import Footer from '../components/footer/Footer'
import '../css/CheckoutInfo.css'
import { useNavigate } from 'react-router-dom'
import { db } from '../Firebase'
import { collection, addDoc } from 'firebase/firestore'

function CheckoutInfo() {
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
  const [validated, setValidated] = useState(false)

  const [fortnite, setFortnite] = useState('')
  const [csgo, setCsgo] = useState('')
  const [valorant, setValorant] = useState('')
  const [fh5, setFh5] = useState('')
  const [mc, setMc] = useState('')
  const [rl, setRl] = useState('')
  const [lol, setLol] = useState('')

  const submit = (event) => {
    const form = event.currentTarget;
    if (form.checkvalidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)

    const colRef = collection(db, 'events', 'kvammalan2023', 'registrations')

    addDoc(colRef, {
      
    })
  }

  const games = ['Fortnite', 'Counter-Strike: Global Offensive', 'Valorant', 'Forza Horizon 5', 'Minecraft', 'Rocket League', 'League of Legends']

  return (
    <Container fluid className="checkoutinfo d-flex flex-column m-0 p-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column align-items-center p-0 m-0 mb-5">
          <h1 className="fw-bolder text-light text-center mt-3">DELTAKARINFORMASJON</h1>
          <Container fluid className="d-flex flex-column align-items-center">
            <Form noValidate validated={validated} className="checkout-form mt-5" onSubmit={submit}>
              <Row className="w-100 my-3">
                <Form.Group controlId='formName' as={Col} lg={6}>
                  <Form.FloatingLabel label='NAMN'>
                    <Form.Control required placeholder='NAMN' value={name} onChange={(e) => setName(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                  <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='formPhone' as={Col} lg={6}>
                  <Form.FloatingLabel label='TELEFONNUMMER'>
                    <Form.Control required placeholder='TELEFONNUMMER' value={phone} onChange={(e) => setPhone(e.target.value)} type='tel' />
                  </Form.FloatingLabel>
                  <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group controlId='formEmail' as={Col} lg={12}>
                  <Form.FloatingLabel label='E-POSTADRESSE'>
                    <Form.Control required placeholder='E-POSTADRESSE' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                  </Form.FloatingLabel>
                  <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="w-100">
                &nbsp;
              </Row>
              <Row className="w-100 my-3 mt-5">
                <Form.Group controlId="formAddress" as={Col} lg={12}>
                  <Form.FloatingLabel label='ADRESSE'>
                    <Form.Control required placeholder='ADRESSE' value={address} onChange={(e) => setAddress(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                  <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group controlId='formZip' as={Col} lg={3}>
                  <Form.FloatingLabel label='POSTNUMMER'>
                    <Form.Control required placeholder='POSTNUMMER' value={zipcode} onChange={(e) => setZipcode(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                  <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='formCity' as={Col} lg={9}>
                  <Form.FloatingLabel label='POSTSTAD'>
                    <Form.Control required placeholder='POSTSTAD' value={city} onChange={(e) => setCity(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                  <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group controlId='formCountry' as={Col} lg={12}>
                  <Form.FloatingLabel label='LAND'>
                    <Form.Control required placeholder='LAND' value={country} onChange={(e) => setCountry(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                  <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="w-100">
                &nbsp;
              </Row>
              <Row className="w-100 my-3 mt-5">
                <Form.Group controlId='formBirthdate' as={Col} lg={6}>
                  <Form.FloatingLabel label='FØDSELSDATO'>
                    <Form.Control required value={birthdate} onChange={(e) => setBirthdate(e.target.value)} type='date' />
                  </Form.FloatingLabel>
                  <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='formGender' as={Col} lg={6}>
                  <Form.Select required className="py-3" onSelect={(e) => setGender(e.target.value)}>
                    <option value=' '>VEL KJØNN</option>
                    <option value='Mann'>Mann</option>
                    <option value='Kvinne'>Kvinne</option>
                    <option value='Annet'>Annet</option>
                  </Form.Select>
                  <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="w-100">
                &nbsp;
              </Row>
              <Row>
                <h2 className="fw-bolder text-light mt-3">FORESATTE - KONTAKTINFORMASJON</h2>
              </Row>
              <Row className="w-100 my-3 mt-3">
                <h3 className="fw-bolder text-light mx-4">Foresatt 1</h3>
                <Form.Group controlId='formName2' as={Col} lg={6}>
                  <Form.FloatingLabel label='NAMN'>
                    <Form.Control required placeholder='NAMN' value={parent1_name} onChange={(e) => setParent1Name(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                  <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='formPhone2' as={Col} lg={6}>
                  <Form.FloatingLabel label='TELEFONNUMMER'>
                    <Form.Control required placeholder='TELEFONNUMMER' value={parent1_phone} onChange={(e) => setParent1Phone(e.target.value)} type='tel' />
                  </Form.FloatingLabel>
                  <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group controlId='formEmail2' as={Col} lg={12}>
                  <Form.FloatingLabel label='E-POSTADRESSE'>
                    <Form.Control required placeholder='E-POSTADRESSE' value={parent1_email} onChange={(e) => setParent1Email(e.target.value)} type='email' />
                  </Form.FloatingLabel>
                  <Form.Control.Feedback type='invalid'>Her er noko feil!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="w-100 my-3 mt-5">
                <h3 className="fw-bolder text-light mx-4">Foresatt 2</h3>
                <Form.Group as={Col} lg={6}>
                  <Form.FloatingLabel label='NAMN'>
                    <Form.Control placeholder='NAMN' value={parent2_name} onChange={(e) => setParent2Name(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} lg={6}>
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
              <Row className="w-100">
                &nbsp;
              </Row>
              <Row className="w-100 mt-3">
                <h2 className="fw-bolder text-light">SPELINFORMASJON</h2>
              </Row>
              <Row className="w-100 my-3 mt-5 d-flex flex-column align-items-center">
                <Form.Group as={Col} lg={12}>
                  {games.map((game) => {
                    return(
                      <Form.Check
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
              <Row className="w-100 my-2">
                {selectedGames.includes('Fortnite') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - Fortnite'>
                        <Form.Control placeholder='Brukarnamn - Fortnite' type='text' value={fortnite} onChange={e => setFortnite(e.target.value)} />
                      </Form.FloatingLabel>
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 my-2">
                {selectedGames.includes('Counter-Strike: Global Offensive') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - Counter-Strike: Global Offensive'>
                        <Form.Control placeholder='Brukarnamn - Counter-Strike: Global Offensive' type='text' value={csgo} onChange={e => setCsgo(e.target.value)} />
                      </Form.FloatingLabel>
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 my-2">
                {selectedGames.includes('Valorant') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - Valorant'>
                        <Form.Control placeholder='Brukarnamn - Valorant' type='text' value={valorant} onChange={e => setValorant(e.target.value)} />
                      </Form.FloatingLabel>
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 my-2">
                {selectedGames.includes('Forza Horizon 5') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - Forza Horizon 5'>
                        <Form.Control placeholder='Brukarnamn - Forza Horizon 5' type='text' value={fh5} onChange={e => setFh5(e.target.value)} />
                      </Form.FloatingLabel>
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 my-2">
                {selectedGames.includes('Minecraft') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - Minecraft'>
                        <Form.Control placeholder='Brukarnamn - Minecraft' type='text' value={mc} onChange={e => setMc(e.target.value)} />
                      </Form.FloatingLabel>
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 my-2">
                {selectedGames.includes('Rocket League') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - Rocket League'>
                        <Form.Control placeholder='Brukarnamn - Rocket League' type='text' value={rl} onChange={e => setRl(e.target.value)} />
                      </Form.FloatingLabel>
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 my-2">
                {selectedGames.includes('League of Legends') ? 
                  <>
                    <Form.Group col={6}>
                      <Form.FloatingLabel label='Brukarnamn - League of Legends'>
                        <Form.Control placeholder='Brukarnamn - League of Legends' type='text' value={lol} onChange={e => setLol(e.target.value)} />
                      </Form.FloatingLabel>
                    </Form.Group>
                  </>
                : null}
              </Row>
              <Row className="w-100 d-flex">
                <Button className="my-2 p-1" variant="secondary" onClick={() => navigate('/kvammalan')}>AVBRYT</Button>
                <Button className="my-2 p-1" variant="primary" type='submit'>GÅ TIL BETALING</Button>
              </Row>
            </Form>
          </Container>
        </Container>
        <Footer />
    </Container>
  )
}

export default CheckoutInfo