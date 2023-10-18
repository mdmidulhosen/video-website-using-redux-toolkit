import axios from "../../utils/Axios";
export const getVideo = async (id) => {
  const res = await axios.get(`/videos/${id}`);
  return res.data;
};
