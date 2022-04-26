import { IonContent, IonHeader, IonPage } from '@ionic/react';
import SugerenciasForm from '../components/Sugerencias/SugerenciasForm';
import './Sugerencias.css';

const Sugerencias: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <SugerenciasForm />
      </IonContent>
    </IonPage>
  );
};

export default Sugerencias;
