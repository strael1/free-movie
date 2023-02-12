import styles from '@/styles/movie.module.css';

export default function Movie({id,title,release_date,poster_path}){
    const imagePath = 'https://image.tmdb.org/t/p/original';
    return(
        <div key={id} className={styles.movieContainer}>
            <img className={styles.image} src={imagePath + poster_path} alt={title} />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content}>{release_date}</p>
        </div>
    )
}