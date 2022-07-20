import Vue from 'vue'
import * as types from './mutations-types'

export default {
  // Fecth de los paneles creados por el usuario
  [types.FECTH_BOARDS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FECTH_BOARDS_SUCCESS] (state, { boards }) {
    state.fetchingData = false
    state.error = null
    state.boards = { ...boards }
  },

  [types.FECTH_BOARDS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },

  // Fetch de las listas de determinado panel
  [types.FECTH_LISTS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FECTH_LISTS_SUCCESS] (state, { lists }) {
    state.fetchingData = false
    state.error = null
    state.lists = { ...lists }
  },

  [types.FECTH_LISTS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },

  // Fetch de las tareas correspondienes a una lista
  [types.FECTH_TASKS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FECTH_TASKS_SUCCESS] (state, { tasks }) {
    state.fetchingData = false
    state.error = null
    state.tasks = { ...tasks }
  },

  [types.FECTH_TASKS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },

  // Crear un nuevo panel
  [types.ADD_BOARD] (state, { board }) {
    Vue.set(state.board, board.id, board)
  },

  // Crear una nueva lista de tareas
  [types.ADD_COLUMN] (state, { column }) {
    Vue.set(state.lists, column.id, column)
  },

  // Añadir una nueva tarea a una lista
  [types.ADD_TASK] (state, { task }) {
    Vue.set(state.tasks, task.id, task)
  },

  // Borrar una tarea de una lista de tareas
  [types.DELETE_TASK] (state, { taskId }) {
    state.tasks = Object.values(state.tasks)
      .filter(task => task.id !== taskId)
  },

  // Marca como completada una tarea
  [types.MARK_AS_COMPLETED] (state, { task }) {
    task.completed = !task.completed
  }
}
