<template>
    <div class="welcome">
        <Header />
        <div class="welcome__title">Видовой ресторан Food Exxe Relo на Крестовском острове</div>
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
            width: 800px;
            font-size: 54px;
            font-weight: 700;
            color: var(--white);
            line-height: 76px;
            position: absolute;
            bottom: 220px;
            left: 320px;
        }
    }
</style>