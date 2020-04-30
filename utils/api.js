import $http from './request'

function JsontoForm(params) {
	let str = [];
	for (let key in params) {
		str.push(key + "=" + params[key])
	}
	return str.join('&');

}
export const api = {
	/* 登录 */
	login: '/plat/login',
	getuserinfo:'/foun/student/list_by_curr_login_parents_role',
	gettopiclist:'/inte/homeSchool/courseDetail',//主题列表
	advanceProgress:'/inte/homeSchool/advanceProgress',//进步趋势
	studentAnalyseDetail:'/inte/homeSchool/studentAnalyseDetail',//答题记录
	getvoiceRecord:'/inte/homeSchool/voiceRecord',//语言记录
	getDatePullList:'/inte/homeSchool/getDatePullList',
	getSubjectList:'/inte/homeSchool/advanceProgressPullData',//获取进步趋势的科目
	logout: '/plat/logout',
	updatePeronal: '/plat/sys/user/updatePeronal',
	uploadImg: '/plat/sys/user/uploadImg',
}
export function getajax(url) {
	return $http.get(url)
}
export function postajax(url, params) {
	// let myparams = JsontoForm(params);
	return $http.post(url, params)
}
export default {
	api,
	getajax,
	postajax
}
