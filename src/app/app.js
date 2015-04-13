import {inject,routes} from 'app/simpleAnnotation';

@inject('$router')
@routes({
	path: '/', redirectTo: '/welcome'
},
{
	path: '/welcome', component: 'welcome'
})
export class AppController{
	constructor($router){
	}
}