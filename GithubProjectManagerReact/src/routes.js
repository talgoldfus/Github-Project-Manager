import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import UserHomePage from './components/UserHomePage'
import UserTasksPage from './components/UserTasksPage'
import UserProjectsPage from './components/UserProjectsPage'
import SignupForm from  './containers/forms/Signup'
import LoginPage from  './containers/LoginPage'
import GithubCallback from './connectors/GithubCallback'
import GithubProjectSelector from './containers/GithubProjectSelector'
import ProjectPage from './containers/ProjectPage'

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
            <Route path="home" component={UserHomePage} onEnter={authorize(store)} />
            <Route path="signin" component={LoginPage} />
            <Route path="signup" component={SignupForm} />
            <Route path="connected" component={GithubProjectSelector} onEnter={authorize(store)} />
            <Route path="projects" component={UserProjectsPage} onEnter={authorize(store)} />
            <Route path="projects/:id" component={ProjectPage} onEnter={authorize(store)} />
            <Route path="tasks" component={UserTasksPage} onEnter={authorize(store)} />
          </Route >
          <Route path="github-callback" component={GithubCallback} />
        </div>
  )
}
