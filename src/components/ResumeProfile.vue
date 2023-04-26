<template>
	<div class="resume-profile">
		<var-row :gutter="20">
			<var-col justify="center" :span="12" :xs="24">
				<var-paper class="resume-profile-paper" :elevation="2" :radius="4">
					<var-cell :border-offset="0" border>
						<div class="resume-profile-cell">
							<!-- <icon-cake class="resume-profile-icon" /> -->
							<span style="font-size: 20px; letter-spacing: 6px">左文东 & 刘夜莲</span>
						</div>
					</var-cell>
					<var-cell :border-offset="0" border>
						<div class="resume-profile-cell">
							<!-- <icon-school class="resume-profile-icon" /> -->
							<span>2023年07月08日</span>
						</div>
					</var-cell>
					<var-cell :border-offset="0" border>
						<div class="resume-profile-cell">
							<!-- <icon-calendar class="resume-profile-icon" /> -->
							<span>癸卯年五月二十一</span>
						</div>
					</var-cell>
					<var-cell :border-offset="0" border>
						<div class="resume-profile-cell">
							<!-- <icon-account-group class="resume-profile-icon" /> -->
							<span style="text-align: center">江苏省淮安市清江浦区翔宇大道156号 神旺大酒店</span>
						</div>
					</var-cell>
				</var-paper>
			</var-col>
		</var-row>
	</div>
</template>

<style lang="less" scoped>
.resume-profile {
	width: 100%;

	:deep(.var-paper) {
		box-shadow: none;
	}

	:deep(.var-cell) {
		color: rgb(237, 204, 161);
		background-color: #6a0705;
	}
	&-paper {
		width: 100%;
		margin-top: 30px;
	}
	&-cell {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&-icon {
		width: 22px;
		margin-right: 10px;
		fill: var(--color-primary);
	}
}
</style>
