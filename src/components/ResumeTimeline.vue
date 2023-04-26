<script setup lang="ts">
import { ref } from "vue";

const companies = ref([
	{
		label: "前端开发工程师",
		date: "2021/08-至今",
		description: "吹嘘一下自己在公司里主要负责哪些工作，给老板赚了多少钱",
	},
	{
		label: "前端开发工程师",
		date: "2019/03-2021/08",
		description: "吹嘘一下自己在公司里主要负责哪些工作，给老板赚了多少钱",
	},
	{
		label: "前端开发工程师",
		date: "2019/03-2021/08",
		description: "吹嘘一下自己在公司里主要负责哪些工作，给老板赚了多少钱",
	},
	{
		label: "前端开发工程师",
		date: "2019/03-2021/08",
		description: "吹嘘一下自己在公司里主要负责哪些工作，给老板赚了多少钱",
	},
	{
		label: "前端开发工程师",
		date: "2019/03-2021/08",
		description: "吹嘘一下自己在公司里主要负责哪些工作，给老板赚了多少钱",
	},
]);
</script>

<template>
	<resume-block title="甜蜜照片"> 甜蜜照片 </resume-block>
</template>

<style lang="less" scoped>
.resume-timeline {
	&-company {
		margin-left: 10px;
	}

	&-label {
		font-size: 16px;
	}

	&-date {
		color: #aaa;
		margin: 6px 0;
	}

	&-description {
		color: #555;
	}
}
</style>
