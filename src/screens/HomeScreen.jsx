import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useParams } from 'react-router-dom';
const HomeScreen = () => {

  const {pageNumber}=useParams();
  
  const {data,isLoading,error}=useGetProductsQuery({pageNumber});


  return (
    <>
    {isLoading?(<><Loader/></>):error?(<Message variant='danger'>{error?.data?.message||error.error}</Message>):(
    <>
    
    <h1 style={{color:'black',textAlign:'center'}}>New Arrival</h1>
      <Row>
        {data.product.map((productt) => (
          <Col key={productt._id} sm={12} md={6} lg={4} xl={3}>
            <Product prduct={productt}/>
          </Col>
        ))}
      </Row>
    </>)}
    </>
  );
};

export default HomeScreen;
