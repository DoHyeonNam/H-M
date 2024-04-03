import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


//1. 전체상품페이ㅇ지 , 로그인, 상품상세페이지
//2. 전체 상품페이지에서는 전체 상품 보기 가능
//3. 로그인 버튼누르면 로그인 페이지 나옴.
//4. 상품ㅇ디테일을 눌렀으나, 로그인 안되있으면 로그인페이지 나옴
//5. 로그인이 되어있을 경우 상품 디테일 페이지 볼 수 있다.
//6. 로그아웃ㅂ 버튼을 누르면 로그아웃 된다.
//7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다.  다시 로그인 페이지 나온다.
//8. 로그인을 하면로그아웃 보임 로그아웃시 로그인 보임
//9. 상품검색기능.



function App() {

  const [authenticate,setAuthenticate] = useState(false);
  useEffect(()=>{
      console.log("Aaaa",authenticate)
  },[authenticate])

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
