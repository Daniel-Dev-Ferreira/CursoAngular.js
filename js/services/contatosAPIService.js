angular.module("listaTelefonica").factory("contatosAPI", function($http){
    var _getContatos = function(){
        return  $http.get("http://localhost:3000/contatos");
    };

    var _getOperadoras = function(){
        return  $http.get("http://localhost:3000/operadoras");
    };

    var _saveContatos = function(){
        return  $http.post("http://localhost:3000/contatos");
    };

    return{
        getContatos: _getContatos,
        getOperadoras: _getOperadoras,
        saveContato: _saveContatos
    };
});