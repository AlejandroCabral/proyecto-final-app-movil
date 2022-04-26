import { IonContent, IonHeader, IonPage } from '@ionic/react';
import DescuentosForm from '../components/Descuentos/DescuentosForm';
import './Descuentos.css';

const Descuentos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen scroll-y="true">
        <DescuentosForm />
      </IonContent>
    </IonPage>
  );
};

export default Descuentos;
