import React from 'react';

const VideoCard = ({
  thumbnailUrl,
  title,
  channelName,
  channelLogo,
  views,
  duration,
  uploadDate,
  videoUrl,
}) => {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white dark:bg-gray-900"
    >
      {/* Thumbnail with duration overlay */}
      <div className="relative">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded">
          {duration}
        </span>
      </div>

      {/* Content Section */}
      <div className="flex p-4 space-x-4">
        {/* Channel Logo */}
        <img
          src={channelLogo}
          alt={channelName}
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Title + Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">{channelName}</p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {views} • {uploadDate}
          </p>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
