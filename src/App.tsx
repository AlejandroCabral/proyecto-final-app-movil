import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import News from "./pages/News";
import Contactos from "./pages/Contacto";
import Certificados from "./pages/Certificados";
import Sugerencias from "./pages/Sugerencias";
import Requests from "./pages/Request_Pass";
import Ahorro from "./pages/Ahorro";
import Prestamos from "./pages/Prestamos";
import Descuentos from "./pages/Descuentos";
import Solicitudes from "./pages/Solicitudes";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { newspaperOutline, callOutline } from "ionicons/icons";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path="/contactos">
              <Contactos />
            </Route>
            <Route exact path="/certificados">
              <Certificados />
            </Route>
            <Route exact path="/cuentas">
              <Ahorro />
            </Route>
            <Route exact path="/prestamos">
              <Prestamos />
            </Route>
            <Route exact path="/request">
              <Requests/>
            </Route>
            <Route exact path="/sugerencias">
              <Sugerencias />
            </Route>
            <Route exact path="/solicitudes">
              <Solicitudes />
            </Route>
            <Route exact path="/descuentos">
              <Descuentos />
            </Route>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="solicitudes" href="/solicitudes" layout="icon-top">
            <IonLabel>Solicitud</IonLabel>
            <IonIcon icon={newspaperOutline} color="success" />
          </IonTabButton>
          <IonTabButton tab="contactos" href="/contactos" layout="icon-top">
            <IonLabel>Contacto</IonLabel>
            <IonIcon icon={callOutline} color="success" />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
