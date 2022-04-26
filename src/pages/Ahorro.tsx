import './Ahorro.css'
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import AhorroForm from '../components/Ahorro/AhorroForm';



const Ahorro: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <AhorroForm />
      </IonContent>
    </IonPage>
  );
};

export default Ahorro;
