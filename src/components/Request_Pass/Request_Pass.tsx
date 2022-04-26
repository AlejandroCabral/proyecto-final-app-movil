import './Request_Pass.css'
import '../Login/LoginForm'
import { key } from "ionicons/icons";
import { IonIcon, IonInput, IonItem, IonLabel, IonButton } from "@ionic/react";
import LoginForm from '../Login/LoginForm';

interface RequestProps {}

const Request: React.FC<RequestProps> = () => {
 
    return(
        <div className="container fade">
      <img
        className="header-image"
        src="https://coopdgii.com/wp-content/uploads/2016/05/Logo-300x300.png"
        alt="Logo de la company"
      />

      <div className="login-form">
        <IonItem className="ion-item">
          <IonLabel className="ion-label">
            <IonIcon className="ion-icon" icon={key}></IonIcon>
          </IonLabel>
          <IonInput
            type="password"
            placeholder="Introducir nueva contraseña"
          ></IonInput>
        </IonItem>

        <IonItem className="ion-item">
          <IonLabel className="ion-label">
            <IonIcon className="ion-icon" icon={key}></IonIcon>
          </IonLabel>
          <IonInput
            type="password"
            placeholder="Confirmar nueva contraseña"
            
          />
        </IonItem>
        
        <div className="boton">
          <IonButton
            type="submit"
            color="success"
            expand="block"
            onClick={LoginForm}
          >
            Confirmar
          </IonButton>
        </div>

      </div>
      <footer className="footer">
      </footer>
    </div>
    );
};

export default Request;
