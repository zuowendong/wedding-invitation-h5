<script setup lang="ts">
import { ref, onMounted } from "vue";

const mapInit = () => {
	let marker,
		map = new AMap.Map("container", {
			resizeEnable: true,
			center: [119.047977, 33.594638],
			zoom: 15,
		});
	marker = new AMap.Marker({
		icon: new URL("../assets/mapMaker.png", import.meta.url).href,
		position: [119.047977, 33.594638],
		offset: new AMap.Pixel(-16, -10),
	});
	marker.setMap(map);
};

onMounted(() => {
	mapInit();
});
</script>

<template>
	<wedding-block :title="$t('map')">
		<div style="width: 100%; height: 400px" id="container"></div>
	</wedding-block>
</template>

<style lang="less" scoped></style>
