import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import ClaimFund from "./components/pages/claim_fund";
import Beneficiary from "./components/pages/beneficiary";

function App() {
  return (
    <Router>
      <div className="fg-grant">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/claim-funds" exact component={ClaimFund} />
          <Route path="/beneficiary-list" exact component={Beneficiary} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
