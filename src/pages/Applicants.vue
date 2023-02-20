<template>
	<div class="container-fluid py-4">
		<div class="row">
			<div class="col-12">
				<div class="card mb-4">
					<div class="card-header pb-0">
						<h5 v-if="this.roleId == 2" class="text-center align-items-center">List Applicant</h5>
						<h5 v-if="this.roleId == 3" class="text-center align-items-center">List Verified Applicant</h5>
					</div>
					<div class="card-body px-0 pt-0 pb-2">
						<div class="table-responsive p-0">
							<table class="table align-items-center mb-0">
								<thead style="text-align: center;" class="text-dark">
									<tr>
										<th class="font-weight-bolder text-dark active text-center">Name</th>
										<th v-if="this.roleId == 2" class="font-weight-bolder text-dark active text-center">Email Address</th>
										<th v-if="this.roleId == 2" class="font-weight-bolder text-dark active text-center">Phone Number</th>
										<th v-if="this.roleId == 3" class="font-weight-bolder text-dark active text-center">NIK</th>
										<th v-if="this.roleId == 3" class="font-weight-bolder text-dark active text-center">NPWP</th>
										<th class="font-weight-bolder text-dark active text-center">Detail</th>
									</tr>
								</thead>
								<tbody v-if="this.roleId == 2">
									<tr style="text-align: center;" v-for="applicant in applicants" :value="applicant.applicantId" v-bind:key="applicant.applicantId" >
										<td>{{ applicant.name }}</td>
										<td>{{ applicant.emailAddress }}</td>
										<td>{{ applicant.phoneNumber }}</td>
										<td><img @click="detailAction(applicant)" style="cursor: pointer" src="../assets/pictures/DetailIcon.png" width="25px" alt=""></td>
									</tr>
									<tr v-if="this.isNoData">
										<td colspan="4">
											<center>
												<img src="../assets/pictures/NoData.png" alt="">
												<h3>No Data!</h3>
											</center>
										</td>
									</tr>
								</tbody>
								<tbody v-if="this.roleId == 3">
									<tr style="text-align: center;" v-for="applicant in applicants" :value="applicant.applicantId" v-bind:key="applicant.applicantId" >
										<td>{{ applicant.name }}</td>
										<td>{{ applicant.nik }}</td>
										<td>{{ applicant.npwp }}</td>
										<td><img @click="detailAction(applicant)" style="cursor: pointer" src="../assets/pictures/DetailIcon.png" width="25px" alt=""></td>
									</tr>
									<tr v-if="this.isNoData">
										<td colspan="4">
											<center>
												<img src="../assets/pictures/NoData.png" alt="">
												<h3>No Data!</h3>
											</center>
										</td>
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
            applicants: undefined,
            userId: Number,
            username: '',
            roleId: Number,
            isNoData: false
        };
    },
    methods: {
        detailAction: function(applicant){
            if(confirm("Go to " + applicant.name + " details?")){
                if(this.roleId == 2){
                    axios.get("http://localhost:8080/verifikator/detailApplicant/" + applicant.applicantId)
                    .then(response => {
                        var detailApplicant = response.data;
                        this.$router.push({
                            name: "Detail Applicant",
                            params: {detailApplicant}
                        })
                    });
                }else if(this.roleId == 3){
                    axios.get("http://localhost:8080/validator/detailApplicant/" + applicant.applicantId)
                    .then(response => {
                        var detailApplicant = response.data;
                        this.$router.push({
                            name: "Detail Applicant",
                            params: {detailApplicant}
                        })
                    });
                }
            }
        },
    },
    created: function(){
        var load = JSON.parse(localStorage.getItem('userSession'));
        this.userId = load.userId;
        this.username = load.username;
        this.roleId = load.roleId;

        if(this.roleId == 1){
            alert("Not Authorized!");
            this.$router.push("/dashboard");
        }else if(this.roleId == 2){
            axios.get("http://localhost:8080/verifikator/" + this.userId)
            .then(response2 => {
                if(response2.data.length == 0) this.isNoData = true;
                this.applicants = response2.data;
            });
        }else if(this.roleId == 3){
            axios.get("http://localhost:8080/validator/" + this.userId)
            .then(response2 => {
                if(response2.data.length == 0) this.isNoData = true;
                this.applicants = response2.data;
            });
        }
    }
}
</script>

<style>

</style>