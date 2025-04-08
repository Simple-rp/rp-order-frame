const Header = ({ code }: any) => {
  return (
    <nav className="header">
      <img
        src="http://www.image-heberg.fr/files/17440716891022548264.png"
        alt="logo gb"
        width={150}
      />
      <div className="header-side">{code}</div>
    </nav>
  )
}

export default Header
