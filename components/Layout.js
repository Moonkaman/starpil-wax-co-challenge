import React, {useState} from 'react'

import { Collapse, Toast, ToastContainer } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

// A component from Next.js that lets me change what's in the head of the document
import Head from 'next/head'

// A component to serve optimized images
import Image from 'next/image'

// Image import
import evaHairCarePic from '../assets/icons/eva-hair-care-logo.jpg'


// Importing styles
import layoutStyles from '../styles/Layout.module.css'

// Component imports
import { MobileNav } from './MobileNav'

// This component wraps the application so anything added to this component will show up on every page
// In this case I'm using it to set the title, meta, favicon and add the navbar to everypage
export default function Layout({children}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartItems, setCartItems] = useState(0)
  const [toasts, setToasts] = useState([])

  const closeMobileNav = () => setMobileNavOpen(false)
  const openMobileNav = () => setMobileNavOpen(true)
  const toggleSearch = () => setSearchOpen(!searchOpen)

  const removeToast = (toastIndex) => {
    setToasts(toasts.filter((toast, index) => index !== toastIndex))
  }

  const addCartItem = () => {
    setCartItems(cartItems + 1)
    setToasts([
      ...toasts,
      "Item successfully added to cart"
    ])
  }

  console.log(toasts)

  return (
    <>
      <Head>
        <title>Starpil Wax CO</title>
        <meta name="keywords" content="WAX" />
        <meta name="description" content="Leading hair removal wax supplier offering the best wax kits and accessories. We provide everything you need from body waxing kit to hair removal wax warmer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* inline styles to get the toast container in a fixed position and add some padding */}
      <ToastContainer position="bottom-end" style={{position: 'fixed !important', padding: '1rem'}}>
        {toasts.map((toastMessage, index) => {
          // CSS in JS
          const toastHeaderSyles = {
            justifyContent: 'space-between'
          }

          return (
            <Toast onClose={() => removeToast(index)} key={index} delay={3000} autohide>
              <Toast.Header style={toastHeaderSyles}>
                Item Added to Cart
              </Toast.Header>
              <Toast.Body>
                {toastMessage}
              </Toast.Body>
            </Toast>
          )
        })}
      </ToastContainer>

      <header>
        <MobileNav open={mobileNavOpen} close={closeMobileNav}  />
        <div className={layoutStyles.styleBanner}>
          40% OFF AND FREE SHIPPING SITEWIDE!
        </div>
        <nav className={layoutStyles.accountNav}>
          <ul>
            <a href="#">
              <li>ACCOUNT</li>
            </a>
            <a href="#">
              <li>CART ({cartItems})</li>
            </a>
            <a href="#">
              <li>CHECKOUT</li>
            </a>
          </ul>
        </nav>
        <div>
          <div className={layoutStyles.headerMiddleContainer}>
            <FontAwesomeIcon icon={faBars} className={layoutStyles.mobileNavBtn} onClick={openMobileNav} />
            <Image src={evaHairCarePic} alt="Eva hair care logo"/>
            <input placeholder="Search" />
            <FontAwesomeIcon icon={faSearch} className={layoutStyles.mobileSearchBtn} onClick={toggleSearch} />
          </div>
          <div className="navBottom">
        </div>
        <Collapse className={layoutStyles.mobileSearchContainer} in={searchOpen}>
          <div>
            <input placeholder="Search" />
          </div>
        </Collapse>
        <nav className={layoutStyles.storeNav}>
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Collections</li>
            </a>
            <a href="#">
              <li>Professional</li>
            </a>
            <a href="#">
              <li>Eva Pro Rewards</li>
            </a>
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Contact Us</li>
            </a>
            <a href="#">
              <li>Quiz</li>
            </a>
          </ul>
        </nav>
        </div>
      </header>
      {React.cloneElement(children, {addCartItem})}
      <footer>
        <hr />
        <div className="content">
          <span>
            <h3>MAIN MENU</h3>
            <ul>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Collections</li>
              </a>
              <a href="#">
                <li>Professional</li>
              </a>
              <a href="#">
                <li>Eva Pro Rewards</li>
              </a>
              <a href="#">
                <li>About Us</li>
              </a>
              <a href="#">
                <li>Contact Us</li>
              </a>
              <a href="#">
                <li>Quiz</li>
              </a>
            </ul>
          </span>

          <span>
            <h3>FOLLOW US OUT THERE</h3>
            <ul>
              <a href="#">
                <li><FontAwesomeIcon icon={faFacebookSquare} size="xs"/> Facebook</li>
              </a>
              <a href="#">
                <li><FontAwesomeIcon icon={faInstagramSquare} size="xs"/> Instagram</li>
              </a>
            </ul>
          </span>

          <span>
            <h3>WE ARE EVA</h3>
            <p>A brand with a mission to create cutting edge, effective eco-hair care for the modern woman.</p>
          </span>

          <span>
            <h3>NEWSLETTER</h3>
            
            <div className="email-input">
              <input type="text" placeholder="your@email.com" />
              <button>SUBSCRIBE</button>
            </div>
          </span>
        </div>
      </footer>
    </>
  )
}
