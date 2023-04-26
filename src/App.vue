<template>
	<resume-app-bar />

	<div class="resume-layout">
		<!-- <resume-profile /> -->

		<resume-blank :size="350"></resume-blank>

		<var-row :gutter="20">
			<var-col :span="12" :xs="24">
				<resume-timeline />
			</var-col>
			<var-col :span="12" :xs="24">
				<resume-skills />
			</var-col>
		</var-row>
	</div>
</template>

<style>
* {
	box-sizing: border-box;
}

@media print {
	* {
		box-shadow: none !important;
	}

	.print-disabled {
		display: none !important;
	}
}

body {
	margin: 0;
	font-family: "Roboto", sans-serif;
	transition: background-color 0.25s, color 0.25s;
	color: var(--color-text);
	/* background-color: var(--color-body); */
	background-color: #6b0706;
}

::-webkit-scrollbar {
	display: none;
}
</style>

<style lang="less" scoped>
.resume-layout {
	padding: 0 20px 30px;
	background-color: #6b0706;
}
</style>
