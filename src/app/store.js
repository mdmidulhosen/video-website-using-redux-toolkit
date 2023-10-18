import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/VideosSlice";
import tagsReducer from "../features/tags/TagsSlice";
import videoReducer from "../features/video/VideoSlice";
import relatedVideosReducer from "../features/relatedVideos/RelatedVideosSlice"
import filterReducer from "../features/filter/FilterSlice"
export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer
  },
});
