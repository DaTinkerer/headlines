<template>
<div class="error">
    <div>
        <p class="err">{{ msg }}</p>
        <p class="err" v-if="$data.msg == ''">There are no errors</p>
    </div>
    
</div>
    
</template>

<script>
export default {
    name: 'ErrorView',
    data() {
        return {
            msg: this.$store.state.msg
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .err {
        margin-top: 10rem;
        color: #fff;
        margin-left: auto;
        margin-right: auto;
        width: 30%;

    }
</style>