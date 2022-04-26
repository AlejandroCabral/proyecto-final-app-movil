import { IonContent, IonHeader, IonPage } from '@ionic/react';
import SolicitudesForm from '../components/Solicitudes/SolicitudesForm';

const Solicitudes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen scroll-y="true">
        <SolicitudesForm />
      </IonContent>
    </IonPage>
  );
};

export default Solicitudes;
