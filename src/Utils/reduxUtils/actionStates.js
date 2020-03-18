export const getActionStates = (actionName)=>{

	if(typeof actionName != 'string'){
		throw new Error('Action name must be string')
	}

	const actionNameUpper = actionName.toUpperCase();
	const inProgress = `FETCHING_${actionName}_LOADING`;
	const success = `FETCHING_${actionName}_SUCCUESS`;
	const failure = `FETCHING_${actionName}_ERRORED`

	return {
		inProgress,
		success,
		failure
	}
}