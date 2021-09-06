import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

// A component from Next.js that lets me change what's in the head of the document
import Head from 'next/head'

// A component to serve optimized images
import Image from 'next/image'

// Image import
import evaHairCarePic from '../assets/icons/eva-hair-care-logo.jpg'


// Importing styles
import layoutStyles from '../styles/Layout.module.css'

// This component wraps the application so anything added to this component will show up on every page
// In this case I'm using it to set the title, meta, favicon and add the navbar to everypage
export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Starpil Wax CO</title>
        <meta name="keywords" content="WAX" />
        <meta name="description" content="Leading hair removal wax supplier offering the best wax kits and accessories. We provide everything you need from body waxing kit to hair removal wax warmer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className={layoutStyles.styleBanner}>
          40% OFF AND FREE SHIPPING SITEWIDE!
        </div>
        <nav className={layoutStyles.accountNav}>
          <ul>
            <li>ACCOUNT</li>
            <li>CART (0)</li>
            <li>CHECKOUT</li>
          </ul>
        </nav>
        <div>
          <div className={layoutStyles.headerMiddleContainer}>
            <Image src={evaHairCarePic} alt="Eva hair care logo"/>
            <div>
              <FontAwesomeIcon icon={faSearch} />
              <input placeholder="Search" />
            </div>
          </div>
          <div className="navBottom">
        </div>
        <nav className={layoutStyles.storeNav}>
          <ul>
            <li>Home</li>
            <li>Collections</li>
            <li>Professional</li>
            <li>Eva Pro Rewards</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Quiz</li>
          </ul>
        </nav>
        </div>
      </header>
      {children}
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
