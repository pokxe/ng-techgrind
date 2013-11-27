/*
	info_userprofile:
		display-style___________
		the top element should be a "user info card" spanning the width of the screen.
			it should contain the following elements:
		* 
		*
		*
		*

		the bottom element should be a 2-column tab-display customized by the user,
			with elements
		
		example:
		
		functional goal___________
		this plugin should display content cards in a "news-card" fashion, and allow simple
			interaction via clicking on the card itself, which will send the user to
			the full content page to view the entire article/content/guide/tutorial/etc
			
		example-content -> displayed information ==> action-on-interaction:
			news/article/tutorial/guide -> detailed info ==> full-content-page
*/
/*
tab.header
tab.type
tab.template
*/

var appModule = angular.module('TechGrindApp.controllers.info.userprofile', []);

appModule.controller('InfoUserProfileCtrl', ['$scope', 'steam', '$http', '$rootScope',
function($scope, steam, http, $rootScope) {

	var user = steam.loginp();
	var loginp = steam.loginp;
	var isFollowing = false;

	$scope.userprofile = {
		userid: 'efraimip',
		name: 'Efraim Pettersson Ivener',
		location: 'Thailand',
		link: 'http://techgrind.asia/#/people/efraimip', /* + userid, */
		merit: 5015,
		position: 'Founder & CEO',
		company: 'eKita',
		companylink: 'http://techgrind.asia/#/startups/ekita', /* + company, */
		bioshort: 'techie, cereal entrepreneur & academic',
		biolong: 'techie, cereal entrepreneur & academictechie, cereal entrepreneur & academictechie, cereal entrepreneur & academictechie, cereal entrepreneur & academictechie, cereal entrepreneur & academictechie, cereal entrepreneur & academictechie, cereal entrepreneur & academictechie, cereal entrepreneur & academic',
		github: 'https://github.com/efraimip',
		portfolio: '',
		facebook: 'https://www.facebook.com/efraimpettersson',
		gplus: 'www.blah.com',
		twitter: 'https://twitter.com/efraimip',
		linkedin: 'www.blah.com',
		blogurl: 'http://efraimip.blogspot.com',
		blogfeed: 'http://efraimip.blogspot.com/atom.xml',
		website: 'http://www.ekita.co',
		followers: 5,
		following: ['martinb', 'paulo', 'onetom', 'khoffmann']
	};

	$scope.maintabs = [
		'News & Articles',
		'Startups',
		'Investments',
		'Followers',
		'Groups'
	];

	$scope.sidetabs = [
		'Seeking',
		'Offering'
	];

	$scope.followMeStart = function() {
		if(loginp) {
			$scope.isFollowing = true;
		} else {
			$rootScope.openlogin = true;
		}
	};
	$scope.followMeStop = function() {
		if(loginp) {
			$scope.isFollowing = false;
		} else {
			$rootScope.openlogin = true;
		}
	};

	$scope.messageMe = function() {
	  // popup messagebox modal and handle modalInstance message contents + sending()
	};
}]);
