import * as types from './mutations-types'
import API from '@/api'

export default {
  // Fetch via AJAX de los paneles del usuarios
  fetchBoards ({ commit }, { user }) {
    commit(types.FECTH_BOARDS_REQUEST)

    API.getBoardsByUser(user)
      .then(snap => commit(types.FECTH_BOARDS_SUCCESS, { boards: snap.val() }))
      .catch(error => commit(types.FECTH_BOARDS_FAILURE, { error }))
  },

  // Fetxh via AJAX de las listas asociadas a un panel
  fetchLists ({ commit }, { board }) {
    commit(types.FECTH_LISTS_REQUEST)

    API.getListsFromBoard(board)
      .then(snap => commit(types.FECTH_LISTS_SUCCESS, { lists: snap.val() }))
      .catch(error => commit(types.FECTH_LISTS_FAILURE, { error }))
  },

  // Fetch vía AJAX de las tareas de una lista
  fetchTasks ({ commit }, { list }) {
    commit(types.FECTH_TASKS_REQUEST)

    API.getTasksFromList(list)
      .then(snap => commit(types.FECTH_TASKS_SUCCESS, { tasks: snap.val() }))
      .catch(error => commit(types.FECTH_TASKS_FAILURE, { error }))
  },

  // Añadir un nuevo panel
  addBoard ({ commit }, { name }) {
    API.postBoard(name)
      .then(board => commit(types.ADD_BOARD, { board }))
  },

  addColumn ({ commit }, { board, name }) {
    API.postList(board, name)
      .then(column => commit(types.ADD_COLUMN, { column }))
  },

  addTask ({ commit }, { list, title }) {
    API.postTask(list, title)
      .then(task => commit(types.ADD_TASK, { task }))
  },

  deleteTask ({ commit }, { taskId }) {
    API.deleteTask(taskId)
      .then(() => commit(types.DELETE_TASK), { taskId })
  },

  markAsCompleted ({ commit }, { task }) {
    API.completedTask(task.id)
      .then(() => commit(types.MARK_AS_COMPLETED), { task })
  }
}
