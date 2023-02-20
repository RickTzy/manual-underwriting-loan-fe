<template>
    <div>
        <div v-if="userId == Number">
            <Login />
        </div>
        <div class="g-sidenav-show bg-gray-100" v-if="userId != Number">
            <Sidebar :roleId="roleId"/>
            <main class="main-content position-relative border-radius-lg ">
                <Navbar />
                <router-view></router-view>
                <Footer />
            </main>
        </div>
    </div>
</template>

<script>
import Login from "./pages/Login.vue"
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
    name: "app",
    components: {
        Login,
        Navbar,
        Sidebar,
        Footer
    },
    data() {
        return{
            userId: Number,
            username: '',
            token: '',
            roleId: Number,
            pos: Number
        }
    },
    created: function(){
        var load = JSON.parse(localStorage.getItem('userSession'));
        this.userId = load.userId;
        this.username = load.username;
        this.token = load.token;
        this.roleId = load.roleId;
        this.pos = load.pos;

        if(this.userId != Number){
            axios.post("http://localhost:8080/user/checkToken", {token: this.token, username: this.username})
            .then(resp => {
                // Continue, Token still active.
            }).catch(error => {
                if(error.response.data.errorMessage != undefined) alert(error.response.data.errorMessage);
                localStorage.clear();
                if(this.pos == 1) this.$router.go();
                else this.$router.push("/dashboard");
            })
        }
    },
}
</script>

<<style>
    body{
        background-color: #F8F9FA;
    }
</style>
