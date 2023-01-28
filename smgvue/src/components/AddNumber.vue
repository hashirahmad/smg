<template>
  <v-container>
    <v-text-field
      append-icon="mdi-plus-circle"
      :rules="[rules.mustBeANumber]"
      name="input-10-2"
      :label="label"
      :hint="hint"
      v-model="number"
      class="input-group--focused"
      :error-messages="numberToBeAddedErr"
      hide-details="auto"
      @click:append="addNumber()"
    ></v-text-field>
  </v-container>
</template>

<script>
import Numbers from './Numbers'

export default {
  name: "AddNumber",
  props: ['label', 'hint'],
  data: () => ({
    number: 1,
    numberToBeAddedErr: '',
    rules: {
      mustBeANumber: value => !Number.isNaN(Number(value)) || 'Must be a number',
    },
  }),
  methods: {
    addNumber() {
      if (Numbers.isValidNumber(this.number)) {
        this.numberToBeAddedErr = ''
        Numbers.add(this.number)
        this.number = 1
      } else this.numberToBeAddedErr = `${this.number} is not actually a number!`
    }
  },
};
</script>
