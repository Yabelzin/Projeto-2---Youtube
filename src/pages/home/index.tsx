import { useEffect, useState } from "react";
import VideoComponent from "../../components/videoCards";
import { FeedContainer, MainPageContainer } from "./styles";
import VideoCategories from "../../components/videoCategories";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import { UserStorage } from "../../components/contexts/userContext";
import axios from "axios";
import moment from "moment";
import { useCategoryContext } from "../../components/contexts/categoriesContext";

const videosArray = [
    {
        image:'',
        title:'NF - HOPE',
        channelImage:'',
        channel: 'NFrealmusic',
        time:'1 year ago',
        view:'48M views'
    },
    {
        image:'',
        title:'NF - CLOUDS',
        channelImage:'',
        channel: 'NFrealmusic',
        time:'1 year ago',
        view:'48M views'
    }
    
]

interface IProps {
    turnMenu: boolean;
    seeChannels: boolean;
}


function Home({turnMenu}: IProps, {seeChannels}:IProps) {
    
    const [videos, setVideos] = useState<Videos[]>([]);
    const { categoryId } = useCategoryContext()

    useEffect(() => {
        load()
    }, [categoryId])

    interface Videos {
        id: string;
        snippet: {
            title: string;
            thumbnails: {
            high: {
              url: string
            }
            maxres: {
              url: string;
            }
          }
          channelTitle: string;
          publishedAt: string;
        },
        statistics: {
            viewCount: string;
        }
    }

    const API_KEY = process.env.REACT_APP_HOST_API_KEY

    const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`

    async function load() {
        try {
            const resposta = await axios.get(URL)
            setVideos(resposta.data.items)
        }catch (error) {
            console.log(error)
        }
    }

    function formatViewCount(viewCount: number): string {
        if (viewCount >= 1000000) {
          return `${(viewCount / 1000000).toFixed(1)} mi de visualizações`;
        } else if (viewCount >= 1000) {
          return `${(viewCount / 1000).toFixed(0)} mil visualizações`;
        } else if (viewCount === 1) {
            return `${viewCount} visualização`
        } else {
          return `${viewCount} visualizações`;
        }
    }
    
    function getPublishedTime(publishedAt: string) {
        const now = moment();
        const publishedTime = moment(publishedAt);
        const diffDays = now.diff(publishedTime, 'days');
    
        if (diffDays <= 0) {
          return 'hoje';
        } else if (diffDays === 1) {
          return 'há 1 dia';
        } else if (diffDays <= 7) {
          return `há ${diffDays} dias`;
        } else if (diffDays <= 30) {
          const diffWeeks = Math.floor(diffDays / 7);
          if (diffWeeks === 1) {
            return 'há 1 semana';
          } else {
            return `há ${diffWeeks} semanas`;
          }
        } else if (diffDays <= 365) {
          const diffMonths = Math.floor(diffDays / 30);
          if (diffMonths === 1) {
            return 'há 1 mês';
          } else {
            return `há ${diffMonths} meses`;
          }
        } else {
          const diffYears = Math.floor(diffDays / 365);
          if (diffYears === 1) {
            return 'há 1 ano';
          } else {
            return `há ${diffYears} anos`;
          }
        }
    }

        
    return (

        <UserStorage>
            <div>
                <Header/>
                <div id="alek" style={{display: "flex", width: '100%'}}>
                    <Menu seeChannels={seeChannels} turnMenu={turnMenu}/>
                    <div id="routes-div" style={{width: `${ turnMenu? '83%' : '94%'}`, padding: '0 5px', justifyContent: "end"}}>
                        <VideoCategories/>
                        <FeedContainer id="inner-container" turnMenu={turnMenu}>
                            {videos.map((video) => (
                                <VideoComponent
                                    title={video.snippet.title}
                                    thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                                    channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
                                    channelName={video.snippet.channelTitle}
                                    details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
                                    key={video.id}
                                />
                            ))}
                        </FeedContainer>
                    </div>
                </div>
            </div>
        </UserStorage>
    )
};
    
export default Home;