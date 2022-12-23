import React from "react";
import { useQuery } from "@tanstack/react-query";
import Youtube from "../api/youtube";
import VideoCard from "./VideoCard";

const RelatedVideos = ({ id }) => {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["related", id],
    queryFn: () => {
      const youtube = new Youtube();
      return youtube.relatedVideos(id);
    },
  });

  return (
    <>
      {isLoading && <p>'Loading...'</p>}
      {error && <p> 'An error has occurred: ' + {error.message}</p>}
      {videos && (
        <ul className="grid grid-cols-1 gap-y-4 gap-2">
          {videos.map((item) => (
            <VideoCard key={item.id} video={item} type="list" />
          ))}
        </ul>
      )}
    </>
  );
};

export default RelatedVideos;
