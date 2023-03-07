<template>
<div class="contacts">
    <div class="contacts__time">
        <Time minute='2' text="из центра Санкт-Петербурга" />
        <Time minute='12' text="из города Зеленогорска" />
        <Time minute='42' text="из аэропорта Пулково" />
        <Time minute='52' text="из города Павловск" />
    </div>
    <div class="contacts__info-box">
        <div class="contacts__map"><img src="@/assets/image/map.png"></div>
        <div class="contacts__info">
            <div class="contacts__address contacts__item">Санкт-Петербург, Северная дорога, 11</div>
            <div class="contacts__item">+7 (921) 777-77-77</div>
            <div class="contacts__text">Время работы</div>
            <div class="contacts__item">
                <span class="contacts__days">Вск-Чт</span>
                <span>с 12:00 до 23:00</span>
            </div>
            <div class="contacts__item">
                <span class="contacts__days">Пт-Сб</span>
                <span>с 12:00 до 03:00</span>
            </div>
            <div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import Time from '@/components/About/Time.vue'
</script>

<style lang="scss">
.contacts {
    display: flex;
    gap: 140px;
    margin: 0 0 100px 0;
    @media (max-width: 1198px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 906px) {
    }
    &__time {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        flex-wrap: wrap;
        gap: 30px
    }
    &__info-box {
        position: relative;
        @media (max-width: 769px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 80px;
        }
    }
    &__map {
        max-height: 380px;
        max-width: 546px;
    }
    &__info {
        background-color: #5B5B5B;
        height: 280px;
        width: 316px;
        position: absolute;
        top: 25px;
        right: 270px;
        padding: 40px;
        color: var(--white);
        font-size: 16px;
        @media (max-width: 769px) {
            position: static;
        }
    }
    &__item:not(:last-child) {
        margin-bottom: 15px
    }
    &__text {
        margin: 25px 0 15px 0;
        font-weight: 700;
    }
    &__days {
        font-weight: 700;
        margin-right: 5px;
    }
}
</style>