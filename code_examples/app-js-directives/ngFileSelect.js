/**
 * The angular file upload module
 * @author: nerv
 * @version: 0.2.9.5, 2013-12-02
 */

app = angular.module('TechGrindApp.directives.ngFileSelect', []);
// It is attached to <input type="file"> element like <ng-file-select="options">
app.directive('ngFileSelect', [ 'tools_fileUploaderFactory', function ($fileUploader) {
    'use strict';

    return {
        link: function (scope, element, attributes) {
            $fileUploader.hasHTML5 || element.removeAttr('multiple');

            element.bind('change', function () {
                scope.$emit('file:add', this.files ? this.files : this, scope.$eval(attributes.ngFileSelect));
                $fileUploader.hasHTML5 && element.prop('value', null);
            });
        }
    };
}]);