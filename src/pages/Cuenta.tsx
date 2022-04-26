import { IonContent, IonHeader, IonPage } from '@ionic/react';
import CuentasForm from '../components/Cuentas/CuentasForm';
import './Cuenta.css';

const Cuenta: React.FC = () => {
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

export default Cuenta;
