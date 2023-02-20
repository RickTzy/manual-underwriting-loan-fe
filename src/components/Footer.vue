<template>
  <div class="container-fluid py-4">
		<footer class="footer pt-3">
			<div class="container-fluid">
				<div class="row align-items-center justify-content-lg-between">
					<div class="col-lg-6 mb-lg-0 mb-4"></div>
					<div class="col-lg-6">
						<ul class="nav nav-footer justify-content-center justify-content-lg-end">
							<div class="copyright text-center text-sm text-muted text-lg-start">
								© {{year}} made with <i class="fa fa-heart"></i> All Rights Reserved.
							</div>
						</ul>
					</div>
				</div>
			</div>
		</footer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
};
</script>

<style>
</style>