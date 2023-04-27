<template>
	<wedding-home />
	<div class="wedding-layout">
		<var-row :gutter="20">
			<var-col :span="12" :xs="24" style="width: 100%">
				<wedding-pictures />
			</var-col>
			<var-col :span="12" :xs="24" style="width: 100%">
				<wedding-map />
			</var-col>
		</var-row>
	</div>
</template>

<style>
* {
	box-sizing: border-box;
}
body {
	margin: 0;
	font-family: "Roboto", sans-serif;
	transition: background-color 0.25s, color 0.25s;
	color: var(--color-text);
	background-color: #6b0706;
}
::-webkit-scrollbar {
	display: none;
}
</style>

<style lang="less" scoped>
.wedding-layout {
	padding: 0 20px 30px;
}
</style>
