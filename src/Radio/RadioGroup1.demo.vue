<demo>
组用法
</demo>
<template>
  <div>
    <qc-radiogroup name="cat">
      <qc-radio >小黑</qc-radio>
      <qc-radio >佩岭</qc-radio>
    </qc-radiogroup>
  </div>
</template>
<script lang='ts'>
import qcRadio from '../lib/Radio.vue'
import qcRadioGroup from '../lib/RadioGroup.vue'
export default {
  components: { qcRadio , qcRadioGroup},
};
</script>