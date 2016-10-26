import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import SignupForm from  './containers/forms/Signup'
import LogInForm from  './containers/forms/LogIn'
import GithubCallback from './connectors/GithubCallback'
import GithubProjectSelector from './containers/GithubProjectSelector'


export default (
  <div>
    <Route path="/" component={App} >
      <Route path="signin" component={LogInForm} />
      <Route path="signup" component={SignupForm} />
      <Route path="connected" component={GithubProjectSelector} />
    </Route >
    <Route path="github-callback" component={GithubCallback} />
  </div>
)
