import "./Contactos.css";
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
  IonRow,
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
  callOutline,
  mailOutline
} from "ionicons/icons";

interface ContactosProps {}

const ContactosForm: React.FC<ContactosProps> = () => {
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
                  Préstamos
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
            <IonItem routerLink="/contactos" routerDirection="none">
              <IonLabel>
                <IonIcon icon={helpCircleOutline} color="success" slot="start"></IonIcon>{"  "}
                Ayuda
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/request" routerDirection="none">
              <IonLabel>
                <IonIcon icon={settingsOutline} color="success" slot="start"></IonIcon>{"  "}
                Configuración (Cambio de pass)
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

      <IonContent>
        <div id="main-content">
          <IonHeader class="ion-no-border">
            <IonToolbar color="translucent">
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <div className="header-image-3">
            <img
              src="https://www.fhlconsulting.com/sites/default/files/2019-09/Contador.jpeg"
              alt="logo"
            />

            <span>CONTACTO</span>
            <p>Siéntase libre de Contactarnos</p>
          </div>

          <main className="main-body">
            <h3 className="h3-body">Nuestros Oficiales Del Área De Servicio</h3>
            <p>Cuantos de ustedes han solicitado servicios en línea?</p>

            <IonItem lines="none" className="ion-item-main-body">
              <IonRow>
                <img
                  src="https://coopdgii.com/wp-content/uploads/2021/10/Suelin.jpg"
                  alt="some"
                  className="img-item-body"
                />
                <div className="headers-span">
                    <h5 className="headers-row">Suelin Pimentel</h5>
                    <span>Encargada de Área de Servicio</span>
                </div>

                <em>Nuestra área de servicio siempre innovando para mantener informado a todos socios.</em>

                <div className="telephone">
                    <IonLabel>
                        <IonIcon icon={callOutline} color="success"/>{" "} 809-287-2386
                    </IonLabel>                    
                </div>

                <div className="mail">
                <IonLabel>
                        <IonIcon icon={mailOutline} color="success"/>{" "} supimentel@dgii.gov.do
                    </IonLabel>  
                </div>
              </IonRow>
            </IonItem>

            <IonItem lines="none" className="ion-item-main-body">
              <IonRow>
                <img
                  src="https://coopdgii.com/wp-content/uploads/2021/10/Maria-Es.jpg"
                  alt="some"
                  className="img-item-body"
                />
                <div className="headers-span">
                    <h5 className="headers-row">Maria Escolastico</h5>
                    <span>Oficial de Servicio</span>
                </div>

                <em>Nuestra área de servicio siempre innovando para mantener informado a todos socios.</em>

                <div className="telephone">
                    <IonLabel>
                        <IonIcon icon={callOutline} color="success"/>{" "} 809-287-2873
                    </IonLabel>                    
                </div>

                <div className="mail">
                <IonLabel>
                        <IonIcon icon={mailOutline} color="success"/>{" "} mescolastico@dgii.gov.do
                    </IonLabel>  
                </div>
              </IonRow>
            </IonItem>

            <IonItem lines="none" className="ion-item-main-body">
              <IonRow>
                <img
                  src="https://coopdgii.com/wp-content/uploads/2021/10/MicrosoftTeams-image-4.jpg"
                  alt="some"
                  className="img-item-body"
                />
                <div className="headers-span">
                    <h5 className="headers-row">Yohanny Duarte</h5>
                    <span>Oficial de Servicio</span>
                </div>

                <em>Nuestra área de servicio siempre innovando para mantener informado a todos socios.</em>

                <div className="telephone">
                    <IonLabel>
                        <IonIcon icon={callOutline} color="success"/>{" "} 809-287-2875
                    </IonLabel>                    
                </div>

                <div className="mail">
                <IonLabel>
                        <IonIcon icon={mailOutline} color="success"/>{" "} yduarte@dgii.gov.do
                    </IonLabel>  
                </div>
              </IonRow>
            </IonItem>

            <IonItem lines="none" className="ion-item-main-body">
              <IonRow>
                <img
                  src="https://coopdgii.com/wp-content/uploads/2021/10/MicrosoftTeams-image-6.jpg"
                  alt="some"
                  className="img-item-body"
                />
                <div className="headers-span">
                    <h5 className="headers-row">Anny Rodriguez</h5>
                    <span>Oficial de Servicio</span>
                </div>

                <em>Nuestra área de servicio siempre innovando para mantener informado a todos socios.</em>

                <div className="telephone">
                    <IonLabel>
                        <IonIcon icon={callOutline} color="success"/>{" "} 809-287-2833
                    </IonLabel>                    
                </div>

                <div className="mail">
                <IonLabel>
                        <IonIcon icon={mailOutline} color="success"/>{" "} annrodrigu@dgii.gov.do
                    </IonLabel>  
                </div>
              </IonRow>
            </IonItem>
            
            <IonItem lines="none" className="ion-item-main-body">
              <IonRow>
                <img
                  src="https://coopdgii.com/wp-content/uploads/2021/10/MicrosoftTeams-image-3.jpg"
                  alt="some"
                  className="img-item-body"
                />
                <div className="headers-span">
                    <h5 className="headers-row">Yulitza Nuñez</h5>
                    <span>Cajera Oficial de Servicios</span>
                </div>

                <em>Nuestra área de servicio siempre innovando para mantener informado a todos socios.</em>

                <div className="telephone">
                    <IonLabel>
                        <IonIcon icon={callOutline} color="success"/>{" "} 809-287-2833
                    </IonLabel>                    
                </div>

                <div className="mail">
                <IonLabel>
                        <IonIcon icon={mailOutline} color="success"/>{" "} ymnunezb@dgii.gov.do
                    </IonLabel>  
                </div>
              </IonRow>
            </IonItem>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7568.4205118476775!2d-69.902868!3d18.474133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x466a5d73de658419!2sCooperativa%20Nacional%20de%20Servicios%20M%C3%BAltiples%20de%20los%20Empleados%20de%20la%20Direcci%C3%B3n%20General%20de%20Impuestos%20Internos!5e0!3m2!1ses-419!2sus!4v1650942993558!5m2!1ses-419!2sus" width="100%" height="450" style={{border: '0', marginBottom: '40px'}} allowFullScreen={true} loading="lazy" title="Mapa" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </main>
        </div>
      </IonContent>
    </IonApp>
  );
};

export default ContactosForm;
