<template>
<div>{{ res }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fetch } from "~/composables/fetch";

export default defineComponent({
    async setup()
    {
        const res = {id:123}
        // await fetch('/WeatherForecast/Get', {
        //     method: 'GET'
        // });
        return {res};
    }
})
</script>