import {
  mail,
  walletOutline,
  cashOutline,
  businessOutline,
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
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";

interface HomePageProps {}

const HomePageForm: React.FC<HomePageProps> = () => {
  let [fecha] = useState<string>();

  let hoy = new Date();
  fecha = hoy.toLocaleString();

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

        <div className="header-image-2">
          <img
            src="https://i1.wp.com/www.revistamercado.do/wp-content/uploads/2021/05/mujer-contadora.jpg?fit=1280%2C638&ssl=1"
            alt="logo"
          />
          <p className="parrafo"> Bryan</p>
          <span id="unSpan">Última conexión: {fecha}</span>
        </div>

        <section className="body-section">
          <IonItem className="ion-item-body-section">
            <div>
              <h6 className="header-contenedor">
                <IonIcon color="success" icon={walletOutline} /> Cuentas
              </h6>
              <IonRow>
                <p className="p-body-section">Cuenta Aportaciones</p>
                <p className="p-body-section-left">Balance disponible</p>
              </IonRow>
              <IonRow>
                <span className="span-body-section">1000005</span>
                <span className="span-body-section-left">350,000RD$</span>
              </IonRow>
            </div>
          </IonItem>

          <IonItem className="ion-item-body-section">
            <div>
              <h6 className="header-contenedor">
                <IonIcon color="success" icon={businessOutline} /> Inversión
              </h6>
              <IonRow>
                <p className="p-body-section">Certificado Financiero</p>
                <p className="p-body-section-left-inversiones">
                  Balance disponible
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section">1000005</span>
                <span className="span-body-section-left">350,000RD$</span>
              </IonRow>
            </div>
          </IonItem>

          <IonItem className="ion-item-body-section">
            <div>
              <h6 className="header-contenedor">
                <IonIcon color="success" icon={cashOutline} /> Prestamos
              </h6>
              <IonRow>
                <p className="p-body-section">Prestamo Normal</p>
                <p className="p-body-section-left-prestamos">
                  Balance disponible
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section">1000005</span>
                <span className="span-body-section-left">350,000RD$</span>
              </IonRow>
              <IonRow>
                <p className="p-body-section">Prestamo Gerencial</p>
                <p className="p-body-section-left-gerencial">
                  Balance disponible
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section">1000005</span>
                <span className="span-body-section-left">350,000RD$</span>
              </IonRow>
            </div>
          </IonItem>
        </section>
      </div>
    </IonApp>
  );
};

export default HomePageForm;

// https://i1.wp.com/www.revistamercado.do/wp-content/uploads/2021/05/mujer-contadora.jpg?fit=1280%2C638&ssl=1
