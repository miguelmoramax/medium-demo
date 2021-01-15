<template>
  <div>
    <h1>Vue</h1>
    <h4>cantidad {{ count }}</h4>
    <input type='button' v-on:click="handleIncrement" value="+"/>
    <input type='button' v-on:click="handleDecrement" value="-"/>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data: () => ({
            count: window.myapp.counter,
        }),
        mounted() {
            window.addEventListener('onIncrement', () => {
                this.count = window.myapp.counter;
            })
            window.addEventListener('onDecrement', () => {
                this.count = window.myapp.counter;
            })
        },
        methods: {
            handleIncrement: () => {
                window.myapp.incrementor()
            },
            handleDecrement: () => {
                window.myapp.decrementor()
            }
        }
    }
</script>