(function(){
    angular.module('SafeConnect')
    .controller('EditProfileController', ['$scope', '$state', '$http',               
                            function(      $scope,   $state,   $http){
    
                $scope.user = JSON.parse(localStorage['User-Data']) || undefined;
                                
                           
                $scope.updateUsername = function () {
                    var request = {
                        userId: $scope.user._id,
                        username: $scope.user.username
                    }
                    
                 $http.post('api/profile/updateUsername', request).success(function(){
                    console.log("success");
                 }).error(function(error){
                    console.log("error");
                 })
                };
                                
                $scope.updateBio = function () {
                    var request = {
                        userId: $scope.user._id,
                        bio: $scope.user.bio
                    }
                    
                $http.post('api/profile/updateBio', request).success(function(){
                    console.log("success")
                }).error(function(error){
                    console.log(error);
                });
                }
                            
                            }]);
}());