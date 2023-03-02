<template>
    <div class="menu" :class="{'full-menu': showMenu}">
        <div class="menu__top">
            <img class="menu__logo-icon" src="@/assets/icons/logo.svg"/>
            <button @click="toggleShowMenu">
                <img v-if="!showMenu" class="menu__menu-icon" src="@/assets/icons/menu.svg"/>
                <img v-if="showMenu" class="menu__menu-icon" src="@/assets/icons/cross.svg"/>
            </button>
        </div>
        <transition name="menu__middle">
            <div v-if="showMenu" class="menu__middle">
                <nav class="menu__buttons">
                    <button class="menu__button">Меню</button>
                    <button class="menu__button">Доставка</button>
                    <button class="menu__button">Оплата</button>
                    <Button class="menu__button" type="brown" size="large">Бронь столика</Button>
                </nav>
            </div>
        </transition>
        <div class="menu__bottom">
            <button><img class="menu__menu-icon" src="@/assets/icons/youtube.svg"/></button>
            <button><img class="menu__menu-icon" src="@/assets/icons/vk.svg"/></button>
            <button><img class="menu__menu-icon" src="@/assets/icons/telegram.svg"/></button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showMenu = ref(false)
const toggleShowMenu = () => {
    showMenu.value = !showMenu.value
    console.log('toggle')
    if (showMenu.value) {
        document.body.className = 'overflow-hidden'
    } else {
        document.body.className = ''
    }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 120px;
    height: 100vh;
    background-color: var(--background-2);
    padding: 30px 0;
    transition: width 1s;
    z-index: 100;
    position: fixed;
    &__top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
    &__logo-icon {
        width: 73px;
    }
    &__logo-menu {
        width: 34px;
    }
    &__bottom {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    &.full-menu &__bottom {
        justify-content: center;
        flex-direction: row;
    }
    &__buttons {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: var(--white);
        gap: 60px;
        font-size: 48px;
        font-weight: 700;
    }
}
.full-menu {
    width: 100vw;
}
.menu__middle-enter-active, .menu__middle-leave-active {
  transition: opacity .5s;
}
.menu__middle-enter, .menu__middle-leave-to {
  opacity: 0;
}
</style>