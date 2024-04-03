import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState(null);
  let { id } = useParams();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/DoHyeonNam/H-M/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProductDetail(data);

  }
  useEffect(() => {
    getProductDetail();
  }, [])
  return (
    <div>
      <Container>
        <Row>
          <Col className='product-img'>
            <img src={productDetail?.img} />
          </Col>
          <Col>
            <div className='title'>{productDetail?.title}</div>

            <div className='price'>${productDetail?.price}</div>

            <div className='choice'>{productDetail?.choice == true ? 'conscious choice' : ''}</div>

            <div className='drop-down'>
            <Dropdown >
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail
