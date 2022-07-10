const SET_KEYWORD = "SET_KEYWORD" as const;

export const setKeyword = (input: string) => ({
  type: SET_KEYWORD,
  payload: input,
});

type KeywordAction = ReturnType<typeof setKeyword>;

const initialState = {
  keyword: "",
};

interface keywordState {
  keyword: string;
}

const keywordReducer = (
  state: keywordState = initialState,
  action: KeywordAction
) => {
  switch (action.type) {
    case "SET_KEYWORD":
      return { ...state, keyword: action.payload };
    default:
      return state;
  }
};

export default keywordReducer;
