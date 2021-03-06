angular.module('firstCup.nav', []).controller("NavController", function($scope, User, Links, $state, $window){
	$scope.submission = {};
	if (!$window.signedIn){
		$window.signedIn = false;
	};
	// $scope.notLoggedIn = true
	User.getUser().then(function(resp){
		console.log(resp);
		if (resp.data.local){
			$scope.user = resp.data.local;
			$window.signedIn = true;
			$scope.notLoggedIn = false;
		} else {
			$scope.notLoggedIn = true;
		}
	});
	$scope.submit = function(submission){
		Links.postLink(submission);
		$state.reload();
	}
	$scope.refresh = function(){
		$state.reload();
	}
	$('.modal-trigger').leanModal();
})