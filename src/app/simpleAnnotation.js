export function inject(...injectList){
	return function(target){
		target.$inject = target.$inject || [];
		[].push.apply(target.$inject, injectList)
	}
}

export function routes(...routeConfig){
	return function(target){
		target.$routeConfig = target.$routeConfig || [];
		[].push.apply(target.$routeConfig, routeConfig);
	}
}