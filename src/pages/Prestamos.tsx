import './Ahorro.css'
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import PrestamosForm from '../components/Prestamo/PrestamosForm';



const Prestamos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <PrestamosForm />
      </IonContent>
    </IonPage>
  );
};

export default Prestamos;