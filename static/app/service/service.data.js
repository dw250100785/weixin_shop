﻿(function () {

    var injectParams = ['config','shopService'];

    var dataService = function (config, shopService) {
        return shopService;
    };

    dataService.$inject = injectParams;

    angular.module('shopApp').factory('dataService', dataService);

}());

