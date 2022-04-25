import './LoginForm.css';
import { IonIcon } from '@ionic/react';
import { personOutline, key } from 'ionicons/icons';

interface LoginProps { }

const LoginForm: React.FC<LoginProps> = () => {
  return (
    <div className="container fade">

      <img className="header-image" src="https://coopdgii.com/wp-content/uploads/2016/05/Logo-300x300.png" alt="Logo de la company" />
      
      <div className="login-form">

        <div className="cedula">
          <input type="text" placeholder="Cédula"/><IonIcon icon={personOutline}></IonIcon>
        </div>

          <div className="password">
          <input type="text" placeholder="Contraseña"/><IonIcon icon={key}></IonIcon>
          </div>

        <div className="boton">
          <button type="submit">INICIAR SESIÓN</button>
        </div>

        <div className="error">
          <a href="./Screen/News.tsx">¿Tienes problemas para Iniciar Sesión?</a>
        </div>

      </div>

      <footer>
        {/* <img src="https://i1.wp.com/www.revistamercado.do/wp-content/uploads/2021/05/mujer-contadora.jpg?fit=1280%2C638&ssl=1" alt="Logo mujer emprendedora" /> */}
      </footer>
    
    </div>
  );
};

export default LoginForm;
