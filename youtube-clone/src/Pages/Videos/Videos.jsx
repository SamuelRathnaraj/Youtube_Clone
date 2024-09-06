import { useParams } from 'react-router-dom'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import './Videos.css'

const Videos = () => {
  const {videoId,categoryId} = useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Videos
