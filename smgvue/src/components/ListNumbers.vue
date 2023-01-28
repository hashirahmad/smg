<template>
  <v-container>
    <v-list-item
      v-for="(number,index) in numbersList"
      :key="index"
      style="background-color: lightgray;"
      class="listStyles"
    >
      <v-list-item-content>
        <v-list-item-title v-text="number"></v-list-item-title>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon @click="removeNumber(index)">
          <v-icon color="grey lighten-1">mdi-minus-circle</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-list-item
      style="background-color: black;"
      class="listStyles"
    >
      <v-list-item-content>
        <v-list-item-title v-text="'Sum: ' + sum"></v-list-item-title>
      </v-list-item-content>

    </v-list-item>
  </v-container>
</template>

<script>
import Numbers from './Numbers'

export default {
  name: "ListNumbers",
  props: ['numbersList', 'removeNumberFunction'],
  data: () => ({
    sum: 0,
  }),
  watch: {
    numbersList() {
      this.sumOfNumbers()
    }
  },
  mounted() {
    this.sumOfNumbers()
  },
  methods: {
    removeNumber(index) {
      this.removeNumberFunction(index)
      this.sumOfNumbers()
    },
    sumOfNumbers() {
      this.sum = Numbers.sumOfNumbers()
    }
  },
};
</script>

<style scoped>
.listStyles {
  margin-bottom: 6px;
  border-radius: 10px;
}
</style>
