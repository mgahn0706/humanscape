import SearchContainer from "./component/containers/SearchContainer";
import "./style/mainStyle.scss";
const Main = () => {
  return (
    <div className="main__container">
      <p className="header__title">
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </p>
      <SearchContainer />
    </div>
  );
};
export default Main;
