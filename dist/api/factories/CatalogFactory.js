'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Catalog = require('../activeRecords/Catalog');

var _Catalog2 = _interopRequireDefault(_Catalog);

var _CatalogResource = require('../resources/CatalogResource');

var _CatalogResource2 = _interopRequireDefault(_CatalogResource);

var _EntityFactory2 = require('../../base/factories/EntityFactory');

var _EntityFactory3 = _interopRequireDefault(_EntityFactory2);

var _Removable = require('../../base/factories/behaviors/Removable');

var _Removable2 = _interopRequireDefault(_Removable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CatalogFactory = function (_EntityFactory) {
  _inherits(CatalogFactory, _EntityFactory);

  function CatalogFactory() {
    _classCallCheck(this, CatalogFactory);

    return _possibleConstructorReturn(this, (CatalogFactory.__proto__ || Object.getPrototypeOf(CatalogFactory)).apply(this, arguments));
  }

  return CatalogFactory;
}(_EntityFactory3.default);

CatalogFactory.activeRecordClass = _Catalog2.default;
CatalogFactory.resourceClass = _CatalogResource2.default;
CatalogFactory.behaviors = [].concat(_toConsumableArray(_EntityFactory3.default.behaviors), [new _Removable2.default()]);
exports.default = CatalogFactory;