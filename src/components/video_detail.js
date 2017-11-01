import React from 'react';

const VideoDetail = ({video, onVideoSelect}) => {
	if(!video) {
		return <div>Loading ...</div>;
	}

	const videoId = video.id.videoId;
	const url = 'https://www.youtube.com/embed/' + videoId;

	return (<div>
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>	
			</div>
			<div className="details">
				<label>Title: </label>
				<strong>{video.snippet.title}</strong> <br />
				<label>Description: </label>
				{video.snippet.description} <br />
				<label>Channel:</label>
				{video.snippet.channelTitle}
			</div>
 	</div>
	)
}

export default VideoDetail;