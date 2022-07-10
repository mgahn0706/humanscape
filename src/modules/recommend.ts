import { DiseaseType } from "../interface/Interface";

const SET_RECOMMEND = "SET_RECOMMEND" as const;

export const setRecommend = (input: DiseaseType[]) => ({
  type: SET_RECOMMEND,
  payload: input,
});

type RecommendAction = ReturnType<typeof setRecommend>;

const initialState = {
  recommendData: [],
};

interface recommendState {
  recommendData: DiseaseType[];
}

const recommendReducer = (
  state: recommendState = initialState,
  action: RecommendAction
) => {
  switch (action.type) {
    case "SET_RECOMMEND":
      return { ...state, recommendData: action.payload };
    default:
      return state;
  }
};

export default recommendReducer;
