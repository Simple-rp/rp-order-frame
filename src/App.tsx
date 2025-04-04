// import { useSearchParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ProductPage from './pages/Products/ProductPage'
import Debug from './components/Debug/Debug'

function App() {
  const [searchParams] = useSearchParams()

  const code = searchParams.get('code')
  const client = searchParams.get('client')

  return (
    <>
      <Header code={client} />
      <main>
        <ProductPage code={code} client={client} />
        <Debug />
      </main>
      <Footer />
    </>
  )
}

export default App
