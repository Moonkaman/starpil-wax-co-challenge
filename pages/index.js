import Image from 'next/image'

//----------------------- \ Image imports / ---------------------\\
import ingredientsImage from '../assets/icons/iconsingredientspage-02.png'
import aloeImage from '../assets/images/aloe.jpg'
import bambooImage from '../assets/images/bamboo.jpg'
import branchImage from '../assets/images/branch.jpg'
import leafWoman from '../assets/images/shutterstock_1483243850.jpg'
import elineLogo from '../assets/icons/eline-logo.jpg'
import silkProteinImage from '../assets/images/silk protein.jpg'
import gojiImage from '../assets/images/goji.jpg'
import quinoaMilkImage from '../assets/images/shutterstock_535752073.jpg'
import featuredProductImage1 from '../assets/images/featured_product_1.jpg'
import featuredProductImage2 from '../assets/images/featured_product_2.jpg'
import featuredProductImage3 from '../assets/images/featured_product_3.jpg'
import featuredProductImage4 from '../assets/images/featured_product_4.jpg'
import featuredProductImage5 from '../assets/images/featured_product_5.jpg'
import featuredProductImage6 from '../assets/images/featured_product_6.jpg'
import featuredProductImage7 from '../assets/images/featured_product_7.jpg'
import featuredProductImage8 from '../assets/images/featured_product_8.jpg'
import featuredProductImage9 from '../assets/images/featured_product_9.jpg'
import featuredProductImage10 from '../assets/images/featured_product_10.jpg'
import featuredProductImage11 from '../assets/images/featured_product_11.jpg'
import vitaminRechargeLogo from '../assets/icons/vitaminrechargelogo.jpg'
import orangePeelsImage from '../assets/images/orange_peels.jpg'
import vitaminsImage from '../assets/images/vitamins.jpg'
import arganOilImage from '../assets/images/argan_oil.jpg'
import capiloLogo from '../assets/icons/capilo-logo.jpg'
import splashImage from '../assets/images/splash.png'
import lavanderImage from '../assets/images/lavander.jpg'
import raspberryImage from '../assets/images/raspberries.jpg'
import hydraInLogo from '../assets/icons/hydrain-logo.jpg'
import jojobaImage from '../assets/images/beans.jpg'
import sesameImage from '../assets/images/sesame.jpg'
import yellowFlower from '../assets/images/yellow_flower.jpg'
import womanLookingDown from '../assets/images/woman-looking-down.jpg'
//--------------------------------------------------------------\\

//----------------------- \ Component imports / ---------------------\\
import Product from '../components/Product'
//--------------------------------------------------------------------\\

