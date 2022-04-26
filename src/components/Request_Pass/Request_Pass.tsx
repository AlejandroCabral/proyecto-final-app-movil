import './Request_Pass.css'
import { personOutline, key } from "ionicons/icons";
import { IonIcon, IonInput, IonItem, IonLabel, IonButton } from "@ionic/react";
import { useState } from "react";

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
            <IonIcon className="ion-icon" icon={personOutline}></IonIcon>
          </IonLabel>
          <IonInput
            type="text"
            placeholder="Cédula"
          ></IonInput>
        </IonItem>

        <IonItem className="ion-item">
          <IonLabel className="ion-label">
            <IonIcon className="ion-icon" icon={key}></IonIcon>
          </IonLabel>
          <IonInput
            type="password"
            placeholder="Contraseña"
            
          />
        </IonItem>

        <div className="boton">
          <IonButton
            type="submit"
            color="success"
            expand="block"
          >
            INICIAR SESIÓN
          </IonButton>
        </div>

        <div className="error">
          <a className="reference" href='/news'>¿Tienes problemas para Iniciar Sesión?</a>

        </div>
      </div>
      <footer className="footer">
      </footer>
    </div>
    );
};

export default Request;
