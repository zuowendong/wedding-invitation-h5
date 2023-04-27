<script setup lang="ts">
import { ref, computed } from "vue";
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";

const breakpoints = ref({
	1200: { rowPerView: 4 },
	800: { rowPerView: 3 },
	500: { rowPerView: 2 },
});

const list = ref([
	{ src: new URL("../assets/moment/1.jpg", import.meta.url).href },
	{ src: new URL("../assets/moment/2.jpg", import.meta.url).href },
	{ src: new URL("../assets/moment/3.jpg", import.meta.url).href },
	{ src: new URL("../assets/moment/4.jpg", import.meta.url).href },
	{ src: new URL("../assets/moment/5.jpg", import.meta.url).href },
	{ src: new URL("../assets/moment/6.jpg", import.meta.url).href },
	{ src: new URL("../assets/moment/7.jpg", import.meta.url).href },
	{ src: new URL("../assets/moment/8.jpg", import.meta.url).href },
	{ src: new URL("../assets/moment/9.jpg", import.meta.url).href },
	{ src: new URL("../assets/moment/10.jpg", import.meta.url).href },
	{ src: new URL("../assets/moment/11.jpg", import.meta.url).href },
	{ src: new URL("../assets/moment/12.jpg", import.meta.url).href },
]);

const show = ref(false);
const images = computed(() => {
	return list.value.map((img) => img.src);
});
let currentUrl = ref("");
function preview(url: string) {
	show.value = true;
	currentUrl.value = url;
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
		<var-image-preview closeable :current="currentUrl" :images="images" v-model:show="show" />
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
