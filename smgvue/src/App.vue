<template>
  <v-app>
    <v-main>
      <AddNumber
        label="Input a number to add"
        hint="It must be a real number"
      ></AddNumber>
      <ListNumbers
        :numbersList="numbersList"
        :removeNumberFunction="removeNumberFunction"
      />
    </v-main>
  </v-app>
</template>

<script>
import Numbers from './components/Numbers'
import AddNumber from "./components/AddNumber";
import ListNumbers from "./components/ListNumbers";

export default {
  name: "App",
  components: {
    AddNumber,
    ListNumbers
  },
  data: () => ({
    numbersList: Numbers.numbersList,
    removeNumberFunction: Numbers.removeNumber
  }),
};
</script>

