import {connect} from 'react-redux'
import getPublicProjects from '../actions/getPublicProjects'
import PublicProjectsList from '../components/PublicProjectsList'

const PublicProjectsListConnector = connect(null,{getPublicProjects})(PublicProjectsList)
export default PublicProjectsListConnector
