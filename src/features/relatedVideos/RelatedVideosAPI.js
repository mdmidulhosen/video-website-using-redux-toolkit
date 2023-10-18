import axios from "../../utils/Axios";
export const getRelatedVideos = async ({tags, id}) => {
    console.log(tags)
  const limit = 5;
  let queryString =tags?.length > 0
  ? tags.map((tag) => `tags_like=${tag}`).join("&") +
    `&id_ne=${id}&_limit=${limit}`
  : `id_ne=${id}&_limit=${limit}`;
  const res = await axios.get(`/videos?${queryString}`);
  return res.data;
};
