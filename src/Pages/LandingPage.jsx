import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <div>
      <Row className='mt-5 pt-5 justify-content-between align-items-center mb-5 w-100'>
        <Col lg={1}></Col>
        <Col className='ms-4' lg={4}>
          <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia distinctio nulla fuga nostrum natus rem reprehenderit tempore quas quia quae, nemo vitae a officiis assumenda quasi quam accusantium accusamus!</p>
          <button onClick={()=>navigateByUrl('/home')} className='btn btn-primary'>Get Started</button>
        </Col>
        <Col lg={5}>
          <img className='img-fluid' src="https://media.istockphoto.com/id/1267447725/vector/music-creative-logo-and-symbol.jpg?s=170667a&w=0&k=20&c=ZWFkN9UrB5ctJ-OyS5oncwJuKrC3dKTvLd4IX-7Rlwg=" alt="Landing" />
        </Col>
      </Row>

      <div className="container mt-5 mb-3 d-flex flex-column justify-content-center align-items-center w-100">
        <h3>Features</h3>
        <div className="cards mt-5 mb-3 d-flex justify-content-between align-items-center w-100">
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://cdn.pixabay.com/animation/2023/03/06/05/36/05-36-20-416_512.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://media.tenor.com/vXk-C8BbRNAAAAAC/basic-equalizer.gif" />
            <Card.Body>
              <Card.Title>Custom Equaliser</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://lordicon.com/icons/system/outline/45-category.gif" />
            <Card.Body>
              <Card.Title>Category Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="conatainer border border-secondary rounded p-5 mt-5 mb-5 d-flex justify-content-between align-items-center w-100">
        <div className='col-lg-5'>
          <h3 className='text-warning mb-5'>Simple, Fast and Powerfull</h3>
          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate repudiandae perspiciatis facere officiis rem vero laboriosam? Fugit aperiam porro ab nulla eius, tenetur repudiandae at. Officiis, repudiandae consectetur? Ex, iste?</h6>

          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Categorise</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate repudiandae perspiciatis facere officiis rem vero laboriosam? Fugit aperiam porro ab nulla eius, tenetur repudiandae at. Officiis, repudiandae consectetur? Ex, iste?</h6>

          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Managing History</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate repudiandae perspiciatis facere officiis rem vero laboriosam? Fugit aperiam porro ab nulla eius, tenetur repudiandae at. Officiis, repudiandae consectetur? Ex, iste?</h6>
        </div>

        <div className='video col-lg-6'>
          <iframe width="100%" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

    </div>
  )
}

export default LandingPage