export default function Home({addCartItem}) {
  return (
    <>
      <section className="formulas-section">
        <div>
          <h2>Experience the power of</h2>
          <h2>plant-centric formulas</h2>
        </div>
        
        <div className='formulas-section-image'>
          <Image src={ingredientsImage} alt="Ingredients list" />
        </div>
      </section>

      <section className="eco-section">
        <div>
          <h2>introducing</h2>
          <h2>ECO-HAIR CARE</h2>
        </div>
        
        <p>Our high-performance products rely on the power of plant-centric, botanical formulas. These collections are packed with organic oils, vitamin-rich nutrients, and natural active ingredients that have created a new standard for professional salon hair care.</p>
        <p>We are committed to the maximum preservation of quality techniques, promoting only responsible and sustainable use of these natural resources.</p>
        <p>We understand the ethical responsibilities that come with sourcing plant-based ingredients. With this in mind, we have launched comprehensive initiatives to eliminate plastic by 100% and to reduce our carbon footprint by 50% by no later than 2023.</p>

        <div className="eco-section-images">
          <Image src={aloeImage} alt="Image of aloe vera" />
          <Image src={branchImage} alt="Image of a berry branch" />
          <Image src={bambooImage} alt="Image of cut bamboo" />
        </div>
      </section>

      <div className="hero-shot">
        <Image src={leafWoman} alt="Woman hiding behind leaves" />
      </div>
        
      <section className="eline-section">
        <div className="logo">
          <Image src={elineLogo} alt="eLine logo" />
        </div>

        <p className="main-text">Professional formulas based on plant extracts, oils, and highly emollient active ingredients</p>

        <div className="ingredients">
          <span>
            <ul>
              <li>Wheat Germ</li>
              <li>Amber</li>
              <li>Safflower</li>
            </ul>
          </span>
          <span>
            <ul>
              <li>Bamboo</li>
              <li>Avacado</li>
              <li>Lotus</li>
            </ul>
          </span>
          <span>
            <ul>
              <li>Shikaki</li>
              <li>Water Lily</li>
              <li>Jojoba</li>
            </ul>
          </span>
          <span>
            <ul>
              <li>Provitamin B5</li>
              <li>Aloe Vera</li>
              <li>Thermal Water</li>
            </ul>
          </span>
        </div>

        <div className="image-item">
          <Image src={silkProteinImage} alt="Image of silk protein"/>
          <p>Silk Proteins</p>
        </div>

        <div className="image-item">
          <Image src={gojiImage} alt="Image of a pile of goji berries"/>
          <p>Goji</p>
        </div>

        <div className="image-item">
          <Image src={quinoaMilkImage} alt="Image of a splash of quinoa milk"/>
          <p>Quinoa Milk</p>
        </div>
      </section>

      <section className="featured-products-section">
        <h2>FEATURED COLLECTION</h2>
        <div className="product-container">
          <Product productDetails={{
            name: "E-LINE HL LOTION",
            category: 'Eva Professional Hair Care',
            img: featuredProductImage1,
            imgAlt: "Eline hl lotion bottle",
            price: 35.95,
            addCartItem
          }} />

          <Product productDetails={{
            name: "E-LINE DERMOCARE CONDITIONER",
            category: 'Eva Professional Hair Care',
            img: featuredProductImage2,
            imgAlt: "Eline dermocare conditioner bottle",
            price: 32.99,
            addCartItem
          }} />

          <Product productDetails={{
            name: "E-LINE DERMOCARE WASH",
            category: 'Eva Professional Hair Care',
            img: featuredProductImage2,
            imgAlt: "Eline dermocare wash bottle",
            price: 32.99,
            addCartItem
          }} />
        </div>
      </section>

      <section className="vitamin-section">
          <Image src={vitaminRechargeLogo} alt="Vitamin recharge logo" />
          <p className="main-text">Avant-garde hair products that are scrupulously formulated with a diverse range of vitamins for hair</p>
          <div className="vitamins-and-ingredients-container">
            <span>
              <h3>Vitamins:</h3>
              <p>B1, B2, B6, PP, E, BIOTIN, PANTHENOL</p>
            </span>
            <span>
              <h3>Natural Ingredients:</h3>
              <p>Bitter Orange, Olive Oil, Sea Salt, Seaweed, Sea Algae, Shea Butter, Avocado Oil.</p>
            </span>
          </div>
          <div>
            <div className="image-item">
              <Image src={arganOilImage} alt="Image of argan oil" />
              <p>Argan Oil</p>
            </div>
            <div className="image-item">
              <Image src={orangePeelsImage} alt="Image of orange peels" />
              <p>Bitter Orange Extract</p>
            </div>
            <div className="image-item">
              <Image src={vitaminsImage} alt="Image of B12 vitamin pills" />
              <p>Vitamin B12</p>
            </div>
          </div>
      </section>

      <section className="featured-products-section">
        <h2>FEATURED COLLECTION</h2>
          <div className="product-container">
            <Product productDetails={{
              name: "VITAMIN RECHARGE DETOX & CO.",
              category: 'Eva Professional Hair Care',
              img: featuredProductImage3,
              imgAlt: "VITAMIN RECHARGE DETOX & CO.",
              price: 5.99,
              addCartItem
            }} />

            <Product productDetails={{
              name: "VITAMIN RECHARGE THE ORIGINAL",
              category: 'Eva Professional Hair Care',
              img: featuredProductImage4,
              imgAlt: "VITAMIN RECHARGE THE ORIGINAL",
              price: 5.99,
              addCartItem
            }} />

            <Product productDetails={{
              name: "VITAMIN RECHARGE BUTTER",
              category: 'Eva Professional Hair Care',
              img: featuredProductImage5,
              imgAlt: "VITAMIN RECHARGE BUTTER",
              price: 29.99,
              addCartItem
            }} />
          </div>
      </section>

      <section className="capilo-section">
        <div className="logo">
          <Image src={capiloLogo} alt="capilo capillary treatments logo"/>
        </div>

        <p className="main-text">The perfect symbiosis between active and natural ingredients.</p>

        <div className="lists">
          <span>
            <ul>
              <li>Stem Cell Activators</li>
              <li>Quillaia Extract</li>
              <li>Echinacea Extract</li>
            </ul>
          </span>
          <span>
            <ul>
              <li>Rosemary Extract</li>
              <li>Bitter Orange Extract</li>
              <li>Echinacea Extract</li>
            </ul>
          </span>
          <span>
            <ul>
              <li>Stem Cell Activators</li>
              <li>Quillaia Extract</li>
              <li>Echinacea Extract</li>
            </ul>
          </span>
        </div>

        <div className="image-item">
          <Image src={splashImage} alt="Image of thermal spring water splash" />
          <p>Thermal Spring Water</p>
        </div>

        <div className="image-item">
          <Image src={lavanderImage} alt="Image of lavander" />
          <p>Lavender Extract</p>
        </div>

        <div className="image-item">
          <Image src={raspberryImage} alt="Image of raspberries" />
          <p>Raspberry Vinegar</p>
        </div>
      </section>

      <section className="featured-products-section">
        <h2>FEATURED COLLECTION</h2>
          <div className="product-container">
            <Product productDetails={{
              name: "CAPILO ENERGIKUM SHAMPOO N.02",
              category: 'Eva Professional Hair Care',
              img: featuredProductImage6,
              imgAlt: "CAPILO ENERGIKUM SHAMPOO N.02",
              price: 19.99,
              addCartItem
            }} />

            <Product productDetails={{
              name: "CAPILO EKILIBRIUM OILY SCALP AND DRY HAIR REGIMEN",
              category: 'Eva Professional Hair Care',
              img: featuredProductImage7,
              imgAlt: "CAPILO EKILIBRIUM OILY SCALP AND DRY HAIR REGIMEN",
              price: 85.99,
              addCartItem
            }} />

            <Product productDetails={{
              name: "CAPILO VITALIKUM PEELING N.22",
              category: 'Eva Professional Hair Care',
              img: featuredProductImage8,
              imgAlt: "CAPILO VITALIKUM PEELING N.22",
              price: 34.99,
              addCartItem
            }} />
          </div>
      </section>

      <section className="hydrain-section">
        <div className="logo">
          <Image src={hydraInLogo} alt="Hydra in logo" />
        </div>

        <p className="main-text">Hydra- In encapsulates all that defines Eco-hair care, relying on luxurious ancient oils such as:</p>

        <div className="oils">
          <p>Safflower</p>
          <p>Babassu</p>
          <p>Boabab</p>
        </div>

        <div className="image-item">
          <Image src={jojobaImage} alt="Image of jojoba seeds"/>
          <p>Jojoba</p>
        </div>

        <div className="image-item">
          <Image src={sesameImage} alt="Image of sesame seeds"/>
          <p>Sesame</p>
        </div>

        <div className="image-item">
          <Image src={yellowFlower} alt="Image of a St. John's Wort flower"/>
          <p>{"Saint John's Wort"}</p>
        </div>
      </section>

      <section className="featured-products-section">
        <h2>FEATURED COLLECTION</h2>
          <div className="product-container">
            <Product productDetails={{
              name: "HYDRA-IN BEAUTY OIL N.73",
              category: 'Eva Professional Hair Care',
              img: featuredProductImage9,
              imgAlt: "HYDRA-IN BEAUTY OIL N.73",
              price: 15.99,
              addCartItem
            }} />

            <Product productDetails={{
              name: "HYDRA-IN CARTHAMUS DENSI-MOUSSE N.43",
              category: 'Eva Professional Hair Care',
              img: featuredProductImage10,
              imgAlt: "HYDRA-IN CARTHAMUS DENSI-MOUSSE N.43",
              price: 17.99,
              addCartItem
            }} />

            <Product productDetails={{
              name: "HYDRA-IN CARTHAMUS LIGHT CREAM N.44",
              category: 'Eva Professional Hair Care',
              img: featuredProductImage11,
              imgAlt: "HYDRA-IN CARTHAMUS LIGHT CREAM N.44",
              price: 19.99,
              addCartItem
            }} />
          </div>
      </section>
      <div className="hero-shot">
        <Image src={womanLookingDown} alt="Woman looking down at a plant" />
      </div>
      <div className="questions">
        <p>Have some more questions? <a href="#">See Our FAQs</a> or <a href="#">Contact Us</a></p>
      </div>
    </>
  )
}
