<template>
  <div>
    <div class="columns" :style="{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }">
      <div class="column-container" v-for="(column, index) in columns" :key="index">
        <Column
          :title="column.title"
          :cards="column.cards"
          :column-index="index"
          @addCard="handleAddCard"
          @moveCard="handleMoveCard"
        />
      </div>
    </div>
    <button class="add-column" @click="handleAddColumn">Add Column</button>
  </div>
</template>

<script>
import Column from './Column'

export default {
  name: 'HelloWorld',
  components: {
    Column
  },
  data () {
    return {
      columns: []
    }
  },
  methods: {
    handleAddCard (columnIndex) {
      const prompt = window.prompt('new card title?')
      this.columns[columnIndex].cards.push({
        title: prompt
      })
    },
    handleAddColumn () {
      const prompt = window.prompt('new column title?')
      this.columns.push({
        title: prompt,
        cards: []
      })
    },
    handleMoveCard (direction, columnIndex, cardIndex) {
      const movedCard = this.columns[columnIndex].cards[cardIndex]
      this.columns[columnIndex].cards.splice(cardIndex, 1)
      console.log(movedCard)
      let newColumn = columnIndex + direction
      newColumn = newColumn === this.columns.length ? 0 : newColumn
      newColumn = newColumn === -1 ? this.columns.length - 1 : newColumn
      this.columns[newColumn].cards.push(movedCard)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.columns {
  display: grid;
  grid-template-columns: repeat(auto-fill);
}

.column-container {
  grid-row: 1;
  margin: 0 .5rem;
}

.add-column {
  font-size: 24px;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  background-color: lightgrey;
  color: black;
}
</style>
