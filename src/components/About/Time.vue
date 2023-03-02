<template>
    <div class="time">
        <div class="time__minute-box">
            <span class="time__minute">{{ minute }}</span>
            <span class="time__minute-text">мин</span>
        </div>
        <span class="time__text">{{ text }}</span>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
    minute: {type: String, required: true},
    text: {type: String, required: true},
})
</script>

<style lang="scss" scoped>
.time {
    width: 130px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    &__minute-box {
        color: var(--brown);
    }
    &__minute {
        font-size: 64px;
        font-width: 700;
        margin: 0 10px 0 0;
    }
    &__minute-text {
        font-size: 32px
    }
    &__text {
        font-size: 18px
    }
}
</style>
