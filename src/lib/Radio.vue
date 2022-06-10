<template>
  <label>
    <input type="radio" v-model="model" :value="label" :name="modelValue">
    <span>
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
import { computed } from 'vue';
export default {
  props: {
    modelValue:String,
    label:{
      type:[String,Number,Boolean]
    },
    name:{
      type:String,
      default:''
    }
  },
  // emits: ['update:modelValue'],
  setup(props,context) {
    console.log(props)
    // function onMode(){
    //   context.emit('update:modelValue',"props.name")
    // }
    const model = computed({
      get(){
        return props.modelValue;
      },
      set(modelValue){
        context.emit("update:modelValue",modelValue)
      }
    })
    return {}
  }
};
</script>

<style lang="scss">
</style>