import styles from '@/styles/About.module.css';
import HeadDefault from './head';

export default function About(){
    return (
        <>  
            <HeadDefault />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, facere repellendus corporis eius dolore cumque provident sit unde vero sed! Asperiores debitis vel labore quia quod sed adipisci consequatur non?</p>
            <h1 className={styles.title}>Title</h1>
        </>
    )
}