import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useSearchParams();
  console.log(search.get("keyword"));
  return null;
};

export default Search;
