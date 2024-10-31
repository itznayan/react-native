import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuth, setIsAuth] = useState(false);
  const authCtx = useContext(AuthContext);
  
  const signinHandler = async ({ email, password }) => {
    setIsAuth(true);

    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      alert("Invalid email or password. Please try again.");
    } finally {
      setIsAuth(false);
    }
  };

  if (isAuth) {
    return <LoadingOverlay message={"Login user..."} />;
  }

  return <AuthContent isLogin onAuthenticate={signinHandler} />;
}

export default LoginScreen;
