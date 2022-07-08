import { useState } from "react";

interface DiseaseType {
  name: string;
  id: number;
}

const Recommend = () => {
  const [recommendList, setRecommendList] = useState<DiseaseType[]>([]);

  return (
    <div>
      <ul>
        {recommendList.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Recommend;
