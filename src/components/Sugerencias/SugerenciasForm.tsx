import "./Sugerencias.css";
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
  logoTwitter,
  logoFacebook,
  logoInstagram,
} from "ionicons/icons";

interface SugerenciasProps {}

const SugerenciasForm: React.FC<SugerenciasProps> = () => {
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
                Prestamos
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
            <IonItem routerLink="/configuracion" routerDirection="none">
              <IonLabel>
                <IonIcon
                  icon={settingsOutline}
                  color="success"
                  slot="start"
                ></IonIcon>
                {"  "}
                Configuracion
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

          <div className="header-image-5">
            <img
              src="https://coopdgii.com/wp-content/uploads/2021/03/Banner.png"
              alt="logo"
            />
            <p>SUGERENCIAS</p>
          </div>

          <main className="main-body-container">
            <h6>Visita nuestra redes sociales</h6>
            <span>@coopdgii</span>

            <div className="square-icons">
              <IonRow>
                <div className="facebook">
                  <a
                    href="https://www.facebook.com/coopdgii"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IonIcon icon={logoFacebook} />
                  </a>
                </div>
                <div className="twitter">
                  <a
                    href="https://twitter.com/coopdgii"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IonIcon icon={logoTwitter} />
                  </a>
                </div>
                <div className="instagram">
                  <a
                    href="https://www.instagram.com/coopdgii/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IonIcon icon={logoInstagram} />
                  </a>
                </div>
              </IonRow>
            </div>
          </main>
          <footer className="main-footer">
            <img
              src="https://coopdgii.com/wp-content/uploads/2019/10/Logo-Pagina-Web1.png"
              alt="logo coopdgii"
            />

            <h6>Contactos</h6>

            <p>WhatsApp</p>
            <span>(849)-451-0798</span>

            <p>Oficina</p>
            <span>(809)-287-2700</span>
            <br />
            <span>info@coopdgii.com</span>

            <div className="loc">
              <h6>Localización</h6>
              <span>Av. Pedro Henríquez Ureña #29 Gazcue</span>
              <br />
              <span>Santo Domingo</span>
              <br />
              <span>República Dominicana</span>
            </div>
          </footer>
        </div>
      </IonContent>
    </IonApp>
  );
};

export default SugerenciasForm;
