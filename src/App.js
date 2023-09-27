import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from './components/SignIn'
import Otp from './components/Otp'
import Success from './components/Success'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/Otp" component={Otp} />
      <Route exact path="/Success" component={Success} />
    </Switch>
  </BrowserRouter>
)

export default App
