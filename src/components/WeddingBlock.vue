<script setup lang="ts">
defineProps({
	title: { type: String },
	subtitle: { type: String },
});
</script>

<template>
	<div class="wedding-block">
		<var-paper class="wedding-block-paper" :elevation="2" :radius="4">
			<div class="wedding-block-header" v-if="title || subtitle">
				<slot name="title">
					<div class="wedding-block-title">
						{{ title }}
					</div>
				</slot>
				<slot name="subtitle">
					<div class="wedding-block-subtitle">
						{{ subtitle }}
					</div>
				</slot>
			</div>
			<slot />
		</var-paper>
	</div>
</template>

<style lang="less" scoped>
.wedding-block {
	width: 100%;
	margin-top: 30px;
	background-color: #6d0b08;

	:deep(.var-paper) {
		background-color: #edcca1;
		color: #741a15;
	}

	&-paper {
		padding: 20px;
	}

	&-header {
		padding-bottom: 18px;
		padding-left: 4px;
		margin-bottom: 25px;
		border-bottom: thin solid #741a15;
	}

	&-title {
		font-size: 18px;
		font: italic 1em Georgia, serif;
	}

	&-subtitle {
		font-size: 14px;
		color: #edcca1;
		margin-top: 6px;
	}
}
</style>

<style>
.wedding-block .wedding-block-item:last-child {
	border-bottom: none;
}
</style>
