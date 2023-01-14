<template>
    <div class="bg-blue-400 rounded-md w-80 h-60 flex flex-col hover:cursor-pointer hover:h-72 hover:w-96">
        <div class=" p-4 border-b-2">
            {{ projectValue?.name }} 
        </div>
        
        <div class="p-4">{{ projectValue?.description }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ProjectItem } from "~/types"

export default defineComponent({
    props: {
        projectValue: {
            type: Object as PropType<ProjectItem>
        }
    }
})
</script>