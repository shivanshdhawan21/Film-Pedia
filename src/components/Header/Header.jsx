import "./header.scss"
const Header = () => {
  return (
    <div className="header">
      <span onClick={()=>window.scroll(0,0)}>FILM-PEDIA</span>
    </div>
  )
}

export default Header
