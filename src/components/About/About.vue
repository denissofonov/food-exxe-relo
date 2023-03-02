<template>
    <div class="about">
        <Welcome />
        <div class='container'>
            <div class="about__box-information">
                <Information title="Food Exxe Relo" subtitle="О ресторане">
                    Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In lectus phasellus non ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar sit volutpat nulla vestibulum.
                    Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi massa enim nullam sem vehicula. Amet quis pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra at porttitor. Fringilla luctus pretium in viverra. In adipiscing tempor amet malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate risus massa dictum. Cras at quis in eu, faucibus feugiat vel. At.
                </Information>
                <div class="about__menu">
                    <Information title="Меню" subtitle="Меню">
                        At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et eget erat. Nascetur nunc neque, varius massa aliquam interdum turpis massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut placerat fermentum pellentesque ac at. Vitae venenatis faucibus urna mi eget vitae quam eu. Euismod sed mauris id turpis iaculis. Erat rutrum dolor, vitae morbi.
                        Nunc cras cras aliquet blandit faucibus massa sagittis semper. 
                    </Information>
                    <!-- <div class="about__pictures">
                        <Picture text='Основное меню' :src='require("@/assets/image/image-1.png")'/>
                        <Picture text='Барная карта' :src='require("@/assets/image/image-2.png")'/>
                    </div> -->
                </div>
                <div class="about__delivery">
                    <Information title="Служба доставки" subtitle="Доставка">
                        Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis, non, a. In risus, venenatis enim vitae mauris aliquet orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem. Et in vitae pellentesque non, lectus orci natoque faucibus suspendisse. Semper aliquam id et ultrices velit donec lacus. In odio sit nibh volutpat cras placerat sit feugiat dignissim. Rutrum et suspendisse tortor, lobortis eleifend in fringilla. Egestas cursus imperdiet cursus dui, nulla id massa. Hendrerit nam enim semper porttitor imperdiet diam semper. Nulla sit etiam cras morbi enim elementum euismod sapien.
                    </Information>
                    <div class="about__buttons">
                        <Button type='brown'>Подробнее</Button>
                        <Button type='white'>Условия доставки</Button>
                    </div>
                </div>
            </div>
            <!-- <div class="about__contacts">
                <Information subtitle="Контакты"></Information>
                <Contacts />
            </div> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import Welcome from '@/components/About/Welcome.vue'
import Information from '@/components/About/Information.vue'
import Picture from '@/components/Picture.vue'
import Contacts from '@/components/About/Contacts.vue'
import Button from '@/components/ui/Button.vue'
</script>

<style lang="scss" scoped>
.about {
    margin-left: 120px;
    &__box-information {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 150px;
        margin-top: 150px;
    }
    &__pictures {
        display: flex;
        gap: 24px;
        justify-content: center;
        margin-top: 80px;
        padding: 0 80px 0 0;
    }
    &__delivery {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }
    &__buttons {
        padding: 0 0 0 56px;
        display: flex;
        aling-center: center;
        justify-content: center;
        gap: 30px
    }
    &__contacts {
        margin-top: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>