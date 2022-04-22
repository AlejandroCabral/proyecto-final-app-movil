import {
  heart,
  home,
  informationCircle,
  mail,
  people,
  videocam,
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
  IonButton,
  IonButtons,
  IonMenuButton,
  IonMenuToggle,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "../../components/Login/LoginForm";

interface HomePageProps {}

const HomePageForm: React.FC<HomePageProps> = () => {
  return (
    <IonApp>
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
            <IonItem>
              {/* <IonIcon name="hearT" slot="start"></IonIcon> */}
              <IonLabel>Tasas</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <div className="ion-page" id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Inbox</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonApp>
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/login">
                  <Login />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="login" href="/login" layout="icon-top">
                  <IonLabel>Login</IonLabel>
                  <IonIcon icon={heart} />
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        </IonApp>
      </div>
    </IonApp>
  );
};

export default HomePageForm;
