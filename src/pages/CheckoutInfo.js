import React, { useState } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar' 
import Footer from '../components/footer/Footer'
import '../css/CheckoutInfo.css'

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

  const [fortnite, setFortnite] = useState('')
  const [csgo, setCsgo] = useState('')
  const [valorant, setValorant] = useState('')
  const [fh5, setFh5] = useState('')
  const [mc, setMc] = useState('')
  const [rl, setRl] = useState('')
  const [lol, setLol] = useState('')

  const submit = () => {
    console.log('Submit')
  }

  const games = ['Fortnite', 'Counter-Strike: Global Offensive', 'Valorant', 'Forza Horizon 5', 'Minecraft', 'Rocket League', 'League of Legends']

  return (
    <Container fluid className="checkoutinfo d-flex flex-column m-0 p-0">
        <NavbarComponent data={{ background: 'transparent' }} />
        <Container fluid className="d-flex flex-column align-items-center p-0 m-0 mb-5">
          <h1 className="fw-bolder text-light text-center mt-3">DELTAKARINFORMASJON</h1>
          <Container fluid className="d-flex flex-column align-items-center">
            <Form className="checkout-form mt-5" onSubmit={submit}>
              <Row className="w-100 my-3">
                <Form.Group as={Col} lg={6}>
                  <Form.FloatingLabel label='NAMN'>
                    <Form.Control placeholder='NAMN' value={name} onChange={(e) => setName(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} lg={6}>
                  <Form.FloatingLabel label='TELEFONNUMMER'>
                    <Form.Control placeholder='TELEFONNUMMER' value={phone} onChange={(e) => setPhone(e.target.value)} type='tel' />
                  </Form.FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group as={Col} lg={12}>
                  <Form.FloatingLabel label='E-POSTADRESSE'>
                    <Form.Control placeholder='E-POSTADRESSE' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                  </Form.FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="w-100">
                &nbsp;
              </Row>
              <Row className="w-100 my-3 mt-5">
                <Form.Group as={Col} lg={12}>
                  <Form.FloatingLabel label='ADRESSE'>
                    <Form.Control placeholder='ADRESSE' value={address} onChange={(e) => setAddress(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group as={Col} lg={3}>
                  <Form.FloatingLabel label='POSTNUMMER'>
                    <Form.Control placeholder='POSTNUMMER' value={zipcode} onChange={(e) => setZipcode(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} lg={9}>
                  <Form.FloatingLabel label='POSTSTAD'>
                    <Form.Control placeholder='POSTSTAD' value={city} onChange={(e) => setCity(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="w-100 my-3">
                <Form.Group as={Col} lg={12}>
                  <Form.FloatingLabel label='LAND'>
                    <Form.Control placeholder='LAND' value={country} onChange={(e) => setCountry(e.target.value)} type='text' />
                  </Form.FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="w-100">
                &nbsp;
              </Row>
              <Row className="w-100 my-3 mt-5">
                <Form.Group as={Col} lg={6}>
                  <Form.FloatingLabel label='FØDSELSDATO'>
                    <Form.Control value={birthdate} onChange={(e) => setBirthdate(e.target.value)} type='date' />
                  </Form.FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} lg={6}>
                  <Form.Select className="py-3" onSelect={(e) => setGender(e.target.value)}>
                    <option value=' '>VEL KJØNN</option>
                    <option value='Mann'>Mann</option>
                    <option value='Kvinne'>Kvinne</option>
                    <option value='Annet'>Annet</option>
                  </Form.Select>
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
                            selectedGames.splice(selectedGames.indexOf(game), 1)
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
            </Form>
          </Container>
        </Container>
        <Footer />
    </Container>
  )
}

export default CheckoutInfo