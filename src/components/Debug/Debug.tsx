import { useSearchParams } from 'react-router-dom'

const line = (label: string, value: string | null) => (
  <p>
    <b>{label}: </b>
    {value}
  </p>
)

const Debug = () => {
  const [searchParams] = useSearchParams()

  const code = searchParams.get('code') // "GBF"
  const isDebug = searchParams.get('debugMode') // "true"

  if (!isDebug) return <></>
  return (
    <div className="debug">
      <h2>Debug Info</h2>
      {line('Location', window.location.href)}
      {line('Code', code)}
    </div>
  )
}

export default Debug
