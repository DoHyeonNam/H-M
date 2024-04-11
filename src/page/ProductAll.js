import { useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import { Container,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import {useDispatch,useSelector} from "react-redux";
const ProductAll = () => {
  const productList = useSelector((state)=>state.product.productList)
  const [query] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = ()=>{
    let searchQuery = query.get('q') || '';
    console.log("쿼리값은?",searchQuery); //유즈 이펙트!
    dispatch(productAction.getProducts(searchQuery))
  }

    useEffect(()=>{
        getProducts()
    },[query])

  return (
    <div>
      <Container className='container'>
      <Row>
        {productList.map((item)=>(
          <Col lg={3} >
            <ProductCard item={item}/>
          </Col>
        ))}
        </Row>
      </Container>
      <ProductCard/>
    </div>
  )
}

export default ProductAll
