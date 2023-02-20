<template>
	<div class="container-fluid py-4 card" style="width: 98%">
		<div class="row px-3">
			<div class="col-md-12">
				<div class="card-mb-4">
					<h5 slot="header" class="title text-center">Register User</h5>
					<form class="row">
						<div class="row">
							<div class="col-md-6">
								<label for="Username" style="margin-top: 3%" class="form-label">Username</label>
								<input type="text" v-model="user.username" class="form-control" placeholder="Username">
							</div>
							<div class="col-md-6">
								<label for="EmailAddress" style="margin-top: 3%" class="form-label">Email Address</label>
								<input type="text" v-model="user.emailAddress" class="form-control" placeholder="Email Address">
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<label for="FirstName" style="margin-top: 3%" class="form-label">First Name</label>
								<input type="text" v-model="user.firstName" class="form-control" placeholder="First Name">
							</div>
							<div class="col-md-4">
								<label for="LastName" style="margin-top: 3%" class="form-label">Last Name</label>
								<input type="text" v-model="user.lastName" class="form-control" placeholder="Last Name">
							</div>
							<div class="col-md-4">
								<label for="Gender" style="margin-top: 2.5%" class="form-label">Gender</label>
								<select v-model="user.gender" class="form-select">
									<option hidden selected>--Choose Gender--</option>
									<option>Male</option>
									<option>Female</option>
								</select>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<label for="Address" style="margin-top: 3%" class="form-label">Address</label>
								<input type="text" v-model="user.address" class="form-control" placeholder="Address">
							</div>
							<div class="col-md-4">
								<label for="City" style="margin-top: 3%" class="form-label">City</label>
								<input type="text" v-model="user.city" class="form-control" placeholder="City">
							</div>
							<div class="col-md-4">
								<label for="PhoneNumber" style="margin-top: 3%" class="form-label">Phone Number</label>
								<input type="number" v-model="user.phoneNumber" class="form-control" placeholder="Phone Number">
							</div>
						</div>
						<div class="row">
							<div class="col-md-8">
								<label for="AboutMe" style="margin-top: 1.5%" class="form-label">About Me</label>
								<input type="email" v-model="user.aboutMe" class="form-control" placeholder="About Me">
							</div>
							<div class="col-md-4">
								<label for="Role" style="margin-top: 3%" class="form-label">Role</label>
								<select v-model="user.roleId" class="form-select">
									<option hidden selected>--Choose Role--</option>
									<option value="2">Verifikator</option>
                        			<option value="3">Validator</option>
								</select>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<label for="CreatePassword" style="margin-top: 1%" class="form-label">Create Password</label>
								<input v-if="togglePassword" type="text" v-model="user.password" class="form-control" placeholder="Password">
								<input v-if="!togglePassword" type="password" v-model="user.password" class="form-control" placeholder="Password">
							</div>
						</div>
						<div class="row" style="margin-top: 1%">
							<div class="col-md-12">
								<div class="form-check form-switch">
									<input v-if="togglePassword == false" class="form-check-input" type="checkbox" v-on:click="togglePassword = true">
									<input v-if="togglePassword == true" class="form-check-input" type="checkbox" v-on:click="togglePassword = false">
									<label class="form-check-label" for="showPassword">Show Password</label>
								</div>
							</div>
						</div>
						<div class="d-grid gap-2 d-md-flex justify-content-center" style="padding-top: 15px;">
							<button type="button" @click="registerUser()" class="btn btn-round bg-gradient-dark" style="padding-left: 50px; padding-right: 50px">Register</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
    data(){
        return {
            user: {
                username: '',
                emailAddress: '',
                firstName: '',
                lastName: '',
                address: '',
                city: '',
                phoneNumber: '',
                gender: '--Choose Gender--',
                roleId: '--Choose Role--',
                aboutMe: '',
                password: '',
                isLogin: Boolean
            },
            roleId: Number,
			togglePassword: false
        }
    },
    methods: {
        registerUser(){
            if(!this.validations()) return alert("Please fill in all fields!");
            this.user.isLogin = false;

            axios.post("http://localhost:8080/admin/createUser", this.user)
            .then(response => {
                alert(response.data.successMessage);
				var load = JSON.parse(localStorage.getItem('userSession'));
				load.pos = 4;
				localStorage.setItem('userSession', JSON.stringify(load));
                this.$router.push("/users");
            }).catch(error => { 
                alert(error.response.data.errorMessage);
				if(error.response.data.errorCode == "01") this.user.username = "";
				else if(error.response.data.errorCode == "02") this.user.emailAddress = "";
				else if(error.response.data.errorCode == "03") this.user.password = "";
            })
        },
        validations(){
            if(this.user.username == '') return false;
            else if(this.user.emailAddress == '') return false;
            else if(this.user.firstName == '') return false;
            else if(this.user.lastName == '') return false;
            else if(this.user.address == '') return false;
            else if(this.user.city == '') return false;
            else if(this.user.phoneNumber == '') return false;
            else if(this.user.gender == '--Choose Gender--') return false;
            else if(this.user.roleId == '--Choose Role--') return false;
            else if(this.user.aboutMe == '') return false;
            else if(this.user.password == '') return false;
            return true;
        }
    },
    created: function(){
        var load = JSON.parse(localStorage.getItem('userSession'))
        this.roleId = load.roleId;

        if(this.roleId != 1){
            alert("Not Authorized");
            this.$router.push("/dashboard");
        }
    }
}
</script>

<style>
	.form-label{
		margin-top: 1%;
	}
	.card{
		width:99%;
	}
</style>