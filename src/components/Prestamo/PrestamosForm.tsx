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
  import './Prestamos.css'
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




interface PrestamosProps {}

const PrestamosForm: React.FC<PrestamosProps> = () => {
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
            <IonItem routerLink="/request" routerDirection="none">
              <IonLabel>
                <IonIcon icon={settingsOutline} color="success" slot="start"></IonIcon>{"  "}
                Configuracion(Cambio de contra.)
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
                <IonIcon color="success" icon={cashOutline} /> Prestamos
              </h6>
              <IonRow>
                <p className="p-body-section">Prestamo Normal</p>
                <p className="p-body-section-left-prestamos">
                  Balance Prestamo
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section">1000005</span>
                <span className="span-body-section-left">310759.78RD$</span>
              </IonRow>
              <IonRow>
                <span className="span-body-section">Monto Prestamo:</span>
                <span className="span-body-section-left-prestamos-monto">555107.390RD$</span>
              </IonRow>
              <IonRow>
                <span className="span-body-section">Fecha Prestamo:</span>
                <span className="span-body-section-left-prestamos-fecha">22/11/2018</span>
              </IonRow>
              <IonRow>
                <span className="span-body-section">Fecha Vencimiento:</span>
                <span className="span-body-section-left-prestamos-vencimiento">25/07/2025 </span>
              </IonRow>
              <IonRow>
                <p className="p-body-section">Prestamo Gerencial</p>
                <p className="p-body-section-left-gerencial">
                  Balance Prestamo
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section">1000005</span>
                <span className="span-body-section-left">125924.79RD$</span>
              </IonRow>
              <IonRow>
                <span className="span-body-section">Monto Prestamo:</span>
                <span className="span-body-section-left-prestamos-monto">150126.710RD$</span>
              </IonRow>
              <IonRow>
                <span className="span-body-section">Fecha Prestamo:</span>
                <span className="span-body-section-left-prestamos-fecha">10/09/2021</span>
              </IonRow>
              <IonRow>
                <span className="span-body-section">Fecha Vencimiento:</span>
                <span className="span-body-section-left-prestamos-vencimiento">25/02/2025 </span>
              </IonRow>
              <IonRow>
                <p className="p-body-section">Orden de Compra</p>
                <p className="p-body-section-left-gerencial-orden">
                  Balance Prestamo
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section">000000114704</span>
                <span className="span-body-section-left-prestamos">21,842.55RD$</span>
              </IonRow>
              <IonRow>
                <span className="span-body-section">Monto Prestamo:</span>
                <span className="span-body-section-left-prestamos-monto">27500.0000RD$</span>
              </IonRow>
              <IonRow>
                <span className="span-body-section">Fecha Prestamo:</span>
                <span className="span-body-section-left-prestamos-fecha">27/12/2021</span>
              </IonRow>
              <IonRow>
                <span className="span-body-section">Fecha Vencimiento:</span>
                <span className="span-body-section-left-prestamos-vencimiento">25/07/2025 </span>
              </IonRow>
              <IonRow>
                <p className="p-body-section">Orden de Compra</p>
                <p className="p-body-section-left-gerencial-orden">
                  Balance Prestamo
                </p>
              </IonRow>
              <IonRow>
                <span className="span-body-section">000000111145</span>
                <span className="span-body-section-left-prestamos">10,354.31RD$</span>
              </IonRow>
              <IonRow>
                <span className="span-body-section">Monto Prestamo:</span>
                <span className="span-body-section-left-prestamos-monto">31000.0000RD$</span>
              </IonRow>
              <IonRow>
                <span className="span-body-section">Fecha Prestamo:</span>
                <span className="span-body-section-left-prestamos-fecha">17/08/2021</span>
              </IonRow>
              <IonRow>
                <span className="span-body-section">Fecha Vencimiento:</span>
                <span className="span-body-section-left-prestamos-vencimiento">25/08/2022</span>
              </IonRow>
            </div>
          </IonItem>
        </section>
      </div>
    </IonApp>
  );
};

export default PrestamosForm;