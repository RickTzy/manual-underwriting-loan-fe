<template>
    <div class="container-fluid py-4 card" style="width: 97%">
		<div class="row px-3">
			<div class="col-md-12">
				<div class="card-mb-4" v-if="applicant.roleId == 2">
                    <h5 slot="header" class="title text-center">Detail Applicant</h5>
                    <form class="row">
                        <div class="row">
                            <div class="col-md-6">
                                <label style="margin-top: 3%">Cif Code</label>
                                <input class="form-control" v-model="applicant.cifCode" placeholder="Cif Code" disabled>
                            </div>
                            <div class="col-md-6">
                                <label style="margin-top: 3%">Name</label>
                                <input class="form-control" v-model="applicant.name" placeholder="Name" disabled>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label style="margin-top: 3%">Email Address</label>
                                <input class="form-control" v-model="applicant.emailAddress" type="email" placeholder="Email Address" disabled>
                            </div>
                            <div class="col-md-4">
                                <label style="margin-top: 3%">Date of Birth</label>
                                <input class="form-control" v-model="applicant.dateOfBirth" placeholder="Date of Birth" disabled>
                            </div>
                            <div class="col-md-4">
                                <label style="margin-top: 3%">Title</label>
                                <input class="form-control" v-model="applicant.title" placeholder="Title" disabled>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label style="margin-top: 3%">Phone Number</label>
                                <input class="form-control" v-model="applicant.phoneNumber" placeholder="Phone Number" disabled>
                            </div>
                            <div class="col-md-4">
                                <label style="margin-top: 3%">Gender</label>
                                <input class="form-control" v-model="applicant.gender" placeholder="Gender" disabled>
                            </div>
                            <div class="col-md-4">
                                <label style="margin-top: 3%">Marital Status</label>
                                <input class="form-control" v-model="applicant.maritalStatus" placeholder="Marital Status" disabled>
                            </div>
                            
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label style="margin-top: 3%">Address</label>
                                <input class="form-control" v-model="applicant.address" placeholder="Address" disabled>
                            </div>
                            <div class="col-md-4">
                                <label style="margin-top: 3%">City</label>
                                <input class="form-control" v-model="applicant.city" placeholder="City" disabled>
                            </div>
                            <div class="col-md-4">
                                <label style="margin-top: 3%">RTRW</label>
                                <input class="form-control" v-model="applicant.rtrw" placeholder="RTRW" disabled>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <label style="margin-top: 3%">Province</label>
                                <input class="form-control" v-model="applicant.province" placeholder="Province" disabled>
                            </div>
                            <div class="col-md-3">
                                <label style="margin-top: 3%">Sub District</label>
                                <input class="form-control" v-model="applicant.subDistrict" placeholder="Sub District" disabled>
                            </div>
                            <div class="col-md-3">
                                <label style="margin-top: 3%">Urban Village</label>
                                <input class="form-control" v-model="applicant.urbanVillage" placeholder="Urban Village" disabled>
                            </div>
                            <div class="col-md-3">
                                <label style="margin-top: 3%">Zip Code</label>
                                <input class="form-control" v-model="applicant.zipCode" placeholder="Zip Code" disabled>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label style="margin-top: 2%">Account Number</label>
                                <input class="form-control" v-model="applicant.accountNumber" placeholder="Account Number" disabled>
                            </div>
                            <div class="col-md-6">
                                <label style="margin-top: 2%">Account Type</label>
                                <input class="form-control" v-model="applicant.accountType" placeholder="Account Type" disabled>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label style="margin-top: 1%">Note</label>
                                <input class="form-control" v-model="note" placeholder="Note">
                            </div>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-center" style="padding-top: 15px">
                            <button type="button" @click="verifyAction()" class="btn btn-success btn-round" style="padding-left: 50px; padding-right: 50px">Verify</button>
                            <button type="button" @click="rejectActionByVerifikator()" class="btn btn-danger btn-round" style="padding-left: 50px; padding-right: 50px">Reject</button>
                        </div>
                    </form>
                </div>
                <div class="card-mb-4" v-if="applicant.roleId == 3">
                    <h5 slot="header" class="title text-center">Detail Applicant</h5>
                    <div class="row">
                        <div class="col-md-3">
                            <label style="margin-top: 2%">NIK</label>
                            <input class="form-control" v-model="applicant.nik" placeholder="NIK" disabled>
                        </div>
                        <div class="col-md-3">
                            <label style="margin-top: 2%">NPWP</label>
                            <input class="form-control" v-model="applicant.npwp" placeholder="NPWP" disabled>
                        </div>
                        <div class="col-md-3">
                            <label style="margin-top: 2%">Monthly Income</label>
                            <input class="form-control" v-model="applicant.monthlyIncome" placeholder="Monthly Income" disabled>
                        </div>
                        <div class="col-md-3">
                            <label style="margin-top: 2%">Request Card Type</label>
                            <input class="form-control" v-model="applicant.cardType" placeholder="Card Type" disabled>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label style="margin-top: 2%">Account Number</label>
                            <input class="form-control" v-model="applicant.accountNumber" placeholder="Account Number" disabled>
                        </div>
                        <div class="col-md-6">
                            <label style="margin-top: 2%">Account Type</label>
                            <input class="form-control" v-model="applicant.accountType" placeholder="Account Type" disabled>
                        </div>
                    </div>
                    <div class="row show-images">
                        <label class="col-md-12 col-form-label text-center" style="margin-top: 1%; margin-bottom: 1%">Images</label>
                        <table style="border-collapse: separate;">
                            <tr class="text-center">
                                <td v-if="applicant.ktp != null"><img :src="applicant.ktp" height="175px" width="300px"></td>
                                <td v-if="applicant.ktp == null"><img src="../assets/pictures/NoPhoto.png" height="175px" width="300px"></td>
                                <td v-if="applicant.selfieWithKtp != null"><img :src="applicant.selfieWithKtp" height="175px" width="300px"></td>
                                <td v-if="applicant.selfieWithKtp == null"><img src="../assets/pictures/NoPhoto.png" height="175px" width="300px"></td>
                                <td v-if="applicant.paycheck != null"><img :src="applicant.paycheck" height="175px" width="300px"></td>
                                <td v-if="applicant.paycheck == null"><img src="../assets/pictures/NoPhoto.png" height="175px" width="300px"></td>
                            </tr>
                            <tr class="text-center">
                                <td><h5 style="margin-top: 10px; margin-bottom: 0;">KTP</h5></td>
                                <td><h5 style="margin-top: 10px; margin-bottom: 0;">Selfie With KTP</h5></td>
                                <td><h5 style="margin-top: 10px; margin-bottom: 0;">Paycheck</h5></td>
                            </tr>
                        </table>
                        
                    </div>
                    <div class="row responsive-images">
                        <label class="col-md-12 col-form-label text-center" style="margin-top: 1%; margin-bottom: 1%">Images</label>
                        <table style="border-collapse: separate;">
                            <tr class="text-center">
                                <td><h5 style="margin-top: 10px; margin-bottom: 0;">KTP</h5></td>
                                <td v-if="applicant.ktp != null"><img :src="applicant.ktp" height="125px" width="200px"></td>
                                <td v-if="applicant.ktp == null"><img src="../assets/pictures/NoPhoto.png" height="125px" width="200px"></td>
                            </tr>
                            <tr class="text-center">
                                <td><h5 style="margin-top: 10px; margin-bottom: 0;">Selfie With KTP</h5></td>
                                <td v-if="applicant.selfieWithKtp != null"><img :src="applicant.selfieWithKtp" height="125px" width="200px"></td>
                                <td v-if="applicant.selfieWithKtp == null"><img src="../assets/pictures/NoPhoto.png" height="125px" width="200px"></td>
                            </tr>
                            <tr class="text-center">
                                <td><h5 style="margin-top: 10px; margin-bottom: 0;">Paycheck</h5></td>
                                <td v-if="applicant.paycheck != null"><img :src="applicant.paycheck" height="125px" width="200px"></td>
                                <td v-if="applicant.paycheck == null"><img src="../assets/pictures/NoPhoto.png" height="125px" width="200px"></td>
                            </tr>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <label style="margin-top: 1%">Verifikator Note</label>
                            <input class="form-control" v-model="applicant.verifikatorNote" placeholder="-" disabled>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <label style="margin-top: 1%">Note</label>
                            <input class="form-control" v-model="note" placeholder="Note">
                        </div>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-center" style="padding-top: 15px">
                        <button type="button" @click="approveAction()" class="btn btn-success btn-round" style="padding-left: 50px; padding-right: 50px">Approve</button>
                        <button type="button" @click="rejectActionByValidator()" class="btn btn-danger btn-round" style="padding-left: 50px; padding-right: 50px">Reject</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            applicant: undefined,
            note: ''
        }
    },
    methods : {
        verifyAction: function(){
            if(confirm("Verify " + this.applicant.name + "?")){
                axios.put("http://localhost:8080/verifikator/applicantVerified", {applicantId: this.applicant.applicantId, username: this.applicant.username, note: this.note})
                .then((response) =>{
                    alert(this.applicant.name + " " + response.data)
                    this.$router.push("/applicants");
                    this.$router.go();
                })
            }
        },
        rejectActionByVerifikator: function(){
            if(confirm("Reject " + this.applicant.name + "?")){
                axios.put("http://localhost:8080/verifikator/applicantRejected", {applicantId: this.applicant.applicantId, username: this.applicant.username, note: this.note})
                .then((response) =>{
                    alert(this.applicant.name + " " + response.data)
                    this.$router.push("/applicants");
                    this.$router.go();
                })
            }
        },
        approveAction: function(){
            if(confirm("Approve " + this.applicant.name + "?")){
                axios.put("http://localhost:8080/validator/applicantApproved", {applicantId: this.applicant.applicantId, username: this.applicant.username, note: this.note})
                .then((response) =>{
                    alert(this.applicant.name + " " + response.data)
                    this.$router.push("/applicants");
                    this.$router.go();
                })
            }
        },
        rejectActionByValidator: function(){
            if(confirm("Reject " + this.applicant.name + "?")){
                axios.put("http://localhost:8080/validator/applicantRejected", {applicantId: this.applicant.applicantId, username: this.applicant.username, note: this.note})
                .then((response) =>{
                    alert(this.applicant.name + " " + response.data)
                    this.$router.push("/applicants");
                    this.$router.go();
                })
            }
        }
    },
    mounted(){
        this.applicant = this.$route.params.detailApplicant;
    }
}
</script>

<style>
    @media only screen and (max-width: 768px){
        .show-images{
            display: none;
        }
        .responsive-images{
            display: block;
        }
    }
    @media only screen and (min-width: 769px){
        .show-images{
            display: block;
        }
        .responsive-images{
            display: none;
        }
    }
</style>