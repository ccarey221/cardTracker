<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <div class="arrows">
      <span class="arrow" @click="arrowClick(-1)">&lt;</span>
      <span>{{ cardIndex }}</span>
      <span class="arrow" @click="arrowClick(1)">&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    cardIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    arrowClick (direction) {
      this.$emit('arrowClick', direction, this.cardIndex)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 90%;
  background-color: white;
  border-radius: 4px;
  margin-top: .5rem;
  padding: 2rem 0;
}

.arrow {
  font-size: 24px;
  cursor: pointer;
}

.arrows {
  display: flex;
  justify-content: space-around;
}
</style>
