function filterTasksByStatus(tasks, status){
  switch (status) {
    case 'todo':
      return tasks.filter(t => t.status === 'todo')
    case 'inProgress':
      return tasks.filter(t => t.status === 'inProgress')
    case 'inReview':
      return tasks.filter(t => t.status === 'inReview')
    case 'completed':
      return tasks.filter(t => t.status === 'completed')
  }
}

function filterAllTasks(tasks){
  return {
    todoTasks: sortTasksByPriority(filterTasksByStatus(tasks,'todo'),'DESC'),
    inProgressTasks: sortTasksByPriority(filterTasksByStatus(tasks,'inProgress'),'DESC'),
    inReviewTasks: sortTasksByPriority(filterTasksByStatus(tasks,'inReview'),'DESC'),
    completedTasks: sortTasksByPriority(filterTasksByStatus(tasks,'completed'),'DESC')
  }
}

function sortTasksByPriority(tasks,sortBy){
  switch (sortBy) {
    case 'ASC':
      return tasks.sort((a,b)=> a.priority - b.priority)
    case 'DESC':
      return tasks.sort((a,b)=> b.priority - a.priority)
  }
}


function filterIconName(status){
  switch (status) {
    case "todo":
      return "fa fa-plus-square-o"
    case "inProgress":
      return "fa fa-spinner"
    case "inReview":
      return "fa fa-exclamation-circle"
    case "completed":
      return "fa fa-check-square-o"
  }
}


export { filterTasksByStatus, filterAllTasks,filterIconName , sortTasksByPriority };
