<template>
	<div>
		<div class="container-fluid py-4">
			<div class="row">
				<div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
					<div class="card">
						<div class="card-body p-3">
							<div class="row text-center">
								<div class="col-12">
									<div class="numbers">
										<p class="text-sm mb-0 text-capitalize font-weight-bold">Total Applicant</p>
										<h5 class="font-weight-bolder mb-0">
										{{totalApplicants}}
										</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
					<div class="card">
						<div class="card-body p-3">
							<div class="row text-center">
								<div class="col-12">
									<div class="numbers">
										<p class="text-sm mb-0 text-capitalize font-weight-bold">Verified Applicants</p>
										<h5 class="font-weight-bolder mb-0">
										{{totalVerifiedApplicants}}
										</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
					<div class="card">
						<div class="card-body p-3">
							<div class="row text-center">
								<div class="col-12">
									<div class="numbers">
										<p class="text-sm mb-0 text-capitalize font-weight-bold">Approved Applicants</p>
										<h5 class="font-weight-bolder mb-0">
										{{totalApprovedApplicants}}
										</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-sm-6">
					<div class="card">
						<div class="card-body p-3">
							<div class="row text-center">
								<div class="col-12">
									<div class="numbers">
										<p class="text-sm mb-0 text-capitalize font-weight-bold">Rejected Applicants</p>
										<h5 class="font-weight-bolder mb-0">
										{{totalRejectedApplicants}}
										</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row mt-4">
				<div class="col-12">
					<div class="card">
						<div style="width: 90%; margin-left: 5%">
							<Bar :options="chartOptions" :data="chartData"/><br>
							<h5 class="text-center">Record of Applicant's Status</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: {
    Bar 
  },
	data(){
		return{
			totalApplicants: 'fetching...',
			totalVerifiedApplicants: 'fetching...',
			totalApprovedApplicants: 'fetching...',
			totalRejectedApplicants: 'fetching...',
			chartData: {
				labels: [],
				datasets: [
					{ backgroundColor: "#F4C679", label: "Applicant" },
					{ backgroundColor: "#79F3F4", label: "Verified" },
					{ backgroundColor: "#82F479", label: "Approved" },
					{ backgroundColor: "#F48179", label: "Rejected" }
				]
			},
			chartOptions: {
				responsive: true
			},
			pos: Number
		}
	},
	methods: {
		updateChart(){
			axios.get("http://localhost:8080/user/dashboardData")
			.then(response => {
				this.totalApplicants = response.data.totalApplicant;
				this.totalVerifiedApplicants = response.data.verifiedApplicants;
				this.totalApprovedApplicants = response.data.approvedApplicants;
				this.totalRejectedApplicants = response.data.rejectedApplicants;

				this.chartData = {
					labels: response.data.chartMonths,
					datasets: [
						{ data: response.data.chartData[0], backgroundColor: "#F4C679", label: "Applicant" },
						{ data: response.data.chartData[1], backgroundColor: "#79F3F4", label: "Verified" },
						{ data: response.data.chartData[2], backgroundColor: "#82F479", label: "Approved" },
						{ data: response.data.chartData[3], backgroundColor: "#F48179", label: "Rejected" }
					]
				}
			})
		}
	},
	created: function(){
        var load = JSON.parse(localStorage.getItem('userSession'));
        this.pos = load.pos;
    },
	mounted() {
		if(this.pos != 1){
			if (localStorage.getItem('reloaded')) {
				localStorage.removeItem('reloaded');
			} else {
				localStorage.setItem('reloaded', '1');
				location.reload();
			}
		}
		this.updateChart();
	}
}
</script>

<style>

</style>