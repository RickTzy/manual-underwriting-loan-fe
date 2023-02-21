<template>
	<div class="container-fluid py-4">
		<div class="row">
			<div class="col-12">
				<div class="card mb-4">
					<div class="card-header pb-0">
						<h5 class="text-dark text-center align-items-center">List User</h5>
					</div>
					<div class="card-body px-0 pt-0 pb-2">
						<div class="table-responsive p-0">
							<table class="table align-items-center mb-0">
							<thead>
								<tr>
									<th class="font-weight-bolder text-dark active text-center">Fullname</th>
									<th class="font-weight-bolder text-dark active text-center">Username</th>
									<th class="font-weight-bolder text-dark active text-center">Email Address</th>
									<th class="font-weight-bolder text-dark active text-center">Role</th>
									<th class="font-weight-bolder text-dark active text-center">Action</th>
								</tr>
							</thead>
							<tbody>
								<tr style="text-align: center; font-weight-bold; text-dark; active;" v-for="user in users" :value="user.userId" v-bind:key="user.userId" >
									<td>{{ user.firstName }} {{ user.lastName }}</td>
									<td>{{ user.username }}</td>
									<td>{{ user.emailAddress }}</td>
									<td v-if="user.roleId == 1">Admin</td>
									<td v-if="user.roleId == 2">Verifikator</td>
									<td v-if="user.roleId == 3">Validator</td>
									<td><button v-if="user.roleId != 1" @click="deleteUser(user)" class="btn btn-round btn-danger" style="margin-top: 8%">Delete</button></td>
								</tr>
							</tbody>
							</table>
						</div>
					</div>
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
            users: undefined,
            roleId: Number
        }
    },
	methods: {
		deleteUser(user){
			if(confirm("Delete " + user.firstName + " " + user.lastName)){
				axios.delete("http://localhost:8080/admin/deleteUser/" + user.username)
				.then(response => {
					alert(response.data.successMessage);
					this.$router.go();
				})
			}
		}
	},
    created: function(){
        var load = JSON.parse(localStorage.getItem('userSession'));
        this.roleId = load.roleId;

        if(this.roleId != 1){
            alert("Not Authorized!");
            this.$router.push("/dashboard");
        }else{
            axios.get("http://localhost:8080/admin/users")
            .then(response2 => {
                if(response2.data.length == 0) alert("No Data!");
                this.users = response2.data;
            })
        }
    },
	// mounted() {
	// 	if (localStorage.getItem('reloaded')) {
	// 		localStorage.removeItem('reloaded');
	// 	} else {
	// 		localStorage.setItem('reloaded', '1');
	// 		location.reload();
	// 	}
	// }
}
</script>

<style>

</style>
