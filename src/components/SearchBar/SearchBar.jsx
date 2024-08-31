import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSubmit }) => {
  return (
    <>
      <header className={css.searchBar}>
        <form className={css.inputForm}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.inputBtn}>
            <IoIosSearch className={css.icon} />
            {/* Search */}
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
