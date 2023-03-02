<template>
<div class="picture">
    <div class="picture__border-and-image">
        <div class="picture__border"></div>
        <img class="picture__image" :src="props.src">
    </div>
    <div class="picture__text"> 
        <span>{{ props.text }}</span> 
        <span class="picture__band"></span>
    </div>
</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
    src: {type: String, required: true},
    text: {type: String, required: false},
})
</script>

<style lang="scss" scoped>
.picture {
    width: 416px;
    height: 334px;
    position: relative;
    &__border {
        height: 240px;
        width: 416px;
        z-index: 0;
        position: absolute;
        border: 1px solid rgba(51, 51, 51, 0.2);
    }
    &__image {
        margin: 40px 40px 0 40px;
        position: relative;
        z-index: 1;
    }
    &__text {
        font-size: 20px;
        line-height: 28px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        width: 100%;
        margin-top: 24px
    }
    &__band {
        height: 3px;
        width: 60px;
        background-color: var(--brown);
    }
}
</style>