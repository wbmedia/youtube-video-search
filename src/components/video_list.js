import React, {Component} from 'react';
import VideoListItem from './items';

const VideoList = (props) => {

	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
			key={video.etag}  
			onVideoSelect={props.onVideoSelect}
			video={video} />
		)
	});

	return (<div>
		<h3>Lista de Videos</h3>
		<ul className="">
			{videoItems}
		</ul>
	</div>
	);
}

// Exportamos nuestro componente
export default VideoList;


