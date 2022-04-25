import './News.css';
import { IonIcon } from '@ionic/react';

interface NewsProps {}

const News: React.FC <NewsProps> = () => {
    return (
        <div className='Container'>
            <div className='Container-P'>
                <img src="https://coopdgii.com/wp-content/uploads/2022/02/Matias-Ramon-Mella.jpg" 
                className="mella" alt="" loading="lazy"></img>
               <h3 className="elementor-post__title">
			    <a href="https://coopdgii.com/mensaje-por-el-dia-del-natalicio-de-matias-ramon-mella/">
				Mensaje Por el Día del Natalicio de Matías Ramón Mella</a>
		        </h3>
                <h5>La COOPDGII honra a uno de sus próceres y valiente estratega en 
                la lucha por la Independencia Nacional, Matías Ramón Mella, hoy 25/02/2022 conmemoramos el día</h5><br/>
                <a className="elementor-post__read-more" href="https://coopdgii.com/mensaje-por-el-dia-del-natalicio-de-matias-ramon-mella/">
				Leer Más &gt;&gt;</a>
                <hr />
                <div className="elementor-post__meta-data">
					<span className="elementor-post-date"> 25 de febrero de 2022 </span>
				</div>
            </div>
            <div>
            <div className='Container-P'>
                <img src="https://coopdgii.com/wp-content/uploads/2022/02/Patria-768x768.jpg" 
                className="Patria" alt="" loading="lazy"></img>
               <h3 className="elementor-post__title">
			    <a href="https://coopdgii.com/celebra-con-nosotros-el-mes-de-la-patria/">
				Celebra con nosotros el mes de la Patria</a>
		        </h3>
                <h5>Celebra con nosotros el mes de la Patria para todos nuestros socios Aprovecha nuestra tasa súper atractiva de 0.83% en el mes de febrero, mes de</h5><br/>
                <a className="elementor-post__read-more" href="https://coopdgii.com/celebra-con-nosotros-el-mes-de-la-patria/">
				Leer Más &gt;&gt;</a>
                <hr />
                <div className="elementor-post__meta-data">
					<span className="elementor-post-date"> 17 de febrero de 2022 </span>
				</div>
            </div>
            </div>

        </div>
        );
    };
    
export default News;