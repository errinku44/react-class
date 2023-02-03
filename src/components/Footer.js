import { useContext } from "react";
import UserContext from "../utils/userContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return <h4>This website Footer is designed by {user.name}</h4>;
};

export default Footer;
