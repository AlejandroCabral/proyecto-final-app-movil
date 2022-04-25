import './News.css';
import { IonIcon } from '@ionic/react';
interface NewsProps {}

const News: React.FC <NewsProps> = () => {
    return (
        <div className='Container-mella'>
            <div className='Imagen-Mella'>
            <img src="https://coopdgii.com/wp-content/uploads/2022/02/Matias-Ramon-Mella.jpg" 
            className="mella" alt="" loading="lazy" sizes="(max-width: 1080px) 100vw, 1080px"></img>
            </div>
            <div className='Relleno'>
                <h3>
                Mensaje Por el Día del Natalicio de Matías Ramón Mella</h3>

                La COOPDGII honra a uno de sus próceres y valiente estratega en la lucha 
                por la Independencia Nacional, Matías Ramón Mella, hoy 25/02/2022 conmemoramos el día<br></br>
                <a className="elementor-post__read-more" href="https://coopdgii.com/mensaje-por-el-dia-del-natalicio-de-matias-ramon-mella/">
				Leer Más &gt;&gt;</a>
            </div>
            <div className="elementor-post__meta-data">
                <hr></hr>
			    <span className="elementor-post-date"> 25 de febrero de 2022</span>
			</div>
        </div>
        
        );
    };
    
export default News;