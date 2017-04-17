
angular.module('app').factory('userprofileService',['$state','$q','$http',function($state,$q,$http)
{
    return({ 
        getprofile:getprofile,
        landregister:landregister       
    }); 

    function  getprofile(id) {
        var deferred = $q.defer();          
        $http.get('/api/farmpersonals?filter={"include":{"relation":"landreg","scope":{"include":["stateInfo","districtInfo", "villageInfo"]}},"where":{"id":'+id+'}}').then(function(response) {
            deferred.resolve(response);
        }, function(error){
            deferred.reject(error);
        })
         return deferred.promise;    
    };

    function  landregister(data) {
        var deferred = $q.defer();
        $http.post('/api/landregistrations', data).then(function(response) {
            deferred.resolve(response);
        }, function(error){
            deferred.reject(error);
        })
         return deferred.promise;    
    };


  

}])