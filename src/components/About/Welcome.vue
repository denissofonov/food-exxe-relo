<template>
    <div class="welcome">
        <Header />
        <span class="welcome__title">Видовой ресторан Food Exxe Relo на Крестовском острове</span>
    </div>
</template>

<script lang="ts" setup>
import Header from '@/components/About/Header.vue'
</script>

<style lang="scss" scoped>
    .welcome {
        height: 100vh;
        background-image: url('@/assets/image/background.png');
        background-repeat: no-repeat;
        background-size: cover;
        &__title {
            max-width: 800px;
            font-size: 54px;
            font-weight: 700;
            color: var(--white);
            line-height: 76px;
            position: absolute;
            bottom: 220px;
            left: 240px;
            @media (max-width: 992px) {
                font-size: 34px;
                max-width: 400px;
                left: 200px;
            }
            @media (max-width: 769px) {
                left: 100px;
                bottom: 60px;
            }
            @media (max-width: 604px) {
                max-width: 300px;
                left: 90px;
                bottom: 40px;
            }
        }
    }
</style>