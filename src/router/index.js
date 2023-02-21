import Vue from 'vue'
import VueRouter from 'vue-router'

const Dashboard = () => import("@/pages/Dashboard.vue");
const Profile = () => import( "@/pages/Profile.vue");
const Applicants = () => import( "@/pages/Applicants.vue");
const Register = () => import("@/pages/Register.vue");
const DetailApplicant = () => import("@/pages/DetailApplicant.vue");
const Users = () => import("@/pages/Users.vue");
const NotFound = () => import("@/pages/NotFoundPage.vue");


Vue.use(VueRouter)

const routes =
[
    {
		path: "/",
		name: "dashboard",
		component: Dashboard
	},
	{
		path: "/dashboard",
		name: "dashboard",
		component: Dashboard
	},
	{
		path: "/profile",
		name: "profile",
		component: Profile
	},
	{
		path: "/applicants",
		name: "Applicants",
		component: Applicants
	},
	{
		path: "/register",
		name: "Register",
		component: Register
	},
	{
		path: "/detailApplicant",
		name: "Detail Applicant",
		component: DetailApplicant
	},
	{
		path: "/users",
		name: "Users",
		component: Users
	},
    { path: "*", component: NotFound },
];

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
