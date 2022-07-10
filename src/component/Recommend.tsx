import { DiseaseType } from "../interface/Interface";
import { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface RecommendProps {
  recommendData?: DiseaseType[];
}

const Recommend = ({ recommendData }: RecommendProps) => {
  useEffect(() => {}, [recommendData]);

  return (
    <div className="recommend__container">
      <ul className="recommend__list">
        {recommendData ? (
          recommendData.map((item) => {
            return (
              <li className="recommend__item" key={item.id}>
                <AiOutlineSearch />
                {item.name}
              </li>
            );
          })
        ) : (
          <li>추천 검색어 없음</li>
        )}
      </ul>
    </div>
  );
};

export default Recommend;
