import "./Descuentos.css";
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
  fileTraySharp,
} from "ionicons/icons";

interface DescuentosProps {}

const DescuentosForm: React.FC<DescuentosProps> = () => {
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

      <IonContent className="certificados-content">
        <div id="main-content">
          <IonHeader class="ion-no-border header-title-toolbar">
            <IonToolbar color="translucent">
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
                <IonTitle>Mis Descuentos</IonTitle>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
        </div>

        <main>
          <div className="contenedor-main-body">
            <div className="icono-main-body">
              <IonIcon icon={fileTraySharp} />
            </div>
            <div className="main-body-rightside">
              <h5>NORMALES</h5>
              <p>22/04/2022</p>
              <span>JOHN DOE</span>
              <br />
              <strong>4,574.19 RD$</strong>
            </div>
          </div>
          <div className="contenedor-main-body">
            <div className="icono-main-body">
              <IonIcon icon={fileTraySharp} />
            </div>
            <div className="main-body-rightside">
              <h5>NORMALES</h5>
              <p>22/04/2022</p>
              <span>JOHN DOE</span>
              <br />
              <strong>9,095.71 RD$</strong>
            </div>
          </div>

          <div className="contenedor-main-body">
            <div className="icono-main-body">
              <IonIcon icon={fileTraySharp} />
            </div>
            <div className="main-body-rightside">
              <h5>PLAN FUNERAL</h5>
              <p>22/04/2022</p>
              <span>JOHN DOE</span>
              <br />
              <strong>100.00 RD$</strong>
            </div>
          </div>

          <div className="contenedor-main-body">
            <div className="icono-main-body">
              <IonIcon icon={fileTraySharp} />
            </div>
            <div className="main-body-rightside">
              <h5>APORTACIONES</h5>
              <p>22/04/2022</p>
              <span>JOHN DOE</span>
              <br />
              <strong>2,000.00 RD$</strong>
            </div>
          </div>
          <div className="contenedor-main-body">
            <div className="icono-main-body">
              <IonIcon icon={fileTraySharp} />
            </div>
            <div className="main-body-rightside">
              <h5>NORMALES</h5>
              <p>22/04/2022</p>
              <span>JOHN DOE</span>
              <br />
              <strong>4,574.19 RD$</strong>
            </div>
          </div>          
        </main>
      </IonContent>
    </IonApp>
  );
};

export default DescuentosForm;
