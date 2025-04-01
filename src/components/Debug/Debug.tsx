

const line = (label: string, value: string) => (
  <p>
    <b>{label}: </b>
    {value}
  </p>
)

const Debug = ({ enabled }: any) => {
  if (!enabled) return <></>
  return (
    <div className="debug">
      <h2>Debug Info</h2>
      {line('Location', window.location.href)}
    </div>
  )
}

export default Debug
