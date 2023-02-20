<template>
	<div class="container-fluid py-4 card" style="width: 96%">
		<div class="row px-2">
			<div class="col-md-12" v-if="showProfile">
				<div class="card-mb-4">
					<h5 slot="header" class="title text-center">User Profile</h5>
					<form class="row">
						<div class="row">
							<div class="col-md-4">
								<label for="Company" style="margin-top: 2%" class="form-label">Company</label>
								<input type="text" class="form-control" v-model="user.company" disabled>
							</div>
							<div class="col-md-4">
								<label for="Username" style="margin-top: 2%" class="form-label">Username</label>
								<input type="text" class="form-control" v-model="user.username" disabled>
							</div>
							<div class="col-md-4">
								<label for="Email Address" style="margin-top: 2%" class="form-label">Email Address</label>
								<input v-if="!changeProfile" type="text" class="form-control" v-model="user.email" disabled>
								<input v-if="changeProfile" type="text" class="form-control" v-model="user.email">
							</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<label for="FirstName" style="margin-top: 2%" class="form-label">First Name</label>
								<input v-if="!changeProfile" type="text" class="form-control" v-model="user.firstName" disabled>
								<input v-if="changeProfile" type="text" class="form-control" v-model="user.firstName">
							</div>
							<div class="col-md-6">
								<label for="LastName" style="margin-top: 2%" class="form-label">Last Name</label>
								<input v-if="!changeProfile" type="text" class="form-control" v-model="user.lastName" disabled>
								<input v-if="changeProfile" type="text" class="form-control" v-model="user.lastName">
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<label for="Address" style="margin-top: 1%" class="form-label">Address</label>
								<input v-if="!changeProfile" type="text" class="form-control" v-model="user.address" placeholder="Home Address" disabled>
								<input v-if="changeProfile" type="text" class="form-control" v-model="user.address" placeholder="Home Address">
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<label for="City" style="margin-top: 2%" class="form-label">City</label>
								<input v-if="!changeProfile" type="text" class="form-control" v-model="user.city" disabled>
								<input v-if="changeProfile" type="text" class="form-control" v-model="user.city">
							</div>
							<div class="col-md-4">
								<label for="PhoneNumber" style="margin-top: 2%" class="form-label">Phone Number</label>
								<input v-if="!changeProfile" type="text" class="form-control" v-model="user.phoneNumber" disabled>
								<input v-if="changeProfile" type="text" class="form-control" v-model="user.phoneNumber">
							</div>
							<div class="col-md-4">
								<label for="Gender" style="margin-top: 2%" class="form-label">Gender</label>
								<input type="text" class="form-control" v-model="user.gender" disabled>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<label style="margin-top: 1%" class="form-label">About Me</label>
								<textarea v-if="!changeProfile" rows="4" cols="80" class="form-control" v-model="user.aboutMe" placeholder="Here can be your description" disabled></textarea>
								<textarea v-if="changeProfile" rows="4" cols="80" class="form-control" v-model="user.aboutMe" placeholder="Here can be your description"></textarea>
							</div>
						</div>
						<div class="row" v-if="changeProfile">
							<div class="col-md-12">
								<label for="CurrentPassword" style="margin-top: 1%" class="form-label">Password</label>
								<input v-if="togglePassword" type="text" class="form-control" v-model="currentPassword" placeholder="Current Password">
								<input v-if="!togglePassword" type="password" class="form-control" v-model="currentPassword" placeholder="Current Password">
							</div>
						</div>
						<div class="row" v-if="changeProfile" style="margin-top: 1%">
							<div class="col-md-12">
								<div class="form-check form-switch">
									<input v-if="togglePassword == false" class="form-check-input" type="checkbox" v-on:click="togglePassword = true">
									<input v-if="togglePassword == true" class="form-check-input" type="checkbox" v-on:click="togglePassword = false">
									<label class="form-check-label" for="showPassword">Show Password</label>
								</div>
							</div>
						</div>
						<div class="d-grid gap-2 d-md-flex justify-content-center" style="padding-top: 15px;">
							<button type="button" v-if="!changeProfile" v-on:click="changeProfile = true" class="btn btn-round bg-gradient-dark" style="padding-left: 50px; padding-right: 50px">Change Profile</button>
							<button type="button" v-if="!changePassword && !changeProfile" v-on:click="changePassword = true, showProfile = false" class="btn btn-round bg-gradient-dark" style="padding-left: 50px; padding-right: 50px">Change Password</button>
							<button type="button" v-if="changeProfile" v-on:click="changeProfile = false" class="btn btn-round bg-gradient-dark" style="padding-left: 50px; padding-right: 50px">Back</button>
							<button type="button" v-if="changeProfile" @click="saveNewProfile" class="btn btn-round bg-gradient-dark" style="padding-left: 50px; padding-right: 50px">Save</button>
						</div>
					</form>
				</div>
			</div>
			<div class="col-md-12" v-if="changePassword">
				<h5 slot="header" class="title text-center">Change Password</h5>
				<div class="row">
					<div class="col-md-12">
						<label for="CurrentPassword" style="margin-top: 1%" class="form-label">Current Password</label>
						<input v-if="togglePassword1" type="text" class="form-control" v-model="currentPassword" placeholder="Current Password">
						<input v-if="!togglePassword1" type="password" class="form-control" v-model="currentPassword" placeholder="Current Password">
					</div>
				</div>
				<div class="row" style="margin-top: 1%">
					<div class="col-md-12">
						<div class="form-check form-switch">
							<input v-if="togglePassword1 == false" class="form-check-input" type="checkbox" v-on:click="togglePassword1 = true">
							<input v-if="togglePassword1 == true" class="form-check-input" type="checkbox" v-on:click="togglePassword1 = false">
							<label class="form-check-label" for="showPassword">Show Current Password</label>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<label for="NewPassword" style="margin-top: 1%" class="form-label">New Password</label>
						<input v-if="togglePassword2" type="text" class="form-control" v-model="newPassword" placeholder="New Password">
						<input v-if="!togglePassword2" type="password" class="form-control" v-model="newPassword" placeholder="New Password">
					</div>
				</div>
				<div class="row" style="margin-top: 1%">
					<div class="col-md-12">
						<div class="form-check form-switch">
							<input v-if="togglePassword2 == false" class="form-check-input" type="checkbox" v-on:click="togglePassword2 = true">
							<input v-if="togglePassword2 == true" class="form-check-input" type="checkbox" v-on:click="togglePassword2 = false">
							<label class="form-check-label" for="showPassword">Show New Password</label>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<label for="ConfirmNewPassword" style="margin-top: 1%" class="form-label">Confirm New Password</label>
						<input v-if="togglePassword3" type="text" class="form-control" v-model="confirmNewPassword" placeholder="Confirm New Password">
						<input v-if="!togglePassword3" type="password" class="form-control" v-model="confirmNewPassword" placeholder="Confirm New Password">
					</div>
				</div>
				<div class="row" style="margin-top: 1%">
					<div class="col-md-12">
						<div class="form-check form-switch">
							<input v-if="togglePassword3 == false" class="form-check-input" type="checkbox" v-on:click="togglePassword3 = true">
							<input v-if="togglePassword3 == true" class="form-check-input" type="checkbox" v-on:click="togglePassword3 = false">
							<label class="form-check-label" for="showPassword">Show Confirm New Password</label>
						</div>
					</div>
				</div>
				<div class="d-grid gap-2 d-md-flex justify-content-center" style="padding-top: 15px;">
					<button type="button" v-on:click="changePassword = false, showProfile = true" class="btn btn-round bg-gradient-dark" style="padding-left: 50px; padding-right: 50px">Back</button>
					<button type="button" @click="saveNewPassword()" class="btn btn-round bg-gradient-dark" style="padding-left: 50px; padding-right: 50px">Save</button>
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
    data() {
        return {
            user: {
                company: 'PT. XYZ',
                email: '',
                username: '',
                firstName: '',
                lastName: '',
                address: '',
                city: '',
                phoneNumber: '',
                gender: '',
                aboutMe: ''
            },
            userId: Number,
            username: '',
            token: '',
			showProfile: true,
            changeProfile: false,
            changePassword: false,
            newPassword: '',
            confirmNewPassword: '',
            currentPassword: '',
			togglePassword: false,
			togglePassword1: false,
			togglePassword2: false,
			togglePassword3: false
        }
    },
	methods: {
        saveNewProfile(){
            if(confirm("Update Profile?")){
                axios.put("http://localhost:8080/user/updateProfile", {
                    username: this.username,
                    emailAddress: this.user.email,
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    address: this.user.address,
                    city: this.user.city,
                    phoneNumber: this.user.phoneNumber,
                    aboutMe: this.user.aboutMe,
                    password: this.currentPassword
                }).then(response => {
                    alert(response.data.successMessage)
                    this.$router.go();
                }).catch(error => { 
					alert(error.response.data.errorMessage);
					this.currentPassword = "";
				 })
            }
        },
        saveNewPassword(){
            if(this.newPassword == "" && this.confirmNewPassword == "" && this.currentPassword == ""){
                alert("No Data!");
            }
            else if(this.newPassword == "" && this.confirmNewPassword == ""){
                alert("Please input New Password and Confirm New Password!");
            }
            else if(this.newPassword != this.confirmNewPassword){
                alert("New Password and Confirm New Password must same!");
                this.newPassword = this.confirmNewPassword = "";
            }
			else if(this.newPassword == this.currentPassword){
				alert("New Password and Current Password must not same!");
				this.newPassword = this.currentPassword = this.confirmNewPassword = "";
			}else{
                if(confirm("Change Password?")){
                    axios.put("http://localhost:8080/user/changePassword", {username: this.username, currentPassword: this.currentPassword, newPassword: this.newPassword})
                    .then(response => {
                        alert(response.data.successMessage)
                        this.$router.go();
                    }).catch(error => { 
						alert(error.response.data.errorMessage);
						if(error.response.data.errorCode == "01") this.newPassword = this.confirmNewPassword = "";
						else if(error.response.data.errorCode == "02") this.currentPassword = "";
					})
                }
            }
        }
    },
    created: function(){
        var load = JSON.parse(localStorage.getItem('userSession'));
        this.userId = load.userId;
        this.username = load.username;
        this.token = load.token;

        axios.post("http://localhost:8080/user/checkToken", {token: this.token, username: this.username})
        .then(resp => {
            axios.get("http://localhost:8080/user/" + this.userId)
            .then(response => {
                this.user.email = response.data.emailAddress;
                this.user.username = response.data.username;
                this.user.firstName = response.data.firstName;
                this.user.lastName = response.data.lastName;
                this.user.address = response.data.address;
                this.user.city = response.data.city;
                this.user.phoneNumber = response.data.phoneNumber;
                this.user.gender = response.data.gender;
                this.user.aboutMe = response.data.aboutMe;
            })
        })
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