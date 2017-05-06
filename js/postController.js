angular
	.module("app")
	.controller("postController", postController);

function postController($http){
	var vm = this;
	vm.posts = [];
//https://jsonplaceholder.typicode.com/posts/
	$http.get("https://jsonplaceholder.typicode.com/posts/")
		.then(success, error);

	function success(response){
		vm.posts = response.data;
	}

	function error(response){
		console.log(response);
	}

}