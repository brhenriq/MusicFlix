import React from 'react';
import TemplateBase from '../../components/TemplateBase';
import VideoIframeResponsive from '../../components/BannerMain/components/VideoIframeResponsive';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function Player({
  url
}) {
  const youTubeID = getYouTubeId(url);

  return (
    <TemplateBase>
      <VideoIframeResponsive
        youtubeID={youTubeID}
      />
    </TemplateBase>
  );
}
