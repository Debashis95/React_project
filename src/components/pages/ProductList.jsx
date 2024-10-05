import { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { getAllProducts } from '../../api/apiHandler'
import { contextCreate } from '../../hooks/context/contexCreate'
import { useNavigate } from 'react-router-dom'

function ProductList() {
  const navigate=useNavigate()
  const { addProduct } = useContext(contextCreate)
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchProduct = async () => {
    setProducts(null)
    setIsLoading(true)
    const data = await getAllProducts()
    setProducts(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  const addToCart = (prod) => {
    addProduct(prod)
    navigate("/product/cart")
  }

  const renderProduct = products?.map((prod) => {
    // console.log(prod)
    return (
      <>
        <Col >
          <Card style={{ width: '18rem' }} key={prod.id}>
            <Card.Img
              variant='top'
              src={`${prod?.image}`}
              height='200px'
              width='200px'
            />
            <Card.Body>
              <Card.Title>{prod.title.slice(0, 10)}</Card.Title>
              <Card.Text>{prod.description.slice(0, 30)}</Card.Text>
              <Button variant='primary' onClick={() => addToCart(prod)}>
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  })

  return (
    <Container className='mt-3'>
      <Row>
        {isLoading ? (
          <>
            <h2>Loading...</h2>
          </>
        ) : (
          renderProduct
        )}
      </Row>
    </Container>
  )
}

export default ProductList
