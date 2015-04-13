import angular from 'angular';
import {AppController} from './app';
import {WelcomeController} from './welcome/welcome'
import './template';

import 'angular-new-router';

angular.module('routable', ['ngNewRouter','templates'])
	.controller('AppController', AppController)
	.controller('WelcomeController', WelcomeController)