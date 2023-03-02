<template>
<div class="contacts">
    <div class="contacts__time">
        <Time minute='2' text="из центра Санкт-Петербурга" />
        <Time minute='12' text="из города Зеленогорска" />
        <Time minute='42' text="из аэропорта Пулково" />
        <Time minute='52' text="из города Павловск" />
    </div>
    <div class="contacts__info">
        <div class="contacts__map"><img src="@/assets/image/map.png"></div>
        <div class="contacts__address-and-phone"></div>
    </div>
</div>
</template>

<script lang="ts" setup>
import Time from '@/components/About/Time.vue'
</script>

<style lang="scss" scoped>
.contacts {
    display: flex;
    gap: 140px;
    &__time {
        display: flex;
        width: 300px;
        flex-wrap: wrap;
        gap: 30px
    }
    &__info {
        position: relative;
    }
    &__map {
        height: 380px;
        width: 546px;
    }
    &__address-and-phone {
        background-color: #5B5B5B;
        position: absolute;
        height: 280px;
        width: 316px;
        position: absolute;
        top: 25px;
        right: 270px;
    }
}
</style>