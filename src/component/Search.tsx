import { useState } from "react";
import { getRecommendList } from "../action/API/SearchAPI";
import { DiseaseType } from "../interface/Interface";
import "../style/searchStyle.scss";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchProps {
  setRecommend: (input: DiseaseType[]) => void;
}

const Search = ({ setRecommend }: SearchProps) => {
  const [keyword, setKeyword] = useState<string>("");

  const handleSearch = (input: string) => {
    setKeyword(input);

    getRecommendList(input).then((res) => {
      setRecommend(res);
    });
  };

  return (
    <div className="search">
      <AiOutlineSearch />
      <input
        className="search__input"
        placeholder="질환명을 입력해 주세요."
        value={keyword}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <button className="search__button">검색</button>
    </div>
  );
};

export default Search;
