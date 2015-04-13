import angular from 'angular';
import {AppController} from './app';
import {WelcomeController} from './welcome/welcome'

import 'angular-new-router';

angular.module('routable', ['ngNewRouter'])
	.controller('AppController', AppController)
	.controller('WelcomeController', WelcomeController)