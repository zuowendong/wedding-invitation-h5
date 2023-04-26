<script setup lang="ts">
function handlePrint() {
	window.print();
}

function handleGithub() {
	window.open("https://github.com/varletjs/varlet-resume");
}
</script>

<template>
	<var-app-bar image="@/assets/20220316-092545-f6d7.png">
		<template #content>
			<div class="resume-app-bar-content">
				<div class="resume-app-bar-content-inner">
					<var-row :gutter="20">
						<var-col :span="8" :xs="24" justify="center">
							<var-avatar :size="180" bordered src="@/assets/wedding.jpg" />
						</var-col>
						<var-col direction="column" :span="16" :xs="24">
							<div class="resume-app-bar-job"><div>婚礼邀请函</div></div>
							<div class="resume-app-bar-name">吾家有喜</div>
							<div class="resume-app-bar-description"></div>
							<resume-profile />
						</var-col>
					</var-row>
				</div>
			</div>
		</template>
	</var-app-bar>
</template>

<style lang="less" scoped>
:deep(.var-avatar--bordered) {
	border-color: rgb(237, 204, 161);
}
.resume-app-bar {
	&-content {
		display: flex;
		justify-content: center;
	}

	&-content-inner {
		width: 760px;
		padding: 30px 20px 70px;
	}

	&-name {
		font-size: 36px;
		margin-top: 10px;
		text-align: center;
		color: rgb(237, 204, 161);
		font-family: SimSun, "sans-serif";

		letter-spacing: 10px;
	}

	&-job {
		font-size: 20px;
		margin-top: 26px;
		padding: 0 3px;

		text-align: center;
		color: rgba(116, 26, 21, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: 10px;
		div {
			border-radius: 6px;
			width: 66%;
			background-color: rgb(237, 204, 161);
		}
	}

	&-description {
		font-size: 15px;
		margin-top: 20px;
		color: #eee;
		line-height: 24px;
		padding: 0 3px;
	}
}
</style>
