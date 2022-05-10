import React from 'react'

const Navbar = () => {
  return (
    <div>
        

           
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand text-light font-weight-bold" href="#home">আমার দোকান </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav justify-content-end ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#home">হোম</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-capitalize text-light" href="#about"> আমাদের সম্পর্কে </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-capitalize text-light" href="#products">আমাদের পণ্য</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-capitalize text-light" href="#services" tabindex="-1" aria-disabled="true">সেবা সমূহ</a>
            </li>
                        
            <li className="nav-item">
                <a className="nav-link text-capitalize text-light" href="#contact">যোগাযোগ করুন </a>
            </li>
        </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar