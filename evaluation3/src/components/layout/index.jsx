import { Provider } from "react-redux";
import store from "../../store";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Provider>
  );
};

export default Layout;
