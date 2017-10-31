import React from 'react';

const VideoDetail = ({video, onVideoSelect}) => {
	if(!video) {
		return <div>Loading ...</div>;
	}

	const videoId = video.id.videoId;
	const url = 'https://www.youtube.com/embed/' + videoId;

	return (<div className="row">
			<div className="col s12">
				<div className="card">
					<iframe className="" src={url}></iframe>
					<div className="card-content">

						<label>Title: </label>
						<strong>{video.snippet.title}</strong> <br />
						<label>Description: </label>
						{video.snippet.description} <br />
						<div className="chip">
							<label>Channel:</label>
						{video.snippet.channelTitle}
						</div>
					</div>
					
				</div>
			</div>
 	</div>
	)
}

export default VideoDetail;