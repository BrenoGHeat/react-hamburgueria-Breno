import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({openModal , totalItem}) => {
  const [value, setValue] = useState("");

  return (
    <header className={styles.header}>
      <div className={styles.miniHeader}>
      <img src={Logo} alt="Logo Kenzie Burguer" />
      <div>
        <button onClick={openModal}>
          <MdShoppingCart size={32} />
          <span>{totalItem}</span>
        </button>
        {/* <form>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">
            <MdSearch size={21} />
          </button>
        </form> */}
      </div>
      </div>
    </header>
  );
};
