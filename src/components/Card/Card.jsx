import style from './Card.module.css'

const Card = ({title, image, date}) =>{

    return(
        <div className={style.containerCard}>
            <div className={style.cardBox}>
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <h3>{date}</h3>
            </div>
        </div>
    )
}

export default Card;