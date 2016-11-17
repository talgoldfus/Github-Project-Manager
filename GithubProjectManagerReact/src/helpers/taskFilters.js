function filterTasksByStatus(tasks, status){
  switch (status) {
    case 'open':
      return tasks.filter(t => t.status === 'open')
    case 'inReview':
      return tasks.filter(t => t.status === 'inReview')
    case 'closed':
      return tasks.filter(t => !t.status === 'closed')
  }
}

function filterAllTasks(tasks){

  return {
    openTasks: filterTasksByStatus(tasks, 'open'),
    inReviewTasks: filterTasksByStatus(tasks, 'inReview'),
    closedTasks: filterTasksByStatus(tasks, 'closed')
  }
}


function filterIconName(status){
  switch (status) {
    case "open":
      return "fa fa-exclamation-circle"
    case "inReview":
      return
    case "closed":
      return "fa fa-check-square-o"
    default:
      return "fa fa-exclamation-circle"
  }
}


export { filterTasksByStatus, filterAllTasks,filterIconName };
