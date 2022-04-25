import { IonContent, IonHeader, IonPage } from '@ionic/react';
import ContactosForm from '../components/Contactos/ContactosForm';
import './Login.css';

const Login: React.FC = () => {
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

export default Login;
