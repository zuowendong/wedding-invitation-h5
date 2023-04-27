<script setup lang="ts"></script>

<template>
	<var-app-bar image="@/assets/home.png">
		<template #right>
			<var-button style="margin: 2px 2px 0 0" round text color="transparent" text-color="#fff">
				<icon-Zh class="wedding-profile-icon" />
			</var-button>
			<var-button style="margin: 2px 2px 0 0" round text color="transparent" text-color="#fff">
				<icon-En class="wedding-profile-icon" />
			</var-button>
		</template>

		<template #content>
			<div class="wedding-home-content">
				<var-image class="wedding-home-img1" width="77px" height="46px" src="../assets/auspicious-clouds-1.png" />
				<var-image class="wedding-home-img2" width="96px" height="56px" src="../assets/auspicious-clouds-2.png" />
				<var-image class="wedding-home-img3" width="77px" height="46px" src="../assets/auspicious-clouds-3.png" />
				<var-image class="wedding-home-img4" width="77px" height="46px" src="../assets/auspicious-clouds-4.png" />

				<div class="wedding-home-content-inner">
					<var-row :gutter="20">
						<var-col :span="8" :xs="24" justify="center">
							<var-avatar :size="180" bordered src="@/assets/wedding.jpg" />
						</var-col>
						<var-col direction="column" :span="16" :xs="24">
							<div class="wedding-home-title">
								<div class="text">婚礼邀请函</div>
							</div>
							<div class="wedding-home-purport">吾家有喜</div>
							<div class="wedding-home-inviation">
								<div class="text">收到这封邀请函的你</div>
								<div class="text">是我们生命中重要的部分</div>
								<div class="text">/</div>
								<div class="text">这样特殊的一天</div>
								<div class="text">希望有你的见证</div>
							</div>
							<wedding-profile />
						</var-col>
					</var-row>
				</div>
			</div>
		</template>
	</var-app-bar>
</template>

<style lang="less" scoped>
.wedding-profile-icon {
	width: 22px;
	margin-right: 6px;
}
.wedding-home {
	position: relative;

	&-img1 {
		position: absolute;
		top: 118px;
		left: 18px;
		z-index: 6;
	}
	&-img2 {
		position: absolute;
		top: 390px;
		right: 2px;
		z-index: 6;
	}
	&-img3 {
		position: absolute;
		top: 70px;
		right: -22px;
		z-index: 6;
	}
	&-img4 {
		position: absolute;
		bottom: 183px;
		left: 3px;
		z-index: 6;
	}

	&-content {
		display: flex;
		justify-content: center;
	}

	&-content-inner {
		width: 760px;
		padding: 30px 20px 70px;
		:deep(.var-avatar--bordered) {
			border-color: rgb(237, 204, 161);
		}
	}
	&-title {
		font-size: 20px;
		margin-top: 26px;
		padding: 0 3px;
		text-align: center;
		color: rgba(116, 26, 21, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: 10px;
		.text {
			border-radius: 6px;
			width: 66%;
			background-color: rgb(237, 204, 161);
		}
	}

	&-purport {
		font-size: 36px;
		margin-top: 22px;
		margin-bottom: 66px;
		text-align: center;
		color: #edcca1;
		font-family: SimSun, "sans-serif";
		letter-spacing: 10px;
	}
	&-inviation {
		font-size: 14px;
		color: #edcca1;
		letter-spacing: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
		.text {
			line-height: 22px;
			padding: 0;
		}
	}
}
</style>
