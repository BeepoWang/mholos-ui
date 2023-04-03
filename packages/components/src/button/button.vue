<template>
  <button class="m-button" :class="buttonStyle">测试按钮</button>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import './style/index.less';

defineOptions({ name: 'm-button' });

type ButtonProps = {
  type?: string;
};

const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`m-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
