import axios from "../../utils/Axios";
export const getVideos = async () => {
  const res = await axios.get("/videos");
  return res.data;
};
