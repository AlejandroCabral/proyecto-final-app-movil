import {
  powerOutline,
  walletOutline,
  cashOutline,
  businessOutline,
  newspaperOutline,
  calculatorOutline,
  earthOutline,
  folderOpenOutline,
  helpCircleOutline,
  homeOutline,
  settingsOutline
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
        <IonHeader class="ion-no-border">
          <IonToolbar>
            <IonTitle>
              <img src="https://www.coopdgii.com/wp-content/uploads/2021/04/Sobre-sonotro-1.png" alt="coopdgii logo" style={{marginTop: '5px'}}/>
              <p className="unParrafo"> Bryan</p>
              </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList lines="none">
            <IonItem routerLink="/home" routerDirection="none">
              <IonLabel>
                <IonIcon
                  icon={homeOutline}
                  color="success"
                  slot="start"
                />{"  "}
                Inicio
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/cuentas" routerDirection="none">
              <IonLabel>
                <IonIcon
                  icon={walletOutline}
                  color="success"
                  slot="start"
                />{"  "}
                Cuentas
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/prestamos" routerDirection="none">
              <IonLabel>
                <IonIcon icon={cashOutline} color="success" slot="start"></IonIcon>{"  "}
                  Prestamos
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/certificados" routerDirection="none">
              <IonLabel>
                <IonIcon icon={businessOutline} color="success" slot="start"></IonIcon>{"  "}
                  Certificados
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/solicitudes" routerDirection="none">
              <IonLabel>
                <IonIcon icon={newspaperOutline} color="success" slot="start"></IonIcon>{"  "}
                Solicitudes
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/descuentos" routerDirection="none">
              <IonLabel>
                <IonIcon icon={calculatorOutline} color="success" slot="start"></IonIcon>{"  "}
                Descuentos
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/news" routerDirection="none">
              <IonLabel>
                <IonIcon icon={earthOutline} color="success" slot="start"></IonIcon>{"  "}
                Noticias
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/sugerencias" routerDirection="none">
              <IonLabel>
                <IonIcon icon={folderOpenOutline} color="success" slot="start"></IonIcon>{"  "}
                Sugerencias
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/ayuda" routerDirection="none">
              <IonLabel>
                <IonIcon icon={helpCircleOutline} color="success" slot="start"></IonIcon>{"  "}
                Ayuda
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/configuracion" routerDirection="none">
              <IonLabel>
                <IonIcon icon={settingsOutline} color="success" slot="start"></IonIcon>{"  "}
                Configuracion
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/login" routerDirection="none" className="boton-cerrar-sesion">
              <IonLabel>
                <IonIcon icon={powerOutline} color="success" slot="start"></IonIcon>{"  "}
                Salir
              </IonLabel>
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
                <IonIcon color="success" icon={businessOutline} /> Certificados
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
