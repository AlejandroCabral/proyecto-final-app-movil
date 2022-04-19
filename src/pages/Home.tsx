import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LoginForm from '../components/Login/LoginForm';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LoginForm />

      {/* TODO: AGREGAR PAGINA INICIAL/BIENVENIDA CON MENU DESPLEGABLE PARA ACCEDER A LAS CUENTAS, NOTICIAS, ETC... E ICONO DE NOTIFICACIONES  */}

      </IonContent>
    </IonPage>
  );
};

export default Home;
