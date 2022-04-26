import { IonContent, IonHeader, IonPage } from '@ionic/react';
import CuentasForm from '../components/Cuentas/CuentasForm';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <CuentasForm />
      </IonContent>
    </IonPage>
  );
};

export default Login;
