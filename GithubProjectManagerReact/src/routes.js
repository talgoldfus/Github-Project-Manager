import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import SignupForm from  './containers/forms/Signup'
import LogInForm from  './containers/forms/LogIn'
import GithubCallback from './connectors/GithubCallback'
import GithubProjectSelector from './containers/GithubProjectSelector'
import ProjectPage from './containers/ProjectPage'
import AllUserProjects from './containers/AllUserProjects'

const authorize = (store) => {
  return (nextState, replace) => {
    let signedIn = store.getState().authentication.authenticated
    signedIn ? null : replace('/')
  }
};

export default (store)=>{
  return(
        <div>
          <Route path="/" component={App}>
            <Route path="home" component={AllUserProjects} onEnter={authorize(store)} />
            <Route path="signin" component={LogInForm} />
            <Route path="signup" component={SignupForm} />
            <Route path="connected" component={GithubProjectSelector} onEnter={authorize(store)} />
            <Route path="projects/:id" component={ProjectPage} onEnter={authorize(store)} />
          </Route >
          <Route path="github-callback" component={GithubCallback} />
        </div>
  )
}
