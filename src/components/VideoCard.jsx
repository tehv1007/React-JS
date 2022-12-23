import React from "react";
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, type }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video: video } }); //co the truyen them object ben trong navigate
  };

  const isList = type === "list";

  return (
    <li className={isList ? "flex gap-1 m-2" : ""} onClick={handleClick}>
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div>
        <h3 className="my-2 line-clamp-2">{video.snippet.title}</h3>
        <p className="text-sm opacity-80">{video.snippet.channelTitle}</p>
        <p className="text-sm opacity-80">
          {format(video.snippet.publishedAt)}
        </p>
      </div>
    </li>
  );
};

export default VideoCard;
