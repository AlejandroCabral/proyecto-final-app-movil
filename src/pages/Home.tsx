import { IonContent, IonHeader, IonPage } from '@ionic/react';
import HomePageForm from '../components/HomePage/HomePageForm';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <HomePageForm />

      {/* TODO: AGREGAR PAGINA INICIAL/BIENVENIDA CON MENU DESPLEGABLE PARA ACCEDER A LAS CUENTAS, NOTICIAS, ETC... E ICONO DE NOTIFICACIONES  */}

      </IonContent>
    </IonPage>
  );
};

export default Home;
