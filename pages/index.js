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
      
      <Image src={ingredientsImage} alt="Ingredients list" />
    </section>
      
    </>
  )
}
