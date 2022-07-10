import { DiseaseType } from "../interface/Interface";
import { useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface RecommendProps {
  recommendData?: DiseaseType[];
  setKeyword: (input: string) => void;
  index: number;
  setIndex: (idx: number) => void;
}

const Recommend = ({
  recommendData,
  setKeyword,
  index,
  setIndex,
}: RecommendProps) => {
  useEffect(() => {}, [recommendData]);

  const ref = useRef(null);

  return recommendData?.length !== 0 ? (
    <div className="recommend__container">
      <p className="recommend__title">추천 검색어</p>
      <ul className="recommend__list" ref={ref}>
        {recommendData?.map((item, idx) => {
          return (
            <li
              className={
                idx === index ? "recommend__item--selected" : "recommend__item"
              }
              key={item.id}
              onClick={() => {
                setKeyword(item.name);
                setIndex(idx);
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
