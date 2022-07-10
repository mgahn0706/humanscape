import { DiseaseType } from "../interface/Interface";

interface RecommendProps {
  recommendData?: DiseaseType[];
}

const Recommend = ({ recommendData }: RecommendProps) => {
  return (
    <div>
      <ul>
        {recommendData ? (
          recommendData.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })
        ) : (
          <li>추천 검색어 없음</li>
        )}
      </ul>
    </div>
  );
};

export default Recommend;
