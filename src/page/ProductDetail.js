import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useDispatch,useSelector} from "react-redux";

import { productAction } from '../redux/actions/productAction';


const ProductDetail = () => {
  const selectitem = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  let { id } = useParams();
  const getProductDetail =() => {
    dispatch(productAction.getProductDetail(id))
  }

  useEffect(() => {
    getProductDetail();
  }, [])
  return (
    <div>
      <Container>
        <Row>
          <Col className='product-img'>
            <img src={selectitem?.img} />
          </Col>
          <Col>
            <div className='title'>{selectitem?.title}</div>

            <div className='price'>${selectitem?.price}</div>

            <div className='choice'>{selectitem?.choice == true ? 'conscious choice' : ''}</div>

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
