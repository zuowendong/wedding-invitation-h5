<script setup lang="ts">
import { ref } from "vue";
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";
import { ImagePreview } from "@varlet/ui";

const breakpoints = ref({
	1200: { rowPerView: 4 },
	800: { rowPerView: 3 },
	500: { rowPerView: 2 },
});

const list = [
	{ src: "https://cdn.shopify.com/s/files/1/0012/9217/3374/products/XHD4397.jpg?v=1680767714" },
	{ src: new URL("../assets/test1.jpg", import.meta.url).href },
	{ src: new URL("../assets/test2.jpg", import.meta.url).href },
	{ src: "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" },
	{ src: "https://cdn.shopify.com/s/files/1/0012/9217/3374/products/XHD4397.jpg?v=1680767714" },
];

function preview(url: string) {
	console.log(url);
	ImagePreview(url);
}
</script>

<template>
	<wedding-block :title="$t('picture')">
		<div class="content">
			<Waterfall :list="list" :breakpoints="breakpoints">
				<template #item="{ item, url, index }">
					<div class="card">
						<LazyImg :url="url" @click="preview(url)" />
					</div>
				</template>
			</Waterfall>
		</div>
	</wedding-block>
</template>

<style lang="less" scoped>
:deep(.waterfall-list) {
	background-color: #edcca1;
}
.content {
	max-height: 720px;
	overflow: auto;
}
</style>
