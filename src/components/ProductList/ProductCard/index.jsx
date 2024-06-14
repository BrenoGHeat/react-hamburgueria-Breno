import styles from "./style.module.scss";


export const ProductCard = ({ product }) => {
    return(
        <li className={styles.cards}>
            <img src={product.img} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <span className="one">{product.category}</span>
                <span className="money">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button>Adicionar</button>
            </div>
        </li>
    )
}