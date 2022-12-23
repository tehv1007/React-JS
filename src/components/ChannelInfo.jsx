import React from "react";
import { useQuery } from "@tanstack/react-query";
import Youtube from "../api/youtube";

const ChannelInfo = ({ id, title }) => {
  const {
    isLoading,
    error,
    data: url,
  } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => {
      const youtube = new Youtube();
      return youtube.channelThumnail(id);
    },
  });
  return (
    <div className="flex my-4 mb-8 items-center">
      <img className="w-10 h-10 rounded-full" src={url} alt="" />
      <p className="text-lg font-medium ml-2">{title}</p>
    </div>
  );
};

export default ChannelInfo;
