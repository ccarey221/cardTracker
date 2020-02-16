<template>
  <div class="column">
    <h1>{{ title }}</h1>
    <div v-for="(card, index) in cards" :key="card.title" class="cards">
      <Card
        :title="card.title"
        :card-index="index"
        @arrowClick="handleArrowClick"
      />
    </div>
    <div class="add-column" @click="addCard">+</div>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'Column',
  components: {
    Card
  },
  props: {
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      default () {
        return []
      }
    },
    columnIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    addCard () {
      this.$emit('addCard', this.columnIndex)
    },
    handleArrowClick (direction, cardIndex) {
      this.$emit('moveCard', direction, this.columnIndex, cardIndex)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  background-color: lightgrey;
  border-radius: 4px;
  padding: 1rem 0;
}

.cards {
  display: flex;
  justify-content: center;
}

.add-column {
  margin-top: 1rem;
  font-size: 24px;
  cursor: pointer;
}
</style>
