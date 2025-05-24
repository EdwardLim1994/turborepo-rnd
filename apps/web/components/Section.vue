<template>
	<h1 v-if="loading">is loading</h1>
	<h1 v-else>{{ data }}</h1>
</template>

<script lang="ts" setup>
	import { useNuxtApp } from "#app";
	import { useBlog } from "@learning/clients/viewmodels/useBlog";

	const { $apollo } = useNuxtApp();

	const { data, loading, error } = await useBlog($apollo);
</script>
