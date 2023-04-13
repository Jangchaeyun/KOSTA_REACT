import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router";
import MakeAccount from "./component/MakeAccount";
import AccountInfo from "./component/AccountInfo";
import Deposit from "./component/Deposit";
import Withdraw from "./component/Withdraw";
import AllAccountInfo from "./component/AllAcountInfo";
import BankTop from "./component/BankTop";
import Signup from "./component/Signup";
import Signin from "./component/Signin";

function App() {
  return (
    <div>
      <BankTop />
      <Routes>
        <Route exact path="/join" element={<Signup />} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Signin />} />
      </Routes>
      <Routes>
        <Route exact path="/makeaccount" element={<MakeAccount />} />
      </Routes>
      <Routes>
        <Route exact path="/withdraw" element={<Withdraw />} />
      </Routes>
      <Routes>
        <Route exact path="/deposit" element={<Deposit />} />
      </Routes>
      <Routes>
        <Route exact path="/accountInfo" element={<AccountInfo />} />
      </Routes>
      <Routes>
        <Route exact path="/allaccountinfo" element={<AllAccountInfo />} />
      </Routes>
    </div>
  );
}

export default App;
