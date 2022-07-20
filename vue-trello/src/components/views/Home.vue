<template>
  <div>
    <h3>Mis Paneles
      <div class="boards-collection">
        <input type="text"
        placeholder="Añade un nuevo panel"
        v-model="boardName"
        @keyup.enter="add()"
        >
        <board-card
          v-for="(board, index) in boards"
          :key="index"
          :name="board.name"
          :id="board.id"
         ></board-card>
      </div>
    </h3>
  </div>
</template>

<script>
import BoardCard from '@/components/BoardCard'

export default {
  nam: 'home-view',
  components: { BoardCard },
  data () {
    return {
      boardName: '',
      boards: [
        { id: 1, name: 'Taks' },
        { id: 2, name: 'Shopping list' }
      ]
    }
  },
  methods: {
    add () {
      this.boards.push({ name: this.boardName })
    }
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    text-align: left;
    margin: 0;
  }

  .boards-collection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
  }

  input {
    box-sizing: border-box;
    background-color: #546E7A;
    border: 2px solid #546E7A;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;

    &:focus,
    &:active {
      background-color: white;
      color: #546E7A;
    }

    &::placeholder {
      color: white;
    }
  }
</style>
