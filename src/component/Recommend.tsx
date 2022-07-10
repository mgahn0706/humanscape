import { DiseaseType } from "../interface/Interface";
import { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface RecommendProps {
  recommendData?: DiseaseType[];
  setKeyword: (input: string) => void;
}

const Recommend = ({ recommendData, setKeyword }: RecommendProps) => {
  useEffect(() => {}, [recommendData]);
  return recommendData?.length !== 0 ? (
    <div className="recommend__container">
      <p className="recommend__title">추천 검색어</p>
      <ul className="recommend__list">
        {recommendData?.map((item) => {
          return (
            <li
              className="recommend__item"
              key={item.id}
              onClick={() => {
                setKeyword(item.name);
              }}
            >
              <AiOutlineSearch />
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div />
  );
};

export default Recommend;
