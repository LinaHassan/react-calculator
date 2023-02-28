import { HistoryProvider } from "../context";
import Calculator from "../Views/Calculator/inedx";
import History from "../Views/History";
import "./Layout.css";

const Layout = () => {
  return (
    <HistoryProvider>
      <div className="body-section">
        <History />
        <Calculator />
      </div>
    </HistoryProvider>
  );
};

export default Layout;
