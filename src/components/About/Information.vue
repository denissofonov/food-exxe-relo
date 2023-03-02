<template>
    <div class="information">
        <h2 class="information__subtitle">
            {{ props.subtitle }}
        </h2>
        <div class="information__bottom">
            <h1 class="information__title">
                {{ props.title }}
            </h1>
            <div class="information__description">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
    title: {type: String, required: true},
    subtitle: {type: String, required: true},
})
</script>

<style lang="scss" scoped>
.information {
    color: var(--black);
    max-width: 1076px;
    &__subtitle {
        display: inline-flex;
        align-items: center;
        gap: 30px;
        font-size: 20px;
        line-height: 28px;
        font-weight: 700;
        white-space: nowrap;
        @media (max-width: 1313px) {
            margin-left: 100px
        }
        @media (max-width: 992px) {
            display: none;
        }
    }
    &__subtitle:after{
        width:60px; 
        height:3px; 
        background:var(--brown); 
        content:"";
    }
    &__bottom {
        padding: 80px 140px 0 140px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 50px;
        @media (max-width: 992px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 140px;
        }
    }
    &__title {
        font-weight: 700;
        font-size: 50px;
        line-height: 78px;
        max-width: 200px;
        @media (max-width: 992px) {
            max-width: 500px;
            text-align: center;
        }
    }
    &__description {
        max-width: 526px;
        font-size: 18px;
        line-height: 25px;
        align-self: flex-end;
        @media (max-width: 992px) {
            align-self: center;
            text-align: center;
        }
    }
}
</style>