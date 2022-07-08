import Search from "./component/Search";
import Recommend from "./component/Recommend";

const Main = () => {
  return (
    <div>
      <p>국내 모든 임상시험 검색하고 온라인으로 참여하기</p>
      <Search />
      <Recommend />
    </div>
  );
};
export default Main;
