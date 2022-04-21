import "./LoginForm.css";
import { IonIcon, IonInput, IonItem, IonLabel, IonButton } from "@ionic/react";
import { personOutline, key } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";

interface LoginProps {}

const LoginForm: React.FC<LoginProps> = () => {
  const [text, setText] = useState<string>();
  const [num, setNum] = useState<string>();
  let history = useHistory();

  const getInfo = async (url: any, data: any) => {
    return fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (text === json.data.cedula && num === json.data.clave) {
          history.push('home');
        } else {
          console.log("no funciona");
        }
      })
      .catch((error) => console.log(error));
  };

  const start = async (user: any, password: any) => {
    await getInfo(
      "https://coopdgii.com/coopvirtual/App/login",
      `usuario=${user}&clave=${password}`
    );
  };


  return (
    <div className="container fade">
      <img
        className="header-image"
        src="https://coopdgii.com/wp-content/uploads/2016/05/Logo-300x300.png"
        alt="Logo de la company"
      />

      <div className="login-form">
        <IonItem>
          <IonLabel>
            <IonIcon icon={personOutline}></IonIcon>
          </IonLabel>
          <IonInput
            type="text"
            placeholder="Cédula"
            onIonChange={(e: any) => setText(e.target.value)}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>
            <IonIcon icon={key}></IonIcon>
          </IonLabel>
          <IonInput
            type="password"
            placeholder="Contraseña"
            onIonChange={(e: any) => setNum(e.target.value)}
          />
        </IonItem>

        <div className="boton">
          <IonButton
            type="submit"
            color="success"
            expand="block"
            onClick={() => start("20197979", "Bryane2211@")}
          >
            INICIAR SESIÓN
          </IonButton>
        </div>

        <div className="error">
          <a href="#O">¿Tienes problemas para Iniciar Sesión?</a>
        </div>
      </div>
      <footer>
      </footer>
    </div>
  );
};

export default LoginForm;
