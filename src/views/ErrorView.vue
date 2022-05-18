<template>
<div class="error">
    <div>
        <h2>{{ msg }}</h2>
        <h2 v-if="$data.msg == ''">There are currently no Error messages</h2>
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