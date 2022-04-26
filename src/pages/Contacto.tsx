import { IonContent, IonHeader, IonPage } from '@ionic/react';
import ContactosForm from '../components/Contactos/ContactosForm';
import './Contacto.css';

const Contacto: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <ContactosForm />
      </IonContent>
    </IonPage>
  );
};

export default Contacto;
