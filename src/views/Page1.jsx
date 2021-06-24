import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Form, Col, Button, Modal, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { AiOutlineScan, AiOutlineCheck } from 'react-icons/ai'
import './style.css'
import { productsData } from '../components/mock'
import Quagga from 'quagga'

const Page1 = () => {
  const [show, setShow] = useState(false)
  const [barcode, setBarcode] = useState('')
  let [data] = useState(productsData)

  const history = useHistory()
  
  const handleClose = () => {
    setShow(false)
    setBarcode(document.getElementById('valueBarCode').getAttribute('value'))
    Quagga.stop()
  }
  const handleShow = () => setShow(true)

  const sendData = () => {
    if (barcode !== '123456') {
      alert("Please Scan Barcode! OR Barcode Not Found!")
    } else {
      console.log('oi')
      history.push({ pathname: '/Page2', state: data })
    }
  }

  return (
    <>
      <Container fluid>
        <div
          id='ContMain'
          className='m-2 border border-secondary border-3 rounded-lg shadow'
        >
            <Row className='row align-items-center text-center'>
              <Col>
                <Button
                  onClick={handleShow}
                  className='m-2 p-2 btn-dark shadow-lg border'
                >
                  <AiOutlineScan /> Scanner
                </Button>
             
                <Form.Control
                  type='number'
                  placeholder='Barcode'
                  value={barcode}
                  onChange={e => setBarcode(e.target.value)}
                  className='m-2 shadow-lg'
                />
              
                <Button
                  onClick={sendData}
                  className='m-a p-2 btn-primary shadow-lg'
                >
                  <AiOutlineCheck /> 
                   Search Products
                </Button>
              </Col>
            </Row>
          <Modal
            show={show}
            className='modal'
            aria-hidden="true"
            onHide={handleClose}
            centered
          >
            <QuaggaElement />
            <Button className='btn btn-primary rounded-0' onClick={handleClose}>
              Close
            </Button>
          </Modal>
        </div>
      </Container>
    </>
  )
}

const QuaggaElement = () => {
  const [code, setCode] = useState()
  const onDetected = (data: any) => {
    setCode(data.codeResult.code)
    Quagga.stop()
  }

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          target: document.querySelector('#barcode-scanner')
        },
        locator: {
          patchSize: 'medium',
          halfSample: true
        },
        numOfWorkers: 2,
        decoder: {
          readers: ['ean_reader'],
          debug: {
            drawBoundingBox: true,
            showFrequency: true,
            drawScanline: true,
            showPattern: false
          },
          multiple: false
        },
        locate: true
      },
      function (err: any) {
        if (err) {
          return console.log(err)
        }
        Quagga.start()
      }
    )
    Quagga.onDetected(onDetected)

    return () => {
      Quagga.offDetected(onDetected)
    }
  }, [])

  return (
    <div
      id='barCode'
      className='border border-primary border-3'
    >
      <div id='valueBarCode' className='text-center text-warning bg-dark' value={code}>
        {code}
      </div>
      <div id='barcode-scanner'>
        <video src=''></video>
        <canvas class='drawingBuffer'></canvas>
      </div>
    </div>
  )
}

export default Page1
