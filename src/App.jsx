import './App.css'
import PreHeader from './Components/PreHeader'
import Header from './Components/Header'
import Banner from './Components/Banner'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './Components/SearchPage'
import ProductDetail from './Components/ProductDetail'
import SuggestionList from './Components/SuggestionList'
import Footer from "./Components/Footer"
import Cart from './Components/Cart'
import ErrorPage from './Components/ErrorPage'

function App() {

  return (
    <div >
<PreHeader />
<Header />
<Routes>
  <Route path= '/' element={<Banner />} />
  <Route path='/search' element={<SearchPage/>}></Route>
  <Route path='/search/:id' element={<ProductDetail/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='*' element= {<ErrorPage />} />
</Routes>
<Footer />
    </div>
  )
}

export default App
