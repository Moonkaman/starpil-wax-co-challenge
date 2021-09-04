import Image from 'next/image'

import ingredientsImage from '../assets/ingredientspage_Folder/Links/iconsingredientspage-02.png'

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
    </section>
      
    </>
  )
}
