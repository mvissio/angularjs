(function () {
    app = angular.module('universidadApp', []);

    app.controller('listadoCtrl', ['$scope', function ($scope) {
        $scope.listado = ["Marcos Vissio", "Carlos Perez", "Juan Churin"]
        $scope.listadoPersonas =
            {
                personas: [
                    {
                        nombre: "Marcos Vissio",
                        rol: "Tecnichal Leader",
                        edad: 27
                    },
                    {
                        nombre: "Carlos Perez",
                        rol: "Contador Publico",
                        edad: 53
                    },
                    {
                        nombre: "Juan Churin",
                        rol: "Desarrollador Front End",
                        edad: 23
                    }
                ]
            };
    }]);
})();