// import { useSearchParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ProductPage from './pages/Products/ProductPage'
import Debug from './components/Debug/Debug'

function App() {
  const [searchParams] = useSearchParams()

  const code = searchParams.get('code') // "GBF"

  return (
    <>
      <Header code={code} />
      <main>
        <ProductPage />
        <Debug />
      </main>
      <Footer />
    </>
  )
}

export default App
