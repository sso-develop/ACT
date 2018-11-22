
var project = '/act';
module.exports = {
	requestUrls:{
		findProcessDefinitionUrl:project+"/findProcessDefinition.json",
		startProcessInstanceUrl:project+'/startProcessInstance.json',
		deleteDeployUrl:project+'/deleteDeploy.json',
		saveGroupUrl:project+'/saveGroup.json',
		queryGroupByPagerUrl:project+'/queryGroupByPager.json',
		deleteGroupUrl:project+'/deleteGroup.json',
		queryAllGroupUrl:project+'/queryAllGroup.json',
		findHistoricActivityInstanceByPagerUrl:project+'/findHistoricActivityInstanceByPager.json',
		findHistoricActivityInstanceUrl:project+'/findHistoricActivityInstance.json',
		findPersonTaskUrl:project+'/findPersonTask.json',
		queryAllUserUrl:project+'/queryAllUser.json',
		queryUserByPagerUrl:project+'/queryUserByPager.json',
		deleteUserUrl:project+'/deleteUser.json',
		taskClaimUrl:project+'/taskClaim.json',
		traceprocessUrl:project+'/traceprocess.json',
		queryTaskByIdUrl:project+'/queryTaskByIdUrl.json',
		completeTaskUrl:project+'/completeTask.json',
		taskAssignUrl:project+'/taskAssign.json',
	}
}
