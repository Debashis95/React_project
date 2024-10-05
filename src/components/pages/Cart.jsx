import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from 'mdb-react-ui-kit'
import React, { useContext } from 'react'
import { contextCreate } from '../../hooks/context/contexCreate'
import { Button } from 'react-bootstrap'

export default function Cart() {
  const { cartData, removeProduct, increaseItem } = useContext(contextCreate)
  const totalAmount = cartData
    .map((val) => val.price * val.qty)
    .reduce((a, c) => a + c, 0)

  const removeItem = (id) => {
    removeProduct(id)
  }
  return (
    <section className='h-100 gradient-custom'>
      <MDBContainer className='py-5 h-100'>
        <MDBRow className='justify-content-center my-4'>
          <MDBCol md='8'>
            <MDBCard className='mb-4'>
              <MDBCardHeader className='py-3'>
                <MDBTypography tag='h5' className='mb-0'>
                  Cart - {cartData.length} items
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody key={Date.now()}>
                {cartData?.map((product) => {
                  return (
                    <>
                      <MDBRow>
                        <MDBCol lg='3' md='12' className='mb-4 mb-lg-0'>
                          <MDBRipple
                            rippleTag='div'
                            rippleColor='light'
                            className='bg-image rounded hover-zoom hover-overlay'
                          >
                            <img src={product?.image} className='w-100' />
                            <a href='#!'>
                              <div
                                className='mask'
                                style={{
                                  backgroundColor: 'rgba(251, 251, 251, 0.2)',
                                }}
                              ></div>
                            </a>
                          </MDBRipple>
                        </MDBCol>

                        <MDBCol lg='5' md='6' className=' mb-4 mb-lg-0'>
                          <p>
                            <strong>{product.title}</strong>
                          </p>
                          <p>Category: {product.category}</p>
                          <p>Rating:{product.rating.rate}</p>

                          <Button
                            wrapperprops={{ size: 'sm' }}
                            wrapperclass='me-1 mb-2'
                            title='Remove item'
                            onClick={() => removeItem(product.id)}
                          >
                            <MDBIcon fas icon='trash' />
                          </Button>

                          <Button
                            wrapperprops={{ size: 'sm', color: 'danger' }}
                            wrapperclass='me-1 mb-2'
                            title='Move to the wish list'
                          >
                            <MDBIcon fas icon='heart' />
                          </Button>
                        </MDBCol>
                        <MDBCol lg='4' md='6' className='mb-4 mb-lg-0'>
                          <div
                            className='d-flex mb-4'
                            style={{ maxWidth: '300px' }}
                          >
                            <MDBBtn className='px-3 me-2'>
                              <MDBIcon fas icon='minus' />
                            </MDBBtn>

                            <MDBInput
                              defaultValue={product.qty}
                              min={0}
                              type='number'
                              label='Quantity'
                            />

                            <Button
                              className='px-3 ms-2'
                              onClick={() => {
                                increaseItem(product.id)
                              }}
                            >
                              <MDBIcon fas icon='plus' />
                            </Button>
                          </div>

                          <p className='text-start text-md-center'>
                            <strong>₹{product.price}</strong>
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </>
                  )
                })}

                <hr className='my-4' />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='4'>
            <MDBCard className='mb-4'>
              <MDBCardHeader>
                <MDBTypography tag='h5' className='mb-0'>
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush='true'>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                    Products
                    <span>$53.98</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center px-0'>
                    Shipping
                    <span>Gratis</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className='mb-0'>(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>₹{totalAmount}</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn block size='lg'>
                  Go to checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}
