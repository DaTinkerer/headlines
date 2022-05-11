<template>
<div class="error">
    <div class="mt-16 lg:-mt-80 container mx-auto flex font-fira justify-center">
        <h2 class="text-slate-50">{{ msg }}</h2>
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