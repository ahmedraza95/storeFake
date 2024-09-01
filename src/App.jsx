import { useState, useEffect } from 'react'
import Headers from '../components/header';
import Product from '../components/productDetails';
import { Link } from 'react-router-dom';
import ProDet from '../components/NewDones';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NewOne from '../components/about';
import './App.css'

function App() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((res) => res.json())
      .then((data) => setPost(data)
      )
  }, [])
  const filtered = post.filter((data) => data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
  console.log(filtered);
  return (

    <>
      <BrowserRouter>
          <Headers />
        <Routes>

          <Route path='/about' element={<NewOne />} />
          <Route path='/product/:id' element={<ProDet />} />
          <Route path='/home' element={<Product />} />
          {/* <Route path='/Product' element={<Product />} /> */}
          {/* <Route path='/' element={<App />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
