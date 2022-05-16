import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row, Button, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../css/AddEvent.css'
import { auth, db, storage } from '../firebase/config'
import axios from 'axios'
import { addDoc, collection } from 'firebase/firestore'
import { v4 } from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

function AddEvent() {
    const [user, setUser] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [img, setImg] = useState(null)
    const [infoPlace, setInfoPlace] = useState('')
    const [price1, setPrice1] = useState(0)
    const [price2, setPrice2] = useState(0)
    const [price3, setPrice3] = useState(0)
    const [price4, setPrice4] = useState(0)
    const [price5, setPrice5] = useState(0)
    const [priceName1, setPriceName1] = useState('')
    const [priceName2, setPriceName2] = useState('')
    const [priceName3, setPriceName3] = useState('')
    const [priceName4, setPriceName4] = useState('')
    const [priceName5, setPriceName5] = useState('')
    const [counter, setCounter] = useState(1)
    const [loading, setLoading] = useState(false)
    const [priceList, setPrices] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                navigate('/logg-inn', { replace: true })
            }
        })
    }, [])

    document.title = 'Opprett hending | KvammaLAN'

    const createEvent = (event) => {
        event.preventDefault()

        setLoading(false)

        const prices = []

        if (price1 !== 0 && priceName1 !== ''){
            axios.post('https://Kvam-E-sport-API.olsendaniel04.repl.co/add-product', {
                name: priceName1,
                price: price1
            }).then((response) => {
                prices.push({
                    priceId: response.data.price.id,
                    productId: response.data.product.id
                })
            })
        }
        if (price2 !== 0 && priceName2 !== ''){
            axios.post('https://Kvam-E-sport-API.olsendaniel04.repl.co/add-product', {
                name: priceName2,
                price: price2
            }).then((response) => {
                prices.push({
                    priceId: response.data.price.id,
                    productId: response.data.product.id
                })
            })
        }
        if (price3 !== 0 && priceName3 !== ''){
            axios.post('https://Kvam-E-sport-API.olsendaniel04.repl.co/add-product', {
                name: priceName3,
                price: price3
            }).then((response) => {
                prices.push({
                    priceId: response.data.price.id,
                    productId: response.data.product.id
                })
            })
        }
        if (price4 !== 0 && priceName4 !== ''){
            axios.post('https://Kvam-E-sport-API.olsendaniel04.repl.co/add-product', {
                name: priceName4,
                price: price4
            }).then((response) => {
                prices.push({
                    priceId: response.data.price.id,
                    productId: response.data.product.id
                })
            })
        }

        if (price5 !== 0 && priceName5 !== ''){
            axios.post('https://Kvam-E-sport-API.olsendaniel04.repl.co/add-product', {
                name: priceName5,
                price: price5
            }).then((response) => {
                prices.push({
                    priceId: response.data.price.id,
                    productId: response.data.product.id
                })
            })
        }

        setTimeout(() => {
            setPrices(prices)

            const path = collection(db, 'hendingar')

            if (img !== null) {
                const imgRef = ref(storage, `/hendingar/${img.name}-${v4()}`)

                console.log(imgRef)

                uploadBytes(imgRef, img).then(() => {
                    getDownloadURL(imgRef).then((url) => {
                        addDoc(path, {
                            title: title,
                            description: description,
                            start: start,
                            end: end,
                            place: infoPlace,
                            prices: prices,
                            img: url
                        }).then(() => {
                            alert('Hending oppretta')
                        })
                    })
                })
            } else {
                addDoc(path, {
                    title: title,
                    description: description,
                    start: start,
                    end: end,
                    place: infoPlace,
                    prices: prices
                }).then(() => {
                    alert('Hending oppretta')
                })
            }
        }, 7500)
    }

  return (
    <Container fluid className="d-flex flex-column p-0 m-0 addevent text-light">
        <h2 className="align-self-center fw-bold mt-3">Opprett hending</h2>
        <Form className="w-75 align-self-center" onSubmit={createEvent}>
            <Form.Group className="mt-2 mb-2" as={Row}>
                <Form.Label>Tittel</Form.Label>
                <Form.Control type='text' placeholder='Tittel..' value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mt-2 mb-2" as={Row}>
                <Form.Label>Beskrivelse</Form.Label>
                <Form.Control as='textarea' rows={5} placeholder='Beskrivelse..' value={description} onChange={e => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mt-2 mb-2" as={Row}>
                <Form.Label>Start</Form.Label>
                <Form.Control type='datetime-local' value={start} onChange={e => setStart(e.target.value)} />
            </Form.Group>
            <Form.Group className="mt-2 mb-2" as={Row}>
                <Form.Label>Slutt</Form.Label>
                <Form.Control type='datetime-local' value={end} onChange={e => setEnd(e.target.value)} />
            </Form.Group>
            <Form.Group className="mt-2 mb-2" as={Row}>
                <Form.Label>Bilete</Form.Label>
                <Form.Control type='file' onChange={e => setImg(e.target.files[0])} />
            </Form.Group>
            <Form.Group className="mt-2 mb-2" as={Row}>
                <Form.Label>Stad</Form.Label>
                <Form.Control type='text' placeholder='Stad..' value={infoPlace} onChange={e => setInfoPlace(e.target.value)} />
            </Form.Group>
            <Row>
                <h2 className="mt-4 fw-bold">Prisar</h2>
                <Form.Group className="mt-3 mb-5">
                    <Col>
                        <Form.Label>Prisnamn</Form.Label>
                        <Form.Control type='text' onChange={e => setPriceName1(e.target.value)} value={priceName1}  />
                    </Col>
                    <Col>
                        <Form.Label>Pris</Form.Label>
                        <Form.Control value={price1} type='number' onChange={e => setPrice1(e.target.value)} />
                    </Col>
                    {counter === 1 ? <Button className="mt-3" onClick={() => setCounter(counter + 1)}>+</Button> : null}
                </Form.Group>
                {counter >= 2 ? 
                    <>
                        <Form.Group className="mt-3 mb-5">
                            <Col>
                                <Form.Label>Prisnamn</Form.Label>
                                <Form.Control type='text' onChange={e => setPriceName2(e.target.value)} value={priceName2}  />
                            </Col>
                            <Col>
                                <Form.Label>Pris</Form.Label>
                                <Form.Control value={price2} type='number' onChange={e => setPrice2(e.target.value)} />
                            </Col>
                            {counter === 2 ? <Button className="mt-3" onClick={() => setCounter(counter + 1)}>+</Button> : null}
                        </Form.Group>
                    </>
                    : null
                }
                {counter >= 3 ?
                    <>
                    <Form.Group className="mt-3 mb-5">
                        <Col>
                            <Form.Label>Prisnamn</Form.Label>
                            <Form.Control type='text' onChange={e => setPriceName3(e.target.value)} value={priceName3}  />
                        </Col>
                        <Col>
                            <Form.Label>Pris</Form.Label>
                            <Form.Control value={price3} type='number' onChange={e => setPrice3(e.target.value)} />
                        </Col>
                        {counter === 3 ? <Button className="mt-3" onClick={() => setCounter(counter + 1)}>+</Button> : null}
                    </Form.Group>
                    </>
                    : null
                }
                {counter >= 4 ?
                    <>
                        <Form.Group className="mt-3 mb-5">
                            <Col>
                                <Form.Label>Prisnamn</Form.Label>
                                <Form.Control type='text' onChange={e => setPriceName4(e.target.value)} value={priceName4}  />
                            </Col>
                            <Col>
                                <Form.Label>Pris</Form.Label>
                                <Form.Control value={price4} type='number' onChange={e => setPrice4(e.target.value)} />
                            </Col>
                            {counter === 4 ? <Button className="mt-3" onClick={() => setCounter(counter + 1)}>+</Button> : null}
                        </Form.Group>
                    </>
                    : null
                }
                {counter >= 5 ? 
                    <>
                        <Form.Group className="mt-3 mb-5">
                            <Col>
                                <Form.Label>Prisnamn</Form.Label>
                                <Form.Control type='text' onChange={e => setPriceName5(e.target.value)} value={priceName5}  />
                            </Col>
                            <Col>
                                <Form.Label>Pris</Form.Label>
                                <Form.Control value={price5} type='number' onChange={e => setPrice5(e.target.value)} />
                            </Col>
                            {counter === 5 ? <Button className="mt-3" onClick={() => setCounter(counter + 1)}>+</Button> : null}
                        </Form.Group>
                    </>
                    : null
                }
            </Row>
            <Form.Group className="mb-5">
                <Button disabled={loading} type='submit' variant='primary'>
                    Opprett hending
                </Button>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default AddEvent