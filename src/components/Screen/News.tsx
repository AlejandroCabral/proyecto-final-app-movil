import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import {
  walletOutline,
  cashOutline,
  businessOutline,
  newspaperOutline,
  calculatorOutline,
  earthOutline,
  folderOpenOutline,
  helpCircleOutline,
  powerOutline,
} from "ionicons/icons";
import "./News.css";

interface NewsProps {}

const News: React.FC<NewsProps> = () => {
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
            <IonItem routerLink="/ayuda" routerDirection="none">
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

      <div id="main-content">
        <IonHeader class="ion-no-border">
          <IonToolbar color="translucent">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="Container">
          <div className="Container-P">
            <img
              src="https://coopdgii.com/wp-content/uploads/2022/02/Matias-Ramon-Mella.jpg"
              className="mella"
              alt=""
              loading="lazy"
            ></img>
            <h3 className="elementor-post__title">
              <a href="https://coopdgii.com/mensaje-por-el-dia-del-natalicio-de-matias-ramon-mella/">
                Mensaje Por el Día del Natalicio de Matías Ramón Mella
              </a>
            </h3>
            <h5>
              La COOPDGII honra a uno de sus próceres y valiente estratega en la
              lucha por la Independencia Nacional, Matías Ramón Mella, hoy
              25/02/2022 conmemoramos el día
            </h5>
            <br />
            <a
              className="elementor-post__read-more"
              href="https://coopdgii.com/mensaje-por-el-dia-del-natalicio-de-matias-ramon-mella/"
            >
              Leer Más &gt;&gt;
            </a>
            <hr />
            <div className="elementor-post__meta-data">
              <span className="elementor-post-date">
                {" "}
                25 de febrero de 2022{" "}
              </span>
            </div>
          </div>
          <div className="Container-P">
            <img
              src="https://coopdgii.com/wp-content/uploads/2022/02/Patria-768x768.jpg"
              className="Patria"
              alt=""
              loading="lazy"
            ></img>
            <h3 className="elementor-post__title">
              <a href="https://coopdgii.com/celebra-con-nosotros-el-mes-de-la-patria/">
                Celebra con nosotros el mes de la Patria
              </a>
            </h3>
            <h5>
              Celebra con nosotros el mes de la Patria para todos nuestros
              socios Aprovecha nuestra tasa súper atractiva de 0.83% en el mes
              de febrero, mes de
            </h5>
            <br />
            <a
              className="elementor-post__read-more"
              href="https://coopdgii.com/celebra-con-nosotros-el-mes-de-la-patria/"
            >
              Leer Más &gt;&gt;
            </a>
            <hr />
            <div className="elementor-post__meta-data">
              <span className="elementor-post-date">
                {" "}
                17 de febrero de 2022{" "}
              </span>
            </div>
          </div>
          <div className="Container-P">
            <img
              src="https://coopdgii.com/wp-content/uploads/2022/01/Juventud.jpeg"
              className="Juvenil"
              alt=""
              loading="lazy"
            ></img>
            <h3 className="elementor-post__title">
              <a href="https://coopdgii.com/dia-nacional-del-cooperativismo-juvenil/">
                Día Nacional del Cooperativismo Juvenil
              </a>
            </h3>
            <a
              className="elementor-post__read-more"
              href="https://coopdgii.com/dia-nacional-del-cooperativismo-juvenil/"
            >
              Leer Más &gt;&gt;
            </a>
            <hr />
            <div className="elementor-post__meta-data">
              <span className="elementor-post-date"> 31 de enero de 2022 </span>
            </div>
          </div>
          <div className="Container-P">
            <img
              src="https://coopdgii.com/wp-content/uploads/2022/01/Duarte.jpg"
              className="Duarte"
              alt=""
              loading="lazy"
            ></img>
            <h3 className="elementor-post__title">
              <a href="https://coopdgii.com/natalicio-juan-pablo-duarte-y-diez/">
                Natalicio Juan Pablo Duarte Y Diez
              </a>
            </h3>
            <h5>
              La COOPDGII se suma a la conmemoración de un año más del Natalicio
              Juan Pablo Duarte Y Diez, nuestro padre de la Patria a celebrarse
              el
            </h5>
            <br />
            <a
              className="elementor-post__read-more"
              href="https://coopdgii.com/natalicio-juan-pablo-duarte-y-diez/"
            >
              Leer Más &gt;&gt;
            </a>
            <hr />
            <div className="elementor-post__meta-data">
              <span className="elementor-post-date"> 24 de enero de 2022 </span>
            </div>
          </div>
          <div className="Container-P">
            <img
              src="https://coopdgii.com/wp-content/uploads/2022/01/Virgen.jpg"
              className="Altagracia"
              alt=""
              loading="lazy"
            ></img>
            <h3 className="elementor-post__title">
              <a href="https://coopdgii.com/dia-de-nuestra-senora-de-la-altagracia/">
                Día de Nuestra Señora de La Altagracia
              </a>
            </h3>
            <h5>21 DE ENERO DÍA DE NUESTRA SEÑORA DE LA ALTAGRACIA</h5>
            <br />
            <a
              className="elementor-post__read-more"
              href="https://coopdgii.com/dia-de-nuestra-senora-de-la-altagracia/"
            >
              Leer Más &gt;&gt;
            </a>
            <hr />
            <div className="elementor-post__meta-data">
              <span className="elementor-post-date"> 21 de enero de 2022 </span>
            </div>
          </div>
          <div className="Container-P">
            <img
              src="https://coopdgii.com/wp-content/uploads/2022/01/Covid.jpg"
              className="Salud"
              alt=""
              loading="lazy"
            ></img>
            <h3 className="elementor-post__title">
              <a href="https://coopdgii.com/la-salud-es-responsabilidad-de-todos/">
                La Salud es responsabilidad de todos.
              </a>
            </h3>
            <h5>
              La Salud es responsabilidad de todos. La COOPDGII consciente de la
              situación actual en relación al COVID-19 motivamos a nuestra base
              social, directivos y empleados a
            </h5>
            <br />
            <a
              className="elementor-post__read-more"
              href="https://coopdgii.com/la-salud-es-responsabilidad-de-todos/"
            >
              Leer Más &gt;&gt;
            </a>
            <hr />
            <div className="elementor-post__meta-data">
              <span className="elementor-post-date"> 6 de enero de 2022 </span>
            </div>
          </div>
        </div>
      </div>
      </IonApp>

  );
};

export default News;
