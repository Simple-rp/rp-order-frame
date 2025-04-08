// import { useSearchParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ProductPage from './pages/Products/ProductPage'
import Debug from './components/Debug/Debug'
import { useGetClientDetailsQuery } from './service/client'

function App() {
  const [searchParams] = useSearchParams()

  const code = searchParams.get('code')
  const client = searchParams.get('client')

  const { data: clientDetails } = useGetClientDetailsQuery({ code, client })
  return (
    <>
      <Header code={clientDetails?.name} />
      <main>
        <ProductPage code={code} client={clientDetails} />
        <Debug />
      </main>
      <Footer />
    </>
  )
}

export default App
