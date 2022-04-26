import { IonContent, IonHeader, IonPage } from '@ionic/react';
import HomePageForm from '../components/HomePage/HomePageForm';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen scroll-y="true">
        <HomePageForm />

      </IonContent>
    </IonPage>
  );
};

export default Home;
