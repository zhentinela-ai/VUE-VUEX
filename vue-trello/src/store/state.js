export default {
  user: null,
  fetchingData: true,
  error: null,

  boards: {/**
    id: {
      id,
      owner
    }
 */},
  lists: {/**
    id: {
      id,
      board,
      name
    }
 */},
  tasks: {/**
    id: {
      id,
      list,
      title,
      completed
    }
 */}
}
