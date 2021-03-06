import { getRecommendList } from "../action/API/SearchAPI";
import { DiseaseType } from "../interface/Interface";
import "../style/searchStyle.scss";
import { AiOutlineSearch } from "react-icons/ai";
import useDebounce from "../action/hooks/useDebounce";

interface SearchProps {
  setRecommend: (input: DiseaseType[]) => void;
  keyword: string;
  setKeyword: (input: string) => void;
  handleArrowKey: (e: React.KeyboardEvent) => void;
}

const Search = ({
  setRecommend,
  keyword,
  setKeyword,
  handleArrowKey,
}: SearchProps) => {
  useDebounce(
    () => {
      getRecommendList(keyword).then((res) => {
        keyword ? setRecommend(res) : setRecommend([]);
      });
    },
    1000,
    [keyword]
  );

  const handleSearch = (input: string) => {
    setKeyword(input);
  };

  return (
    <div className="search">
      <AiOutlineSearch />
      <input
        className="search__input"
        onKeyDown={handleArrowKey}
        placeholder="질환명을 입력해 주세요."
        value={keyword}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <button
        className="search__button"
        onClick={() => {
          window.alert(`${keyword}(이)가 검색됨`);
        }}
      >
        검색
      </button>
    </div>
  );
};

export default Search;
