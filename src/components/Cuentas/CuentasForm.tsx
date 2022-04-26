import "./Cuentas.css";
import { IonIcon, IonInput, IonItem, IonLabel, IonButton } from "@ionic/react";
import { personOutline, key } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import AhorroForm from '../Ahorro/AhorroForm';

interface CuentasProps {}

const CuentasForm: React.FC<CuentasProps> = () => {
  return (
    <div>
      <a className="reference" href='/ahorro'>Cuentas</a></div>
  );
};
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


  

export default CuentasForm;
