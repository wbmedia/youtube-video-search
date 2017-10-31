import React from 'react';

const VideoDetail = ({video, onVideoSelect}) => {
	if(!video) {
		return <div>Loading ...</div>;
	}

	const videoId = video.id.videoId;
	const url = 'https://www.youtube.com/embed/' + videoId;

	return (<div className="video-detail col-md-12">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div><strong>{video.snippet.title}</strong></div>
				<div>{video.snippet.description}</div>
				<div>{video.snippet.channelTitle}</div>
			</div>
 	</div>
	)
}

export default VideoDetail;