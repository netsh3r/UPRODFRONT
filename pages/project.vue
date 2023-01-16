<template>
    <div class="bg-black h-screen flex-col">
        <div class="bg-blue-400 w-full h-40">
            <div class="container mx-auto">Шапка проекта</div>
        </div>
        <div class="bg-red-400 w-full h-16">
            <div class="container mx-auto flex flex-row justify-center gap-5 h-full">
                <template v-for="index in tabs">
                    <div class="flex items-center hover:border-white hover:border-b-2 hover:cursor-pointer" @click="setCmp(index.cmp)">
                        {{ index.name }}
                    </div>
                </template>
            </div>
        </div>
        <div class="bg-yellow-300 w-full h-[calc(100%-14rem)] overflow-y-auto">
            <div class="container mx-auto mt-2">
                <component :is="currentCmp" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Description from "~/components/projects/item/Description.vue"
import Tasks from "~/components/projects/item/Tasks.vue"
import News from "~/components/projects/item/News.vue"
import { useRoute } from 'vue-router';
const router = useRoute();
const id = computed(() => router.query.id)
const tabs = ref([{name: 'Описание', cmp: Description}, { name: 'Новости', cmp: News }, { name: 'Задачи', cmp: Tasks}] as Array<any>);
const currentCmp = ref(Description);
const setCmp = (cmp: any) => currentCmp.value = cmp;
</script>