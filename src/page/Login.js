import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { authenticateAction } from '../redux/actions/authenticateAction';


const Login = ({setAuthenticate}) => {
  const [id,setId] = useState('')
  const [password,setPassword ] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (event)=>{
    event.preventDefault(); //페이징 새로고침을 안하게 해줌.
    dispatch(authenticateAction.login(id,password));
    navigate('/')
  }
    
  return (
    <Container>
    <Form className='login-form' onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>아이디</Form.Label>
        <Form.Control type="id" placeholder="Enter Id" onChange={(event)=>setId(event.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>패스워드</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="danger" type="submit" className='login-sub'>
        로그인
      </Button>
    </Form>
    </Container>
  );
}

export default Login
