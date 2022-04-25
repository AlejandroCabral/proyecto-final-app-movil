import { IonContent, IonHeader, IonPage } from '@ionic/react';
import LoginForm from '../components/Login/LoginForm';
import News from '../components/Screen/News';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen scroll-y="true">
        <News/>

      {/* TODO: AGREGAR PAGINA INICIAL/BIENVENIDA CON MENU DESPLEGABLE PARA ACCEDER A LAS CUENTAS, NOTICIAS, ETC... E ICONO DE NOTIFICACIONES  */}

      </IonContent>
    </IonPage>
  );
};

export default Home;
