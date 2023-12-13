import './Header.css'

function Header() {
    return (
      <>
        <div className="top-bar">
          <div className="name-div">
            <a href="#home" className="name-text">SEAN O'SULLIVAN</a>
          </div>
          <div className="nav-div">
            <a href="#home" className="nav-button">About</a>
            <a href="#projects" className="nav-button">Projects</a>
            <a href="#contact" className="nav-button">Contact</a>
          </div>
        </div>
      </>
    )
  }
  
  export default Header;
  