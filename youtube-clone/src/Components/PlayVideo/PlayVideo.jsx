import './PlayVideo.css'
// import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { useEffect, useState } from 'react'
import { API_KEY, value_coverter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const PlayVideo = () => {

    const {videoId} = useParams()

    const[apiData,setApiData] = useState(null);
    const[channelData,setChannelData] = useState(null);
    const [commentData,setCommentData] = useState([]);

    const fetchVideoData = async () =>{
        // fetching Videos Data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data=> setApiData(data.items[0]));
    } 

    const fetchOtherData = async () =>{

        // FETCHING CHANNEL DATA
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res=>res.json()).then(data=> setChannelData(data.items[0]));
        
        // FETCHING COMMENT DATA
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
    }

    useEffect(()=>{
        fetchVideoData();
    },{videoId})

    useEffect(()=>{
            fetchOtherData();
    },[apiData])
  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/IEuHpriOVzE/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"best way to create a website"}</h3>
        <div className="play-video-info">
            <p>{apiData?value_coverter(apiData.statistic.viewCount):'16k'} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"2 days ago"}</p>
            <div>
                <span><img src={like} alt=""/>{apiData?value_coverter(apiData.statistics.likeCount):value_coverter(548449450)}</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:jack} alt="" />
            <div className="">
                <p>{apiData?apiData.snippet.channelTitle:"Sam Codes"}</p>
                <span>{channelData?value_coverter(channelData.statistics.subscriberCount):value_coverter(64444944)} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-discription">
            <p>{apiData?apiData.snippet.description.slice(0,250):'Subscribe Greatstack to Watch More Tutorials on web development'}</p>
            <hr />
            <h4>{apiData?value_coverter(apiData.statistics.commentCount):value_coverter(4763245)} Comments</h4>
            {commentData.map((item,index)=>{
                <div key={index} className="comment">
                <img src={item.snippet.toplevelComment.snippet.authorProfileImageUrl} alt="" />
                <div className="">
                    <h3>{item.snippet.toplevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                    <p>{item.snippet.toplevelComment.snippet.textDisplay}</p>
                    <div className="comment-section">
                        <img src={like} alt="" />
                        <span>{value_coverter(item.snippet.toplevelComment.snippet.likeCount)}</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            })}
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>A global network providing a various of information and of interconnected networks using standardisesd commmunication protocols.</p>
                    <div className="comment-section">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>A global network providing a various of information and of interconnected networks using standardisesd commmunication protocols.</p>
                    <div className="comment-section">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>A global network providing a various of information and of interconnected networks using standardisesd commmunication protocols.</p>
                    <div className="comment-section">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>A global network providing a various of information and of interconnected networks using standardisesd commmunication protocols.</p>
                    <div className="comment-section">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo
