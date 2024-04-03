import { useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import { Container,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const[productList,setProductList] = useState([]);
  const [query] = useSearchParams();
  const getProducts = async()=>{
    let searchQuery = query.get('q') || '';
    console.log("쿼리값은?",searchQuery);
    let url= ` https://my-json-server.typicode.com/DoHyeonNam/H-M/products?q=${searchQuery}` // 쿼리값은 읽어오는데 상품을 못읽어옴;
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data);
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
