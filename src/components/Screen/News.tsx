import './Css/News.css'
import { IonIcon } from '@ionic/react';
import { personOutline, key } from 'ionicons/icons';


const News: React.FC = () => {
    return (
        <div className='box-content'>
            <img width="1080" height="1350" src="https://coopdgii.com/wp-content/uploads/2022/02/Matias-Ramon-Mella.jpg" 
            className="attachment-full size-full" alt="" loading="lazy" sizes="(max-width: 1080px) 100vw, 1080px"></img>
        </div>
        );
    };
    
    export default News;