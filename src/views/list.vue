<template>
  <div>
    <input type="text" v-model="inputValue">
    <button @click="handleAdd">add item</button>
    <ul>
      <TodoItem
        v-for="(item, index) in list"
        :key="index"
        :content="item"
        @click.native="handleDelete(Number(index))"
      >
        {{ item }}
      </TodoItem>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TodoItem from './todoItem.vue';
@Component({
  components: {
    TodoItem
  }
})
export default class App extends Vue {
  inputValue: String = '';
  list: Array<String> = ['吃饭', '睡觉', '打豆豆'];

  handleAdd(): void {
    const inputValue = this.inputValue;
    this.list.push(inputValue);
    this.inputValue = '';
  }

  handleDelete(index: number): void {
    this.list.splice(index, 1);
  }
}
</script>
