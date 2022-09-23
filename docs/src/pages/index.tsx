import * as React from 'react'
import { Button, Container, Row } from '../../../src'
import DefaultLayout from '../layouts/DefaultLayout'
import modusLaptopPhone from '../assets/img/modus-laptop-phone.svg'

const HomePage: React.FC<{ location: any }> = ({ location }) => (
  <DefaultLayout location={location}>
    <main id='main'>
      <header>
        <Container fluid className='pt-5'>
          <Container>
            <Row>
              <div className='col-12 col-lg-6 pt-5 mt-xl-5'>
                <h1 className='text-trimble-blue mt-4 display-2 font-weight-bold text-center text-lg-left'>
                  Modus React Bootstrap
                  <p
                    className='text-trimble-blue font-weight-light display-2'
                    style={{ lineHeight: '1.2' }}
                  >
                    Developer Guide
                  </p>
                </h1>
                <p className='lead text-trimble-blue-dark pt-3 mb-lg-5 text-center text-lg-left mr-lg-5'>
                  Quickly design and customize responsive mobile-first sites with Modus React
                  Bootstrap, featuring a responsive grid system, and extensive prebuilt components.
                </p>
              </div>
              <div className='col-10 col-sm-9 col-lg-6 mx-auto mt-lg-5 mb-n4'>
                <div className='mt-lg-5'>
                  <img
                    src={modusLaptopPhone}
                    width='620'
                    height='395'
                    className='img-fluid text-center mx-auto mt-lg-5 mt-xl-1'
                    alt=''
                  />
                </div>
              </div>
            </Row>
          </Container>
        </Container>
      </header>

      <Container fluid className='bg-light'>
        <Container className='py-5'>
          <Row className='row-cols-1 row-cols-sm-2 row-cols-lg-3 text-center'>
            <div className='col mb-5'>
              <div className='h-100'>
                <div className='text-center mb-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='64'
                    height='64'
                    className='text-secondary opacity-50 my-1'
                    viewBox='0 0 576 512'
                  >
                    <path d='M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3 18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5.0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4 144.1-127.2c2.3-2 2.3-5.5.0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z'></path>
                  </svg>
                </div>
                <div className='px-4'>
                  <div className='card-home'>
                    <p className='card-text px-xl-3'>
                      Download from npm, CDN and find out how to use with React projects.
                    </p>
                  </div>
                  <div className='mt-1'>
                    <a href='/getting-started/' className='btn btn-primary rounded text-center'>
                      Getting started »
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='h-100'>
                <div className='text-center mb-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='64'
                    height='64'
                    className='text-secondary opacity-50 my-1'
                    viewBox='0 0 512 512'
                  >
                    <path d='M96 160c-17.7.0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-32c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm96 0c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm192-48v352c0 26.5-21.5 48-48 48H48c-26.5.0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h416c26.5.0 48 21.5 48 48zm-32 144H32v208c0 8.8 7.2 16 16 16h416c8.8.0 16-7.2 16-16V224zm0-32V80c0-8.8-7.2-16-16-16H48c-8.8.0-16 7.2-16 16v112h448z'></path>
                  </svg>
                </div>
                <div className='px-4'>
                  <div className='card-home'>
                    <p className='card-text px-xl-3'>
                      An optional responsive app layout you can use for your web applications.
                    </p>
                  </div>
                  <a href='/layout/' className='btn btn-primary rounded text-center'>
                    Layout »
                  </a>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='h-100'>
                <div className='text-center mb-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='64'
                    height='64'
                    className='text-secondary opacity-50 my-1'
                    viewBox='0 0 576 512'
                  >
                    <path d='M560 368h-64V144h64c14.31.0 21.33-17.31 11.31-27.31l-80-80a16 16 0 00-22.63.0l-80 80C379.36 126 384.36 144 4e2 144h64v224h-64c-14.31.0-21.33 17.32-11.31 27.32l80 80a16 16 0 0022.63.0l80-80C580.64 386 575.64 368 560 368zM438.63 112 480 70.62 521.36 112h-82.73zM480 441.36 438.64 4e2h82.74zM304 32H16A16 16 0 000 48v72a8 8 0 008 8h16a8 8 0 008-8V64h112v384H72a8 8 0 00-8 8v16a8 8 0 008 8h176a8 8 0 008-8v-16a8 8 0 00-8-8h-72V64h112v56a8 8 0 008 8h16a8 8 0 008-8V48a16 16 0 00-16-16z'></path>
                  </svg>
                </div>
                <div className='px-4'>
                  <div className='card-home'>
                    <p className='card-text px-xl-3'>
                      Typography, Color Palette, Depth, Grid &amp; Spacing and Icons.
                    </p>
                  </div>
                  <a
                    href='/foundations/typography/'
                    className='btn btn-primary rounded text-center'
                  >
                    Foundations »
                  </a>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='h-100'>
                <div className='text-center mb-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='64'
                    height='64'
                    className='text-secondary opacity-50 my-1'
                    viewBox='0 0 576 512'
                  >
                    <path d='M384 96c88.426.0 160 71.561 160 160 0 88.426-71.561 160-160 160H192c-88.426.0-160-71.561-160-160 0-88.425 71.561-160 160-160h192m0-32H192C85.961 64 0 149.961.0 256s85.961 192 192 192h192c106.039.0 192-85.961 192-192S490.039 64 384 64zm0 304c61.856.0 112-50.144 112-112s-50.144-112-112-112-112 50.144-112 112c0 28.404 10.574 54.339 27.999 74.082C320.522 353.335 350.548 368 384 368z'></path>
                  </svg>
                </div>
                <div className='px-4'>
                  <div className='card-home'>
                    <p className='card-text px-xl-3'>
                      Modus React Bootstrap includes dozens of prebuilt components to kick-start
                      your project.
                    </p>
                  </div>
                  <div className='text-center w-100'>
                    <a href='/components/' className='btn btn-primary rounded text-center'>
                      Components »
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='h-100'>
                <div className='text-center mb-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='64'
                    height='64'
                    className='text-secondary opacity-50 my-1'
                    viewBox='0 0 512 512'
                  >
                    <path d='M502.6 389.5 378.2 265c-15.6-15.6-36.1-23.4-56.6-23.4-15.4.0-30.8 4.4-44.1 13.3L192 169.4V96L64 0 0 64l96 128h73.4l85.5 85.5c-20.6 31.1-17.2 73.3 10.2 100.7l124.5 124.5c6.2 6.2 14.4 9.4 22.6 9.4 8.2.0 16.4-3.1 22.6-9.4l67.9-67.9c12.4-12.6 12.4-32.8-.1-45.3zM160 158.1v1.9h-48L42.3 67 67 42.3l93 69.7v46.1zM412.1 480 287.7 355.5c-9.1-9.1-14.1-21.1-14.1-33.9.0-12.8 5-24.9 14.1-33.9 9.1-9.1 21.1-14.1 33.9-14.1 12.8.0 24.9 5 33.9 14.1L480 412.1 412.1 480zM64 432c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM276.8 66.9C299.5 44.2 329.4 32 360.6 32c6.9.0 13.8.6 20.7 1.8L312 103.2l13.8 83 83.1 13.8 69.3-69.3c6.7 38.2-5.3 76.8-33.1 104.5-8.9 8.9-19.1 16-30 21.5l23.6 23.6c10.4-6.2 20.2-13.6 29-22.5 37.8-37.8 52.7-91.4 39.7-143.3-2.3-9.5-9.7-17-19.1-19.6-9.5-2.6-19.7.0-26.7 7l-63.9 63.9-44.2-7.4-7.4-44.2L410 50.3c6.9-6.9 9.6-17.1 7-26.5-2.6-9.5-10.2-16.8-19.7-19.2C345.6-8.3 292 6.5 254.1 44.3c-12.9 12.9-22.9 27.9-30.1 44v67.8l22.1 22.1c-9.6-40.4 1.6-82.2 30.7-111.3zM107 467.1c-16.6 16.6-45.6 16.6-62.2.0-17.1-17.1-17.1-45.1.0-62.2l146.1-146.1-22.6-22.6L22.2 382.3c-29.6 29.6-29.6 77.8.0 107.5C36.5 504.1 55.6 512 75.9 512c20.3.0 39.4-7.9 53.7-22.3L231.4 388c-6.7-9.2-11.8-19.3-15.5-29.8L107 467.1z'></path>
                  </svg>
                </div>
                <div className='px-5'>
                  <div className='card-home'>
                    <p className='card-text px-xl-3'>
                      Utility classes are a powerful ally in combatting CSS bloat and poor page
                      performance.
                    </p>
                  </div>
                  <a href='/utilities/borders/' className='btn btn-primary rounded text-center'>
                    Utilities »
                  </a>
                </div>
              </div>
            </div>
            <div className='col mb-5'>
              <div className='h-100'>
                <div className='text-center mb-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='64'
                    height='64'
                    className='text-secondary opacity-50 my-1'
                    viewBox='0 0 512 512'
                  >
                    <path d='M464 64H48C21.5 64 0 85.5.0 112v288c0 26.5 21.5 48 48 48h416c26.5.0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8.0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8.0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z'></path>
                  </svg>
                </div>
                <div className='px-4'>
                  <div className='card-home'>
                    <p className='card-text px-xl-3'>
                      Subscribe to the mailing list and be the first to find out about new releases.
                    </p>
                  </div>
                  <Button
                    onClick={(e) => {
                      window.open(
                        'https://docs.google.com/forms/d/e/1FAIpQLSc5-PBOzJjT2Q8r5Pg7BPYzae-rz5fg5ySSBcHwfhBneUkvWg/viewform',
                        'window',
                        'left=20,top=20,width=500,height=660,toolbar=1,resizable=0',
                      )
                      e.preventDefault()
                      return false
                    }}
                    className='btn btn-primary rounded text-center'
                  >
                    Subscribe »
                  </Button>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
    </main>
  </DefaultLayout>
)

export default HomePage
