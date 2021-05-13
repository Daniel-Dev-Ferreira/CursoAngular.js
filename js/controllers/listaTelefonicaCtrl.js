angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, $http, contatosAPI){
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];

    // Carregando os dados de uma api via GET
    let carregarContatos = function(){
       contatosAPI.getContatos().then( (data) => {
            $scope.contatos = data.data;
           //console.log($scope.contatos);
        })
    }

    let carregarOperadoras = function(){
        contatosAPI.getOperadoras().then( (data) => {
            $scope.operadoras = data.data;
        });
    }

   /* $scope.operadoras = [
        {nome: "OI", codigo: 14, categoria: "celular", preco: 2},
        {nome: "VIVO", codigo: 15, categoria: "celular", preco: 1},
        {nome: "TIM", codigo: 41, categoria: "celular", preco: 3},
        {nome: "GVT", codigo: 25, categoria: "fixo", preco: 2},
        {nome: "Embratel", codigo: 21, categoria: "fixo", preco: 1},
    ];*/

    $scope.classe = 'selecionado'

    $scope.adicionarContato =  (contato) => {
        contatosAPI.saveContato(contato).then(function(data){
            delete $scope.contato;
            $scope.contatoForm.$setPristine(); // retirar mensagem de error, após refesh do DOM
            carregarContatos();
        });
        
    };
    // Function para pegar os selecionados, através do filter para realizar o Delete.
    $scope.apagarContato = (contatos) => {
       $scope.contatos = contatos.filter ( (contato) => {
            if(!contato.selecionado) {
                return contato;
            }
        });
    };
    // Function para o disabled do Delete
    $scope.isContatoSelecionado = (contatos) => {
        return contatos.some( (contato) =>{
            return contato.selecionado;
        });
    };
    $scope.ordernarPor = (campo) => {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
    $scope.string = "daniel henrique da costa ferreira";

    carregarContatos();
    carregarOperadoras();
});