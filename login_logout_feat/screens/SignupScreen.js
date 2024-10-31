import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuth, setIsAuth] = useState(false);

  const authCtx = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsAuth(true);

    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error.message;
        if (errorMessage.includes("EMAIL_EXISTS")) {
          alert("This email is already in use. Please use a different email.");
        } else if (errorMessage.includes("INVALID_EMAIL")) {
          alert("The email address is invalid. Please enter a valid email.");
        } else if (errorMessage.includes("WEAK_PASSWORD")) {
          alert("The password is too weak. Please use a stronger password.");
        } else {
          alert("An error occurred during signup. Please try again.");
        }
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsAuth(false);
    }
  };

  if (isAuth) {
    return <LoadingOverlay message={"Creating user..."} />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
