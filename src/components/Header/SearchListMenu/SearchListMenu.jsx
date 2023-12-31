import SearchListCard from "./SearchListCard";
import { SearchListMenuContainer } from "./SearchListMenuStyles";
const SearchListMenu = ({ value, setToggleSearch, filter, setToggleSearchMenu, toggleSearchMenu }) => {

  return (
    <SearchListMenuContainer>
      {!filter.length ? (
        <p>No existen producctos</p>
      ) : (
        filter.map((menu) => (
          <SearchListCard
            key={menu.id}
            {...menu}
            setToggleSearch={setToggleSearch}
            value={value}
            setToggleSearchMenu={setToggleSearchMenu}
            toggleSearchMenu={toggleSearchMenu}
          />
        ))
      )}
    </SearchListMenuContainer>
  );
};
export default SearchListMenu;
