import './css/News.css'
import { IonIcon } from '@ionic/react';

interface NewsProps {}

const News: React.FC <NewsProps> = () => {
    return (
        <div className='Container'>
            <div>
            <img width="1080" height="1350" src="https://coopdgii.com/wp-content/uploads/2022/02/Matias-Ramon-Mella.jpg" 
            className="mella" alt="" loading="lazy" sizes="(max-width: 1080px) 100vw, 1080px"></img>
            </div>
        </div>
        );
    };
    
export default News;