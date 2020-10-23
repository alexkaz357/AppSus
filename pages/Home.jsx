const { NavLink } = ReactRouterDOM

export const Home = () => {
  return (
    <section className='home-page'>
      <div className='homepage-info'>
        <div className='homepage-title'>
          <h2>Welcome to AppSus</h2>
          <h3>Your ultimate work space<span style={{ color: 'darkcyan' }}>.</span></h3>
        </div>
      </div>
      <div className='homepage-icons'>
        <NavLink to='/email'>
          <img src='./img/mail.png' alt='' />
        </NavLink>
        <NavLink to='/note'>
          <img src='./img/note.png' alt='' />
        </NavLink>
        <NavLink to='/books'>
          <img src='./img/book.png' alt='' />
        </NavLink>
      </div>
    </section>
  )
}
