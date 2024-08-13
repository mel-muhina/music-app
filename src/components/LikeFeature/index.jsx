function LikeFeature({ like, likeAlbum }) {
	return(
		
			<button className="like-btn" onClick={() => likeAlbum(like)}>Like</button>
		
	)
	}

export default LikeFeature;