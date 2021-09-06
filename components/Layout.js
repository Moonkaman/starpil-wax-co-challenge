import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// A component from Next.js that lets me change what's in the head of the document
import Head from 'next/head'

// A component to serve optimized images
import Image from 'next/image'

// Image import
import evaHairCarePic from '../assets/icons/evahaircarelogo.jpg'


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
        {children}
      </header>
    </>
  )
}
