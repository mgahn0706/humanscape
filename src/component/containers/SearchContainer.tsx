import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { setRecommend } from "../../modules/recommend";
import Search from "../Search";
import Recommend from "../Recommend";
import { DiseaseType } from "../../interface/Interface";

const SearchContainer = () => {
  const recommendData = useSelector(
    (state: RootState) => state.recommendReducer.recommendData
  );
  const dispatch = useDispatch();

  const dispatchRecommend = (input: DiseaseType[]) => {
    dispatch(setRecommend(input));
  };

  return (
    <div className="search__container">
      <Search setRecommend={dispatchRecommend} />
      <Recommend recommendData={recommendData} />
    </div>
  );
};

export default SearchContainer;
