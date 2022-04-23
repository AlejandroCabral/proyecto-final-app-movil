import {
  mail,
} from "ionicons/icons";
import "./HomePage.css";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonApp,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import React from "react";

interface HomePageProps {}

const HomePageForm: React.FC<HomePageProps> = () => {
  return (
    <IonApp className="fade">
      <IonMenu side="start" content-id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList lines="none">
            <IonItem routerLink="/login" routerDirection="none">
              <IonLabel>
                <IonIcon icon={mail} color="medium" slot="start" /> Cuentas
              </IonLabel>
            </IonItem>
            <IonItem>
              {/* <IonIcon name="paIerplane" slot="start"></IonIcon> */}
              <IonLabel>Prestamos</IonLabel>
            </IonItem>
            <IonItem>
              {/* <IonIcon name="hearT" slot="start"></IonIcon> */}
              <IonLabel>Inversiones</IonLabel>
            </IonItem>
            <IonItem>
              {/* <IonIcon name="archive" slot="start"></IonIcon> */}
              <IonLabel>Solicitudes</IonLabel>
            </IonItem>
            <IonItem>
              {/* <IonIcon name="Trash" slot="start"></IonIcon> */}
              <IonLabel>Descuentos</IonLabel>
            </IonItem>
            <IonItem>
              {/* <IonIcon name="warning" slot="start"></IonIcon> */}
              <IonLabel>Noticias</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Sugerencias</IonLabel>
            </IonItem>
            <IonItem>
              {/* <IonIcon name="paIerplane" slot="start"></IonIcon> */}
              <IonLabel>Ayuda</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <div id="main-content">
        <IonHeader class="ion-no-border">
          <IonToolbar color="translucent">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="header-image">
          <img
            src="https://i1.wp.com/www.revistamercado.do/wp-content/uploads/2021/05/mujer-contadora.jpg?fit=1280%2C638&ssl=1"
            alt="logo"
          />
          <p> Bryan</p>
          <span>Última conexión:</span>
        </div>
      </div>
    </IonApp>
  );
};

export default HomePageForm;

// https://i1.wp.com/www.revistamercado.do/wp-content/uploads/2021/05/mujer-contadora.jpg?fit=1280%2C638&ssl=1
