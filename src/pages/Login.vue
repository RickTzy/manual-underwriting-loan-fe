<template>
	<main class="main-content mt-0">
		<section>
			<div class="page-header min-vh-75">
				<div class="container">
					<div class="row">
						<div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
							<div class="card mt-8">
								<div class="card-header pb-0 text-left bg-transparent">
									<h4 class="font-weight-bolder text-dark active text-center">Manual Underwriting Loan</h4>
									<p class="mb-0 text-center">Please login to continue</p>
								</div>
								<div class="card-body">
									<form role="form">
										<label>Username</label>
										<div class="mb-3">
											<input type="Username" v-model="credentials.username" class="form-control" placeholder="Username">
										</div>
										<label>Password</label>
										<div class="mb-3">
											<input v-if="togglePassword" type="text" v-model="credentials.password" class="form-control" placeholder="Password">
											<input v-if="!togglePassword" type="password" v-model="credentials.password" class="form-control" placeholder="Password">
										</div>
										<div class="form-check form-switch">
											<input v-if="togglePassword == false" class="form-check-input" type="checkbox" v-on:click="togglePassword = true">
											<input v-if="togglePassword == true" class="form-check-input" type="checkbox" v-on:click="togglePassword = false">
											<label class="form-check-label" for="showPassword">Show Password</label>
										</div>
										<div class="text-center">
											<button type="button" @click="loginData" class="btn bg-gradient-dark w-100 mt-4 mb-0">Login</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
    data() {
        return{
            credentials: {
                username: '',
                password: ''
            },
			togglePassword: false
        }
    },
    methods: {
        loginData: function(){
            axios.post("http://localhost:8080/login",{username: this.credentials.username, password: this.credentials.password})
            .then(response => {
                var data = {
                    userId: response.data.userId,
                    username: response.data.username,
                    roleId: response.data.roleId,
                    token: response.data.token,
                    pos: 1
                }
                localStorage.setItem('userSession', JSON.stringify(data));
                this.$router.push("/dashboard");
                this.$router.go();	
            }).catch(error => { alert(error.response.data.errorMessage) })
        }
    }
}
</script>

<style>

.container-scroller{
     margin-top: 8%;
}

</style>