import CardImage from "./CardImage";
import styles from './HomePage.module.css'

const HomePage = () => {


    return (
        <CardImage
            title="Productopia"
            text="If we have it, we sell it"
            imageSrc="/img/hero.jpg"
            classNameProps={styles.cardImage}

        ></CardImage>
    )

}

export default HomePage;