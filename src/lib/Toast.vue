<template>
  <div class="qc-toast">
    <div class="qc-toast-inner"  v-if="visible">
      <div class="qc-toast-message">
        {{message}}
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {ref} from 'vue'
export default {
  props: {
    //内容
    message:{
      type:String,
      default:'111'
    },
    //ms
    delay:{
      type:Number,
      default:250
    }

  },
  setup(props, context) {
    const visible = ref(true);
    const close = ()=>{//关闭
      const visible = ref(false);
    }
    const open = ()=>{//打开
      visible.value = true;

      setTimeout(() => {
        close();
      }, props.delay);
    }
    return {
      visible,
      open,
      close
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.qc-toast{
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  //不会成为鼠标点击目标，会穿透到图层下面
  pointer-events: none;

  .qc-toast-inner{
    bottom: -15%;
    padding: 8px 18px;
    border-radius: 12px;
    font-size: 18px;
    color: #fff;
    background-color: $blue;
  }
}

</style>
