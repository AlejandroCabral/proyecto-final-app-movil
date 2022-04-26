import { IonContent, IonHeader, IonPage } from '@ionic/react';
import Request from '../components/Request_Pass/Request_Pass';
import './Request_Pass.css';

const Requests: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <Request/>
      </IonContent>
    </IonPage>
  );
};

export default Requests;