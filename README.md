# 검색어 추천 기능

## 실행방법

[배포사이트](localhost:3000) 로 접속. 또는,

 - GitHub에서 Git이나 GitHub Desktop 등으로 Clone 후, Clone한 위치로 들어갑니다.
 - windows 기준 cmd 창에서 `npm install`로 npm을 설치합니다.
 - `npm start`로 실행할 수 있습니다

## 지원 브라우저
Chrome

## 상태관리

검색어와 추천 검색어 리스트는 Redux로 관리함.  
그 외의 상태는 useState를 이용한 로컬 상태로 관리함.

검색어 입력과 추천 리스트는 자주 변경되는 상태이고, Search와 Recommend 컴포넌트에서 자주 사용되므로 Context보다는
Redux를 사용함. 현재는 App의 크기가 작아 Redux만의 이점이 크지는 않지만, 나중에 상태 규모가 커질 것을 대비하여 Redux로 결정함.

Redux 폴더 구조에 대한 고민이 많았으며, 상태가 2개뿐인 점을 고려하여 하나의 module 파일에 redux를 작성함.

## 스타일

SCSS를 import해서 사용.

사용자에게 직접 보여지는 사이트이기 떄문에 CSS-in-JS보다는 SCSS를 사용함.
변수 기능 등을 사용할 수 있고, 컴포넌트 양이 늘어날 것을 대비하여 일반 CSS보다 낫다고 판단하였음.

## 배포

S3와 Cloundfront를 이용.

## API 통신

axios 라이브러리 이용. 코드 가독성을 위해 async/await 이용.
input이 바뀌어도 서버에서의 응답이 같은 현상 발생. CORS 에러를 막기 위해 같은 응답만 주는 건지는 불명.

## 최적화

 - useDebounce 커스텀 훅을 이용하여 1초동안 입력이 없을 때만 서버와 통신하도록 함. lodash 라이브러리는 크기가 커서 커스텀 훅으로 구현함.

## 어려웠던 점
 - 처음 CRA때 TypeScript template을 쓰지 않고 직접 typescript 설정을 하면서 많은 시간이 소요됨. 이후, CRA를 다시 함.
 - npx audit fix --force했다가 라이브러리 dependency가 꼬여버려서 git reset으로 해결. 
 - Redux 파일 구조, Search와 Recommend 컴포넌트의 위치, SearchContainer를 만드는게 가장 나은 방안인지 고민이 가장 컸음. redux로 검색 기능을 구현한 다른 대형 프로젝트의 파일 구조를 참고하여 결정.
