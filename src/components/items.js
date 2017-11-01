import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	

	const imageUrl = video.snippet.thumbnails.default.url;


	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
		<div >
			<img className="thumbnails" src={imageUrl} /> 
			<div className="details">{video.snippet.title}</div>
		</div>
		</li>);
}

export default VideoListItem;