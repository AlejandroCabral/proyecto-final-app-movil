import { IonContent, IonHeader, IonPage } from '@ionic/react';
import LoginForm from '../components/Login/LoginForm';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <LoginForm />
      </IonContent>
    </IonPage>
  );
};

export default Login;
