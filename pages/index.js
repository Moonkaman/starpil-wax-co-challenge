import Image from 'next/image'

//----------------------- \ Image imports / ---------------------\\
import ingredientsImage from '../assets/ingredientspage_Folder/Links/iconsingredientspage-02.png'
import aloeImage from '../assets/images/aloe.jpg'
import bambooImage from '../assets/images/bamboo.jpg'
import branchImage from '../assets/images/branch.jpg'
import leafWoman from '../assets/images/shutterstock_1483243850.jpg'
import elineLogo from '../assets/icons/eline-logo.jpg'
import silkProteinImage from '../assets/images/silk protein.jpg'
import gojiImage from '../assets/images/goji.jpg'
import quinoaMilkImage from '../assets/images/shutterstock_535752073.jpg'
//--------------------------------------------------------------\\

import homeStyles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>

    <section className={homeStyles.formulasSection}>
      <div>
        <h2>Experience the power of</h2>
        <h2>plant-centric formulas</h2>
      </div>
      
      <div className={homeStyles.formulasSectionImage}>
        <Image src={ingredientsImage} alt="Ingredients list" />
      </div>
    </section>

    <section className={homeStyles.ecoSection}>
      <div>
        <h2>introducing</h2>
        <h2>ECO-HAIR CARE</h2>
      </div>
      
      <p>Our high-performance products rely on the power of plant-centric, botanical formulas. These collections are packed with organic oils, vitamin-rich nutrients, and natural active ingredients that have created a new standard for professional salon hair care.</p>
      <p>We are committed to the maximum preservation of quality techniques, promoting only responsible and sustainable use of these natural resources.</p>
      <p>We understand the ethical responsibilities that come with sourcing plant-based ingredients. With this in mind, we have launched comprehensive initiatives to eliminate plastic by 100% and to reduce our carbon footprint by 50% by no later than 2023.</p>

      <div className={homeStyles.ecoSectionImages}>
        <Image src={aloeImage} alt="Image of aloe vera" />
        <Image src={branchImage} alt="Image of a berry branch" />
        <Image src={bambooImage} alt="Image of cut bamboo" />
      </div>
    </section>

    <Image src={leafWoman} alt="Woman hiding behind leaves" />
      
    <section className={homeStyles.elineSection}>
      <div className={homeStyles.elineLogo}>
        <Image className={homeStyles.elineLogo} src={elineLogo} alt="eLine logo" />
      </div>

      <p className={homeStyles.elineSectionMainText}>Professional formulas based on plant extracts, oils, and highly emollient active ingredients</p>

      <div className={homeStyles.elineSectionIngredients}>
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

      <div className={homeStyles.elineSectionImageItem}>
        <Image src={silkProteinImage} alt="Image of silk protein"/>
        <p>Silk Protein</p>
        {/* <Image src={gojiImage} alt="Image of a pile of goji berries"/>
        <Image src={silkProteinImage} alt="Image of silk protein"/> */}
      </div>
    </section>
    </>
  )
}
