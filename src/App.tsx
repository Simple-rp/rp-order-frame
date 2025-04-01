// import { useSearchParams } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ProductPage from './pages/Products/ProductPage'

function App() {
  // const [searchParams] = useSearchParams()

  // const code = searchParams.get('code') // "GBF"
  // const debugMode = searchParams.get('debugMode') // "true"

  return (
    <>
      <Header />
      <main>
        <ProductPage />
      </main>
      <Footer />
    </>
  )
}

export default App
