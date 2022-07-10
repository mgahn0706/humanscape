import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { setRecommend } from "../../modules/recommend";
import Search from "../Search";
import Recommend from "../Recommend";
import { DiseaseType } from "../../interface/Interface";
import { setKeyword } from "../../modules/keyword";
import { useState } from "react";

const SearchContainer = () => {
  const recommendData = useSelector(
    (state: RootState) => state.recommendReducer.recommendData
  );

  const keyword = useSelector(
    (state: RootState) => state.keywordReducer.keyword
  );
  const dispatch = useDispatch();

  const dispatchRecommend = (input: DiseaseType[]) => {
    dispatch(setRecommend(input));
  };

  const dispatchKeyword = (input: string) => {
    dispatch(setKeyword(input));
  };

  const [index, setIndex] = useState<number>(0);

  const handleArrowKey = (e: React.KeyboardEvent) => {
    if (recommendData && recommendData.length !== 0) {
      switch (e.key) {
        case "ArrowDown":
          setIndex(index + 1);
          if (index >= recommendData.length - 1) {
            setIndex(recommendData.length - 1);
          }
          break;
        case "ArrowUp":
          setIndex(index - 1);
          if (index < 0) {
            setIndex(-1);
            setKeyword("");
          }
          break;
      }
    }
  };

  return (
    <div className="search__container">
      <Search
        setRecommend={dispatchRecommend}
        keyword={keyword}
        setKeyword={dispatchKeyword}
        handleArrowKey={handleArrowKey}
      />
      <Recommend
        recommendData={recommendData}
        setKeyword={dispatchKeyword}
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
};

export default SearchContainer;
