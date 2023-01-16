<template>
    <div @click="toProjects">
        Проекты
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const toProjects = () => router.push('/Projects');
</script>