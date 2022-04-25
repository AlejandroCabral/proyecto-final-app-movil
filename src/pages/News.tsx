import { IonContent, IonHeader, IonPage } from '@ionic/react';
import News from '../components/Screen/News';
import './News.css';

const Newss: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <News />
      </IonContent>
    </IonPage>
  );
};

export default Newss;