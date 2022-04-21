import './HomePage.css';
import { IonIcon } from '@ionic/react';
import { personOutline, key } from 'ionicons/icons';

interface HomePageProps { }

const HomePageForm: React.FC<HomePageProps> = () => { 

  return (
    <div className="container fade">

      <img className="header-image" src="https://coopdgii.com/wp-content/uploads/2016/05/Logo-300x300.png" alt="Logo de la company" />          
    
    </div>
  );
};

export default HomePageForm;
