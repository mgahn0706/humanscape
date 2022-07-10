import { useState } from "react";
import { getRecommendList } from "../action/API/SearchAPI";

const Search = () => {
  const [keyword, setKeyword] = useState<string>("");

  const handleSearch = (input: string) => {
    setKeyword(input);
    getRecommendList(input).then((res) => {
      console.log(res);
    });
  };

  return (
    <input
      placeholder="질환명을 입력해 주세요."
      value={keyword}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
    />
  );
};

export default Search;
