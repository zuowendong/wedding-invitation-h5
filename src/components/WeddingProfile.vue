<template>
	<div class="wedding-profile">
		<var-row :gutter="20">
			<var-col justify="center" :span="24" :xs="24">
				<var-paper class="wedding-profile-paper" :elevation="2" :radius="4">
					<var-cell :border-offset="0" border>
						<div class="wedding-profile-cell">
							<div class="name">
								<span class="man">{{ $t("man") }}</span>
								<var-image class="icon" width="22px" height="19px" src="../assets/auspicious-clouds.png" />
								<span class="woman">{{ $t("woman") }}</span>
							</div>
						</div>
					</var-cell>
					<var-cell :border-offset="0" border>
						<div class="wedding-profile-cell">
							<span>{{ $t("time") }}</span>
						</div>
					</var-cell>
					<var-cell :border-offset="0" border>
						<div class="wedding-profile-cell">
							<span>{{ $t("calendar") }}</span>
						</div>
					</var-cell>
					<var-cell :border-offset="0" border>
						<div class="wedding-profile-cell">
							<span style="text-align: center">{{ $t("address") }}</span>
						</div>
					</var-cell>
				</var-paper>
			</var-col>
		</var-row>
	</div>
</template>

<style lang="less" scoped>
.wedding-profile {
	width: 100%;

	:deep(.var-paper) {
		box-shadow: none;
		background: #6a0705;
	}
	:deep(.var-cell) {
		color: #edcca1;
		background-color: #6a0705;
	}
	:deep(.var-cell--border) {
		&::after {
			border-color: #edcca1;
		}
	}
	&-paper {
		width: 100%;
		margin-top: 30px;
	}
	&-cell {
		display: flex;
		align-items: center;
		justify-content: center;
		.name {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 30px 1fr;
			align-items: center;
			justify-items: center;
			font-size: 20px;
			letter-spacing: 5px;
			.man {
				box-sizing: border-box;
				padding-left: 50px;
			}
			.woman {
				box-sizing: border-box;
				padding-right: 45px;
			}
		}
	}
	&-icon {
		width: 22px;
		margin-right: 10px;
		fill: var(--color-primary);
	}
}
</style>
