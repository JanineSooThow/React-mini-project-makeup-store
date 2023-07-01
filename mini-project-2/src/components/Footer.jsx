import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';



export default function Footer() {
  const handleSubscribe = () => {
    alert('Thank you, we will be in touch soon!');
  };
  return (
    <MDBFooter bgColor='light' className='text-center text-dark text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>
            
            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                <MDBInput type='text' id='form5Example2' input ="email" placeholder="Email"  /> 
            </MDBCol>
           {/*Subscribe button*/}
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn outline color='dark'onClick={handleSubscribe}>
                Subscribe
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                MAKEUP MIRAGE
              </h6>
              <p>
                Enhance your confidence and radiance with high-quality cosmetics for every occasion
              </p>
            </MDBCol>

          {/*ABOUT Column */}
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>ABOUT</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Stores
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Join the team
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ts & Cs
                </a>
              </p>
            </MDBCol>

          {/*CUSTOMER CARE column*/}
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>CUSTOMER CARE</h6>
              <p>
                <a href='#!' className='text-reset'>
                  The Blog
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Shipping Info
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Returns
                </a>
              </p>
            </MDBCol>

          {/*CONTACT Column*/}
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>CONTACT</h6>
              <p>
                Auckland, AKL NZ
              </p>
              <p>
                info@makeupmirage.com
              </p>
              <p>
                + 64 177 777 77
              </p>
        
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 MAKEUP MIRAGE
      </div>
    </MDBFooter>
  );
}
