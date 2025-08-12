const HeaderComponent = () => {
  return (
    <div className="header-component">
      <div className="logo-container">
        <img className="logo-image" src="https://res.cloudinary.com/drt0bwjjb/image/upload/v1754930649/Food_Logo_newrvn.png" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  )
}
export default HeaderComponent