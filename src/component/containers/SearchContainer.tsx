import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { setRecommend } from "../../modules/recommend";
import Search from "../Search";
import Recommend from "../Recommend";
import { DiseaseType } from "../../interface/Interface";
import { setKeyword } from "../../modules/keyword";

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

  return (
    <div className="search__container">
      <Search
        setRecommend={dispatchRecommend}
        keyword={keyword}
        setKeyword={dispatchKeyword}
      />
      <Recommend recommendData={recommendData} setKeyword={dispatchKeyword} />
    </div>
  );
};

export default SearchContainer;
