<template>
    <div>asdkjfhkasjdhfkjashdf</div>
    <!-- <div class="flex flex-wrap gap-5 justify-center">
        <template v-for="index in projects">
            <CardItem :project-value="index"/>
        </template>
    </div> -->
</template>

<script lang="ts">
import CardItem from "./CardItem.vue"
import { defineComponent } from "vue";
import { ProjectItem } from "~/types";
import { fetch } from "~/composables/fetch";

export default defineComponent({
    components: {
        CardItem
    },
    async setup() {
        // const projects = await fetch<ProjectItem[]>("/Projects/List", {
        //     method: 'GET'
        // });
        return {};
    }
});
</script>