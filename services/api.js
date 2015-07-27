angular.module('Instagram')
    .factory('API', function($http) {

        return {
            getFeed: function() {
                return $http.get('http://localhost:8000/api/feed');
            },
            getMediaById: function(id) {
                return $http.get('http://localhost:8000/api/media/' + id);
            },
            likeMedia: function(id) {
                return $http.post('http://localhost:8000/api/like', {
                    mediaId: id
                });
            }
        };

    });
