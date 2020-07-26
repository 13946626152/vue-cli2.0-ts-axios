<template>
  <li>
    {{ content }}
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TodoItem extends Vue {
  @Prop(String) content!: String;
}
</script>
