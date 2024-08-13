import { useState } from "react";
import './LikeFeature.css'; 

const LikeFeature = () => {

  const [like, setLike] = useState(false)

  const toggleLike = () => {
    setLike(!like);
  }
	return(
		
      <button onClick={toggleLike} className={like ? 'liked' : ""}>{like ? 'Liked' : 'Like'}</button>		
	)
}

export default LikeFeature;