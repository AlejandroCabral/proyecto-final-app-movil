import { IonContent, IonHeader, IonPage } from '@ionic/react';
import CertificadosForm from '../components/Certificados/CertificadosForm';
import './Certificados.css';

const Certificado: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <CertificadosForm />
      </IonContent>
    </IonPage>
  );
};

export default Certificado;
