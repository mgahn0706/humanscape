import axios from "axios";

const URL =
  "https://humanscape-frontend-assignment-ct.s3.ap-northeast-2.amazonaws.com";

export const getRecommendList = async (input: string) => {
  try {
    console.log("API 호출");
    const response = await axios
      .create({ baseURL: URL })
      .get(`diseases.json?keyword=${input}`);
    return response.data.splice(0, 7);
  } catch (e) {
    return Promise.reject(e);
  }
};
