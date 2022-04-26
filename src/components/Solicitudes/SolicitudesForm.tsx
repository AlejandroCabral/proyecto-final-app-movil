import "./Solicitudes.css";
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonRow,
} from "@ionic/react";
import {
  settingsOutline,
  businessOutline,
  calculatorOutline,
  cashOutline,
  earthOutline,
  folderOpenOutline,
  helpCircleOutline,
  newspaperOutline,
  powerOutline,
  walletOutline,
  homeOutline,
} from "ionicons/icons";
import { useState } from "react";

interface SolicitudesProps {}

const SolicitudesForm: React.FC<SolicitudesProps> = () => {

  let [fecha] = useState<string>();

  let hoy = new Date();
  fecha = hoy.toLocaleString();

  return (
    <IonApp className="fade">
      <IonMenu side="start" content-id="main-content">
        <IonHeader class="ion-no-border">
          <IonToolbar>
            <IonTitle>
              <img
                src="https://www.coopdgii.com/wp-content/uploads/2021/04/Sobre-sonotro-1.png"
                alt="coopdgii logo"
                style={{ marginTop: "5px" }}
              />
              <p className="unParrafo"> Bryan</p>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList lines="none">
            <IonItem routerLink="/home" routerDirection="none">
              <IonLabel>
                <IonIcon icon={homeOutline} color="success" slot="start" />
                {"  "}
                Inicio
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/cuentas" routerDirection="none">
              <IonLabel>
                <IonIcon icon={walletOutline} color="success" slot="start" />
                {"  "}
                Cuentas
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/prestamos" routerDirection="none">
              <IonLabel>
                <IonIcon
                  icon={cashOutline}
                  color="success"
                  slot="start"
                ></IonIcon>
                {"  "}
                Préstamos
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/certificados" routerDirection="none">
              <IonLabel>
                <IonIcon
                  icon={businessOutline}
                  color="success"
                  slot="start"
                ></IonIcon>
                {"  "}
                Certificados
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/solicitudes" routerDirection="none">
              <IonLabel>
                <IonIcon
                  icon={newspaperOutline}
                  color="success"
                  slot="start"
                ></IonIcon>
                {"  "}
                Solicitudes
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/descuentos" routerDirection="none">
              <IonLabel>
                <IonIcon
                  icon={calculatorOutline}
                  color="success"
                  slot="start"
                ></IonIcon>
                {"  "}
                Descuentos
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/news" routerDirection="none">
              <IonLabel>
                <IonIcon
                  icon={earthOutline}
                  color="success"
                  slot="start"
                ></IonIcon>
                {"  "}
                Noticias
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/sugerencias" routerDirection="none">
              <IonLabel>
                <IonIcon
                  icon={folderOpenOutline}
                  color="success"
                  slot="start"
                ></IonIcon>
                {"  "}
                Sugerencias
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/contactos" routerDirection="none">
              <IonLabel>
                <IonIcon
                  icon={helpCircleOutline}
                  color="success"
                  slot="start"
                ></IonIcon>
                {"  "}
                Ayuda
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/request" routerDirection="none">
              <IonLabel>
                <IonIcon
                  icon={settingsOutline}
                  color="success"
                  slot="start"
                ></IonIcon>
                {"  "}
                Configuración (Cambio de pass)
              </IonLabel>
            </IonItem>
            <IonItem
              routerLink="/login"
              routerDirection="none"
              className="boton-cerrar-sesion"
            >
              <IonLabel>
                <IonIcon
                  icon={powerOutline}
                  color="success"
                  slot="start"
                ></IonIcon>
                {"  "}
                Salir
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonContent scroll-y="true">
        <div id="main-content">
          <IonHeader class="ion-no-border header-title-toolbar">
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

        <section className="body-section-solicitud">
          <IonItem className="ion-item-body-section-solicitud">
            <div>
              <h6 className="header-contenedor-solicitud">
                <IonIcon color="success" icon={cashOutline} /> Solicitud Préstamos
              </h6>
              <IonRow>
                <p className="p-body-section-solicitud">Código</p>
                <p className="p-body-section-left-prestamos-solicitud">
                  Monto
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section-solicitud">1000005</span>
                <span className="span-body-section-left-solicitud">5,234RD$</span>
              </IonRow>
              <IonRow>
                <p className="p-body-section-solicitud">Información del Garante</p>
                <p className="p-body-section-left-gerencial-solicitud">
                  Nombre Completo
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section-solicitud">Persona Física</span>
                <span className="span-body-section-lefts-solicitud">Juan Peguero</span>
              </IonRow>


              <IonRow>
                <p className="p-body-section-solicitud-2">Cédula</p>
                <p className="p-body-section-left-prestamos-solicitud-2">
                  Sueldo
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section-solicitud-2">06515897641</span>
                <span className="span-body-section-left-solicitud-2">35,000RD$</span>
              </IonRow>
              <IonRow>
                <p className="p-body-section-solicitud-2">Monto Ahorrado</p>
                <p className="p-body-section-left-gerencial-solicitud-2">
                  Monto a Garantizar
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section-solicitud-2">60,000RD$</span>
                <span className="span-body-section-lefts-solicitud-2">15,000RD$</span>
              </IonRow>
            </div>
          </IonItem>

          
          <IonItem className="ion-item-body-section-solicitud">
            <div>
              <h6 className="header-contenedor-solicitud">
                <IonIcon color="success" icon={cashOutline} /> Solicitud Préstamos
              </h6>
              <IonRow>
                <p className="p-body-section-solicitud">Código</p>
                <p className="p-body-section-left-prestamos-solicitud">
                  Monto
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section-solicitud">1087605</span>
                <span className="span-body-section-left-solicitud">1,570RD$</span>
              </IonRow>
              <IonRow>
                <p className="p-body-section-solicitud">Información del Garante</p>
                <p className="p-body-section-left-gerencial-solicitud">
                  Nombre Completo
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section-solicitud">Persona Física</span>
                <span className="span-body-section-lefts-solicitud">Juan Peguero</span>
              </IonRow>


              <IonRow>
                <p className="p-body-section-solicitud-2">Cédula</p>
                <p className="p-body-section-left-prestamos-solicitud-2">
                  Sueldo
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section-solicitud-2">06515897641</span>
                <span className="span-body-section-left-solicitud-2">20,000RD$</span>
              </IonRow>
              <IonRow>
                <p className="p-body-section-solicitud-2">Monto Ahorrado</p>
                <p className="p-body-section-left-gerencial-solicitud-2">
                  Monto a Garantizar
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section-solicitud-2">10,000RD$</span>
                <span className="span-body-section-lefts-solicitud-2">55,000RD$</span>
              </IonRow>
            </div>
          </IonItem>
        </section>
        </div>
      </IonContent>
    </IonApp>
  );
};

export default SolicitudesForm;
