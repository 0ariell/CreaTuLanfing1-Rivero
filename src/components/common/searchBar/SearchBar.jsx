// SearchBar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import styles from "./searchBar.module.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchText.trim()) {
      setIsError(true);
      setTimeout(() => setIsError(false), 400);
      return;
    }

    setIsSearching(true);
    navigate(`/buscar?query=${searchText}`);
    setTimeout(() => setIsSearching(false), 1000);
  };

  return (
    <div
      className={`${styles.containerSearch} ${
        isSearching ? styles.searching : ""
      }`}
    >
      <input
        className={`${styles.searchBar} ${isError ? styles.error : ""}`}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Buscar productos, marcas y más..."
        aria-label="Buscar"
      />
      <button
        onClick={handleSearch}
        className={styles.searchButton}
        aria-label="Buscar"
      >
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
