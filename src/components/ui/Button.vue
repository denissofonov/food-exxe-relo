<template>
    <button
        class="button"
        :disabled=disabled
        :class="{
            disabled,
            [size]: size,
            [type]: type,
        }">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        size: {
            type: String,
            required: true,
            default: '' // large, small
        },
        type: {
            type: String,
            required: true,
            default: '' // brown, white
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style>
/* BASIC */
.button {
    font-size: 16px;
    color: white;
    cursor: pointer;
}

/* BROWN */
.brown {
    padding: 10px 20px;
    background-color: var(--brown);
    border: 1px solid var(--brown);
}

/* WHITE */
.white {
    padding: 10px 20px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    color: var(--black);
}

/* .button:hover:not(.disabled) {
    color: var(--col-9);
}
.button:focus {
    border: 1px solid;
    border-color: var(--col-10);
}
.button:active:not(.disabled) {
    background-color: var(--mint-5);
    border: none;
} */

/* SIZE */
.large {
    height: 50px;
    padding: 0 22px;
    font-size: 24px;
}
.small {
    height: 30px;
    padding: 0 10px;
    font-size: 12px;
} 


/* DISABLED */
/* .disabled {
    cursor: not-allowed;
    background-color: var(--mint-disabled);
} */


/* NEGATIVE */
/* .negative {
    background-color: var(--neg-3);
}
.negative:hover:not(.disabled) {
    background-color: var(--neg-4);
}
.negative:active:not(.disabled) {
    background-color: var(--neg-5);
}
.negative:focus:not(.disabled) {
    background-color: var(--neg-3);
} */

/* SECONDARY */
/* .secondary {
    background-color: inherit;
    color: var(--col-10);
    border: 1px solid;
    border-color: var(--col-8);
}
.secondary:hover:not(.disabled)  {
    background-color: inherit;
    color: var(--col-10);
    border: 1px solid;
    border-color: var(--col-8);
}
.secondary:active:not(.disabled)  {
    background-color: var(--col-10);
    border: 1px solid;
    color: var(--col-9);
    border-color: var(--col-9);
} */
</style>