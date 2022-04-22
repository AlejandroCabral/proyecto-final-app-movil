import { IonContent, IonHeader, IonPage } from '@ionic/react';
import HomePageForm from '../components/HomePage/HomePageForm';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <HomePageForm />
      </IonContent>
    </IonPage>
  );
};

export default Home;
