(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */
/*!*******************************!*\
  !*** E:/公司项目/Nfslink/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope) {
        return this.$scope[method](args)
      }
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!**********************************!*\
  !*** E:/公司项目/Nfslink/pages.json ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/*!*******************************************************!*\
  !*** E:/公司项目/Nfslink/main.js?{"page":"pages%2Fline"} ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _line = _interopRequireDefault(__webpack_require__(/*! ./pages/line.vue */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_line.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!*******************************************************!*\
  !*** E:/公司项目/Nfslink/static/aibokalv-chart/lib/f2.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
!function (t, e) { true ? module.exports = e() : undefined;}(void 0, function () {return function (t) {function e(n) {if (i[n]) return i[n].exports;var r = i[n] = { i: n, l: !1, exports: {} };return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports;}var i = {};return e.m = t, e.c = i, e.d = function (t, i, n) {e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: n });}, e.n = function (t) {var i = t && t.__esModule ? function () {return t.default;} : function () {return t;};return e.d(i, "a", i), i;}, e.o = function (t, e) {return Object.prototype.hasOwnProperty.call(t, e);}, e.p = "", e(e.s = 139);}([function (t, e, i) {var n = i(46),r = { upperFirst: i(47), lowerFirst: i(48), isString: i(49), isNumber: i(50), isBoolean: i(51), isFunction: i(52), isDate: i(53), isArray: i(20), isNil: i(30), isObject: i(31), isPlainObject: i(32), deepMix: i(55), mix: i(56), each: i(57), isObjectValueEqual: function isObjectValueEqual(t, e) {t = Object.assign({}, t), e = Object.assign({}, e);var i = Object.getOwnPropertyNames(t),n = Object.getOwnPropertyNames(e);if (i.length !== n.length) return !1;for (var r = 0, a = i.length; r < a; r++) {var o = i[r];if (t[o] !== e[o]) return !1;}return !0;}, wrapBehavior: function wrapBehavior(t, e) {if (t["_wrap_" + e]) return t["_wrap_" + e];var i = function i(_i) {t[e](_i);};return t["_wrap_" + e] = i, i;}, getWrapBehavior: function getWrapBehavior(t, e) {return t["_wrap_" + e];}, parsePadding: function parsePadding(t) {var e, i, n, a;return r.isNumber(t) || r.isString(t) ? e = n = a = i = t : r.isArray(t) && (e = t[0], i = r.isNil(t[1]) ? t[0] : t[1], n = r.isNil(t[2]) ? t[0] : t[2], a = r.isNil(t[3]) ? i : t[3]), [e, i, n, a];}, directionEnabled: function directionEnabled(t, e) {return void 0 === t || "string" == typeof t && -1 !== t.indexOf(e);} };r.Array = { merge: function merge(t) {for (var e = [], i = 0, n = t.length; i < n; i++) {e = e.concat(t[i]);}return e;}, values: function values(t, e) {for (var i = [], n = {}, a = 0, o = t.length; a < o; a++) {var s = t[a][e];r.isNil(s) || (r.isArray(s) ? r.each(s, function (t) {n[t] || (i.push(t), n[t] = !0);}) : n[s] || (i.push(s), n[s] = !0));}return i;}, firstValue: function firstValue(t, e) {for (var i = null, n = 0, a = t.length; n < a; n++) {var o = t[n][e];if (!r.isNil(o)) {i = r.isArray(o) ? o[0] : o;break;}}return i;}, group: function group(t, e, i) {if (void 0 === i && (i = {}), !e) return [t];var n = r.Array.groupToMap(t, e),a = [];if (1 === e.length && i[e[0]]) {var o = i[e[0]];r.each(o, function (t) {t = "_" + t, a.push(n[t]);});} else for (var s in n) {a.push(n[s]);}return a;}, groupToMap: function groupToMap(t, e) {if (!e) return { 0: t };for (var i = {}, n = 0, r = t.length; n < r; n++) {var a = t[n],o = function (t) {for (var i = "_", n = 0, r = e.length; n < r; n++) {i += t[e[n]] && t[e[n]].toString();}return i;}(a);i[o] ? i[o].push(a) : i[o] = [a];}return i;}, remove: function remove(t, e) {if (t) {var i = t.indexOf(e);-1 !== i && t.splice(i, 1);}}, getRange: function getRange(t) {if (!t.length) return { min: 0, max: 0 };var e = Math.max.apply(null, t);return { min: Math.min.apply(null, t), max: e };} }, r.mix(r, n), t.exports = r;}, function (t, e, i) {var n = i(45),r = i(0),a = { version: "3.3.8", scales: {}, widthRatio: { column: .5, rose: .999999, multiplePie: .75 }, lineDash: [4, 4] };a.setTheme = function (t) {r.deepMix(this, t);}, a.setTheme(n), t.exports = a;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initProperties = function () {this._attrs = { zIndex: 0, visible: !0, destroyed: !1, isShape: !0, attrs: {} };}, i.getType = function () {return this._attrs.type;}, i.drawInner = function (t) {var e = this,i = e.get("attrs");e.createPath(t);var n = t.globalAlpha;if (e.hasFill()) {var a = i.fillOpacity;r.isNil(a) || 1 === a ? t.fill() : (t.globalAlpha = a, t.fill(), t.globalAlpha = n);}if (e.hasStroke() && i.lineWidth > 0) {var o = i.strokeOpacity;r.isNil(o) || 1 === o || (t.globalAlpha = o), t.stroke();}}, i.getBBox = function () {var t = this._attrs.bbox;return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, t.height = t.maxY - t.minY), this._attrs.bbox = t), t;}, i.calculateBox = function () {return null;}, i.createPath = function () {}, e;}(i(27));t.exports = a;}, function (t, e) {t.exports = { create: function create() {return [0, 0];}, length: function length(t) {var e = t[0],i = t[1];return Math.sqrt(e * e + i * i);}, normalize: function normalize(t, e) {var i = this.length(e);return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t;}, add: function add(t, e, i) {return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t;}, sub: function sub(t, e, i) {return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t;}, scale: function scale(t, e, i) {return t[0] = e[0] * i, t[1] = e[1] * i, t;}, dot: function dot(t, e) {return t[0] * e[0] + t[1] * e[1];}, direction: function direction(t, e) {return t[0] * e[1] - e[0] * t[1];}, angle: function angle(t, e) {var i = this.dot(t, e) / (this.length(t) * this.length(e));return Math.acos(i);}, angleTo: function angleTo(t, e, i) {var n = this.angle(t, e),r = this.direction(t, e) >= 0;return i ? r ? 2 * Math.PI - n : n : r ? n : 2 * Math.PI - n;}, zero: function zero(t) {return 0 === t[0] && 0 === t[1];}, distance: function distance(t, e) {var i = e[0] - t[0],n = e[1] - t[1];return Math.sqrt(i * i + n * n);}, clone: function clone(t) {return [t[0], t[1]];}, min: function min(t, e, i) {return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t;}, max: function max(t, e, i) {return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t;}, transformMat2d: function transformMat2d(t, e, i) {var n = e[0],r = e[1];return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t;} };}, function (t, e, i) {var n = i(25),r = i(13);t.exports = function (t, e) {if (t) if (r(t)) for (var i = 0, a = t.length; i < a && !1 !== e(t[i], i); i++) {;} else if (n(t)) for (var o in t) {if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break;}};}, function (t, e, i) {var n = { Canvas: i(76), Group: i(35), Shape: i(2), Matrix: i(24), Vector2: i(3) };i(78), i(79), i(80), i(81), i(82), i(83), i(84), i(85), i(86), t.exports = n;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}function r(t) {return a.isArray(t) ? t : a.isString(t) ? t.split("*") : [t];}var a = i(0),o = i(33),s = ["color", "size", "shape"],c = i(1),l = i(61),u = i(8),h = i(23),f = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i.getDefaultCfg = function () {return { type: null, data: null, attrs: {}, scales: {}, container: null, styleOptions: null, chart: null, shapeType: "", generatePoints: !1, attrOptions: {}, sortable: !1, startOnZero: !0, visible: !0, connectNulls: !1 };}, i.init = function () {var t = this;t._initAttrs();var e = t._processData();t.get("adjust") && t._adjustData(e), t.set("dataArray", e);}, i._getGroupScales = function () {var t = this,e = [];return a.each(s, function (i) {var n = t.getAttr(i);if (n) {var r = n.scales;a.each(r, function (t) {t && t.isCategory && -1 === e.indexOf(t) && e.push(t);});}}), e;}, i._groupData = function (t) {var e = this,i = e.get("colDefs"),n = e._getGroupScales();if (n.length) {var r = {},o = [];return a.each(n, function (t) {var e = t.field;o.push(e), i && i[e] && i[e].values && (r[t.field] = i[e].values);}), a.Array.group(t, o, r);}return [t];}, i._setAttrOptions = function (t, e) {this.get("attrOptions")[t] = e;}, i._createAttrOption = function (t, e, i, n) {var r = {};r.field = e, i ? a.isFunction(i) ? r.callback = i : r.values = i : r.values = n, this._setAttrOptions(t, r);}, i._initAttrs = function () {var t = this,e = t.get("attrs"),i = t.get("attrOptions"),n = t.get("coord");for (var o in i) {if (i.hasOwnProperty(o)) {var s = i[o],c = a.upperFirst(o),u = r(s.field);"position" === o && (s.coord = n);for (var h = [], f = 0, p = u.length; f < p; f++) {var g = u[f],d = t._createScale(g);h.push(d);}if ("position" === o) {var v = h[1];"polar" === n.type && n.transposed && t.hasAdjust("stack") && v.values.length && v.change({ nice: !1, min: 0, max: Math.max.apply(null, v.values) });}s.scales = h;var y = new l[c](s);e[o] = y;}}}, i._createScale = function (t) {var e = this.get("scales"),i = e[t];return i || (i = this.get("chart").createScale(t), e[t] = i), i;}, i._processData = function () {for (var t = this, e = this.get("data"), i = [], n = this._groupData(e), r = 0, a = n.length; r < a; r++) {var o = n[r],s = t._saveOrigin(o);this.hasAdjust("dodge") && t._numberic(s), i.push(s);}return i;}, i._saveOrigin = function (t) {for (var e = [], i = 0, n = t.length; i < n; i++) {var r = t[i],a = {};for (var o in r) {a[o] = r[o];}a._origin = r, e.push(a);}return e;}, i._numberic = function (t) {for (var e = this.getAttr("position").scales, i = 0, n = t.length; i < n; i++) {for (var r = t[i], a = Math.min(2, e.length), o = 0; o < a; o++) {var s = e[o];if (s.isCategory) {var c = s.field;r[c] = s.translate(r[c]);}}}}, i._adjustData = function (t) {var e = this,i = e.get("adjust");if (i) {var n = a.upperFirst(i.type);if (!h[n]) throw new Error("not support such adjust : " + i);var r = e.getXScale(),o = e.getYScale(),s = a.mix({ xField: r.field, yField: o.field }, i);new h[n](s).processAdjust(t), "Stack" === n && e._updateStackRange(o.field, o, t);}}, i._updateStackRange = function (t, e, i) {for (var n = a.Array.merge(i), r = e.min, o = e.max, s = 0, c = n.length; s < c; s++) {var l = n[s],u = Math.min.apply(null, l[t]),h = Math.max.apply(null, l[t]);u < r && (r = u), h > o && (o = h);}(r < e.min || o > e.max) && e.change({ min: r, max: o });}, i._sort = function (t) {var e = this,i = e.getXScale(),n = i.field,r = i.type;"identity" !== r && i.values.length > 1 && a.each(t, function (t) {t.sort(function (t, e) {return "timeCat" === r ? i._toTimeStamp(t._origin[n]) - i._toTimeStamp(e._origin[n]) : i.translate(t._origin[n]) - i.translate(e._origin[n]);});}), e.set("hasSorted", !0), e.set("dataArray", t);}, i.paint = function () {var t = this,e = t.get("dataArray"),i = [],n = t.getShapeFactory();n.setCoord(t.get("coord")), t._beforeMapping(e);for (var r = 0, a = e.length; r < a; r++) {var o = e[r];o.length && (o = t._mapping(o), i.push(o), t.draw(o, n));}t.set("dataArray", i);}, i.getShapeFactory = function () {var t = this.get("shapeFactory");if (!t) {var e = this.get("shapeType");t = u.getShapeFactory(e), this.set("shapeFactory", t);}return t;}, i._mapping = function (t) {for (var e = this, i = e.get("attrs"), n = e.getYScale().field, r = [], o = 0, s = t.length; o < s; o++) {var c = t[o],l = {};l._origin = c._origin, l.points = c.points, l._originY = c[n];for (var u in i) {if (i.hasOwnProperty(u)) {var h = i[u],f = h.names,p = e._getAttrValues(h, c);if (f.length > 1) for (var g = 0, d = p.length; g < d; g++) {var v = p[g];l[f[g]] = a.isArray(v) && 1 === v.length ? v[0] : v;} else l[f[0]] = 1 === p.length ? p[0] : p;}}r.push(l);}return r;}, i._getAttrValues = function (t, e) {for (var i = t.scales, n = [], r = 0, a = i.length; r < a; r++) {var o = i[r],s = o.field;"identity" === o.type ? n.push(o.value) : n.push(e[s]);}return t.mapping.apply(t, n);}, i.getAttrValue = function (t, e) {var i = this.getAttr(t),n = null;return i && (n = this._getAttrValues(i, e)[0]), n;}, i._beforeMapping = function (t) {var e = this;e.get("sortable") && e._sort(t), e.get("generatePoints") && a.each(t, function (t) {e._generatePoints(t);});}, i.isInCircle = function () {var t = this.get("coord");return t && t.isPolar;}, i.getCallbackCfg = function (t, e, i) {if (!t) return e;var n = {},r = t.map(function (t) {return i[t];});return a.each(e, function (t, e) {a.isFunction(t) ? n[e] = t.apply(null, r) : n[e] = t;}), n;}, i.getDrawCfg = function (t) {var e = this,i = e.isInCircle(),n = { origin: t, x: t.x, y: t.y, color: t.color, size: t.size, shape: t.shape, isInCircle: i, opacity: t.opacity },r = e.get("styleOptions");return r && r.style && (n.style = e.getCallbackCfg(r.fields, r.style, t._origin)), e.get("generatePoints") && (n.points = t.points), i && (n.center = e.get("coord").center), n;}, i.draw = function (t, e) {var i = this,n = i.get("container"),r = i.getYScale();a.each(t, function (t, o) {if (!r || !a.isNil(t._origin[r.field])) {t.index = o;var s = i.getDrawCfg(t),c = t.shape;i.drawShape(c, t, s, n, e);}});}, i.drawShape = function (t, e, i, n, r) {var o = r.drawShape(t, i, n);o && a.each([].concat(o), function (t) {t.set("origin", e);});}, i._generatePoints = function (t) {for (var e = this, i = e.getShapeFactory(), n = e.getAttr("shape"), r = 0, a = t.length; r < a; r++) {var o = t[r],s = e.createShapePointsCfg(o),c = n ? e._getAttrValues(n, o) : null,l = i.getShapePoints(c, s);o.points = l;}}, i.createShapePointsCfg = function (t) {var e,i = this.getXScale(),n = this.getYScale(),r = this._normalizeValues(t[i.field], i);return e = n ? this._normalizeValues(t[n.field], n) : t.y ? t.y : .1, { x: r, y: e, y0: n ? n.scale(this.getYMinValue()) : void 0 };}, i.getYMinValue = function () {var t = this.getYScale(),e = t.min,i = t.max;return this.get("startOnZero") ? i <= 0 && e <= 0 ? i : e >= 0 ? e : 0 : e;}, i._normalizeValues = function (t, e) {var i = [];if (a.isArray(t)) for (var n = 0, r = t.length; n < r; n++) {var o = t[n];i.push(e.scale(o));} else i = e.scale(t);return i;}, i.getAttr = function (t) {return this.get("attrs")[t];}, i.getXScale = function () {return this.getAttr("position").scales[0];}, i.getYScale = function () {return this.getAttr("position").scales[1];}, i.hasAdjust = function (t) {return this.get("adjust") && this.get("adjust").type === t;}, i._getSnap = function (t, e, i) {var n,r = 0,a = this.getYScale().field;if (this.hasAdjust("stack") && t.field === a) {n = [], i.forEach(function (t) {n.push(t._originY);});for (var o = n.length; r < o && !(n[0][0] > e); r++) {if (n[n.length - 1][1] <= e) {r = n.length - 1;break;}if (n[r][0] <= e && n[r][1] > e) break;}} else {(n = t.values).sort(function (t, e) {return t - e;});for (var s = n.length; r < s && !((n[0] + n[1]) / 2 > e) && !((n[r - 1] + n[r]) / 2 <= e && (n[r + 1] + n[r]) / 2 > e); r++) {if ((n[n.length - 2] + n[n.length - 1]) / 2 <= e) {r = n.length - 1;break;}}}return n[r];}, i.getSnapRecords = function (t) {var e = this,i = e.get("coord"),n = e.getXScale(),r = e.getYScale(),o = n.field,s = e.get("dataArray");this.get("hasSorted") || this._sort(s);var c = [],l = i.invertPoint(t),u = l.x;e.isInCircle() && !i.transposed && u > (1 + n.rangeMax()) / 2 && (u = n.rangeMin());var h = n.invert(u);n.isCategory || (h = e._getSnap(n, h));var f = [];if (s.forEach(function (t) {t.forEach(function (t) {var i = a.isNil(t._origin) ? t[o] : t._origin[o];e._isEqual(i, h, n) && f.push(t);});}), this.hasAdjust("stack") && i.isPolar && i.transposed && 1 === n.values.length) {if (u >= 0 && u <= 1) {var p = r.invert(l.y);p = e._getSnap(r, p, f), f.forEach(function (t) {(a.isArray(p) ? t._originY.toString() === p.toString() : t._originY === p) && c.push(t);});}} else c = f;return c;}, i._isEqual = function (t, e, i) {return "timeCat" === i.type ? i._toTimeStamp(t) === e : e === t;}, i.position = function (t) {return this._setAttrOptions("position", { field: t }), this;}, i.color = function (t, e) {return this._createAttrOption("color", t, e, c.colors), this;}, i.size = function (t, e) {return this._createAttrOption("size", t, e, c.sizes), this;}, i.shape = function (t, e) {var i = this.get("type"),n = c.shapes[i] || [];return this._createAttrOption("shape", t, e, n), this;}, i.style = function (t, e) {var i = this.get("styleOptions");i || (i = {}, this.set("styleOptions", i)), a.isObject(t) && (e = t, t = null);var n;return t && (n = r(t)), i.fields = n, i.style = e, this;}, i.adjust = function (t) {return a.isString(t) && (t = { type: t }), this.set("adjust", t), this;}, i.animate = function (t) {return this.set("animateCfg", t), this;}, i.reset = function () {this.set("attrOptions", {}), this.set("adjust", null), this.clearInner();}, i.clearInner = function () {var t = this.get("container");t && (t.clear(), t.setMatrix([1, 0, 0, 1, 0, 0])), t && t.clear(), this.set("attrs", {}), this.set("groupScales", null), this.set("xDistance", null), this.set("_width", null);}, i.clear = function () {this.clearInner(), this.set("scales", {});}, i.destroy = function () {this.clear(), t.prototype.destroy.call(this);}, i._display = function (t) {this.set("visible", t);var e = this.get("container"),i = e.get("canvas");e.set("visible", t), i.draw();}, i.show = function () {this._display(!0);}, i.hide = function () {this._display(!1);}, e;}(o);t.exports = f;}, function (t, e) {var i = {}.toString;t.exports = function (t, e) {return i.call(t) === "[object " + e + "]";};}, function (t, e, i) {var n = i(0),r = i(1),a = {},o = { _coord: null, draw: function draw(t, e) {this.drawShape && this.drawShape(t, e);}, setCoord: function setCoord(t) {this._coord = t;}, parsePoint: function parsePoint(t) {var e = this._coord;return e.isPolar && (1 === t.x && (t.x = .9999999), 1 === t.y && (t.y = .9999999)), e.convertPoint(t);}, parsePoints: function parsePoints(t) {if (!t) return !1;var e = this,i = [];return t.forEach(function (t) {i.push(e.parsePoint(t));}), i;} },s = { defaultShapeType: null, setCoord: function setCoord(t) {this._coord = t;}, getShape: function getShape(t) {var e = this;n.isArray(t) && (t = t[0]);var i = e[t] || e[e.defaultShapeType];return i._coord = e._coord, i;}, getShapePoints: function getShapePoints(t, e) {var i = this.getShape(t);return (i.getPoints || i.getShapePoints || this.getDefaultPoints)(e);}, getDefaultPoints: function getDefaultPoints() {return [];}, drawShape: function drawShape(t, e, i) {var n = this.getShape(t);return e.color || (e.color = r.colors[0]), n.draw(e, i);} };a.registerFactory = function (t, e) {var i = n.upperFirst(t),r = n.mix({}, s, e);return a[i] = r, r.name = t, r;}, a.registerShape = function (t, e, i) {var r = n.upperFirst(t),s = a[r],c = n.mix({}, o, i);return s[e] = c, c;}, a.registShape = a.registerShape, a.getShapeFactory = function (t) {var e = this;return t = t || "point", e[n.upperFirst(t)];}, t.exports = a;}, function (t, e) {t.exports = function (t) {return null === t || void 0 === t;};}, function (t, e, i) {function n(t, e, i, n, a) {return { x: r(a, t.x, e.x, i.x, n.x), y: r(a, t.y, e.y, i.y, n.y) };}function r(t, e, i, n, r) {var a = t * t;return e + (3 * -e + t * (3 * e - e * t)) * t + (3 * i + t * (-6 * i + 3 * i * t)) * t + (3 * n - 3 * n * t) * a + r * (a * t);}function a(t) {for (var e = 1 / 0, i = -1 / 0, r = 1 / 0, a = -1 / 0, o = { x: t[0], y: t[1] }, s = { x: t[2], y: t[3] }, c = { x: t[4], y: t[5] }, l = { x: t[6], y: t[7] }, u = 0; u < 100; u++) {var h = n(o, s, c, l, u / 100);h.x < e && (e = h.x), h.x > i && (i = h.x), h.y < r && (r = h.y), h.y > a && (a = h.y);}return { minX: e, minY: r, maxX: i, maxY: a };}var o = i(3),s = o.create(),c = o.create(),l = o.create();t.exports = { getBBoxFromPoints: function getBBoxFromPoints(t, e) {if (0 !== t.length) {for (var i = t[0], n = i.x, r = i.x, a = i.y, o = i.y, s = t.length, c = 1; c < s; c++) {i = t[c], n = Math.min(n, i.x), r = Math.max(r, i.x), a = Math.min(a, i.y), o = Math.max(o, i.y);}return e = e / 2 || 0, { minX: n - e, minY: a - e, maxX: r + e, maxY: o + e };}}, getBBoxFromLine: function getBBoxFromLine(t, e, i, n, r) {return r = r / 2 || 0, { minX: Math.min(t, i) - r, minY: Math.min(e, n) - r, maxX: Math.max(t, i) + r, maxY: Math.max(e, n) + r };}, getBBoxFromArc: function getBBoxFromArc(t, e, i, n, r, a) {var u = Math.abs(n - r);if (u % (2 * Math.PI) < 1e-4 && u > 1e-4) return { minX: t - i, minY: e - i, maxX: t + i, maxY: e + i };s[0] = Math.cos(n) * i + t, s[1] = Math.sin(n) * i + e, c[0] = Math.cos(r) * i + t, c[1] = Math.sin(r) * i + e;var h = [0, 0],f = [0, 0];if (o.min(h, s, c), o.max(f, s, c), (n %= 2 * Math.PI) < 0 && (n += 2 * Math.PI), (r %= 2 * Math.PI) < 0 && (r += 2 * Math.PI), n > r && !a ? r += 2 * Math.PI : n < r && a && (n += 2 * Math.PI), a) {var p = r;r = n, n = p;}for (var g = 0; g < r; g += Math.PI / 2) {g > n && (l[0] = Math.cos(g) * i + t, l[1] = Math.sin(g) * i + e, o.min(h, l, h), o.max(f, l, f));}return { minX: h[0], minY: h[1], maxX: f[0], maxY: f[1] };}, getBBoxFromBezierGroup: function getBBoxFromBezierGroup(t, e) {for (var i = 1 / 0, n = -1 / 0, r = 1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s++) {var l = a(t[s]);l.minX < i && (i = l.minX), l.maxX > n && (n = l.maxX), l.minY < r && (r = l.minY), l.maxY > o && (o = l.maxY);}return e = e / 2 || 0, { minX: i - e, minY: r - e, maxX: n + e, maxY: o + e };} };}, function (t, e, i) {var n = i(0),r = { min: 0, median: .5, max: 1 },a = function () {function t(t) {this._initDefaultCfg(), n.deepMix(this, t);}var e = t.prototype;return e._initDefaultCfg = function () {}, e._getNormalizedValue = function (t, e) {return n.isNil(r[t]) ? e.scale(t) : r[t];}, e.parsePercentPoint = function (t, e) {var i = parseFloat(e[0]) / 100,n = parseFloat(e[1]) / 100,r = t.start,a = t.end,o = Math.abs(r.x - a.x),s = Math.abs(r.y - a.y);return { x: o * i + Math.min(r.x, a.x), y: s * n + Math.min(r.y, a.y) };}, e.parsePoint = function (t, e) {var i = this,r = i.xScale,a = i.yScales;if (n.isFunction(e) && (e = e(r, a)), n.isString(e[0]) && -1 !== e[0].indexOf("%")) return this.parsePercentPoint(t, e);var o = i._getNormalizedValue(e[0], r),s = i._getNormalizedValue(e[1], a[0]),c = t.convertPoint({ x: o, y: s });return i.limitInPlot ? o >= 0 && o <= 1 && s >= 0 && s <= 1 ? c : null : c;}, e.render = function () {}, e.repaint = function () {this.remove();var t = this.coord,e = this.container,i = this.canvas;e && !e.isDestroyed() && (this.render(t, e), i.draw());}, e.remove = function () {var t = this.element;t && t.remove(!0);}, e.changeVisible = function (t) {var e = this;e.visible = t;var i = e.element;i && (i.set ? i.set("visible", t) : i.style.display = t ? "" : "none");}, t;}();t.exports = a;}, function (t, e, i) {var n = i(22),r = i(4),a = i(25),o = i(9),s = function () {function t(t) {this._initDefaultCfg(), n(this, t), this.init();}var e = t.prototype;return e._initDefaultCfg = function () {this.type = "base", this.formatter = null, this.range = [0, 1], this.ticks = null, this.values = [];}, e.init = function () {}, e.getTicks = function () {var t = this,e = t.ticks,i = [];return r(e, function (e) {var n;n = a(e) ? e : { text: t.getText(e), tickValue: e, value: t.scale(e) }, i.push(n);}), i;}, e.getText = function (t, e) {var i = this.formatter;return t = i ? i(t, e) : t, !o(t) && t.toString || (t = ""), t.toString();}, e.rangeMin = function () {return this.range[0];}, e.rangeMax = function () {var t = this.range;return t[t.length - 1];}, e.invert = function (t) {return t;}, e.translate = function (t) {return t;}, e.scale = function (t) {return t;}, e.clone = function () {var t = this,e = t.constructor,i = {};return r(t, function (e, n) {i[n] = t[n];}), new e(i);}, e.change = function (t) {return this.ticks = null, n(this, t), this.init(), this;}, t;}();t.exports = s;}, function (t, e, i) {var n = i(16),r = Array.isArray ? Array.isArray : function (t) {return n(t, "Array");};t.exports = r;}, function (t, e, i) {function n(t, e) {return r(e) ? e : t.invert(t.scale(e));}var r = i(18),a = i(13),o = i(9),s = i(22),c = i(4),l = function () {function t(t) {var e = this;this.type = "base", this.name = null, this.method = null, this.values = [], this.scales = [], this.linear = null;var i = null,n = this.callback;if (t.callback) {var r = t.callback;i = function i() {for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) {i[a] = arguments[a];}var s = r.apply(void 0, i);return o(s) && (s = n.apply(e, i)), s;};}s(this, t), i && s(this, { callback: i });}var e = t.prototype;return e._getAttrValue = function (t, e) {var i = this.values;if (t.isCategory && !this.linear) return i[t.translate(e) % i.length];var n = t.scale(e);return this.getLinearValue(n);}, e.getLinearValue = function (t) {var e = this.values,i = e.length - 1,n = Math.floor(i * t),r = i * t - n,a = e[n];return a + ((n === i ? a : e[n + 1]) - a) * r;}, e.callback = function (t) {var e = this,i = e.scales[0];return "identity" === i.type ? i.value : e._getAttrValue(i, t);}, e.getNames = function () {for (var t = this.scales, e = this.names, i = Math.min(t.length, e.length), n = [], r = 0; r < i; r++) {n.push(e[r]);}return n;}, e.getFields = function () {var t = this.scales,e = [];return c(t, function (t) {e.push(t.field);}), e;}, e.getScale = function (t) {return this.scales[this.names.indexOf(t)];}, e.mapping = function () {for (var t = this.scales, e = this.callback, i = arguments.length, n = new Array(i), r = 0; r < i; r++) {n[r] = arguments[r];}var a = n;if (e) {for (var o = 0, s = n.length; o < s; o++) {n[o] = this._toOriginParam(n[o], t[o]);}a = e.apply(this, n);}return a = [].concat(a);}, e._toOriginParam = function (t, e) {var i = t;if (!e.isLinear) if (a(t)) {i = [];for (var r = 0, o = t.length; r < o; r++) {i.push(n(e, t[r]));}} else i = n(e, t);return i;}, t;}();t.exports = l;}, function (t, e, i) {function n(t) {if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}function r(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}function a(t) {var e = t.startAngle,i = t.endAngle;return !(!u.isNil(e) && !u.isNil(i) && i - e < 2 * Math.PI);}function o(t, e) {return t - e;}function s(t, e) {var i = !1;return u.each(t, function (t) {var n = [].concat(t.values),r = [].concat(e.values);t.type !== e.type || t.field !== e.field || n.sort(o).toString() !== r.sort(o).toString() || (i = !0);}), i;}var c = i(33),l = i(58),u = i(0),h = i(59),f = i(6),p = i(67),g = i(73),d = i(1),v = i(5).Canvas,y = i(28),m = function (t) {function e(e) {var i,r = n(i = t.call(this, e) || this);return u.each(f, function (t, e) {var i = u.lowerFirst(e);r[i] = function (e) {var i = new t(e);return r.addGeom(i), i;};}), r._init(), i;}r(e, t), e.initPlugins = function () {return { _plugins: [], _cacheId: 0, register: function register(t) {var e = this._plugins;[].concat(t).forEach(function (t) {-1 === e.indexOf(t) && e.push(t);}), this._cacheId++;}, unregister: function unregister(t) {var e = this._plugins;[].concat(t).forEach(function (t) {var i = e.indexOf(t);-1 !== i && e.splice(i, 1);}), this._cacheId++;}, clear: function clear() {this._plugins = [], this._cacheId++;}, count: function count() {return this._plugins.length;}, getAll: function getAll() {return this._plugins;}, notify: function notify(t, e, i) {var n,r,a,o,s,c = this.descriptors(t),l = c.length;for (n = 0; n < l; ++n) {if (r = c[n], a = r.plugin, "function" == typeof (s = a[e]) && (o = [t].concat(i || []), !1 === s.apply(a, o))) return !1;}return !0;}, descriptors: function descriptors(t) {var e = t._plugins || (t._plugins = {});if (e.id === this._cacheId) return e.descriptors;var i = [],n = [];return this._plugins.concat(t && t.get("plugins") || []).forEach(function (t) {-1 === i.indexOf(t) && (i.push(t), n.push({ plugin: t }));}), e.descriptors = n, e.id = this._cacheId, n;} };};var i = e.prototype;return i.getDefaultCfg = function () {return { id: null, padding: d.padding, data: null, scales: {}, geoms: null, colDefs: null, pixelRatio: d.pixelRatio, filters: null, appendPadding: d.appendPadding };}, i._syncYScales = function () {var t = this.get("geoms"),e = [],i = [],n = [];u.each(t, function (t) {var r = t.getYScale();r.isLinear && (e.push(r), i.push(r.min), n.push(r.max));}), i = Math.min.apply(null, i), n = Math.max.apply(null, n), u.each(e, function (t) {t.change({ min: i }), t.change({ max: n });});}, i._getFieldsForLegend = function () {var t = [],e = this.get("geoms");return u.each(e, function (e) {var i = e.get("attrOptions").color;if (i && i.field && u.isString(i.field)) {var n = i.field.split("*");u.each(n, function (e) {-1 === t.indexOf(e) && t.push(e);});}}), t;}, i._createScale = function (t, e) {return this.get("scaleController").createScale(t, e);}, i._adjustScale = function () {var t = this,e = t.get("coord"),i = t.getXScale(),n = t.getYScales(),r = [];i && r.push(i), r = r.concat(n);var o = e.isPolar && a(e),s = t.get("scaleController").defs;u.each(r, function (t) {if ((t.isCategory || t.isIdentity) && t.values && (!s[t.field] || !s[t.field].range)) {var i,n = t.values.length;if (1 === n) i = [.5, 1];else {var r = 0;i = o ? e.transposed ? [(r = 1 / n * d.widthRatio.multiplePie) / 2, 1 - r / 2] : [0, 1 - 1 / n] : [r = 1 / n * 1 / 2, 1 - r];}t.range = i;}});for (var c = this.get("geoms"), l = 0; l < c.length; l++) {var h = c[l];if ("interval" === h.get("type")) {var f = h.getYScale(),p = f.field,g = f.min,v = f.max,y = f.type;s[p] && s[p].min || "time" === y || (g > 0 ? f.change({ min: 0 }) : v <= 0 && f.change({ max: 0 }));}}}, i._removeGeoms = function () {for (var t = this.get("geoms"); t.length > 0;) {t.shift().destroy();}}, i._clearGeoms = function () {for (var t = this.get("geoms"), e = 0, i = t.length; e < i; e++) {t[e].clear();}}, i._clearInner = function () {this.set("scales", {}), this.set("legendItems", null), this._clearGeoms(), e.plugins.notify(this, "clearInner"), this.get("axisController") && this.get("axisController").clear();}, i._execFilter = function (t) {var e = this.get("filters");return e && (t = t.filter(function (t) {var i = !0;return u.each(e, function (e, n) {if (e && !(i = e(t[n], t))) return !1;}), i;})), t;}, i._initGeoms = function (t) {for (var e = this.get("coord"), i = this.get("filteredData"), n = this.get("colDefs"), r = 0, a = t.length; r < a; r++) {var o = t[r];o.set("data", i), o.set("coord", e), o.set("colDefs", n), o.init();}}, i._initCoord = function () {var t = this.get("plotRange"),e = u.mix({ type: "cartesian" }, this.get("coordCfg"), { plot: t }),i = e.type,n = new (0, h[u.upperFirst(i)])(e);this.set("coord", n);}, i._initLayout = function () {var t = this.get("_padding");t || (t = this.get("margin") || this.get("padding"), t = u.parsePadding(t));var e = "auto" === t[0] ? 0 : t[0],i = "auto" === t[1] ? 0 : t[1],n = "auto" === t[2] ? 0 : t[2],r = "auto" === t[3] ? 0 : t[3],a = this.get("width"),o = this.get("height"),s = new l({ start: { x: r, y: e }, end: { x: a - i, y: o - n } });this.set("plotRange", s), this.set("plot", s);}, i._initCanvas = function () {var t = this;try {var i = new v({ el: t.get("el") || t.get("id"), context: t.get("context"), pixelRatio: t.get("pixelRatio"), width: t.get("width"), height: t.get("height"), fontFamily: d.fontFamily });t.set("canvas", i), t.set("width", i.get("width")), t.set("height", i.get("height"));} catch (t) {throw t;}e.plugins.notify(t, "afterCanvasInit"), t._initLayout();}, i._initLayers = function () {var t = this.get("canvas");this.set("backPlot", t.addGroup()), this.set("middlePlot", t.addGroup({ zIndex: 10 })), this.set("frontPlot", t.addGroup({ zIndex: 20 }));}, i._init = function () {var t = this;t._initCanvas(), t._initLayers(), t.set("geoms", []), t.set("scaleController", new p()), t.set("axisController", new g({ frontPlot: t.get("frontPlot").addGroup({ className: "axisContainer" }), backPlot: t.get("backPlot").addGroup({ className: "axisContainer" }), chart: t })), e.plugins.notify(t, "init");}, i.source = function (t, e) {return this.set("data", t), e && this.scale(e), this;}, i.scale = function (t, e) {var i = this.get("colDefs") || {};return u.isObject(t) ? u.mix(i, t) : i[t] = e, this.set("colDefs", i), this.get("scaleController").defs = i, this;}, i.axis = function (t, e) {var i = this.get("axisController");return t ? (i.axisCfg = i.axisCfg || {}, i.axisCfg[t] = e) : i.axisCfg = null, this;}, i.coord = function (t, e) {var i;return u.isObject(t) ? i = t : (i = e || {}).type = t || "cartesian", this.set("coordCfg", i), this;}, i.filter = function (t, e) {var i = this.get("filters") || {};i[t] = e, this.set("filters", i);}, i.render = function () {var t = this.get("canvas"),i = this.get("geoms"),n = this.get("data") || [],r = this._execFilter(n);this.set("filteredData", r), this._initCoord(), e.plugins.notify(this, "beforeGeomInit"), this._initGeoms(i), this.get("syncY") && this._syncYScales(), this._adjustScale(), e.plugins.notify(this, "beforeGeomDraw"), this._renderAxis();var a = this.get("middlePlot");if (this.get("limitInPlot") && !a.attr("clip")) {var o = this.get("coord"),s = y.getClip(o);s.set("canvas", a.get("canvas")), a.attr("clip", s);}for (var c = 0, l = i.length; c < l; c++) {i[c].paint();}return e.plugins.notify(this, "afterGeomDraw"), t.sort(), this.get("frontPlot").sort(), e.plugins.notify(this, "beforeCanvasDraw"), t.draw(), this;}, i.clear = function () {return e.plugins.notify(this, "clear"), this._removeGeoms(), this._clearInner(), this.set("filters", null), this.set("isUpdate", !1), this.set("_padding", null), this.get("canvas").draw(), this;}, i.repaint = function () {this.set("isUpdate", !0), e.plugins.notify(this, "repaint"), this._clearInner(), this.render();}, i.changeData = function (t) {this.set("data", t), e.plugins.notify(this, "changeData"), this.set("_padding", null), this.repaint();}, i.changeSize = function (t, e) {return t ? this.set("width", t) : t = this.get("width"), e ? this.set("height", e) : e = this.get("height"), this.get("canvas").changeSize(t, e), this._initLayout(), this.repaint(), this;}, i.destroy = function () {this.clear(), this.get("canvas").destroy(), e.plugins.notify(this, "afterCanvasDestroyed"), this._interactions && u.each(this._interactions, function (t) {t.destroy();}), t.prototype.destroy.call(this);}, i.getPosition = function (t) {var e = this,i = e.get("coord"),n = e.getXScale(),r = e.getYScales()[0],a = n.field,o = n.scale(t[a]),s = r.field,c = r.scale(t[s]);return i.convertPoint({ x: o, y: c });}, i.getRecord = function (t) {var e = this,i = e.get("coord"),n = e.getXScale(),r = e.getYScales()[0],a = i.invertPoint(t),o = {};return o[n.field] = n.invert(a.x), o[r.field] = r.invert(a.y), o;}, i.getSnapRecords = function (t) {var e = this.get("geoms")[0],i = [];return e && (i = e.getSnapRecords(t)), i;}, i.createScale = function (t) {var e = this.get("data"),i = this.get("filteredData");i.length && -1 === this._getFieldsForLegend().indexOf(t) && (e = i);var n = this.get("scales");return n[t] || (n[t] = this._createScale(t, e)), n[t];}, i.addGeom = function (t) {var e = this.get("geoms"),i = this.get("middlePlot");e.push(t), t.set("chart", this), t.set("container", i.addGroup());}, i.getXScale = function () {return this.get("geoms")[0].getXScale();}, i.getYScales = function () {var t = this.get("geoms"),e = [];return u.each(t, function (t) {var i = t.getYScale();-1 === e.indexOf(i) && e.push(i);}), e;}, i.getLegendItems = function () {if (this.get("legendItems")) return this.get("legendItems");var t = {},e = [],i = this.get("geoms");return u.each(i, function (i) {var n = i.getAttr("color");if (n) {var r = n.getScale("color");if ("identity" !== r.type && !s(e, r)) {e.push(r);var a = r.field,o = r.getTicks(),c = [];u.each(o, function (t) {var e = t.text,i = t.value,a = r.invert(i),o = { fill: n.mapping(a).join("") || d.defaultColor, radius: 3, symbol: "circle", stroke: "#fff" };c.push({ name: e, dataValue: a, checked: !0, marker: o });}), t[a] = c;}}}), this.set("legendItems", t), t;}, i.registerPlugins = function (t) {var i = this,n = i.get("plugins") || [];u.isArray(n) || (n = [n]), [].concat(t).forEach(function (t) {-1 === n.indexOf(t) && (t.init && t.init(i), n.push(t));}), e.plugins._cacheId++, i.set("plugins", n);}, i._renderAxis = function () {var t = this.get("axisController"),i = this.getXScale(),n = this.getYScales(),r = this.get("coord");e.plugins.notify(this, "beforeRenderAxis"), t.createAxis(r, i, n);}, i._isAutoPadding = function () {if (this.get("_padding")) return !1;var t = this.get("padding");return u.isArray(t) ? -1 !== t.indexOf("auto") : "auto" === t;}, i._updateLayout = function (t) {var e = this.get("width"),i = this.get("height"),n = { x: t[3], y: t[0] },r = { x: e - t[1], y: i - t[2] },a = this.get("plot"),o = this.get("coord");a.reset(n, r), o.reset(a);}, e;}(c);m.plugins = m.initPlugins(), t.exports = m;}, function (t, e) {var i = {}.toString;t.exports = function (t, e) {return i.call(t) === "[object " + e + "]";};}, function (t, e, i) {var n = i(16);t.exports = function (t) {return n(t, "Number");};}, function (t, e, i) {var n = i(16);t.exports = function (t) {return n(t, "String");};}, function (t, e, i) {var n = i(0),r = { splitPoints: function splitPoints(t) {var e = [],i = t.x,r = t.y;return (r = n.isArray(r) ? r : [r]).forEach(function (t, r) {var a = { x: n.isArray(i) ? i[r] : i, y: t };e.push(a);}), e;}, splitArray: function splitArray(t, e, i) {if (!t.length) return [];var r,a = [],o = [];return n.each(t, function (t) {r = t._origin ? t._origin[e] : t[e], i ? n.isNil(r) || o.push(t) : n.isArray(r) && n.isNil(r[0]) || n.isNil(r) ? o.length && (a.push(o), o = []) : o.push(t);}), o.length && a.push(o), a;} };t.exports = r;}, function (t, e, i) {var n = i(7),r = Array.isArray ? Array.isArray : function (t) {return n(t, "Array");};t.exports = r;}, function (t, e, i) {var n = i(0),r = function () {function t(t) {this._initDefaultCfg(), n.mix(this, t);var e, i;this.plot ? (e = this.plot.bl, i = this.plot.tr, this.start = e, this.end = i) : (e = this.start, i = this.end), this.init(e, i);}var e = t.prototype;return e._initDefaultCfg = function () {}, e.init = function () {}, e.convertPoint = function (t) {return t;}, e.invertPoint = function (t) {return t;}, e.reset = function (t) {this.plot = t;var e = t.bl,i = t.tr;this.start = e, this.end = i, this.init(e, i);}, t;}();t.exports = r;}, function (t, e) {function i(t, e) {for (var i in e) {e.hasOwnProperty(i) && "constructor" !== i && void 0 !== e[i] && (t[i] = e[i]);}}t.exports = function (t, e, n, r) {return e && i(t, e), n && i(t, n), r && i(t, r), t;};}, function (t, e, i) {var n = i(22),r = function () {function t(t) {this._initDefaultCfg(), n(this, t);}var e = t.prototype;return e._initDefaultCfg = function () {this.adjustNames = ["x", "y"];}, e.processAdjust = function () {}, t;}();t.exports = r;}, function (t, e) {var i = { multiply: function multiply(t, e) {return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];}, scale: function scale(t, e, i) {return t[0] = e[0] * i[0], t[1] = e[1] * i[0], t[2] = e[2] * i[1], t[3] = e[3] * i[1], t[4] = e[4], t[5] = e[5], t;}, rotate: function rotate(t, e, i) {var n = Math.cos(i),r = Math.sin(i),a = e[0] * n + e[2] * r,o = e[1] * n + e[3] * r,s = e[0] * -r + e[2] * n,c = e[1] * -r + e[3] * n;return t[0] = a, t[1] = o, t[2] = s, t[3] = c, t[4] = e[4], t[5] = e[5], t;}, translate: function translate(t, e, i) {return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + e[0] * i[0] + e[2] * i[1], t[5] = e[5] + e[1] * i[0] + e[3] * i[1], t;}, transform: function transform(t, e) {for (var n = [].concat(t), r = 0, a = e.length; r < a; r++) {var o = e[r];switch (o[0]) {case "t":i.translate(n, n, [o[1], o[2]]);break;case "s":i.scale(n, n, [o[1], o[2]]);break;case "r":i.rotate(n, n, o[1]);}}return n;} };t.exports = i;}, function (t, e) {var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {return typeof t;} : function (t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;};t.exports = function (t) {var e = void 0 === t ? "undefined" : i(t);return null !== t && "object" === e || "function" === e;};}, function (t, e, i) {var n = i(0),r = i(1),a = i(3),o = function () {function t(t) {this._initDefaultCfg(), n.mix(this, t), this.draw();}var e = t.prototype;return e._initDefaultCfg = function () {this.ticks = [], this.tickLine = {}, this.offsetFactor = 1, this.frontContainer = null, this.backContainer = null, this.gridPoints = [];}, e.draw = function () {var t = this.line,e = this.tickLine,i = this.label,n = this.grid;n && this.drawGrid(n), e && this.drawTicks(e), t && this.drawLine(t), i && this.drawLabels();}, e.drawTicks = function (t) {var e = this,i = e.ticks,r = t.length,a = e.getContainer(t.top);n.each(i, function (i) {var o = e.getOffsetPoint(i.value),s = e.getSidePoint(o, r);a.addShape("line", { className: "axis-tick", attrs: n.mix({ x1: o.x, y1: o.y, x2: s.x, y2: s.y }, t) })._id = e._id + "-ticks";});}, e.drawLabels = function () {var t = this,e = t.labelOffset,i = t.labels;n.each(i, function (i) {var r = t.getContainer(i.get("top")),a = t.getOffsetPoint(i.get("value")),o = t.getSidePoint(a, e),s = o.x,c = o.y;i.attr(n.mix({ x: s, y: c }, t.getTextAlignInfo(a, e), i.get("textStyle"))), i._id = t._id + "-" + i.attr("text"), r.add(i);});}, e.drawLine = function () {}, e.drawGrid = function (t) {var e = this,i = e.gridPoints,o = e.ticks,s = t,c = i.length;n.each(i, function (i, l) {if (n.isFunction(t)) {var u = o[l] || {},h = t(u.text, l, c);s = h ? n.mix({}, r._defaultAxis.grid, h) : null;}if (s) {var f,p = s.type,g = i.points,d = e.getContainer(s.top);if ("arc" === p) {var v = e.center,y = e.startAngle,m = e.endAngle,x = a.length([g[0].x - v.x, g[0].y - v.y]);f = d.addShape("Arc", { className: "axis-grid", attrs: n.mix({ x: v.x, y: v.y, startAngle: y, endAngle: m, r: x }, s) });} else f = d.addShape("Polyline", { className: "axis-grid", attrs: n.mix({ points: g }, s) });f._id = i._id;}});}, e.getOffsetPoint = function () {}, e.getAxisVector = function () {}, e.getOffsetVector = function (t, e) {var i = this,n = i.getAxisVector(t),r = a.normalize([], n),o = i.offsetFactor,s = [-1 * r[1] * o, r[0] * o];return a.scale([], s, e);}, e.getSidePoint = function (t, e) {var i = this.getOffsetVector(t, e);return { x: t.x + i[0], y: t.y + i[1] };}, e.getTextAlignInfo = function (t, e) {var i,n,r = this.getOffsetVector(t, e);return i = r[0] > 0 ? "left" : r[0] < 0 ? "right" : "center", n = r[1] > 0 ? "top" : r[1] < 0 ? "bottom" : "middle", { textAlign: i, textBaseline: n };}, e.getContainer = function (t) {var e = this.frontContainer,i = this.backContainer;return t ? e : i;}, t;}();t.exports = o;}, function (t, e, i) {function n(t) {return 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5];}var r = i(0),a = i(24),o = i(3),s = i(77),c = { stroke: "strokeStyle", fill: "fillStyle", opacity: "globalAlpha" },l = ["fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash", "shadow"],u = ["circle", "sector", "polygon", "rect", "polyline"],h = function () {function t(t) {this._initProperties(), r.mix(this._attrs, t);var e = this._attrs.attrs;e && this.initAttrs(e), this.initTransform();}var e = t.prototype;return e._initProperties = function () {this._attrs = { zIndex: 0, visible: !0, destroyed: !1 };}, e.get = function (t) {return this._attrs[t];}, e.set = function (t, e) {this._attrs[t] = e;}, e.isGroup = function () {return this.get("isGroup");}, e.isShape = function () {return this.get("isShape");}, e.initAttrs = function (t) {this.attr(r.mix(this.getDefaultAttrs(), t));}, e.getDefaultAttrs = function () {return {};}, e._setAttr = function (t, e) {var i = this._attrs.attrs;if ("clip" === t) e = this._setAttrClip(e);else {var n = c[t];n && (i[n] = e);}i[t] = e;}, e._getAttr = function (t) {return this._attrs.attrs[t];}, e._setAttrClip = function (t) {return t && u.indexOf(t._attrs.type) > -1 ? (null === t.get("canvas") && (t = Object.assign({}, t)), t.set("parent", this.get("parent")), t.set("context", this.get("context")), t) : null;}, e.attr = function (t, e) {var i = this;if (i.get("destroyed")) return null;var n = arguments.length;if (0 === n) return i._attrs.attrs;if (r.isObject(t)) {this._attrs.bbox = null;for (var a in t) {i._setAttr(a, t[a]);}return i._afterAttrsSet && i._afterAttrsSet(), i;}return 2 === n ? (this._attrs.bbox = null, i._setAttr(t, e), i._afterAttrsSet && i._afterAttrsSet(), i) : i._getAttr(t);}, e.getParent = function () {return this.get("parent");}, e.draw = function (t) {this.get("destroyed") || this.get("visible") && (this.setContext(t), this.drawInner(t), this.restoreContext(t));}, e.setContext = function (t) {var e = this._attrs.attrs.clip;t.save(), e && (e.resetTransform(t), e.createPath(t), t.clip()), this.resetContext(t), this.resetTransform(t);}, e.restoreContext = function (t) {t.restore();}, e.resetContext = function (t) {var e = this._attrs.attrs;if (!this._attrs.isGroup) for (var i in e) {if (l.indexOf(i) > -1) {var n = e[i];"fillStyle" !== i && "strokeStyle" !== i || (n = s.parseStyle(n, this, t)), "lineDash" === i && t.setLineDash && r.isArray(n) ? t.setLineDash(n) : t[i] = n;}}}, e.hasFill = function () {return this.get("canFill") && this._attrs.attrs.fillStyle;}, e.hasStroke = function () {return this.get("canStroke") && this._attrs.attrs.strokeStyle;}, e.drawInner = function () {}, e.show = function () {return this.set("visible", !0), this;}, e.hide = function () {return this.set("visible", !1), this;}, e.isVisible = function () {return this.get("visible");}, e._removeFromParent = function () {var t = this.get("parent");if (t) {var e = t.get("children");r.Array.remove(e, this);}return this;}, e.remove = function (t) {t ? this.destroy() : this._removeFromParent();}, e.destroy = function () {if (this.get("destroyed")) return null;this._removeFromParent(), this._attrs = {}, this.set("destroyed", !0);}, e.getBBox = function () {return { minX: 0, maxX: 0, minY: 0, maxY: 0, width: 0, height: 0 };}, e.initTransform = function () {var t = this._attrs.attrs || {};t.matrix || (t.matrix = [1, 0, 0, 1, 0, 0]), this._attrs.attrs = t;}, e.getMatrix = function () {return this._attrs.attrs.matrix;}, e.setMatrix = function (t) {this._attrs.attrs.matrix = [t[0], t[1], t[2], t[3], t[4], t[5]];}, e.transform = function (t) {var e = this._attrs.attrs.matrix;return this._attrs.attrs.matrix = a.transform(e, t), this;}, e.setTransform = function (t) {return this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0], this.transform(t);}, e.translate = function (t, e) {var i = this._attrs.attrs.matrix;a.translate(i, i, [t, e]);}, e.rotate = function (t) {var e = this._attrs.attrs.matrix;a.rotate(e, e, t);}, e.scale = function (t, e) {var i = this._attrs.attrs.matrix;a.scale(i, i, [t, e]);}, e.moveTo = function (t, e) {var i = this._attrs.x || 0,n = this._attrs.y || 0;this.translate(t - i, e - n), this.set("x", t), this.set("y", e);}, e.apply = function (t) {var e = this._attrs.attrs.matrix;return o.transformMat2d(t, t, e), this;}, e.resetTransform = function (t) {var e = this._attrs.attrs.matrix;n(e) || t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);}, e.isDestroyed = function () {return this.get("destroyed");}, t;}();t.exports = h;}, function (t, e, i) {var n = i(5).Shape;t.exports = { getClip: function getClip(t) {var e,i = t.start,r = t.end,a = r.x - i.x,o = Math.abs(r.y - i.y);if (t.isPolar) {var s = t.circleRadius,c = t.center,l = t.startAngle,u = t.endAngle;e = new n.Sector({ attrs: { x: c.x, y: c.y, r: s, r0: 0, startAngle: l, endAngle: u } });} else e = new n.Rect({ attrs: { x: i.x, y: r.y - 10, width: a, height: o + 20 } });return e.isClip = !0, e;}, isPointInPlot: function isPointInPlot(t, e) {var i = t.x,n = t.y,r = e.tl,a = e.tr,o = e.br;return i >= r.x && i <= a.x && n >= r.y && n <= o.y;} };}, function (t, e, i) {var n = i(30);t.exports = function (t) {return n(t) ? "" : t.toString();};}, function (t, e) {t.exports = function (t) {return null === t || void 0 === t;};}, function (t, e) {var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {return typeof t;} : function (t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;};t.exports = function (t) {var e = void 0 === t ? "undefined" : i(t);return null !== t && "object" === e || "function" === e;};}, function (t, e, i) {var n = i(54),r = i(7);t.exports = function (t) {if (!n(t) || !r(t, "Object")) return !1;if (null === Object.getPrototypeOf(t)) return !0;for (var e = t; null !== Object.getPrototypeOf(e);) {e = Object.getPrototypeOf(e);}return Object.getPrototypeOf(t) === e;};}, function (t, e, i) {var n = i(0),r = function () {function t(t) {var e = {},i = this.getDefaultCfg();this._attrs = e, n.mix(e, i, t);}var e = t.prototype;return e.getDefaultCfg = function () {return {};}, e.get = function (t) {return this._attrs[t];}, e.set = function (t, e) {this._attrs[t] = e;}, e.destroy = function () {this._attrs = {}, this.destroyed = !0;}, t;}();t.exports = r;}, function (t, e, i) {function n(t) {return function (e, i) {var n = t(e, i);return 0 === n ? e[s] - i[s] : n;};}var r = i(0),a = i(2),o = {},s = "_INDEX";t.exports = { getGroupClass: function getGroupClass() {}, getChildren: function getChildren() {return this.get("children");}, addShape: function addShape(t, e) {void 0 === e && (e = {});var i = this.get("canvas"),n = o[t];n || (n = r.upperFirst(t), o[t] = n), e.canvas = i, "Text" === n && i && i.get("fontFamily") && (e.attrs.fontFamily = e.attrs.fontFamily || i.get("fontFamily"));var s = new a[n](e);return this.add(s), s;}, addGroup: function addGroup(t) {var e = this.get("canvas"),i = this.getGroupClass();(t = r.mix({}, t)).canvas = e, t.parent = this;var n = new i(t);return this.add(n), n;}, contain: function contain(t) {return this.get("children").indexOf(t) > -1;}, sort: function sort() {for (var t = this.get("children"), e = 0, i = t.length; e < i; e++) {t[e][s] = e;}return t.sort(n(function (t, e) {return t.get("zIndex") - e.get("zIndex");})), this;}, clear: function clear() {for (var t = this.get("children"); 0 !== t.length;) {t[t.length - 1].remove(!0);}return this;}, add: function add(t) {var e = this,i = e.get("children");r.isArray(t) || (t = [t]);for (var n = 0, a = t.length; n < a; n++) {var o = t[n],s = o.get("parent");if (s) {var c = s.get("children");r.Array.remove(c, o);}e._setEvn(o), i.push(o);}return e;}, _setEvn: function _setEvn(t) {var e = this;t._attrs.parent = e, t._attrs.context = e._attrs.context, t._attrs.canvas = e._attrs.canvas;var i = t._attrs.attrs.clip;if (i && (i.set("parent", e), i.set("context", e.get("context"))), t._attrs.isGroup) for (var n = t._attrs.children, r = 0, a = n.length; r < a; r++) {t._setEvn(n[r]);}} };}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(27),o = i(34),s = i(3),c = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initProperties = function () {this._attrs = { zIndex: 0, visible: !0, destroyed: !1, isGroup: !0, children: [] };}, i.drawInner = function (t) {for (var e = this.get("children"), i = 0, n = e.length; i < n; i++) {e[i].draw(t);}return this;}, i.getBBox = function () {for (var t = 1 / 0, e = -1 / 0, i = 1 / 0, n = -1 / 0, r = this.get("children"), a = 0, o = r.length; a < o; a++) {var c = r[a];if (c.get("visible")) {var l = c.getBBox();if (!l) continue;var u = [l.minX, l.minY],h = [l.minX, l.maxY],f = [l.maxX, l.minY],p = [l.maxX, l.maxY],g = c.attr("matrix");s.transformMat2d(u, u, g), s.transformMat2d(h, h, g), s.transformMat2d(f, f, g), s.transformMat2d(p, p, g), t = Math.min(u[0], h[0], f[0], p[0], t), e = Math.max(u[0], h[0], f[0], p[0], e), i = Math.min(u[1], h[1], f[1], p[1], i), n = Math.max(u[1], h[1], f[1], p[1], n);}}return { minX: t, minY: i, maxX: e, maxY: n, x: t, y: i, width: e - t, height: n - i };}, i.destroy = function () {this.get("destroyed") || (this.clear(), t.prototype.destroy.call(this));}, e;}(a);r.mix(c.prototype, o, { getGroupClass: function getGroupClass() {return c;} }), t.exports = c;}, function (t, e, i) {function n(t) {var e = { strokeStyle: t.color };return t.size >= 0 && (e.lineWidth = t.size), a.mix(e, t.style), a.mix({}, c.shape.line, e);}function r(t, e, i, n) {var r = t.points;if (r.length && a.isArray(r[0].y)) {for (var o = [], c = [], l = 0, u = r.length; l < u; l++) {var h = r[l],f = s.splitPoints(h);c.push(f[0]), o.push(f[1]);}return t.isInCircle && (o.push(o[0]), c.push(c[0])), t.isStack ? e.addShape("Polyline", { className: "line", attrs: a.mix({ points: o, smooth: n }, i) }) : [e.addShape("Polyline", { className: "line", attrs: a.mix({ points: o, smooth: n }, i) }), e.addShape("Polyline", { className: "line", attrs: a.mix({ points: c, smooth: n }, i) })];}return t.isInCircle && r.push(r[0]), e.addShape("Polyline", { className: "line", attrs: a.mix({ points: r, smooth: n }, i) });}var a = i(0),o = i(8),s = i(19),c = i(1),l = o.registerFactory("line", { defaultShapeType: "line" }),u = ["line", "smooth", "dash"];a.each(u, function (t) {o.registerShape("line", t, { draw: function draw(e, i) {var a = "smooth" === t,o = n(e);return "dash" === t && (o.lineDash = c.lineDash), r(e, i, o, a);} });}), t.exports = l;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(12),a = i(38),o = i(4),s = i(17),c = i(18),l = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {t.prototype._initDefaultCfg.call(this), this.type = "cat", this.isCategory = !0, this.isRounding = !0;}, i.init = function () {var t = this,e = t.values,i = t.tickCount;if (o(e, function (t, i) {e[i] = t.toString();}), !t.ticks) {var n = e;i && (n = a({ maxCount: i, data: e, isRounding: t.isRounding }).ticks), this.ticks = n;}}, i.getText = function (e) {return -1 === this.values.indexOf(e) && s(e) && (e = this.values[Math.round(e)]), t.prototype.getText.call(this, e);}, i.translate = function (t) {var e = this.values.indexOf(t);return -1 === e && s(t) ? e = t : -1 === e && (e = NaN), e;}, i.scale = function (t) {var e,i = this.rangeMin(),n = this.rangeMax();return (c(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)), e = this.values.length > 1 ? t / (this.values.length - 1) : t, i + e * (n - i);}, i.invert = function (t) {if (c(t)) return t;var e = this.rangeMin(),i = this.rangeMax();t < e && (t = e), t > i && (t = i);var n = (t - e) / (i - e),r = Math.round(n * (this.values.length - 1)) % this.values.length;return r = r || 0, this.values[r];}, e;}(r);r.Cat = l, t.exports = l;}, function (t, e, i) {function n(t) {var e = [];return a(t, function (t) {e = e.concat(t);}), e;}function r(t, e) {var i;for (i = e; i > 0 && t % i != 0; i--) {;}if (1 === i) for (i = e; i > 0 && (t - 1) % i != 0; i--) {;}return i;}var a = i(4);t.exports = function (t) {var e,i = {},a = [],o = t.isRounding,s = n(t.data),c = s.length,l = t.maxCount || 8;if (o ? 2 === (e = r(c - 1, l - 1) + 1) ? e = l : e < l - 4 && (e = l - 4) : e = l, !o && c <= e + e / 2) a = [].concat(s);else {for (var u = parseInt(c / (e - 1), 10), h = s.map(function (t, e) {return e % u == 0 ? s.slice(e, e + u) : null;}).filter(function (t) {return t;}), f = 1, p = h.length; f < p && (o ? f * u < c - u : f < e - 1); f++) {a.push(h[f][0]);}if (s.length) {a.unshift(s[0]);var g = s[c - 1];-1 === a.indexOf(g) && a.push(g);}}return i.categories = s, i.ticks = a, i;};}, function (t, e) {t.exports = { requestAnimationFrame: "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame : function (t) {return setTimeout(t, 16);} };}, function (t, e, i) {function n(t) {return [t.x, t.y];}function r(t, e, i, r) {var o,s,c,l,u,h,f,p,g = [],d = !!r;if (d) {for (c = [1 / 0, 1 / 0], l = [-1 / 0, -1 / 0], p = 0, f = t.length; p < f; p++) {u = n(t[p]), a.min(c, c, u), a.max(l, l, u);}a.min(c, c, r[0]), a.max(l, l, r[1]);}for (p = 0, h = t.length; p < h; p++) {if (u = n(t[p]), i) o = n(t[p ? p - 1 : h - 1]), s = n(t[(p + 1) % h]);else {if (0 === p || p === h - 1) {g.push([u[0], u[1]]);continue;}o = n(t[p - 1]), s = n(t[p + 1]);}var v = a.sub([], s, o);a.scale(v, v, e);var y = a.distance(u, o),m = a.distance(u, s),x = y + m;0 !== x && (y /= x, m /= x);var _ = a.scale([], v, -y),S = a.scale([], v, m),b = a.add([], u, _),C = a.add([], u, S);d && (a.max(b, b, c), a.min(b, b, l), a.max(C, C, c), a.min(C, C, l)), g.push([b[0], b[1]]), g.push([C[0], C[1]]);}return i && g.push(g.shift()), g;}var a = i(3);t.exports = { smooth: function smooth(t, e, i) {for (var n, a, o, s = !!e, c = r(t, .4, s, i), l = t.length, u = [], h = 0; h < l - 1; h++) {n = c[2 * h], a = c[2 * h + 1], o = t[h + 1], u.push(["C", n[0], n[1], a[0], a[1], o.x, o.y]);}return s && (n = c[l], a = c[l + 1], o = t[0], u.push(["C", n[0], n[1], a[0], a[1], o.x, o.y])), u;} };}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(6),a = i(19),o = i(0);i(36);var s = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i.getDefaultCfg = function () {var e = t.prototype.getDefaultCfg.call(this);return e.type = "path", e.shapeType = "line", e;}, i.getDrawCfg = function (e) {var i = t.prototype.getDrawCfg.call(this, e);return i.isStack = this.hasAdjust("stack"), i;}, i.draw = function (t, e) {var i = this,n = i.get("container"),r = i.getYScale(),s = i.get("connectNulls"),c = a.splitArray(t, r.field, s),l = this.getDrawCfg(t[0]);l.origin = t, o.each(c, function (r, a) {l.splitedIndex = a, l.points = r, i.drawShape(l.shape, t[0], l, n, e);});}, e;}(r);r.Path = s, t.exports = s;}, function (t, e, i) {var n = i(1),r = i(0),a = { getDefalutSize: function getDefalutSize() {var t = this.get("defaultSize");if (!t) {var e = this.get("coord"),i = this.getXScale(),r = this.get("dataArray"),a = i.values.length,o = i.range,s = 1 / a,c = 1;e && e.isPolar ? c = e.transposed && a > 1 ? n.widthRatio.multiplePie : n.widthRatio.rose : (i.isLinear && (s *= o[1] - o[0]), c = n.widthRatio.column), s *= c, this.hasAdjust("dodge") && (s /= r.length), t = s, this.set("defaultSize", t);}return t;}, getDimWidth: function getDimWidth(t) {var e = this.get("coord"),i = e.convertPoint({ x: 0, y: 0 }),n = e.convertPoint({ x: "x" === t ? 1 : 0, y: "x" === t ? 0 : 1 }),r = 0;return i && n && (r = Math.sqrt(Math.pow(n.x - i.x, 2) + Math.pow(n.y - i.y, 2))), r;}, _getWidth: function _getWidth() {var t = this.get("_width");if (!t) {var e = this.get("coord");t = e && e.isPolar && !e.transposed ? (e.endAngle - e.startAngle) * e.circleRadius : this.getDimWidth("x"), this.set("_width", t);}return t;}, _toNormalizedSize: function _toNormalizedSize(t) {return t / this._getWidth();}, _toCoordSize: function _toCoordSize(t) {return this._getWidth() * t;}, getNormalizedSize: function getNormalizedSize(t) {var e = this.getAttrValue("size", t);return e = r.isNil(e) ? this.getDefalutSize() : this._toNormalizedSize(e);}, getSize: function getSize(t) {var e = this.getAttrValue("size", t);if (r.isNil(e)) {var i = this.getDefalutSize();e = this._toCoordSize(i);}return e;} };t.exports = a;}, function (t, e, i) {var n,r = i(0),a = i(15);r.isWx || r.isMy || (n = i(146));var o = ["touchstart", "touchmove", "touchend"],s = function () {function t(t, e) {var i = this.getDefaultCfg();r.deepMix(this, i, t), this.chart = e, this.canvas = e.get("canvas"), this.el = e.get("canvas").get("el"), this._bindEvents();}var e = t.prototype;return e.getDefaultCfg = function () {return { startEvent: o[0], processEvent: o[1], endEvent: o[2], resetEvent: null };}, e._start = function (t) {this.preStart && this.preStart(t), this.start(t), this.onStart && this.onStart(t);}, e._process = function (t) {this.preProcess && this.preProcess(t), this.process(t), this.onProcess && this.onProcess(t);}, e._end = function (t) {this.preEnd && this.preEnd(t), this.end(t), this.onEnd && this.onEnd(t);}, e._reset = function (t) {this.preReset && this.preReset(t), this.reset(t), this.onReset && this.onReset(t);}, e.start = function () {}, e.process = function () {}, e.end = function () {}, e.reset = function () {}, e._bindEvents = function () {this._clearEvents();var t = this.startEvent,e = this.processEvent,i = this.endEvent,r = this.resetEvent,a = this.el;n && (this.hammer = new n(a)), this._bindEvent(t, "_start"), this._bindEvent(e, "_process"), this._bindEvent(i, "_end"), this._bindEvent(r, "_reset");}, e._clearEvents = function () {var t = this.startEvent,e = this.processEvent,i = this.endEvent,n = this.resetEvent;this.hammer && (this.hammer.destroy(), this.hammer = null), this._clearTouchEvent(t, "_start"), this._clearTouchEvent(e, "_process"), this._clearTouchEvent(i, "_end"), this._clearTouchEvent(n, "_reset");}, e._bindEvent = function (t, e) {var i = this.el;t && (-1 !== o.indexOf(t) ? r.addEventListener(i, t, r.wrapBehavior(this, e)) : this.hammer && this.hammer.on(t, r.wrapBehavior(this, e)));}, e._clearTouchEvent = function (t, e) {var i = this.el;t && -1 !== o.indexOf(t) && r.removeEventListener(i, t, r.getWrapBehavior(this, e));}, e.destroy = function () {this._clearEvents();}, t;}();a._Interactions = {}, a.registerInteraction = function (t, e) {a._Interactions[t] = e;}, a.getInteraction = function (t) {return a._Interactions[t];}, a.prototype.interaction = function (t, e) {var i = this._interactions || {};i[t] && i[t].destroy();var n = new (a.getInteraction(t))(e, this);return i[t] = n, this._interactions = i, this;}, a.prototype.clearInteraction = function (t) {var e = this._interactions;if (e) return t ? (e[t] && e[t].destroy(), delete e[t]) : r.each(e, function (t, i) {t.destroy(), delete e[i];}), this;}, t.exports = s;}, function (t, e, i) {var n = {},r = i(1);n.Global = r, n.version = r.version, n.Chart = i(15), n.Shape = i(8), n.G = i(5), n.Util = i(0), n.track = function () {return null;}, t.exports = n;}, function (t, e, i) {var n = i(0),r = { label: { fill: "#808080", fontSize: 10 }, line: { stroke: "#E8E8E8", lineWidth: 1 }, grid: { type: "line", stroke: "#E8E8E8", lineWidth: 1, lineDash: [2] }, tickLine: null, labelOffset: 7.5 },a = { fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif', defaultColor: "#1890FF", pixelRatio: 1, padding: "auto", appendPadding: 15, colors: ["#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864"], shapes: { line: ["line", "dash"], point: ["circle", "hollowCircle"] }, sizes: [4, 10], axis: { common: r, bottom: n.mix({}, r, { grid: null }), left: n.mix({}, r, { line: null }), right: n.mix({}, r, { line: null }), circle: n.mix({}, r, { line: null }), radius: n.mix({}, r, { labelOffset: 4 }) }, shape: { line: { lineWidth: 2, lineJoin: "round", lineCap: "round" }, point: { lineWidth: 0, size: 3 }, area: { fillOpacity: .1 } }, _defaultAxis: r };t.exports = a;}, function (t, e) {function i(t, e, i, n, r) {return { type: t, chart: e, native: r || null, x: void 0 !== i ? i : null, y: void 0 !== n ? n : null };}function n(t, e) {var n = t.type,a = {},o = t.targetTouches;o && o.length > 0 ? (a.x = o[0].clientX, a.y = o[0].clientY) : (a.x = t.clientX, a.y = t.clientY);var s = e.get("canvas"),c = r.getRelativePosition(a, s);return i(n, e, c.x, c.y, t);}var r,a = !!function () {var t = !1;try {var e = Object.defineProperty({}, "passive", { get: function get() {t = !0;} });window.addEventListener("e", null, e);} catch (t) {}return t;}() && { passive: !0 };r = { isWx: "object" == typeof wx && "function" == typeof wx.getSystemInfoSync, isMy: "object" == typeof my && "function" == typeof my.getSystemInfoSync, isNode: void 0 !== t && void 0 !== t.exports, isBrowser: "undefined" != typeof window && void 0 !== window.document && void 0 !== window.sessionStorage, getPixelRatio: function getPixelRatio() {return window && window.devicePixelRatio || 1;}, getStyle: function getStyle(t, e) {return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);}, getWidth: function getWidth(t) {var e = this.getStyle(t, "width");return "auto" === e && (e = t.offsetWidth), parseFloat(e);}, getHeight: function getHeight(t) {var e = this.getStyle(t, "height");return "auto" === e && (e = t.offsetHeight), parseFloat(e);}, getDomById: function getDomById(t) {return t ? document.getElementById(t) : null;}, getRelativePosition: function getRelativePosition(t, e) {var i = e.get("el"),n = i.getBoundingClientRect(),r = n.top,a = n.right,o = n.bottom,s = n.left,c = parseFloat(this.getStyle(i, "padding-left")),l = parseFloat(this.getStyle(i, "padding-top")),u = a - s - c - parseFloat(this.getStyle(i, "padding-right")),h = o - r - l - parseFloat(this.getStyle(i, "padding-bottom")),f = e.get("pixelRatio");return { x: (t.x - s - c) / u * i.width / f, y: (t.y - r - l) / h * i.height / f };}, addEventListener: function addEventListener(t, e, i) {r.isBrowser && t.addEventListener(e, i, a);}, removeEventListener: function removeEventListener(t, e, i) {r.isBrowser && t.removeEventListener(e, i, a);}, createEvent: function createEvent(t, e) {return n(t, e);}, measureText: function measureText(t, e, i) {return i || (i = document.createElement("canvas").getContext("2d")), i.font = e || "12px sans-serif", i.measureText(t);} }, t.exports = r;}, function (t, e, i) {var n = i(29);t.exports = function (t) {var e = n(t);return e.charAt(0).toUpperCase() + e.substring(1);};}, function (t, e, i) {var n = i(29);t.exports = function (t) {var e = n(t);return e.charAt(0).toLowerCase() + e.substring(1);};}, function (t, e, i) {var n = i(7);t.exports = function (t) {return n(t, "String");};}, function (t, e, i) {var n = i(7);t.exports = function (t) {return n(t, "Number");};}, function (t, e, i) {var n = i(7);t.exports = function (t) {return n(t, "Boolean");};}, function (t, e, i) {var n = i(7);t.exports = function (t) {return n(t, "Function");};}, function (t, e, i) {var n = i(7);t.exports = function (t) {return n(t, "Date");};}, function (t, e) {var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {return typeof t;} : function (t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;};t.exports = function (t) {return "object" === (void 0 === t ? "undefined" : i(t)) && null !== t;};}, function (t, e, i) {function n(t, e, i, s) {i = i || 0, s = s || o;for (var c in e) {if (e.hasOwnProperty(c)) {var l = e[c];null !== l && r(l) ? (r(t[c]) || (t[c] = {}), i < s ? n(t[c], l, i + 1, s) : t[c] = e[c]) : a(l) ? (t[c] = [], t[c] = t[c].concat(l)) : void 0 !== l && (t[c] = l);}}}var r = i(32),a = i(20),o = 5;t.exports = function () {for (var t = new Array(arguments.length), e = t.length, i = 0; i < e; i++) {t[i] = arguments[i];}for (var r = t[0], a = 1; a < e; a++) {n(r, t[a]);}return r;};}, function (t, e) {function i(t, e) {for (var i in e) {e.hasOwnProperty(i) && "constructor" !== i && void 0 !== e[i] && (t[i] = e[i]);}}t.exports = function (t, e, n, r) {return e && i(t, e), n && i(t, n), r && i(t, r), t;};}, function (t, e, i) {var n = i(31),r = i(20);t.exports = function (t, e) {if (t) if (r(t)) for (var i = 0, a = t.length; i < a && !1 !== e(t[i], i); i++) {;} else if (n(t)) for (var o in t) {if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break;}};}, function (t, e, i) {var n = i(0),r = function () {function t(t) {n.mix(this, t), this._init();}var e = t.prototype;return e._init = function () {var t = this,e = t.start,i = t.end,n = Math.min(e.x, i.x),r = Math.max(e.x, i.x),a = Math.min(e.y, i.y),o = Math.max(e.y, i.y);this.tl = { x: n, y: a }, this.tr = { x: r, y: a }, this.bl = { x: n, y: o }, this.br = { x: r, y: o }, this.width = r - n, this.height = o - a;}, e.reset = function (t, e) {this.start = t, this.end = e, this._init();}, e.isInRange = function (t, e) {n.isObject(t) && (e = t.y, t = t.x);var i = this.tl,r = this.br;return i.x <= t && t <= r.x && i.y <= e && e <= r.y;}, t;}();t.exports = r;}, function (t, e, i) {var n = i(21);i(60), t.exports = n;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(21),a = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {this.type = "cartesian", this.transposed = !1, this.isRect = !0;}, i.init = function (t, e) {this.x = { start: t.x, end: e.x }, this.y = { start: t.y, end: e.y };}, i.convertPoint = function (t) {var e = this,i = e.transposed,n = i ? "y" : "x",r = i ? "x" : "y",a = e.x,o = e.y;return { x: a.start + (a.end - a.start) * t[n], y: o.start + (o.end - o.start) * t[r] };}, i.invertPoint = function (t) {var e = this,i = e.transposed,n = i ? "y" : "x",r = i ? "x" : "y",a = e.x,o = e.y,s = {};return s[n] = (t.x - a.start) / (a.end - a.start), s[r] = (t.y - o.start) / (o.end - o.start), s;}, e;}(r);r.Cartesian = a, r.Rect = a, t.exports = a;}, function (t, e, i) {t.exports = { Position: i(62), Shape: i(63), Size: i(64), Color: i(65) };}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(9),a = i(13),o = i(4),s = function (t) {function e(e) {var i;return i = t.call(this, e) || this, i.names = ["x", "y"], i.type = "position", i;}return n(e, t), e.prototype.mapping = function (t, e) {var i,n,s,c = this.scales,l = this.coord,u = c[0],h = c[1];if (r(t) || r(e)) return [];if (a(e) && a(t)) {i = [], n = [];for (var f = 0, p = 0, g = t.length, d = e.length; f < g && p < d; f++, p++) {s = l.convertPoint({ x: u.scale(t[f]), y: h.scale(e[p]) }), i.push(s.x), n.push(s.y);}} else if (a(e)) t = u.scale(t), n = [], o(e, function (e) {e = h.scale(e), s = l.convertPoint({ x: t, y: e }), i && i !== s.x ? (a(i) || (i = [i]), i.push(s.x)) : i = s.x, n.push(s.y);});else if (a(t)) e = h.scale(e), i = [], o(t, function (t) {t = u.scale(t), s = l.convertPoint({ x: t, y: e }), n && n !== s.y ? (a(n) || (n = [n]), n.push(s.y)) : n = s.y, i.push(s.x);});else {t = u.scale(t), e = h.scale(e);var v = l.convertPoint({ x: t, y: e });i = v.x, n = v.y;}return [i, n];}, e;}(i(14));t.exports = s;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = function (t) {function e(e) {var i;return i = t.call(this, e) || this, i.names = ["shape"], i.type = "shape", i.gradient = null, i;}return n(e, t), e.prototype.getLinearValue = function (t) {var e = this.values;return e[Math.round((e.length - 1) * t)];}, e;}(i(14));t.exports = r;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = function (t) {function e(e) {var i;return i = t.call(this, e) || this, i.names = ["size"], i.type = "size", i.gradient = null, i;}return n(e, t), e;}(i(14));t.exports = r;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(66),o = function (t) {function e(e) {var i;return i = t.call(this, e) || this, i.names = ["color"], i.type = "color", i.gradient = null, r.isString(i.values) && (i.linear = !0), i;}return n(e, t), e.prototype.getLinearValue = function (t) {var e = this.gradient;if (!e) {var i = this.values;e = a.gradient(i), this.gradient = e;}return e(t);}, e;}(i(14));t.exports = o;}, function (t, e, i) {function n(t, e, i, n) {return t[n] + (e[n] - t[n]) * i;}function r(t) {return "#" + a(t[0]) + a(t[1]) + a(t[2]);}function a(t) {return t = Math.round(t), 1 === (t = t.toString(16)).length && (t = "0" + t), t;}function o(t, e) {var i = t.length - 1,a = Math.floor(i * e),o = i * e - a,s = t[a],c = a === i ? s : t[a + 1];return r([n(s, c, o, 0), n(s, c, o, 1), n(s, c, o, 2)]);}function s(t) {var e = [];return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), e.push(parseInt(t.substr(5, 2), 16)), e;}var c = i(0),l = { black: "#000000", blue: "#0000ff", grey: "#808080", green: "#008000", orange: "#ffa500", pink: "#ffc0cb", purple: "#800080", red: "#ff0000", white: "#ffffff", yellow: "#ffff00" },u = { toHex: function toHex(t) {if (l[t]) return l[t];if ("#" === t[0]) {if (7 === t.length) return t;var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n) {return "#" + e + e + i + i + n + n;});return l[t] = e, e;}var i = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);return i.shift(), i = r(i), l[t] = i, i;}, hex2arr: s, gradient: function gradient(t) {var e = [];return c.isString(t) && (t = t.split("-")), c.each(t, function (t) {-1 === t.indexOf("#") && (t = u.toHex(t)), e.push(s(t));}), function (t) {return o(e, t);};} };t.exports = u;}, function (t, e, i) {var n = i(0),r = i(1),a = i(68),o = { linear: "Linear", cat: "Cat", timeCat: "TimeCat", identity: "Identity" },s = function () {function t(t) {this.defs = {}, n.mix(this, t);}var e = t.prototype;return e._getDef = function (t) {var e = this.defs,i = null;return (r.scales[t] || e[t]) && (i = n.mix({}, r.scales[t]), n.each(e[t], function (t, e) {n.isNil(t) ? delete i[e] : i[e] = t;})), i;}, e._getDefaultType = function (t, e, i) {if (i && i.type) return i.type;var r = "linear",a = n.Array.firstValue(e, t);return n.isArray(a) && (a = a[0]), n.isString(a) && (r = "cat"), r;}, e._getScaleCfg = function (t, e, i, r) {var a,o = { field: e, values: a = r && r.values ? r.values : n.Array.values(i, e) };if ("cat" !== t && "timeCat" !== t) {if (!r || !r.min || !r.max) {var s = n.Array.getRange(a),c = s.min,l = s.max;o.min = c, o.max = l, o.nice = !0;}} else o.isRounding = !1;return o;}, e.createScale = function (t, e) {var i,r = this,s = r._getDef(t);if (!e || !e.length) return s && s.type ? (s.field = t, i = new a[o[s.type]](s)) : i = new a.Identity({ value: t, field: t.toString(), values: [t] }), i;var c = e[0][t];if (null === c && (c = n.Array.firstValue(e, t)), n.isNumber(t) || n.isNil(c) && !s) i = new a.Identity({ value: t, field: t.toString(), values: [t] });else {var l = r._getDefaultType(t, e, s),u = r._getScaleCfg(l, t, e, s);s && n.mix(u, s), i = new a[o[l]](u);}return i;}, t;}();t.exports = s;}, function (t, e, i) {var n = i(12);i(69), i(72), i(37), t.exports = n;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(9),a = i(4),o = i(12),s = i(70),c = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {t.prototype._initDefaultCfg.call(this);var e = this;e.type = "linear", e.isLinear = !0, e.nice = !1, e.min = null, e.minLimit = null, e.max = null, e.maxLimit = null, e.tickCount = null, e.tickInterval = null, e.minTickInterval = null, e.snapArray = null;}, i.init = function () {var t = this;if (t.ticks) {var e = t.ticks,i = t.translate(e[0]),n = t.translate(e[e.length - 1]);(r(t.min) || t.min > i) && (t.min = i), (r(t.max) || t.max < n) && (t.max = n);} else t.min = t.translate(t.min), t.max = t.translate(t.max), t.initTicks();}, i.calculateTicks = function () {var t = this.min,e = this.max,i = this.minLimit,n = this.maxLimit,r = this.tickCount,a = this.tickInterval,o = this.minTickInterval,c = this.snapArray;if (1 === r) throw new Error("linear scale'tickCount should not be 1");if (e < t) throw new Error("max: " + e + " should not be less than min: " + t);return s({ min: t, max: e, minLimit: i, maxLimit: n, minCount: r, maxCount: r, interval: a, minTickInterval: o, snapArray: c }).ticks;}, i.initTicks = function () {var t = this,e = t.calculateTicks();if (t.nice) t.ticks = e, t.min = e[0], t.max = e[e.length - 1];else {var i = [];a(e, function (e) {e >= t.min && e <= t.max && i.push(e);}), i.length || (i.push(t.min), i.push(t.max)), t.ticks = i;}}, i.scale = function (t) {if (r(t)) return NaN;var e = this.max,i = this.min;if (e === i) return 0;var n = (t - i) / (e - i),a = this.rangeMin();return a + n * (this.rangeMax() - a);}, i.invert = function (t) {var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());return this.min + e * (this.max - this.min);}, e;}(o);o.Linear = c, t.exports = c;}, function (t, e, i) {var n = i(9),r = i(17),a = i(71),o = [0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10],s = [0, 1, 2, 4, 5, 10];t.exports = function (t) {var e = t.min,i = t.max,c = t.interval,l = t.minTickInterval,u = [],h = t.minCount || 5,f = t.maxCount || 7,p = h === f,g = n(t.minLimit) ? -1 / 0 : t.minLimit,d = n(t.maxLimit) ? 1 / 0 : t.maxLimit,v = (h + f) / 2,y = v,m = t.snapArray ? t.snapArray : p ? o : s;if (e === g && i === d && p && (c = (i - e) / (y - 1)), n(e) && (e = 0), n(i) && (i = 0), i === e && (0 === e ? i = 1 : e > 0 ? e = 0 : i = 0, i - e < 5 && !c && i - e >= 1 && (c = 1)), n(c)) {var x = (i - e) / (v - 1);c = a.snapFactorTo(x, m, "ceil"), f !== h && ((y = parseInt((i - e) / c, 10)) > f && (y = f), y < h && (y = h), c = a.snapFactorTo((i - e) / (y - 1), m, "floor"));}if (r(l) && c < l && (c = l), t.interval || f !== h) i = Math.min(a.snapMultiple(i, c, "ceil"), d), e = Math.max(a.snapMultiple(e, c, "floor"), g), y = Math.round((i - e) / c), e = a.fixedBase(e, c), i = a.fixedBase(i, c);else {v = parseInt(v, 10);var _,S = (i + e) / 2,b = a.snapMultiple(S, c, "ceil"),C = Math.floor((v - 2) / 2),P = b + C * c;for (_ = v % 2 == 0 ? b - C * c : b - (C + 1) * c; P < i;) {P = a.fixedBase(P + c, c);}for (; _ > e;) {_ = a.fixedBase(_ - c, c);}i = P, e = _;}i = Math.min(i, d), e = Math.max(e, g), u.push(e);for (var w = 1; w < y; w++) {var M = a.fixedBase(c * w + e, c);M < i && u.push(M);}return u[u.length - 1] < i && u.push(i), { min: e, max: i, interval: c, count: y, ticks: u };};}, function (t, e) {function i(t) {var e = 1;if (t === 1 / 0 || t === -1 / 0) throw new Error("Not support Infinity!");if (t < 1) {for (var i = 0; t < 1;) {e /= 10, t *= 10, i++;}e.toString().length > a && (e = parseFloat(e.toFixed(i)));} else for (; t > 10;) {e *= 10, t /= 10;}return e;}function n(t, e) {var i = t.length;if (0 === i) return NaN;var n = t[0];if (e < t[0]) return NaN;if (e >= t[i - 1]) return t[i - 1];for (var r = 1; r < t.length && !(e < t[r]); r++) {n = t[r];}return n;}function r(t, e) {var i = t.length;if (0 === i) return NaN;var n;if (e > t[i - 1]) return NaN;if (e < t[0]) return t[0];for (var r = 1; r < t.length; r++) {if (e <= t[r]) {n = t[r];break;}}return n;}var a = 12,o = { snapFactorTo: function snapFactorTo(t, e, n) {if (isNaN(t)) return NaN;var r = 1;if (0 !== t) {t < 0 && (r = -1);var s = i(t *= r);r *= s, t /= s;}t = "floor" === n ? o.snapFloor(e, t) : "ceil" === n ? o.snapCeiling(e, t) : o.snapTo(e, t);var c = parseFloat((t * r).toPrecision(a));return Math.abs(r) < 1 && c.toString().length > a && (c = t / parseInt(1 / r) * (r > 0 ? 1 : -1)), c;}, snapMultiple: function snapMultiple(t, e, i) {return ("ceil" === i ? Math.ceil(t / e) : "floor" === i ? Math.floor(t / e) : Math.round(t / e)) * e;}, snapTo: function snapTo(t, e) {var i = n(t, e),a = r(t, e);if (isNaN(i) || isNaN(a)) {if (t[0] >= e) return t[0];var o = t[t.length - 1];if (o <= e) return o;}return Math.abs(e - i) < Math.abs(a - e) ? i : a;}, snapFloor: function snapFloor(t, e) {return n(t, e);}, snapCeiling: function snapCeiling(t, e) {return r(t, e);}, fixedBase: function fixedBase(t, e) {var i = e.toString(),n = i.indexOf(".");if (-1 === n) return Math.round(t);var r = i.substr(n + 1).length;return r > 20 && (r = 20), parseFloat(t.toFixed(r));} };t.exports = o;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(12),a = i(17),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {t.prototype._initDefaultCfg.call(this), this.isIdentity = !0, this.type = "identity", this.value = null;}, i.getText = function () {return this.value.toString();}, i.scale = function (t) {return this.value !== t && a(t) ? t : this.range[0];}, i.invert = function () {return this.value;}, e;}(r);r.Identity = o, t.exports = o;}, function (t, e, i) {function n(t) {var e = t.slice(0);if (e.length > 0) {var i = e[0],n = e[e.length - 1];0 !== i.value && e.unshift({ value: 0 }), 1 !== n.value && e.push({ value: 1 });}return e;}var r = i(0),a = i(74),o = i(1),s = i(5).Shape,c = function () {function t(t) {this.axisCfg = {}, this.frontPlot = null, this.backPlot = null, this.axes = {}, r.mix(this, t);}var e = t.prototype;return e._isHide = function (t) {var e = this.axisCfg;return !e || !1 === e[t];}, e._getLinePosition = function (t, e, i, n) {var r = "",a = t.field,o = this.axisCfg;return o[a] && o[a].position ? r = o[a].position : "x" === e ? r = n ? "left" : "bottom" : "y" === e && (r = i ? "right" : "left", n && (r = "bottom")), r;}, e._getLineCfg = function (t, e, i) {var n,r,a = 1;return "x" === e ? (n = { x: 0, y: 0 }, r = { x: 1, y: 0 }) : "right" === i ? (n = { x: 1, y: 0 }, r = { x: 1, y: 1 }) : (n = { x: 0, y: 0 }, r = { x: 0, y: 1 }, a = -1), t.transposed && (a *= -1), { offsetFactor: a, start: t.convertPoint(n), end: t.convertPoint(r) };}, e._getCircleCfg = function (t) {return { startAngle: t.startAngle, endAngle: t.endAngle, center: t.center, radius: t.circleRadius };}, e._getRadiusCfg = function (t) {var e, i;return t.transposed ? (e = { x: 0, y: 0 }, i = { x: 1, y: 0 }) : (e = { x: 0, y: 0 }, i = { x: 0, y: 1 }), { offsetFactor: -1, start: t.convertPoint(e), end: t.convertPoint(i) };}, e._getAxisCfg = function (t, e, i, n, a) {var c = this,l = this.axisCfg,u = e.getTicks(),h = r.deepMix({ ticks: u, frontContainer: this.frontPlot, backContainer: this.backPlot }, a, l[e.field]),f = [],p = h.label,g = u.length,d = 0,v = 0,y = p;return r.each(u, function (t, e) {if (r.isFunction(p)) {var i = p(t.text, e, g);y = i ? r.mix({}, o._defaultAxis.label, i) : null;}if (y) {var n = {};y.textAlign && (n.textAlign = y.textAlign), y.textBaseline && (n.textBaseline = y.textBaseline);var a = new s.Text({ className: "axis-label", attrs: r.mix({ x: 0, y: 0, text: t.text, fontFamily: c.chart.get("canvas").get("fontFamily") }, y), value: t.value, textStyle: n, top: y.top, context: c.chart.get("canvas").get("context") });f.push(a);var l = a.getBBox(),u = l.width,h = l.height;d = Math.max(d, u), v = Math.max(v, h);}}), h.labels = f, h.maxWidth = d, h.maxHeight = v, h;}, e._createAxis = function (t, e, i, n, r) {void 0 === r && (r = "");var a,s,c,l = this,u = t.type,h = t.transposed;if ("cartesian" === u || "rect" === u) {var f = l._getLinePosition(e, n, r, h);(c = o.axis[f]).position = f, a = "Line", s = f;} else "x" === n && !h || "y" === n && h ? (c = o.axis.circle, a = "Circle", s = "circle") : (c = o.axis.radius, a = "Line", s = "radius");var p = l._getAxisCfg(t, e, i, n, c);p.type = a, p.dimType = n, p.verticalScale = i, p.index = r, this.axes[s] = p;}, e.createAxis = function (t, e, i) {var o = this;e && !o._isHide(e.field) && o._createAxis(t, e, i[0], "x"), r.each(i, function (i, n) {o._isHide(i.field) || o._createAxis(t, i, e, "y", n);});var s = this.axes,c = o.chart;if (c._isAutoPadding()) {var l = r.parsePadding(c.get("padding")),u = r.parsePadding(c.get("appendPadding")),h = c.get("legendRange") || { top: 0, right: 0, bottom: 0, left: 0 },f = ["auto" === l[0] ? h.top + 2 * u[0] : l[0], "auto" === l[1] ? h.right + u[1] : l[1], "auto" === l[2] ? h.bottom + u[2] : l[2], "auto" === l[3] ? h.left + u[3] : l[3]];if (t.isPolar) {var p = s.circle;if (p) {var g = p.maxHeight,d = p.maxWidth,v = p.labelOffset;f[0] += g + v, f[1] += d + v, f[2] += g + v, f[3] += d + v;}} else {if (s.right && "auto" === l[1]) {var y = s.right,m = y.maxWidth,x = y.labelOffset;f[1] += m + x;}if (s.left && "auto" === l[3]) {var _ = s.left,S = _.maxWidth,b = _.labelOffset;f[3] += S + b;}if (s.bottom && "auto" === l[2]) {var C = s.bottom,P = C.maxHeight,w = C.labelOffset;f[2] += P + w;}}c.set("_padding", f), c._updateLayout(f);}r.each(s, function (e) {var i,s = e.type,c = e.grid,l = e.verticalScale,u = e.ticks,h = e.dimType,f = e.position,p = e.index;if (t.isPolar ? "Line" === s ? i = o._getRadiusCfg(t) : "Circle" === s && (i = o._getCircleCfg(t)) : i = o._getLineCfg(t, h, f), c && l) {var g = [],d = n(l.getTicks());r.each(u, function (e) {var i = [];r.each(d, function (n) {var r = "x" === h ? e.value : n.value,a = "x" === h ? n.value : e.value;if (r >= 0 && r <= 1 && a >= 0 && a <= 1) {var o = t.convertPoint({ x: r, y: a });i.push(o);}}), g.push({ points: i, _id: "axis-" + h + p + "-grid-" + e.tickValue });}), e.gridPoints = g, t.isPolar && (e.center = t.center, e.startAngle = t.startAngle, e.endAngle = t.endAngle);}i._id = "axis-" + h, r.isNil(p) || (i._id = "axis-" + h + p), new a[s](r.mix(e, i));});}, e.clear = function () {this.axes = {}, this.frontPlot.clear(), this.backPlot.clear();}, t;}();t.exports = c;}, function (t, e, i) {var n = i(26);i(75), t.exports = n;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(26),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {t.prototype._initDefaultCfg.call(this), this.start = null, this.end = null;}, i.getOffsetPoint = function (t) {var e = this.start,i = this.end;return { x: e.x + (i.x - e.x) * t, y: e.y + (i.y - e.y) * t };}, i.getAxisVector = function () {var t = this.start,e = this.end;return [e.x - t.x, e.y - t.y];}, i.drawLine = function (t) {var e = this.getContainer(t.top),i = this.start,n = this.end;e.addShape("line", { className: "axis-line", attrs: r.mix({ x1: i.x, y1: i.y, x2: n.x, y2: n.y }, t) });}, e;}(a);a.Line = o, t.exports = o;}, function (t, e, i) {var n = i(0),r = i(34),a = i(35),o = i(39).requestAnimationFrame,s = function () {function t(t) {this._attrs = n.mix({ type: "canvas", children: [] }, t), this._initPixelRatio(), this._initCanvas();}var e = t.prototype;return e.get = function (t) {return this._attrs[t];}, e.set = function (t, e) {this._attrs[t] = e;}, e._initPixelRatio = function () {this.get("pixelRatio") || this.set("pixelRatio", n.getPixelRatio());}, e.beforeDraw = function () {var t = this._attrs.context,e = this._attrs.el;!n.isWx && !n.isMy && t && t.clearRect(0, 0, e.width, e.height);}, e._initCanvas = function () {var t,e = this,i = e.get("el"),r = e.get("context");if (!(t = r ? r.canvas : n.isString(i) ? n.getDomById(i) : i)) throw new Error("Please specify the id or el of the chart!");r && t && !t.getContext && (t.getContext = function () {return r;});var a = e.get("width");a || (a = n.getWidth(t));var o = e.get("height");o || (o = n.getHeight(t)), e.set("canvas", this), e.set("el", t), e.set("context", r || t.getContext("2d")), e.changeSize(a, o);}, e.changeSize = function (t, e) {var i = this.get("pixelRatio"),r = this.get("el");n.isBrowser && (r.style.width = t + "px", r.style.height = e + "px"), n.isWx || n.isMy || (r.width = t * i, r.height = e * i, 1 !== i && this.get("context").scale(i, i)), this.set("width", t), this.set("height", e);}, e.getWidth = function () {var t = this.get("pixelRatio");return this.get("width") * t;}, e.getHeight = function () {var t = this.get("pixelRatio");return this.get("height") * t;}, e.getPointByClient = function (t, e) {var i = this.get("el"),n = i.getBoundingClientRect(),r = n.right - n.left,a = n.bottom - n.top;return { x: (t - n.left) * (i.width / r), y: (e - n.top) * (i.height / a) };}, e._beginDraw = function () {this._attrs.toDraw = !0;}, e._endDraw = function () {this._attrs.toDraw = !1;}, e.draw = function () {function t() {e.set("animateHandler", o(function () {e.set("animateHandler", void 0), e.get("toDraw") && t();})), e.beforeDraw();try {for (var i = e._attrs.context, r = e._attrs.children, a = 0, s = r.length; a < s; a++) {r[a].draw(i);}(n.isWx || n.isMy) && i.draw();} catch (t) {console.warn("error in draw canvas, detail as:"), console.warn(t), e._endDraw();}e._endDraw();}var e = this;e.get("destroyed") || (e.get("animateHandler") ? this._beginDraw() : t());}, e.destroy = function () {this.get("destroyed") || (this.clear(), this._attrs = {}, this.set("destroyed", !0));}, e.isDestroyed = function () {return this.get("destroyed");}, t;}();n.mix(s.prototype, r, { getGroupClass: function getGroupClass() {return a;} }), t.exports = s;}, function (t, e, i) {function n(t, e) {return (t % e + e) % e;}function r(t, e) {s.each(t, function (t) {t = t.split(":"), e.addColorStop(Number(t[0]), t[1]);});}function a(t, e, i) {var a = t.split(" "),o = a[0].slice(2, a[0].length - 1);o = n(parseFloat(o) * Math.PI / 180, 2 * Math.PI);var s,c,l = a.slice(1),u = e.getBBox(),h = u.minX,f = u.minY,p = u.maxX,g = u.maxY;o >= 0 && o < .5 * Math.PI ? (s = { x: h, y: f }, c = { x: p, y: g }) : .5 * Math.PI <= o && o < Math.PI ? (s = { x: p, y: f }, c = { x: h, y: g }) : Math.PI <= o && o < 1.5 * Math.PI ? (s = { x: p, y: g }, c = { x: h, y: f }) : (s = { x: h, y: g }, c = { x: p, y: f });var d = Math.tan(o),v = d * d,y = (c.x - s.x + d * (c.y - s.y)) / (v + 1) + s.x,m = d * (c.x - s.x + d * (c.y - s.y)) / (v + 1) + s.y,x = i.createLinearGradient(s.x, s.y, y, m);return r(l, x), x;}function o(t, e, i) {var n = t.split(" "),a = n[0].slice(2, n[0].length - 1);a = a.split(",");var o = parseFloat(a[0]),s = parseFloat(a[1]),c = parseFloat(a[2]),l = n.slice(1);if (0 === c) return l[l.length - 1].split(":")[1];var u = e.getBBox(),h = u.width,f = u.height,p = u.minX,g = u.minY,d = Math.sqrt(h * h + f * f) / 2,v = i.createRadialGradient(p + h * o, g + f * s, c * d, p + h / 2, g + f / 2, d);return r(l, v), v;}var s = i(0);t.exports = { parseStyle: function parseStyle(t, e, i) {if ("(" === t[1]) try {var n = t[0];if ("l" === n) return a(t, e, i);if ("r" === n) return o(t, e, i);} catch (t) {console.error("error in parsing gradient string, please check if there are any extra whitespaces."), console.error(t);}return t;} };}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(2),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initProperties = function () {t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "rect";}, i.getDefaultAttrs = function () {return { x: 0, y: 0, width: 0, height: 0, radius: 0, lineWidth: 0 };}, i.createPath = function (t) {var e = this.get("attrs"),i = e.x,n = e.y,a = e.width,o = e.height;t.beginPath();var s = e.radius;s && a * o ? (s = r.parsePadding(s), t.moveTo(i + s[0], n), t.lineTo(i + a - s[1], n), t.arc(i + a - s[1], n + s[1], s[1], -Math.PI / 2, 0, !1), t.lineTo(i + a, n + o - s[2]), t.arc(i + a - s[2], n + o - s[2], s[2], 0, Math.PI / 2, !1), t.lineTo(i + s[3], n + o), t.arc(i + s[3], n + o - s[3], s[3], Math.PI / 2, Math.PI, !1), t.lineTo(i, n + s[0]), t.arc(i + s[0], n + s[0], s[0], Math.PI, 3 * Math.PI / 2, !1), t.closePath()) : t.rect(i, n, a, o);}, i.calculateBox = function () {var t = this.get("attrs"),e = t.x,i = t.y;return { minX: e, minY: i, maxX: e + t.width, maxY: i + t.height };}, e;}(a);a.Rect = o, t.exports = o;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(2),a = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initProperties = function () {t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "circle";}, i.getDefaultAttrs = function () {return { x: 0, y: 0, r: 0, lineWidth: 0 };}, i.createPath = function (t) {var e = this.get("attrs"),i = e.x,n = e.y,r = e.r;t.beginPath(), t.arc(i, n, r, 0, 2 * Math.PI, !1), t.closePath();}, i.calculateBox = function () {var t = this.get("attrs"),e = t.x,i = t.y,n = t.r;return { minX: e - n, maxX: e + n, minY: i - n, maxY: i + n };}, e;}(r);r.Circle = a, t.exports = a;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(2),a = i(10),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initProperties = function () {t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.type = "line";}, i.getDefaultAttrs = function () {return { x1: 0, y1: 0, x2: 0, y2: 0, lineWidth: 1 };}, i.createPath = function (t) {var e = this.get("attrs"),i = e.x1,n = e.y1,r = e.x2,a = e.y2;t.beginPath(), t.moveTo(i, n), t.lineTo(r, a);}, i.calculateBox = function () {var t = this.get("attrs"),e = t.x1,i = t.y1,n = t.x2,r = t.y2,o = t.lineWidth;return a.getBBoxFromLine(e, i, n, r, o);}, e;}(r);r.Line = o, t.exports = o;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(2),a = i(10),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initProperties = function () {t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "polygon";}, i.getDefaultAttrs = function () {return { points: null, lineWidth: 0 };}, i.createPath = function (t) {var e = this.get("attrs").points;t.beginPath();for (var i = 0, n = e.length; i < n; i++) {var r = e[i];0 === i ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y);}t.closePath();}, i.calculateBox = function () {var t = this.get("attrs").points;return a.getBBoxFromPoints(t);}, e;}(r);r.Polygon = o, t.exports = o;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}function r(t) {for (var e = [], i = 0, n = t.length; i < n; i++) {var r = t[i];isNaN(r.x) || isNaN(r.y) || e.push(r);}return e;}var a = i(2),o = i(40),s = i(10),c = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initProperties = function () {t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "polyline";}, i.getDefaultAttrs = function () {return { points: null, lineWidth: 1, smooth: !1 };}, i.createPath = function (t) {var e = this.get("attrs"),i = e.points,n = e.smooth,a = r(i);if (t.beginPath(), a.length) if (t.moveTo(a[0].x, a[0].y), n) for (var s = [[0, 0], [1, 1]], c = o.smooth(a, !1, s), l = 0, u = c.length; l < u; l++) {var h = c[l];t.bezierCurveTo(h[1], h[2], h[3], h[4], h[5], h[6]);} else {var f, p;for (f = 1, p = a.length - 1; f < p; f++) {t.lineTo(a[f].x, a[f].y);}t.lineTo(a[p].x, a[p].y);}}, i.calculateBox = function () {var t = this.get("attrs"),e = t.points,i = t.smooth,n = t.lineWidth,a = r(e);if (i) {for (var c = [], l = [[0, 0], [1, 1]], u = o.smooth(a, !1, l), h = 0, f = u.length; h < f; h++) {var p = u[h];if (0 === h) c.push([a[0].x, a[0].y, p[1], p[2], p[3], p[4], p[5], p[6]]);else {var g = u[h - 1];c.push([g[5], g[6], p[1], p[2], p[3], p[4], p[5], p[6]]);}}return s.getBBoxFromBezierGroup(c, n);}return s.getBBoxFromPoints(a, n);}, e;}(a);a.Polyline = c, t.exports = c;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(2),a = i(10),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initProperties = function () {t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.canFill = !0, this._attrs.type = "arc";}, i.getDefaultAttrs = function () {return { x: 0, y: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !1, lineWidth: 1 };}, i.createPath = function (t) {var e = this.get("attrs"),i = e.x,n = e.y,r = e.r,a = e.startAngle,o = e.endAngle,s = e.clockwise;t.beginPath(), t.arc(i, n, r, a, o, s);}, i.calculateBox = function () {var t = this.get("attrs"),e = t.x,i = t.y,n = t.r,r = t.startAngle,o = t.endAngle,s = t.clockwise;return a.getBBoxFromArc(e, i, n, r, o, s);}, e;}(r);r.Arc = o, t.exports = o;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(2),a = i(10),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initProperties = function () {t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "sector";}, i.getDefaultAttrs = function () {return { x: 0, y: 0, lineWidth: 0, r: 0, r0: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !1 };}, i.createPath = function (t) {var e = this.get("attrs"),i = e.x,n = e.y,r = e.startAngle,a = e.endAngle,o = e.r,s = e.r0,c = e.clockwise;t.beginPath();var l = Math.cos(r),u = Math.sin(r);t.moveTo(l * s + i, u * s + n), t.lineTo(l * o + i, u * o + n), (Math.abs(a - r) > 1e-4 || 0 === r && a < 0) && (t.arc(i, n, o, r, a, c), t.lineTo(Math.cos(a) * s + i, Math.sin(a) * s + n), 0 !== s && t.arc(i, n, s, a, r, !c)), t.closePath();}, i.calculateBox = function () {var t = this.get("attrs"),e = t.x,i = t.y,n = t.r,r = t.r0,o = t.startAngle,s = t.endAngle,c = t.clockwise,l = a.getBBoxFromArc(e, i, n, o, s, c),u = a.getBBoxFromArc(e, i, r, o, s, c);return { minX: Math.min(l.minX, u.minX), minY: Math.min(l.minY, u.minY), maxX: Math.max(l.maxX, u.maxX), maxY: Math.max(l.maxY, u.maxY) };}, e;}(r);r.Sector = o, t.exports = o;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(2),o = 0,s = {},c = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initProperties = function () {t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "text";}, i.getDefaultAttrs = function () {return { lineWidth: 0, lineCount: 1, fontSize: 12, fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontVariant: "normal", textAlign: "start", textBaseline: "bottom", lineHeight: null, textArr: null };}, i._getFontStyle = function () {var t = this._attrs.attrs,e = t.fontSize,i = t.fontFamily,n = t.fontWeight;return t.fontStyle + " " + t.fontVariant + " " + n + " " + e + "px " + i;}, i._afterAttrsSet = function () {var t = this._attrs.attrs;if (t.font = this._getFontStyle(), t.text) {var e = t.text,i = null,n = 1;r.isString(e) && -1 !== e.indexOf("\n") && (n = (i = e.split("\n")).length), t.lineCount = n, t.textArr = i;}this.set("attrs", t);}, i._getTextHeight = function () {var t = this._attrs.attrs;if (t.height) return t.height;var e = t.lineCount,i = 1 * t.fontSize;return e > 1 ? i * e + this._getSpaceingY() * (e - 1) : i;}, i._getSpaceingY = function () {var t = this._attrs.attrs,e = t.lineHeight,i = 1 * t.fontSize;return e ? e - i : .14 * i;}, i.drawInner = function (t) {var e = this,i = e._attrs.attrs,n = i.text,a = i.x,o = i.y;if (!(r.isNil(n) || isNaN(a) || isNaN(o))) {var s = i.textArr,c = 1 * i.fontSize,l = e._getSpaceingY();i.rotate && (t.translate(a, o), t.rotate(i.rotate), a = 0, o = 0);var u,h = i.textBaseline;s && (u = e._getTextHeight());var f;if (e.hasFill()) {var p = i.fillOpacity;if (r.isNil(p) || 1 === p || (t.globalAlpha = p), s) for (var g = 0, d = s.length; g < d; g++) {var v = s[g];f = o + g * (l + c) - u + c, "middle" === h && (f += u - c - (u - c) / 2), "top" === h && (f += u - c), t.fillText(v, a, f);} else t.fillText(n, a, o);}if (e.hasStroke()) if (s) for (var y = 0, m = s.length; y < m; y++) {var x = s[y];f = o + y * (l + c) - u + c, "middle" === h && (f += u - c - (u - c) / 2), "top" === h && (f += u - c), t.strokeText(x, a, f);} else t.strokeText(n, a, o);}}, i.calculateBox = function () {var t = this,e = t._attrs.attrs,i = e.x,n = e.y,r = e.textAlign,a = e.textBaseline,o = t._getTextWidth();if (!o) return { minX: i, minY: n, maxX: i, maxY: n };var s = t._getTextHeight(),c = { x: i, y: n - s };return r && ("end" === r || "right" === r ? c.x -= o : "center" === r && (c.x -= o / 2)), a && ("top" === a ? c.y += s : "middle" === a && (c.y += s / 2)), { minX: c.x, minY: c.y, maxX: c.x + o, maxY: c.y + s };}, i._getTextWidth = function () {var t = this._attrs.attrs;if (t.width) return t.width;var e = t.text,i = this.get("context");if (!r.isNil(e)) {var n = t.font,a = t.textArr,c = e + "" + n;if (s[c]) return s[c];var l = 0;if (a) for (var u = 0, h = a.length; u < h; u++) {var f = a[u];l = Math.max(l, r.measureText(f, n, i).width);} else l = r.measureText(e, n, i).width;return o > 5e3 && (o = 0, s = {}), o++, s[c] = l, l;}}, e;}(a);a.Text = c, t.exports = c;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(2),a = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initProperties = function () {t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.createPath = null, this._attrs.type = "custom";}, i.createPath = function (t) {var e = this.get("createPath");e && e.call(this, t);}, i.calculateBox = function () {var t = this.get("calculateBox");return t && t.call(this);}, e;}(r);r.Custom = a, t.exports = a;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(41),a = i(6);i(36);var o = function (t) {function e() {return t.apply(this, arguments) || this;}return n(e, t), e.prototype.getDefaultCfg = function () {var e = t.prototype.getDefaultCfg.call(this);return e.type = "line", e.sortable = !0, e;}, e;}(r);a.Line = o, t.exports = o;}, function (t, e, i) {function n(t) {if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}function r(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var a = i(6),o = i(0),s = i(42);i(89);var c = function (t) {function e(e) {var i;return i = t.call(this, e) || this, o.mix(n(i), s), i;}r(e, t);var i = e.prototype;return i.getDefaultCfg = function () {var e = t.prototype.getDefaultCfg.call(this);return e.type = "interval", e.shapeType = "interval", e.generatePoints = !0, e;}, i.createShapePointsCfg = function (e) {var i = t.prototype.createShapePointsCfg.call(this, e);return i.size = this.getNormalizedSize(e), i;}, i.clearInner = function () {t.prototype.clearInner.call(this), this.set("defaultSize", null);}, e;}(a);a.Interval = c, t.exports = c;}, function (t, e, i) {function n(t) {var e = t.x,i = t.y,n = t.y0,r = t.size,o = n,s = i;a.isArray(i) && (s = i[1], o = i[0]);var c, l;return a.isArray(e) ? (c = e[0], l = e[1]) : (c = e - r / 2, l = e + r / 2), [{ x: c, y: o }, { x: c, y: s }, { x: l, y: s }, { x: l, y: o }];}function r(t) {for (var e = [], i = [], n = 0, r = t.length; n < r; n++) {var a = t[n];e.push(a.x), i.push(a.y);}var o = Math.min.apply(null, e),s = Math.min.apply(null, i);return { x: o, y: s, width: Math.max.apply(null, e) - o, height: Math.max.apply(null, i) - s };}var a = i(0),o = i(8),s = i(3),c = i(1),l = o.registerFactory("interval", { defaultShapeType: "rect", getDefaultPoints: function getDefaultPoints(t) {return n(t);} });o.registerShape("interval", "rect", { draw: function draw(t, e) {var i = this.parsePoints(t.points),n = a.mix({ fill: t.color }, c.shape.interval, t.style);if (t.isInCircle) {var o = i.slice(0);this._coord.transposed && (o = [i[0], i[3], i[2], i[1]]);var l = t.center,u = l.x,h = l.y,f = [1, 0],p = [o[0].x - u, o[0].y - h],g = [o[1].x - u, o[1].y - h],d = [o[2].x - u, o[2].y - h],v = s.angleTo(f, g),y = s.angleTo(f, d),m = s.length(p),x = s.length(g);return v >= 1.5 * Math.PI && (v -= 2 * Math.PI), y >= 1.5 * Math.PI && (y -= 2 * Math.PI), e.addShape("Sector", { className: "interval", attrs: a.mix({ x: u, y: h, r: x, r0: m, startAngle: v, endAngle: y }, n) });}var _ = r(i);return e.addShape("rect", { className: "interval", attrs: a.mix(_, n) });} }), t.exports = l;}, function (t, e, i) {t.exports = { Stack: i(91), Dodge: i(93) };}, function (t, e, i) {var n = i(92);t.exports = n;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(13),a = i(9),o = i(23),s = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {this.xField = null, this.yField = null;}, i.processAdjust = function (t) {this.processStack(t);}, i.processStack = function (t) {var e = this,i = e.xField,n = e.yField,o = t.length,s = { positive: {}, negative: {} };e.reverseOrder && (t = t.slice(0).reverse());for (var c = 0; c < o; c++) {for (var l = t[c], u = 0, h = l.length; u < h; u++) {var f = l[u],p = f[i] || 0,g = f[n],d = p.toString();if (g = r(g) ? g[1] : g, !a(g)) {var v = g >= 0 ? "positive" : "negative";s[v][d] || (s[v][d] = 0), f[n] = [s[v][d], g + s[v][d]], s[v][d] += g;}}}}, e;}(o);o.Stack = s, t.exports = s;}, function (t, e, i) {var n = i(94);t.exports = n;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(23),a = i(4),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {this.marginRatio = .5, this.dodgeRatio = .5, this.adjustNames = ["x", "y"];}, i.getDodgeOffset = function (t, e, i) {var n = this,r = t.pre,a = t.next,o = a - r,s = o * n.dodgeRatio / i,c = n.marginRatio * s;return (r + a) / 2 + (.5 * (o - i * s - (i - 1) * c) + ((e + 1) * s + e * c) - .5 * s - .5 * o);}, i.processAdjust = function (t) {var e = this,i = t.length,n = e.xField;a(t, function (t, r) {for (var a = 0, o = t.length; a < o; a++) {var s = t[a],c = s[n],l = { pre: 1 === o ? c - 1 : c - .5, next: 1 === o ? c + 1 : c + .5 },u = e.getDodgeOffset(l, r, i);s[n] = u;}});}, e;}(r);r.Dodge = o, t.exports = o;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(21),a = i(3),o = i(24),s = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {this.type = "polar", this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, this.inner = 0, this.innerRadius = 0, this.isPolar = !0, this.transposed = !1, this.center = null, this.radius = null;}, i.init = function (t, e) {var i,n,r = this,a = r.inner || r.innerRadius,o = Math.abs(e.x - t.x),s = Math.abs(e.y - t.y);r.startAngle === -Math.PI && 0 === r.endAngle ? (i = Math.min(o / 2, s), n = { x: (t.x + e.x) / 2, y: t.y }) : (i = Math.min(o, s) / 2, n = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 });var c = r.radius;c > 0 && c <= 1 && (i *= c), this.x = { start: r.startAngle, end: r.endAngle }, this.y = { start: i * a, end: i }, this.center = n, this.circleRadius = i;}, i.convertPoint = function (t) {var e = this,i = e.center,n = e.transposed,r = n ? "y" : "x",a = n ? "x" : "y",o = e.x,s = e.y,c = o.start + (o.end - o.start) * t[r],l = s.start + (s.end - s.start) * t[a];return { x: i.x + Math.cos(c) * l, y: i.y + Math.sin(c) * l };}, i.invertPoint = function (t) {var e = this,i = e.center,n = e.transposed,r = e.x,s = e.y,c = n ? "y" : "x",l = n ? "x" : "y",u = [1, 0, 0, 1, 0, 0];o.rotate(u, u, r.start);var h = [1, 0];a.transformMat2d(h, h, u), h = [h[0], h[1]];var f = [t.x - i.x, t.y - i.y];if (a.zero(f)) return { x: 0, y: 0 };var p = a.angleTo(h, f, r.end < r.start);Math.abs(p - 2 * Math.PI) < .001 && (p = 0);var g = a.length(f),d = p / (r.end - r.start);d = r.end - r.start > 0 ? d : -d;var v = (g - s.start) / (s.end - s.start),y = {};return y[c] = d, y[l] = v, y;}, e;}(r);r.Polar = s, t.exports = s;}, function (t, e, i) {var n = i(18),r = i(115);t.exports = { toTimeStamp: function toTimeStamp(t) {return n(t) && (t = t.indexOf("T") > 0 ? new Date(t).getTime() : new Date(t.replace(/-/gi, "/")).getTime()), r(t) && (t = t.getTime()), t;} };}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = { circle: function circle(t, e, i, n) {n.arc(t, e, i, 0, 2 * Math.PI, !1);}, square: function square(t, e, i, n) {n.moveTo(t - i, e - i), n.lineTo(t + i, e - i), n.lineTo(t + i, e + i), n.lineTo(t - i, e + i), n.closePath();} },o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initProperties = function () {t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "marker";}, i.getDefaultAttrs = function () {return { x: 0, y: 0, lineWidth: 0 };}, i.createPath = function (t) {var e,i = this.get("attrs"),n = i.x,o = i.y,s = i.radius,c = i.symbol || "circle";e = r.isFunction(c) ? c : a[c], t.beginPath(), e(n, o, s, t, this);}, i.calculateBox = function () {var t = this.get("attrs"),e = t.x,i = t.y,n = t.radius;return { minX: e - n, minY: i - n, maxX: e + n, maxY: i + n };}, e;}(i(5).Shape);t.exports = o;}, function (t, e, i) {var n = i(0),r = i(5).Group,a = i(97),o = function () {function t(t) {n.deepMix(this, this.getDefaultCfg(), t), this._init(), this._renderTitle(), this._renderItems();}var e = t.prototype;return e.getDefaultCfg = function () {return { showTitle: !1, title: null, items: null, titleGap: 12, itemGap: 10, itemMarginBottom: 12, itemFormatter: null, itemWidth: null, wordSpace: 6, x: 0, y: 0, layout: "horizontal", joinString: ": " };}, e._init = function () {var t = new r({ zIndex: this.zIndex || 0 });this.container = t;var e = t.addGroup();this.wrapper = e;var i = e.addGroup({ className: "itemsGroup" });this.itemsGroup = i, this.parent && this.parent.add(t);}, e._renderTitle = function (t) {t = t || this.title;var e = this.titleShape,i = 0;if (this.showTitle && t) {if (e && !e.get("destroyed")) e.attr("text", t);else {var r = this.wrapper,a = this.titleStyle;e = r.addShape("text", { className: "title", attrs: n.mix({ x: 0, y: 0, text: t }, a) }), this.titleShape = e;}i = e.getBBox().height + this.titleGap;}this._titleHeight = i;}, e._renderItems = function (t) {var e = this;(t = t || e.items) && (e.reversed && t.reverse(), n.each(t, function (t, i) {e._addItem(t, i);}), t.length > 1 && this._adjustItems(), this._renderBackground());}, e._renderBackground = function () {var t = this.background;if (t) {var e = this.container,i = this.wrapper.getBBox(),r = i.minX,a = i.minY,o = i.width,s = i.height,c = t.padding || [0, 0, 0, 0];c = n.parsePadding(c);var l = n.mix({ x: r - c[3], y: a - c[0], width: o + c[1] + c[3], height: s + c[0] + c[2] }, t),u = this.backShape;u ? u.attr(l) : u = e.addShape("Rect", { zIndex: -1, attrs: l }), this.backShape = u, e.sort();}}, e._addItem = function (t) {var e = this.itemsGroup.addGroup({ name: t.name, value: t.value, dataValue: t.dataValue, checked: t.checked }),i = this.unCheckStyle,r = this.unCheckColor,o = this.nameStyle,s = this.valueStyle,c = this.wordSpace,l = t.marker,u = t.value,h = 0;if (r && (i.fill = r), l) {var f = l.radius || 3,p = n.mix({ x: f, y: this._titleHeight }, l);!1 === t.checked && n.mix(p, i);var g = new a({ className: "item-marker", attrs: p });e.add(g), h += g.getBBox().width + c;}var d,v = t.name;if (v) {var y = this.joinString || "";v = u ? v + y : v, d = e.addShape("text", { className: "name", attrs: n.mix({ x: h, y: this._titleHeight, text: this._formatItemValue(v) }, o, !1 === t.checked ? i : null) });}if (u) {var m = h;d && (m += d.getBBox().width), e.addShape("text", { className: "value", attrs: n.mix({ x: m, y: this._titleHeight, text: u }, s, !1 === t.checked ? i : null) });}return e;}, e._formatItemValue = function (t) {var e = this.itemFormatter;return e && (t = e.call(this, t)), t;}, e._getMaxItemWidth = function () {var t = this.itemWidth;if (n.isNumber(t) || n.isNil(t)) return t;if ("auto" === t) {for (var e = this.itemsGroup.get("children"), i = e.length, r = 0, a = 0; a < i; a++) {var o = e[a].getBBox().width;r = Math.max(r, o);}var s = this.maxLength,c = this.itemGap,l = (s - c) / 2,u = (s - 2 * c) / 3;return 2 === i ? Math.max(r, l) : r <= u ? u : r <= l ? l : r;}}, e._adjustHorizontal = function () {for (var t, e, i = this.maxLength, n = this.itemsGroup.get("children"), r = this.itemGap, a = this.itemMarginBottom, o = this._titleHeight, s = 0, c = 0, l = this._getMaxItemWidth(), u = [], h = 0, f = n.length; h < f; h++) {var p = n[h],g = p.getBBox(),d = g.height,v = g.width;e = d + a, (t = l || v) - (i - c) > 1e-4 && (s++, c = 0), p.moveTo(c, s * e), u.push({ x: c, y: s * e + o - d / 2, width: 1.375 * v, height: 1.375 * d }), c += t + r;}this.legendHitBoxes = u;}, e._adjustVertical = function () {for (var t, e, i = this.maxLength, r = this.itemsGroup, a = this.itemGap, o = this.itemMarginBottom, s = this.itemWidth, c = this._titleHeight, l = r.get("children"), u = 0, h = 0, f = 0, p = [], g = 0, d = l.length; g < d; g++) {var v = l[g],y = v.getBBox();t = y.width, e = y.height, n.isNumber(s) ? h = s + a : t > h && (h = t + a), i - u < e ? (u = 0, f += h, v.moveTo(f, 0), p.push({ x: f, y: c - e / 2, width: 1.375 * t, height: 1.375 * e })) : (v.moveTo(f, u), p.push({ x: f, y: u - e / 2 + c, width: 1.375 * t, height: 1.375 * e })), u += e + o;}this.legendHitBoxes = p;}, e._adjustItems = function () {"horizontal" === this.layout ? this._adjustHorizontal() : this._adjustVertical();}, e.moveTo = function (t, e) {this.x = t, this.y = e;var i = this.container;return i && i.moveTo(t, e), this;}, e.setItems = function (t) {this.clearItems(), this._renderItems(t);}, e.setTitle = function (t) {this._renderTitle(t);}, e.clearItems = function () {this.itemsGroup.clear();}, e.getWidth = function () {return this.container.getBBox().width;}, e.getHeight = function () {return this.container.getBBox().height;}, e.show = function () {this.container.show();}, e.hide = function () {this.container.hide();}, e.clear = function () {var t = this.container;t.clear(), t.remove(!0);}, t;}();t.exports = o;}, function (t, e, i) {var n = i(0),r = { appear: { duration: 450, easing: "quadraticOut" }, update: { duration: 300, easing: "quadraticOut" }, enter: { duration: 300, easing: "quadraticOut" }, leave: { duration: 350, easing: "quadraticIn" } },a = { defaultCfg: {}, Action: {}, getAnimation: function getAnimation(t, e, i) {var r = this.defaultCfg[t];if (r) {var a = r[i];if (n.isFunction(a)) return a(e);}return !1;}, getAnimateCfg: function getAnimateCfg(t, e) {var i = r[e],a = this.defaultCfg[t];return a && a.cfg && a.cfg[e] ? n.deepMix({}, i, a.cfg[e]) : i;}, registerAnimation: function registerAnimation(t, e) {this.Action || (this.Action = {}), this.Action[t] = e;} };t.exports = a;}, function (t, e, i) {var n = i(5).Matrix,r = i(0),a = { getCoordInfo: function getCoordInfo(t) {var e = t.start,i = t.end;return { start: e, end: i, width: i.x - e.x, height: Math.abs(i.y - e.y) };}, getScaledMatrix: function getScaledMatrix(t, e, i) {var r;t.apply(e);var a = e[0],o = e[1];if ("x" === i) {t.transform([["t", a, o], ["s", .01, 1], ["t", -a, -o]]);var s = t.getMatrix();r = n.transform(s, [["t", a, o], ["s", 100, 1], ["t", -a, -o]]);} else if ("y" === i) {t.transform([["t", a, o], ["s", 1, .01], ["t", -a, -o]]);var c = t.getMatrix();r = n.transform(c, [["t", a, o], ["s", 1, 100], ["t", -a, -o]]);} else if ("xy" === i) {t.transform([["t", a, o], ["s", .01, .01], ["t", -a, -o]]);var l = t.getMatrix();r = n.transform(l, [["t", a, o], ["s", 100, 100], ["t", -a, -o]]);}return r;}, getAnimateParam: function getAnimateParam(t, e, i) {var n = {};return t.delay && (n.delay = r.isFunction(t.delay) ? t.delay(e, i) : t.delay), n.easing = t.easing, n.duration = t.duration, n.delay = t.delay, n;}, doAnimation: function doAnimation(t, e, i, n) {var r = t._id,o = t.get("index"),s = a.getAnimateParam(i, o, r),c = s.easing,l = s.delay,u = s.duration,h = t.animate().to({ attrs: e, duration: u, delay: l, easing: c });n && h.onEnd(function () {n();});} };t.exports = a;}, function (t, e, i) {var n = i(96),r = i(0);t.exports = { getColDef: function getColDef(t, e) {var i;return t.get("colDefs") && t.get("colDefs")[e] && (i = t.get("colDefs")[e]), i;}, getFieldRange: function getFieldRange(t, e, i) {if (!t) return [0, 1];var n = 0,r = 0;if ("linear" === i) {var a = e.min,o = e.max;n = (t.min - a) / (o - a), r = (t.max - a) / (o - a);} else {var s = e,c = t.values || [],l = s.indexOf(c[0]),u = s.indexOf(c[c.length - 1]);n = l / (s.length - 1), r = u / (s.length - 1);}return [n, r];}, getLimitRange: function getLimitRange(t, e) {var i,a = e.field,o = e.type,s = r.Array.values(t, a);return "linear" === o ? (i = r.Array.getRange(s), e.min < i.min && (i.min = e.min), e.max > i.max && (i.max = e.max)) : "timeCat" === o ? (r.each(s, function (t, e) {s[e] = n.toTimeStamp(t);}), s.sort(function (t, e) {return t - e;}), i = s) : i = s, i;} };}, function (t, e, i) {var n = i(6);i(103), i(41), i(87), i(105), i(88), i(107), i(109), t.exports = n;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(6);i(104);var o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i.getDefaultCfg = function () {var e = t.prototype.getDefaultCfg.call(this);return e.type = "point", e.shapeType = "point", e.generatePoints = !0, e;}, i.draw = function (t, e) {var i = this,n = i.get("container");r.each(t, function (t) {var a = t.shape,o = i.getDrawCfg(t);if (r.isArray(t.y)) {var s = i.hasAdjust("stack");r.each(t.y, function (r, c) {o.y = r, s && 0 === c || i.drawShape(a, t, o, n, e);});} else r.isNil(t.y) || i.drawShape(a, t, o, n, e);});}, e;}(a);a.Point = o, t.exports = o;}, function (t, e, i) {function n(t) {var e = { lineWidth: 0, stroke: t.color, fill: t.color };return t.size && (e.size = t.size), a.mix(e, t.style), a.mix({}, o.shape.point, e);}function r(t, e, i) {if (0 !== t.size) {var r = n(t),o = r.r || r.size,s = t.x,c = a.isArray(t.y) ? t.y : [t.y];"hollowCircle" === i && (r.lineWidth = 1, r.fill = null);for (var l = 0, u = c.length; l < u; l++) {return "rect" === i ? e.addShape("Rect", { className: "point", attrs: a.mix({ x: s - o, y: c[l] - o, width: 2 * o, height: 2 * o }, r) }) : e.addShape("Circle", { className: "point", attrs: a.mix({ x: s, y: c[l], r: o }, r) });}}}var a = i(0),o = i(1),s = i(19),c = i(8),l = ["circle", "hollowCircle", "rect"],u = c.registerFactory("point", { defaultShapeType: "circle", getDefaultPoints: function getDefaultPoints(t) {return s.splitPoints(t);} });a.each(l, function (t) {c.registerShape("point", t, { draw: function draw(e, i) {return r(e, i, t);} });}), t.exports = u;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(6),a = i(19),o = i(0);i(106);var s = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i.getDefaultCfg = function () {var e = t.prototype.getDefaultCfg.call(this);return e.type = "area", e.shapeType = "area", e.generatePoints = !0, e.sortable = !0, e;}, i.draw = function (t, e) {var i = this,n = i.get("container"),r = this.getDrawCfg(t[0]),s = i.getYScale(),c = i.get("connectNulls"),l = a.splitArray(t, s.field, c);r.origin = t, o.each(l, function (a, o) {r.splitedIndex = o;var s = a.map(function (t) {return t.points;});r.points = s, i.drawShape(r.shape, t[0], r, n, e);});}, e;}(r);r.Area = s, t.exports = s;}, function (t, e, i) {function n(t, e) {return Math.abs(t - e) < 1e-5;}function r(t) {return !isNaN(t) && !l.isNil(t);}function a(t) {for (var e = [], i = 0, n = t.length; i < n; i++) {var a = t[i];r(a.x) && r(a.y) && e.push(a);}return e;}function o(t, e) {var i = !0;return l.each(t, function (t) {if (!n(t.x, e.x) || !n(t.y, e.y)) return i = !1, !1;}), i;}function s(t, e, i, n, r) {var o = t.concat(e);return r ? i.addShape("Custom", { className: "area", attrs: l.mix({ points: o }, n), createPath: function createPath(t) {var e = [[0, 0], [1, 1]],i = a(this._attrs.attrs.points),n = i.length,r = i.slice(0, n / 2),o = i.slice(n / 2, n),s = h.smooth(r, !1, e);t.beginPath(), t.moveTo(r[0].x, r[0].y);for (var c = 0, l = s.length; c < l; c++) {var u = s[c];t.bezierCurveTo(u[1], u[2], u[3], u[4], u[5], u[6]);}if (o.length) {var f = h.smooth(o, !1, e);t.lineTo(o[0].x, o[0].y);for (var p = 0, g = f.length; p < g; p++) {var d = f[p];t.bezierCurveTo(d[1], d[2], d[3], d[4], d[5], d[6]);}}t.closePath();}, calculateBox: function calculateBox() {var t = a(this._attrs.attrs.points);return f.getBBoxFromPoints(t);} }) : i.addShape("Polyline", { className: "area", attrs: l.mix({ points: o }, n) });}function c(t, e, i) {var n = this,r = t.points,a = [],c = [];l.each(r, function (t) {c.push(t[0]), a.push(t[1]);});var u = l.mix({ fillStyle: t.color }, p.shape.area, t.style);return c.reverse(), a = n.parsePoints(a), c = n.parsePoints(c), t.isInCircle && (a.push(a[0]), c.unshift(c[c.length - 1]), o(c, t.center) && (c = [])), s(a, c, e, u, i);}var l = i(0),u = i(8),h = i(40),f = i(10),p = i(1),g = u.registerFactory("area", { defaultShapeType: "area", getDefaultPoints: function getDefaultPoints(t) {var e = t.x,i = t.y,n = t.y0;i = l.isArray(i) ? i : [n, i];var r = [];return r.push({ x: e, y: i[0] }, { x: e, y: i[1] }), r;} }),d = ["area", "smooth"];l.each(d, function (t) {u.registerShape("area", t, { draw: function draw(e, i) {var n = "smooth" === t;return c.call(this, e, i, n);} });}), t.exports = g;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(6),a = i(0);i(108);var o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i.getDefaultCfg = function () {var e = t.prototype.getDefaultCfg.call(this);return e.type = "polygon", e.shapeType = "polygon", e.generatePoints = !0, e;}, i.createShapePointsCfg = function (e) {var i,n = t.prototype.createShapePointsCfg.call(this, e),r = this,o = n.x,s = n.y;if (!a.isArray(o) || !a.isArray(s)) {var c = r.getXScale(),l = r.getYScale(),u = .5 / (c.values ? c.values.length : c.ticks.length),h = .5 / (l.values ? l.values.length : l.ticks.length);c.isCategory && l.isCategory ? (o = [o - u, o - u, o + u, o + u], s = [s - h, s + h, s + h, s - h]) : a.isArray(o) ? (o = [(i = o)[0], i[0], i[1], i[1]], s = [s - h / 2, s + h / 2, s + h / 2, s - h / 2]) : a.isArray(s) && (s = [(i = s)[0], i[1], i[1], i[0]], o = [o - u / 2, o - u / 2, o + u / 2, o + u / 2]), n.x = o, n.y = s;}return n;}, e;}(r);r.Polygon = o, t.exports = o;}, function (t, e, i) {var n = i(8),r = i(0),a = n.registerFactory("polygon", { defaultShapeType: "polygon", getDefaultPoints: function getDefaultPoints(t) {for (var e = [], i = t.x, n = t.y, r = 0, a = i.length; r < a; r++) {e.push({ x: i[r], y: n[r] });}return e;} });n.registerShape("polygon", "polygon", { draw: function draw(t, e) {var i = this.parsePoints(t.points),n = r.mix({ fill: t.color, points: i }, t.style);return e.addShape("Polygon", { className: "polygon", attrs: n });} }), t.exports = a;}, function (t, e, i) {function n(t) {if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}function r(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var a = i(6),o = i(0),s = i(42);i(110);var c = function (t) {function e(e) {var i;return i = t.call(this, e) || this, o.mix(n(i), s), i;}r(e, t);var i = e.prototype;return i.getDefaultCfg = function () {var e = t.prototype.getDefaultCfg.call(this);return e.type = "schema", e.shapeType = "schema", e.generatePoints = !0, e;}, i.createShapePointsCfg = function (e) {var i = t.prototype.createShapePointsCfg.call(this, e);return i.size = this.getNormalizedSize(e), i;}, i.clearInner = function () {t.prototype.clearInner.call(this), this.set("defaultSize", null);}, e;}(a);a.Schema = c, t.exports = c;}, function (t, e, i) {function n(t) {var e = t.sort(function (t, e) {return t < e ? 1 : -1;}),i = e.length;if (i < 4) for (var n = e[i - 1], r = 0; r < 4 - i; r++) {e.push(n);}return e;}function r(t, e, i) {var r = n(e);return [{ x: t, y: r[0] }, { x: t, y: r[1] }, { x: t - i / 2, y: r[2] }, { x: t - i / 2, y: r[1] }, { x: t + i / 2, y: r[1] }, { x: t + i / 2, y: r[2] }, { x: t, y: r[2] }, { x: t, y: r[3] }];}var a = i(8),o = i(0),s = a.registerFactory("schema", {});a.registerShape("schema", "candle", { getPoints: function getPoints(t) {return r(t.x, t.y, t.size);}, draw: function draw(t, e) {var i = this.parsePoints(t.points),n = o.mix({ stroke: t.color, fill: t.color, lineWidth: 1 }, t.style);return e.addShape("Custom", { className: "schema", attrs: n, createPath: function createPath(t) {t.beginPath(), t.moveTo(i[0].x, i[0].y), t.lineTo(i[1].x, i[1].y), t.moveTo(i[2].x, i[2].y);for (var e = 3; e < 6; e++) {t.lineTo(i[e].x, i[e].y);}t.closePath(), t.moveTo(i[6].x, i[6].y), t.lineTo(i[7].x, i[7].y);} });} }), t.exports = s;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(26),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {t.prototype._initDefaultCfg.call(this), this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, this.radius = null, this.center = null;}, i.getOffsetPoint = function (t) {var e = this.startAngle,i = e + (this.endAngle - e) * t;return this._getCirclePoint(i);}, i._getCirclePoint = function (t, e) {var i = this,n = i.center;return e = e || i.radius, { x: n.x + Math.cos(t) * e, y: n.y + Math.sin(t) * e };}, i.getTextAlignInfo = function (t, e) {var i,n = this.getOffsetVector(t, e),r = "middle";return n[0] > 0 ? i = "left" : n[0] < 0 ? i = "right" : (i = "center", n[1] > 0 ? r = "top" : n[1] < 0 && (r = "bottom")), { textAlign: i, textBaseline: r };}, i.getAxisVector = function (t) {var e = this.center,i = this.offsetFactor;return [(t.y - e.y) * i, -1 * (t.x - e.x) * i];}, i.drawLine = function (t) {var e = this.center,i = this.radius,n = this.startAngle,a = this.endAngle;this.getContainer(t.top).addShape("arc", { className: "axis-line", attrs: r.mix({ x: e.x, y: e.y, r: i, startAngle: n, endAngle: a }, t) });}, e;}(a);a.Circle = o, t.exports = o;}, function (t, e, i) {var n = i(113);t.exports = n;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(12),a = i(37),o = i(114),s = i(38),c = i(96),l = i(4),u = i(17),h = i(25),f = i(18),p = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {t.prototype._initDefaultCfg.call(this), this.type = "timeCat", this.sortable = !0, this.tickCount = 5, this.mask = "YYYY-MM-DD";}, i.init = function () {var t = this,e = this.values;l(e, function (i, n) {e[n] = t._toTimeStamp(i);}), this.sortable && e.sort(function (t, e) {return t - e;}), t.ticks || (t.ticks = this.calculateTicks());}, i.calculateTicks = function () {var t = this,e = t.tickCount;return e ? s({ maxCount: e, data: t.values, isRounding: t.isRounding }).ticks : t.values;}, i.translate = function (t) {t = this._toTimeStamp(t);var e = this.values.indexOf(t);return -1 === e && (e = u(t) && t < this.values.length ? t : NaN), e;}, i.scale = function (t) {var e,i = this.rangeMin(),n = this.rangeMax(),r = this.translate(t);return e = 1 === this.values.length || isNaN(r) ? r : r > -1 ? r / (this.values.length - 1) : 0, i + e * (n - i);}, i.getText = function (t) {var e = "",i = this.translate(t);e = i > -1 ? this.values[i] : t;var n = this.formatter;return e = parseInt(e, 10), e = n ? n(e) : o.format(e, this.mask);}, i.getTicks = function () {var t = this,e = this.ticks,i = [];return l(e, function (e) {var n;n = h(e) ? e : { text: f(e) ? e : t.getText(e), value: t.scale(e), tickValue: e }, i.push(n);}), i;}, i._toTimeStamp = function (t) {return c.toTimeStamp(t);}, e;}(a);r.TimeCat = p, t.exports = p;}, function (t, e, i) {var n;!function (r) {"use strict";function a(t, e) {for (var i = [], n = 0, r = t.length; n < r; n++) {i.push(t[n].substr(0, e));}return i;}function o(t) {return function (e, i, n) {var r = n[t].indexOf(i.charAt(0).toUpperCase() + i.substr(1).toLowerCase());~r && (e.month = r);};}function s(t, e) {for (t = String(t), e = e || 2; t.length < e;) {t = "0" + t;}return t;}var c = {},l = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,u = /\d\d?/,h = /\d{3}/,f = /\d{4}/,p = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,g = /\[([^]*?)\]/gm,d = function d() {},v = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],y = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],m = a(y, 3),x = a(v, 3);c.i18n = { dayNamesShort: x, dayNames: v, monthNamesShort: m, monthNames: y, amPm: ["am", "pm"], DoFn: function DoFn(t) {return t + ["th", "st", "nd", "rd"][t % 10 > 3 ? 0 : (t - t % 10 != 10) * t % 10];} };var _ = { D: function D(t) {return t.getDate();}, DD: function DD(t) {return s(t.getDate());}, Do: function Do(t, e) {return e.DoFn(t.getDate());}, d: function d(t) {return t.getDay();}, dd: function dd(t) {return s(t.getDay());}, ddd: function ddd(t, e) {return e.dayNamesShort[t.getDay()];}, dddd: function dddd(t, e) {return e.dayNames[t.getDay()];}, M: function M(t) {return t.getMonth() + 1;}, MM: function MM(t) {return s(t.getMonth() + 1);}, MMM: function MMM(t, e) {return e.monthNamesShort[t.getMonth()];}, MMMM: function MMMM(t, e) {return e.monthNames[t.getMonth()];}, YY: function YY(t) {return String(t.getFullYear()).substr(2);}, YYYY: function YYYY(t) {return s(t.getFullYear(), 4);}, h: function h(t) {return t.getHours() % 12 || 12;}, hh: function hh(t) {return s(t.getHours() % 12 || 12);}, H: function H(t) {return t.getHours();}, HH: function HH(t) {return s(t.getHours());}, m: function m(t) {return t.getMinutes();}, mm: function mm(t) {return s(t.getMinutes());}, s: function s(t) {return t.getSeconds();}, ss: function ss(t) {return s(t.getSeconds());}, S: function S(t) {return Math.round(t.getMilliseconds() / 100);}, SS: function SS(t) {return s(Math.round(t.getMilliseconds() / 10), 2);}, SSS: function SSS(t) {return s(t.getMilliseconds(), 3);}, a: function a(t, e) {return t.getHours() < 12 ? e.amPm[0] : e.amPm[1];}, A: function A(t, e) {return t.getHours() < 12 ? e.amPm[0].toUpperCase() : e.amPm[1].toUpperCase();}, ZZ: function ZZ(t) {var e = t.getTimezoneOffset();return (e > 0 ? "-" : "+") + s(100 * Math.floor(Math.abs(e) / 60) + Math.abs(e) % 60, 4);} },S = { D: [u, function (t, e) {t.day = e;}], Do: [new RegExp(u.source + p.source), function (t, e) {t.day = parseInt(e, 10);}], M: [u, function (t, e) {t.month = e - 1;}], YY: [u, function (t, e) {var i = +("" + new Date().getFullYear()).substr(0, 2);t.year = "" + (e > 68 ? i - 1 : i) + e;}], h: [u, function (t, e) {t.hour = e;}], m: [u, function (t, e) {t.minute = e;}], s: [u, function (t, e) {t.second = e;}], YYYY: [f, function (t, e) {t.year = e;}], S: [/\d/, function (t, e) {t.millisecond = 100 * e;}], SS: [/\d{2}/, function (t, e) {t.millisecond = 10 * e;}], SSS: [h, function (t, e) {t.millisecond = e;}], d: [u, d], ddd: [p, d], MMM: [p, o("monthNamesShort")], MMMM: [p, o("monthNames")], a: [p, function (t, e, i) {var n = e.toLowerCase();n === i.amPm[0] ? t.isPm = !1 : n === i.amPm[1] && (t.isPm = !0);}], ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function (t, e) {"Z" === e && (e = "+00:00");var i,n = (e + "").match(/([\+\-]|\d\d)/gi);n && (i = 60 * n[1] + parseInt(n[2], 10), t.timezoneOffset = "+" === n[0] ? i : -i);}] };S.dd = S.d, S.dddd = S.ddd, S.DD = S.D, S.mm = S.m, S.hh = S.H = S.HH = S.h, S.MM = S.M, S.ss = S.s, S.A = S.a, c.masks = { default: "ddd MMM DD YYYY HH:mm:ss", shortDate: "M/D/YY", mediumDate: "MMM D, YYYY", longDate: "MMMM D, YYYY", fullDate: "dddd, MMMM D, YYYY", shortTime: "HH:mm", mediumTime: "HH:mm:ss", longTime: "HH:mm:ss.SSS" }, c.format = function (t, e, i) {var n = i || c.i18n;if ("number" == typeof t && (t = new Date(t)), "[object Date]" !== Object.prototype.toString.call(t) || isNaN(t.getTime())) throw new Error("Invalid Date in fecha.format");var r = [];return e = (e = c.masks[e] || e || c.masks.default).replace(g, function (t, e) {return r.push(e), "??";}), (e = e.replace(l, function (e) {return e in _ ? _[e](t, n) : e.slice(1, e.length - 1);})).replace(/\?\?/g, function () {return r.shift();});}, c.parse = function (t, e, i) {var n = i || c.i18n;if ("string" != typeof e) throw new Error("Invalid format in fecha.parse");if (e = c.masks[e] || e, t.length > 1e3) return !1;var r = !0,a = {};if (e.replace(l, function (e) {if (S[e]) {var i = S[e],o = t.search(i[0]);~o ? t.replace(i[0], function (e) {return i[1](a, e, n), t = t.substr(o + e.length), e;}) : r = !1;}return S[e] ? "" : e.slice(1, e.length - 1);}), !r) return !1;var o = new Date();!0 === a.isPm && null != a.hour && 12 != +a.hour ? a.hour = +a.hour + 12 : !1 === a.isPm && 12 == +a.hour && (a.hour = 0);var s;return null != a.timezoneOffset ? (a.minute = +(a.minute || 0) - +a.timezoneOffset, s = new Date(Date.UTC(a.year || o.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0))) : s = new Date(a.year || o.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0), s;}, void 0 !== t && t.exports ? t.exports = c : void 0 !== (n = function () {return c;}.call(e, i, e, t)) && (t.exports = n);}();}, function (t, e, i) {var n = i(16);t.exports = function (t) {return n(t, "Date");};}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(11),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {this.type = "arc", this.start = [], this.end = [], this.style = { stroke: "#999", lineWidth: 1 };}, i.render = function (t, e) {var i = this,n = i.parsePoint(t, i.start),a = i.parsePoint(t, i.end);if (n && a) {var o = t.center,s = Math.sqrt((n.x - o.x) * (n.x - o.x) + (n.y - o.y) * (n.y - o.y)),c = Math.atan2(n.y - o.y, n.x - o.x),l = Math.atan2(a.y - o.y, a.x - o.x),u = e.addShape("arc", { className: "guide-arc", attrs: r.mix({ x: o.x, y: o.y, r: s, startAngle: c, endAngle: l }, i.style) });return i.element = u, u;}}, e;}(a);a.Arc = o, t.exports = o;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}function r(t, e, i, n) {var r = [];return "left" === t && "top" === e ? (r[0] = 0, r[1] = 0) : "right" === t && "top" === e ? (r[0] = -i, r[1] = 0) : "left" === t && "bottom" === e ? (r[0] = 0, r[1] = Math.floor(-n)) : "right" === t && "bottom" === e ? (r[0] = Math.floor(-i), r[1] = Math.floor(-n)) : "right" === t && "middle" === e ? (r[0] = Math.floor(-i), r[1] = Math.floor(-n / 2)) : "left" === t && "middle" === e ? (r[0] = 0, r[1] = Math.floor(-n / 2)) : "center" === t && "bottom" === e ? (r[0] = Math.floor(-i / 2), r[1] = Math.floor(-n)) : "center" === t && "top" === e ? (r[0] = Math.floor(-i / 2), r[1] = 0) : (r[0] = Math.floor(-i / 2), r[1] = Math.floor(-n / 2)), r;}function a(t, e) {for (var i in e) {e.hasOwnProperty(i) && (t.style[i] = e[i]);}return t;}function o(t) {var e = document.createElement("div");return t = t.replace(/(^\s*)|(\s*$)/g, ""), e.innerHTML = "" + t, e.childNodes[0];}var s = i(0),c = i(11),l = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {this.type = "html", this.position = null, this.alignX = "center", this.alignY = "middle", this.offsetX = null, this.offsetY = null, this.html = null;}, i.render = function (t, e) {var i = this,n = i.parsePoint(t, i.position);if (n) {var c = o(i.html);c = a(c, { position: "absolute", top: Math.floor(n.y) + "px", left: Math.floor(n.x) + "px", visibility: "hidden" });var l = e.get("canvas").get("el"),u = l.parentNode;u = a(u, { position: "relative" });var h = o('<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>');u.appendChild(h), h.appendChild(c);var f = l.offsetTop,p = l.offsetLeft,g = i.alignX,d = i.alignY,v = i.offsetX,y = i.offsetY,m = r(g, d, s.getWidth(c), s.getHeight(c));n.x = n.x + m[0] + p, n.y = n.y + m[1] + f, v && (n.x += v), y && (n.y += y), a(c, { top: Math.floor(n.y) + "px", left: Math.floor(n.x) + "px", visibility: "visible" }), i.element = h;}}, i.remove = function () {var t = this.element;t && t.parentNode && t.parentNode.removeChild(t);}, e;}(c);c.Html = l, t.exports = l;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(11),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {this.type = "line", this.start = [], this.end = [], this.style = { stroke: "#000", lineWidth: 1 };}, i.render = function (t, e) {var i = [];if (i[0] = this.parsePoint(t, this.start), i[1] = this.parsePoint(t, this.end), i[0] && i[1]) {var n = e.addShape("Line", { className: "guide-line", attrs: r.mix({ x1: i[0].x, y1: i[0].y, x2: i[1].x, y2: i[1].y }, this.style) });return this.element = n, n;}}, e;}(a);a.Line = o, t.exports = o;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(11),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {this.type = "rect", this.start = [], this.end = [], this.style = { fill: "#CCD7EB", opacity: .4 };}, i.render = function (t, e) {var i = this.parsePoint(t, this.start),n = this.parsePoint(t, this.end);if (i && n) {var a = e.addShape("rect", { className: "guide-rect", attrs: r.mix({ x: Math.min(i.x, n.x), y: Math.min(i.y, n.y), width: Math.abs(n.x - i.x), height: Math.abs(i.y - n.y) }, this.style) });return this.element = a, a;}}, e;}(a);a.Rect = o, t.exports = o;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(11),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {this.type = "text", this.position = null, this.content = null, this.style = { fill: "#000" }, this.offsetX = 0, this.offsetY = 0;}, i.render = function (t, e) {var i = this.position,n = this.parsePoint(t, i);if (n) {var a = this.content,o = this.style,s = this.offsetX,c = this.offsetY;s && (n.x += s), c && (n.y += c);var l = e.addShape("text", { className: "guide-text", attrs: r.mix({ x: n.x, y: n.y, text: a }, o) });return this.element = l, l;}}, e;}(a);a.Text = o, t.exports = o;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(11),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {this.type = "tag", this.position = null, this.content = null, this.direct = "tl", this.autoAdjust = !0, this.offsetX = 0, this.offsetY = 0, this.side = 4, this.background = { padding: 5, radius: 2, fill: "#1890FF" }, this.textStyle = { fontSize: 12, fill: "#fff", textAlign: "center", textBaseline: "middle" }, this.withPoint = !0, this.pointStyle = { fill: "#1890FF", r: 3, lineWidth: 1, stroke: "#fff" };}, i._getDirect = function (t, e, i, n) {var r = this.direct,a = this.side,o = t.get("canvas"),s = o.get("width"),c = o.get("height"),l = e.x,u = e.y,h = r[0],f = r[1];"t" === h && u - a - n < 0 ? h = "b" : "b" === h && u + a + n > c && (h = "t");var p = "c" === h ? a : 0;return "l" === f && l - p - i < 0 ? f = "r" : "r" === f && l + p + i > s ? f = "l" : "c" === f && (i / 2 + l + p > s ? f = "l" : l - i / 2 - p < 0 && (f = "r")), r = h + f;}, i.render = function (t, e) {var i = this.parsePoint(t, this.position);if (i) {var n = this.content,a = this.background,o = this.textStyle,s = [],c = e.addGroup({ className: "guide-tag" });if (this.withPoint) {var l = c.addShape("Circle", { className: "guide-tag-point", attrs: r.mix({ x: i.x, y: i.y }, this.pointStyle) });s.push(l);}var u = c.addGroup(),h = u.addShape("text", { className: "guide-tag-text", zIndex: 1, attrs: r.mix({ x: 0, y: 0, text: n }, o) });s.push(h);var f = h.getBBox(),p = r.parsePadding(a.padding),g = f.width + p[1] + p[3],d = f.height + p[0] + p[2],v = f.minY - p[0],y = f.minX - p[3],m = u.addShape("rect", { className: "guide-tag-bg", zIndex: -1, attrs: r.mix({ x: y, y: v, width: g, height: d }, a) });s.push(m);var x,_ = this.autoAdjust ? this._getDirect(e, i, g, d) : this.direct,S = this.side,b = i.x + this.offsetX,C = i.y + this.offsetY,P = r.parsePadding(a.radius);"tl" === _ ? (x = [{ x: g + y - S - 1, y: d + v - 1 }, { x: g + y, y: d + v - 1 }, { x: g + y, y: d + S + v }], P[2] = 0, b -= g, C = C - S - d) : "cl" === _ ? (x = [{ x: g + y - 1, y: (d - S) / 2 + v - 1 }, { x: g + y - 1, y: (d + S) / 2 + v + 1 }, { x: g + S + y, y: d / 2 + v }], b = b - g - S, C -= d / 2) : "bl" === _ ? (x = [{ x: g + y, y: -S + v }, { x: g + y - S - 1, y: v + 1 }, { x: g + y, y: v + 1 }], P[1] = 0, b -= g, C += S) : "bc" === _ ? (x = [{ x: g / 2 + y, y: -S + v }, { x: (g - S) / 2 + y - 1, y: v + 1 }, { x: (g + S) / 2 + y + 1, y: v + 1 }], b -= g / 2, C += S) : "br" === _ ? (x = [{ x: y, y: v - S }, { x: y, y: v + 1 }, { x: y + S + 1, y: v + 1 }], P[0] = 0, C += S) : "cr" === _ ? (x = [{ x: y - S, y: d / 2 + v }, { x: y + 1, y: (d - S) / 2 + v - 1 }, { x: y + 1, y: (d + S) / 2 + v + 1 }], b += S, C -= d / 2) : "tr" === _ ? (x = [{ x: y, y: d + S + v }, { x: y, y: d + v - 1 }, { x: S + y + 1, y: d + v - 1 }], P[3] = 0, C = C - d - S) : "tc" === _ && (x = [{ x: (g - S) / 2 + y - 1, y: d + v - 1 }, { x: (g + S) / 2 + y + 1, y: d + v - 1 }, { x: g / 2 + y, y: d + S + v }], b -= g / 2, C = C - d - S);var w = u.addShape("Polygon", { className: "guide-tag-side", zIndex: 0, attrs: { points: x, fill: a.fill } });return s.push(w), m.attr("radius", P), u.moveTo(b - y, C - v), u.sort(), this.element = c, s;}}, e;}(a);a.Tag = o, t.exports = o;}, function (t, e, i) {function n(t) {var e = t.getAttr("color");if (e) {var i = e.getScale(e.type);if (i.isLinear) return i;}var n = t.getXScale(),r = t.getYScale();return r || n;}function r(t, e) {var i,r,a = t._getGroupScales();if (a.length && u.each(a, function (t) {return r = t, !1;}), r) {var o = r.field;i = r.getText(e[o]);} else {var s = n(t);i = s.alias || s.field;}return i;}function a(t, e) {var i = n(t);return i.getText(e[i.field]);}function o(t, e) {var i = t.getAttr("position").getFields()[0],n = t.get("scales")[i];return n.getText(e[n.field]);}function s(t, e) {var i = -1;return u.each(t, function (t, n) {if (t.title === e.title && t.name === e.name && t.value === e.value && t.color === e.color) return i = n, !1;}), i;}function c(t) {var e = [];return u.each(t, function (t) {var i = s(e, t);-1 === i ? e.push(t) : e[i] = t;}), e;}function l(t, e) {return JSON.stringify(t) === JSON.stringify(e);}var u = i(0),h = i(1),f = i(123),p = i(28);h.tooltip = u.deepMix({ triggerOn: ["touchstart", "touchmove"], alwaysShow: !1, showTitle: !1, showCrosshairs: !1, crosshairsStyle: { stroke: "rgba(0, 0, 0, 0.25)", lineWidth: 1 }, showTooltipMarker: !0, background: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] }, titleStyle: { fontSize: 12, fill: "#fff", textAlign: "start", textBaseline: "top" }, nameStyle: { fontSize: 12, fill: "rgba(255, 255, 255, 0.65)", textAlign: "start", textBaseline: "middle" }, valueStyle: { fontSize: 12, fill: "#fff", textAlign: "start", textBaseline: "middle" }, showItemMarker: !0, itemMarkerStyle: { radius: 3, symbol: "circle", lineWidth: 1, stroke: "#fff" }, layout: "horizontal", snap: !1 }, h.tooltip || {});var g = function () {function t(t) {this.enable = !0, this.cfg = {}, this.tooltip = null, this.chart = null, this.timeStamp = 0, u.mix(this, t);var e = this.chart;this.canvasDom = e.get("canvas").get("el");}var e = t.prototype;return e._setCrosshairsCfg = function () {var t = this.chart,e = u.mix({}, h.tooltip),i = t.get("geoms"),n = [];u.each(i, function (t) {var e = t.get("type");-1 === n.indexOf(e) && n.push(e);});var r = t.get("coord").type;return !i.length || "cartesian" !== r && "rect" !== r || 1 === n.length && -1 !== ["line", "area", "path", "point"].indexOf(n[0]) && u.mix(e, { showCrosshairs: !0 }), e;}, e._getMaxLength = function (t) {void 0 === t && (t = {});var e = t,i = e.layout,n = e.plotRange;return "horizontal" === i ? n.br.x - n.bl.x : n.bl.y - n.tr.y;}, e.render = function () {var t = this;if (!t.tooltip) {var e = t.chart,i = e.get("canvas"),n = e.get("frontPlot").addGroup({ className: "tooltipContainer", zIndex: 10 }),r = e.get("backPlot").addGroup({ className: "tooltipContainer" }),a = e.get("plotRange"),o = e.get("coord"),s = t._setCrosshairsCfg(),c = t.cfg;(c = u.deepMix({ plotRange: a, frontPlot: n, backPlot: r, canvas: i, fixed: o.transposed || o.isPolar }, s, c)).maxLength = t._getMaxLength(c), this.cfg = c;var l = new f(c);t.tooltip = l, t.bindEvents();}}, e.clear = function () {var t = this.tooltip;t && t.destroy(), this.tooltip = null, this.prePoint = null, this._lastActive = null, this.unBindEvents();}, e._getTooltipMarkerStyle = function (t) {void 0 === t && (t = {});var e = t,i = e.type,n = e.items,r = this.cfg;if ("rect" === i) {var a,o,s,c,l = this.chart,h = l.get("plotRange"),f = h.tl,p = h.br,g = l.get("coord"),d = n[0],v = n[n.length - 1],y = d.width;g.transposed ? (a = f.x, o = v.y - .75 * y, s = p.x - f.x, c = d.y - v.y + 1.5 * y) : (a = d.x - .75 * y, o = f.y, s = v.x - d.x + 1.5 * y, c = p.y - f.y), t.style = u.mix({ x: a, y: o, width: s, height: c, fill: "#CCD6EC", opacity: .3 }, r.tooltipMarkerStyle);} else t.style = u.mix({ radius: 4, fill: "#fff", lineWidth: 2 }, r.tooltipMarkerStyle);return t;}, e._setTooltip = function (t, e, i) {void 0 === i && (i = {});var n = this._lastActive,r = this.tooltip,a = this.cfg;e = c(e);var o = this.chart,s = o.get("coord"),h = o.getYScales()[0],f = a.snap;if (!1 === f && h.isLinear) {var g,d,v = s.invertPoint(t),y = o.get("plotRange");p.isPointInPlot(t, y) && (s.transposed ? (g = h.invert(v.x), d = t.x, r.setXTipContent(g), r.setXTipPosition(d), r.setYCrosshairPosition(d)) : (g = h.invert(v.y), d = t.y, r.setYTipContent(g), r.setYTipPosition(d), r.setXCrosshairPosition(d)));}if (a.onShow && a.onShow({ x: t.x, y: t.y, tooltip: r, items: e, tooltipMarkerCfg: i }), l(n, e)) !1 === f && (u.directionEnabled(a.crosshairsType, "y") || a.showYTip) && this.chart.get("canvas").draw();else {this._lastActive = e;var m = a.onChange;m && m({ x: t.x, y: t.y, tooltip: r, items: e, tooltipMarkerCfg: i });var x = e[0],_ = x.title || x.name,S = x.x;if (e.length > 1 && (S = (e[0].x + e[e.length - 1].x) / 2), r.setContent(_, e, s.transposed), r.setPosition(e, t), s.transposed) {var b = x.y;e.length > 1 && (b = (e[0].y + e[e.length - 1].y) / 2), r.setYTipContent(_), r.setYTipPosition(b), r.setXCrosshairPosition(b), f && (r.setXTipContent(x.value), r.setXTipPosition(S), r.setYCrosshairPosition(S));} else r.setXTipContent(_), r.setXTipPosition(S), r.setYCrosshairPosition(S), f && (r.setYTipContent(x.value), r.setYTipPosition(x.y), r.setXCrosshairPosition(x.y));var C = i.items;a.showTooltipMarker && C.length ? (i = this._getTooltipMarkerStyle(i), r.setMarkers(i)) : r.clearMarkers(), r.show();}}, e.showTooltip = function (t) {var e,i,n = this,s = n.chart,c = [],l = [],f = n.cfg;f.showItemMarker && (i = f.itemMarkerStyle);var p = s.get("geoms"),g = s.get("coord");if (u.each(p, function (n) {if (n.get("visible")) {var s = n.get("type"),f = n.getSnapRecords(t);u.each(f, function (t) {if (t.x && t.y) {var f = t.x,p = t.y,d = t._origin,v = t.color,y = { x: f, y: u.isArray(p) ? p[1] : p, color: v || h.defaultColor, origin: d, name: r(n, d), value: a(n, d), title: o(n, d) };i && (y.marker = u.mix({ fill: v || h.defaultColor }, i)), l.push(y), -1 !== ["line", "area", "path"].indexOf(s) ? (e = "circle", c.push(y)) : "interval" !== s || "cartesian" !== g.type && "rect" !== g.type || (e = "rect", y.width = n.getSize(t._origin), c.push(y));}});}}), l.length) {var d = { items: c, type: e };n._setTooltip(t, l, d);} else n.hideTooltip();}, e.hideTooltip = function () {var t = this.cfg;this._lastActive = null;var e = this.tooltip;e && (e.hide(), t.onHide && t.onHide({ tooltip: e }), this.chart.get("canvas").draw());}, e.handleShowEvent = function (t) {var e = this.chart;if (this.enable && !e.get("_closeTooltip")) {var i = e.get("plotRange"),n = u.createEvent(t, e);if (p.isPointInPlot(n, i) || this.cfg.alwaysShow) {var r = this.timeStamp,a = +new Date();a - r > 16 && (this.showTooltip(n), this.timeStamp = a);} else this.hideTooltip();}}, e.handleHideEvent = function () {var t = this.chart;this.enable && !t.get("_closeTooltip") && this.hideTooltip();}, e.handleDocEvent = function (t) {var e = this.chart;if (this.enable && !e.get("_closeTooltip")) {var i = this.canvasDom;t.target !== i && this.hideTooltip();}}, e._handleEvent = function (t, e, i) {var n = this.canvasDom;u.each([].concat(t), function (t) {"bind" === i ? u.addEventListener(n, t, e) : u.removeEventListener(n, t, e);});}, e.bindEvents = function () {var t = this.cfg,e = t.triggerOn,i = t.triggerOff,n = t.alwaysShow,r = u.wrapBehavior(this, "handleShowEvent"),a = u.wrapBehavior(this, "handleHideEvent");if (e && this._handleEvent(e, r, "bind"), i && this._handleEvent(i, a, "bind"), !n) {var o = u.wrapBehavior(this, "handleDocEvent");u.isBrowser && u.addEventListener(document, "touchstart", o);}}, e.unBindEvents = function () {var t = this.cfg,e = t.triggerOn,i = t.triggerOff,n = t.alwaysShow,r = u.getWrapBehavior(this, "handleShowEvent"),a = u.getWrapBehavior(this, "handleHideEvent");if (e && this._handleEvent(e, r, "unBind"), i && this._handleEvent(i, a, "unBind"), !n) {var o = u.getWrapBehavior(this, "handleDocEvent");u.isBrowser && u.removeEventListener(document, "touchstart", o);}}, t;}();t.exports = { init: function init(t) {var e = new g({ chart: t });t.set("tooltipController", e), t.tooltip = function (t, i) {return u.isObject(t) && (i = t, t = !0), e.enable = t, i && (e.cfg = i), this;};}, afterGeomDraw: function afterGeomDraw(t) {var e = t.get("tooltipController");e.render(), t.showTooltip = function (t) {return e.showTooltip(t), this;}, t.hideTooltip = function () {return e.hideTooltip(), this;};}, clearInner: function clearInner(t) {t.get("tooltipController").clear();} };}, function (t, e, i) {var n = i(0),r = i(97),a = i(98),o = i(124),s = function () {function t(t) {n.deepMix(this, this.getDefaultCfg(), t);var e = this.frontPlot;if (!this.custom) {var i = new a(n.mix({ parent: e, zIndex: 3 }, t));this.container = i;var r = this.fixed,s = this.background;r || (this.tooltipArrow = e.addShape("Polygon", { className: "tooltip-arrow", visible: !1, zIndex: 2, attrs: n.mix({ points: [] }, s) }));}if (this.showXTip) {var c = this.xTipBackground,l = new o({ className: "xTip", background: c, visible: !1 });e.add(l.container), this.xTipBox = l;}if (this.showYTip) {var u = this.yTipBackground,h = new o({ className: "yTip", background: u, visible: !1 });e.add(h.container), this.yTipBox = h;}this.showCrosshairs && this._renderCrosshairs(), e.sort();}var e = t.prototype;return e.getDefaultCfg = function () {return { showCrosshairs: !1, crosshairsStyle: { stroke: "rgba(0, 0, 0, 0.25)", lineWidth: 1 }, crosshairsType: "y", showXTip: !1, showYTip: !1, xTip: null, xTipBackground: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] }, yTip: null, yTipBackground: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] }, background: null, layout: "horizontal", offsetX: 0, offsetY: 0 };}, e.setContent = function (t, e) {if (this.title = t, this.items = e, !this.custom) {var i = this.container;i.setTitle(t), i.setItems(e);}}, e.setYTipContent = function (t) {var e = this.yTip;t = n.isFunction(e) ? e(t) : n.mix({ text: t }, e), this.yTipBox && this.yTipBox.updateContent(t);}, e.setYTipPosition = function (t) {var e = this.plotRange,i = this.crosshairsShapeX;if (this.showYTip) {var n = this.yTipBox,r = n.getHeight(),a = n.getWidth(),o = e.tl.x - a,s = t - r / 2;s <= e.tl.y && (s = e.tl.y), s + r >= e.br.y && (s = e.br.y - r), o < 0 && (o = e.tl.x, i && i.attr("x1", e.tl.x + a)), n.updatePosition(o, s);}}, e.setXTipContent = function (t) {var e = this.xTip;t = n.isFunction(e) ? e(t) : n.mix({ text: t }, e), this.xTipBox && this.xTipBox.updateContent(t);}, e.setXTipPosition = function (t) {var e = this.showXTip,i = this.canvas,n = this.plotRange,r = this.xTipBox,a = this.crosshairsShapeY;if (e) {var o = i.get("height"),s = r.getWidth(),c = r.getHeight(),l = t - s / 2,u = n.br.y;l <= n.tl.x && (l = n.tl.x), l + s >= n.tr.x && (l = n.tr.x - s), o - u < c && (u -= c), r.updatePosition(l, u), a && a.attr("y1", u);}}, e.setXCrosshairPosition = function (t) {this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, t);}, e.setYCrosshairPosition = function (t) {this.crosshairsShapeY && this.crosshairsShapeY.moveTo(t, 0);}, e.setPosition = function (t) {var e = this.container,i = this.plotRange,r = this.offsetX,a = this.offsetY,o = this.fixed,s = this.tooltipArrow;if (e) {var c = e.container.getBBox(),l = c.minX,u = c.minY,h = c.width,f = c.height,p = i.tl,g = i.tr,d = 0,v = p.y - f - 4 + a;if (o) d = (p.x + g.x) / 2 - h / 2 + r;else {var y;if (y = t.length > 1 ? (t[0].x + t[t.length - 1].x) / 2 : t[0].x, (d = y - h / 2 + r) < p.x && (d = p.x), d + h > g.x && (d = g.x - h), s) {s.attr("points", [{ x: y - 3, y: p.y - 4 + a }, { x: y + 3, y: p.y - 4 + a }, { x: y, y: p.y + a }]);var m = e.backShape,x = n.parsePadding(m.attr("radius"));y === p.x ? (x[3] = 0, s.attr("points", [{ x: p.x, y: p.y + a }, { x: p.x, y: p.y - 4 + a }, { x: p.x + 4, y: p.y - 4 + a }])) : y === g.x && (x[2] = 0, s.attr("points", [{ x: g.x, y: p.y + a }, { x: g.x - 4, y: p.y - 4 + a }, { x: g.x, y: p.y - 4 + a }])), m.attr("radius", x);}}e.moveTo(d - l, v - u);}}, e.setMarkers = function (t) {void 0 === t && (t = {});var e = this,i = t,a = i.items,o = i.style,s = i.type,c = e._getMarkerGroup(s);if ("circle" === s) for (var l = 0, u = a.length; l < u; l++) {var h = a[l],f = new r({ className: "tooltip-circle-marker", attrs: n.mix({ x: h.x, y: h.y, stroke: h.color }, o) });c.add(f);} else c.addShape("rect", { className: "tooltip-rect-marker", attrs: o });}, e.clearMarkers = function () {var t = this.markerGroup;t && t.clear();}, e.show = function () {var t = this.crosshairsShapeX,e = this.crosshairsShapeY,i = this.markerGroup,n = this.container,r = this.tooltipArrow,a = this.xTipBox,o = this.yTipBox,s = this.canvas;t && t.show(), e && e.show(), i && i.show(), n && n.show(), r && r.show(), a && a.show(), o && o.show(), s.draw();}, e.hide = function () {var t = this.crosshairsShapeX,e = this.crosshairsShapeY,i = this.markerGroup,n = this.container,r = this.tooltipArrow,a = this.xTipBox,o = this.yTipBox;t && t.hide(), e && e.hide(), i && i.hide(), n && n.hide(), r && r.hide(), a && a.hide(), o && o.hide();}, e.destroy = function () {var t = this.crosshairsShapeX,e = this.crosshairsShapeY,i = this.markerGroup,n = this.container,r = this.tooltipArrow,a = this.xTipBox,o = this.yTipBox;t && t.remove(!0), e && e.remove(!0), i && i.remove(!0), r && r.remove(!0), n && n.clear(), a && a.clear(), o && o.clear(), this.destroyed = !0;}, e._getMarkerGroup = function (t) {var e = this.markerGroup;return e ? e.clear() : ("circle" === t ? (e = this.frontPlot.addGroup({ zIndex: 1 }), this.frontPlot.sort()) : e = this.backPlot.addGroup(), this.markerGroup = e), e;}, e._renderCrosshairs = function () {var t = this.crosshairsType,e = this.crosshairsStyle,i = this.frontPlot,r = this.plotRange,a = r.tl,o = r.br;n.directionEnabled(t, "x") && (this.crosshairsShapeX = i.addShape("Line", { className: "tooltip-crosshairs-x", zIndex: 0, visible: !1, attrs: n.mix({ x1: a.x, y1: 0, x2: o.x, y2: 0 }, e) })), n.directionEnabled(t, "y") && (this.crosshairsShapeY = i.addShape("Line", { className: "tooltip-crosshairs-y", zIndex: 0, visible: !1, attrs: n.mix({ x1: 0, y1: o.y, x2: 0, y2: a.y }, e) }));}, t;}();t.exports = s;}, function (t, e, i) {var n = i(0),r = i(5).Group,a = function () {function t(t) {n.deepMix(this, this.getDefaultCfg(), t), this._init();var e = this.content,i = this.x,r = this.y;n.isNil(e) || this.updateContent(e), this.updatePosition(i, r);}var e = t.prototype;return e.getDefaultCfg = function () {return { x: 0, y: 0, content: "", textStyle: { fontSize: 12, fill: "#fff", textAlign: "center", textBaseline: "middle" }, background: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] }, width: 0, height: 0, className: "" };}, e._init = function () {var t = this.content,e = this.textStyle,i = this.background,a = this.className,o = this.visible,s = new r({ className: a, zIndex: 0, visible: o }),c = s.addShape("Text", { className: a + "-text", zIndex: 1, attrs: n.mix({ text: t, x: 0, y: 0 }, e) }),l = s.addShape("Rect", { className: a + "-bg", zIndex: -1, attrs: n.mix({ x: 0, y: 0, width: 0, height: 0 }, i) });s.sort(), this.container = s, this.textShape = c, this.backgroundShape = l;}, e._getBBox = function () {var t = this.textShape,e = this.background,i = t.getBBox(),r = n.parsePadding(e.padding),a = i.width + r[1] + r[3],o = i.height + r[0] + r[2];return { x: i.minX - r[3], y: i.minY - r[0], width: a, height: o };}, e.updateContent = function (t) {var e = this.textShape,i = this.backgroundShape;if (!n.isNil(t)) {n.isObject(t) || (t = { text: t }), e.attr(t);var r = this._getBBox(),a = r.x,o = r.y,s = r.width,c = r.height,l = this.width || s,u = this.height || c;i.attr({ x: a, y: o, width: l, height: u }), this._width = l, this._height = u, this.content = t.text;}}, e.updatePosition = function (t, e) {var i = this.container,n = this._getBBox(),r = n.x,a = n.y;i.moveTo(t - r, e - a), this.x = t - r, this.y = e - a;}, e.getWidth = function () {return this._width;}, e.getHeight = function () {return this._height;}, e.show = function () {this.container.show();}, e.hide = function () {this.container.hide();}, e.clear = function () {var t = this.container;t.clear(), t.remove(!0), this.container = null, this.textShape = null, this.backgroundShape = null;}, t;}();t.exports = a;}, function (t, e, i) {var n = i(0),r = i(11),a = i(1);a.guide = n.deepMix({ line: { style: { stroke: "#a3a3a3", lineWidth: 1 }, top: !0 }, text: { style: { fill: "#787878", textAlign: "center", textBaseline: "middle" }, offsetX: 0, offsetY: 0, top: !0 }, rect: { style: { fill: "#fafafa" }, top: !1 }, arc: { style: { stroke: "#a3a3a3" }, top: !0 }, html: { offsetX: 0, offsetY: 0, alignX: "center", alignY: "middle" }, tag: { top: !0, offsetX: 0, offsetY: 0, side: 4, background: { padding: 5, radius: 2, fill: "#1890FF" }, textStyle: { fontSize: 12, fill: "#fff", textAlign: "center", textBaseline: "middle" } }, point: { top: !0, offsetX: 0, offsetY: 0, style: { fill: "#fff", r: 3, lineWidth: 2, stroke: "#1890ff" } } }, a.guide || {});var o = function () {function t(t) {this.guides = [], this.xScale = null, this.yScales = null, this.guideShapes = [], n.mix(this, t);}var e = t.prototype;return e._toString = function (t) {return n.isFunction(t) && (t = t(this.xScale, this.yScales)), t = t.toString();}, e._getId = function (t, e) {var i = e.id;if (!i) {var n = e.type;i = "arc" === n || "line" === n || "rect" === n ? this._toString(e.start) + "-" + this._toString(e.end) : this._toString(e.position);}return i;}, e.paint = function (t) {var e = this,i = e.chart,r = e.guides,a = e.xScale,o = e.yScales,s = [];n.each(r, function (n, r) {n.xScale = a, n.yScales = o;var c;"regionFilter" === n.type ? n.chart = i : c = n.top ? e.frontPlot : e.backPlot, n.coord = t, n.container = c, n.canvas = i.get("canvas");var l = n.render(t, c);if (l) {var u = e._getId(l, n);[].concat(l).forEach(function (t) {t._id = t.get("className") + "-" + u, t.set("index", r), s.push(t);});}}), e.guideShapes = s;}, e.clear = function () {return this.reset(), this.guides = [], this;}, e.reset = function () {var t = this.guides;n.each(t, function (t) {t.remove();});}, e._createGuide = function (t, e) {var i = n.upperFirst(t),o = new r[i](n.deepMix({}, a.guide[t], e));return this.guides.push(o), o;}, e.line = function (t) {return void 0 === t && (t = {}), this._createGuide("line", t);}, e.text = function (t) {return void 0 === t && (t = {}), this._createGuide("text", t);}, e.arc = function (t) {return void 0 === t && (t = {}), this._createGuide("arc", t);}, e.html = function (t) {return void 0 === t && (t = {}), this._createGuide("html", t);}, e.rect = function (t) {return void 0 === t && (t = {}), this._createGuide("rect", t);}, e.tag = function (t) {return void 0 === t && (t = {}), this._createGuide("tag", t);}, e.point = function (t) {return void 0 === t && (t = {}), this._createGuide("point", t);}, e.regionFilter = function (t) {return void 0 === t && (t = {}), this._createGuide("regionFilter", t);}, t;}();t.exports = { init: function init(t) {var e = new o({ frontPlot: t.get("frontPlot").addGroup({ zIndex: 20, className: "guideContainer" }), backPlot: t.get("backPlot").addGroup({ className: "guideContainer" }) });t.set("guideController", e), t.guide = function () {return e;};}, afterGeomDraw: function afterGeomDraw(t) {var e = t.get("guideController");if (e.guides.length) {var i = t.getXScale(),n = t.getYScales(),r = t.get("coord");e.xScale = i, e.yScales = n, e.chart = t, e.paint(r);}}, clear: function clear(t) {t.get("guideController").clear();}, repaint: function repaint(t) {t.get("guideController").reset();} };}, function (t, e, i) {function n(t, e) {var i = 0;switch (e = r.parsePadding(e), t) {case "top":i = e[0];break;case "right":i = e[1];break;case "bottom":i = e[2];break;case "left":i = e[3];}return i;}var r = i(0),a = i(98),o = i(1),s = { itemMarginBottom: 12, itemGap: 10, showTitle: !1, titleStyle: { fontSize: 12, fill: "#808080", textAlign: "start", textBaseline: "top" }, nameStyle: { fill: "#808080", fontSize: 12, textAlign: "start", textBaseline: "middle" }, valueStyle: { fill: "#000000", fontSize: 12, textAlign: "start", textBaseline: "middle" }, unCheckStyle: { fill: "#bfbfbf" }, itemWidth: "auto", wordSpace: 6, selectedMode: "multiple" };o.legend = r.deepMix({ common: s, right: r.mix({ position: "right", layout: "vertical" }, s), left: r.mix({ position: "left", layout: "vertical" }, s), top: r.mix({ position: "top", layout: "horizontal" }, s), bottom: r.mix({ position: "bottom", layout: "horizontal" }, s) }, o.legend || {});var c = function () {function t(t) {this.legendCfg = {}, this.enable = !0, this.position = "top", r.mix(this, t);var e = this.chart;this.canvasDom = e.get("canvas").get("el"), this.clear();}var e = t.prototype;return e.addLegend = function (t, e, i) {var n = this,r = n.legendCfg,a = t.field,o = r[a];if (!1 === o) return null;if (o && o.custom) n.addCustomLegend(a);else {var s = r.position || n.position;o && o.position && (s = o.position), t.isCategory && n._addCategoryLegend(t, e, s, i);}}, e.addCustomLegend = function (t) {var e = this,i = e.legendCfg;t && i[t] && (i = i[t]);var n = i.position || e.position,s = e.legends;s[n] = s[n] || [];var c = i.items;if (!c) return null;var l = e.container;r.each(c, function (t) {r.isPlainObject(t.marker) ? t.marker.radius = t.marker.radius || 3 : t.marker = { symbol: t.marker || "circle", fill: t.fill, radius: 3 }, t.checked = !!r.isNil(t.checked) || t.checked, t.name = t.name || t.value;});var u = new a(r.deepMix({}, o.legend[n], i, { maxLength: e._getMaxLength(n), items: c, parent: l }));s[n].push(u);}, e.clear = function () {var t = this.legends;r.each(t, function (t) {r.each(t, function (t) {t.clear();});}), this.legends = {}, this.unBindEvents();}, e._isFiltered = function (t, e, i) {var n = !1;return r.each(e, function (e) {if (n = n || t.getText(e) === t.getText(i)) return !1;}), n;}, e._getMaxLength = function (t) {var e = this.chart,i = r.parsePadding(e.get("appendPadding"));return "right" === t || "left" === t ? e.get("height") - (i[0] + i[2]) : e.get("width") - (i[1] + i[3]);}, e._addCategoryLegend = function (t, e, i, n) {var s = this,c = s.legendCfg,l = s.legends,u = s.container,h = s.chart,f = t.field;l[i] = l[i] || [];var p = "circle";c[f] && c[f].marker ? p = c[f].marker : c.marker && (p = c.marker), r.each(e, function (e) {r.isPlainObject(p) ? r.mix(e.marker, p) : e.marker.symbol = p, n && (e.checked = s._isFiltered(t, n, e.dataValue));}), h.get("legendItems")[f] = e;var g = r.deepMix({}, o.legend[i], c[f] || c, { maxLength: s._getMaxLength(i), items: e, field: f, filterVals: n, parent: u });g.showTitle && r.deepMix(g, { title: t.alias || t.field });var d = new a(g);return l[i].push(d), d;}, e._alignLegend = function (t, e, i) {var n = this,a = n.plotRange,o = a.tl,s = a.bl,c = n.chart,l = t.offsetX || 0,u = t.offsetY || 0,h = c.get("width"),f = c.get("height"),p = r.parsePadding(c.get("appendPadding")),g = t.getHeight(),d = t.getWidth(),v = 0,y = 0;if ("left" === i || "right" === i) {var m = t.verticalAlign || "middle",x = Math.abs(o.y - s.y);v = "left" === i ? p[3] : h - d - p[1], y = (x - g) / 2 + o.y, "top" === m ? y = o.y : "bottom" === m && (y = s.y - g), e && (y = e.get("y") - g - 12);} else {var _ = t.align || "left";if (v = p[3], "center" === _ ? v = h / 2 - d / 2 : "right" === _ && (v = h - (d + p[1])), y = "top" === i ? p[0] + Math.abs(t.container.getBBox().minY) : f - g, e) {var S = e.getWidth();v = e.x + S + 12;}}"bottom" === i && u > 0 && (u = 0), "right" === i && l > 0 && (l = 0), t.moveTo(v + l, y + u);}, e.alignLegends = function () {var t = this,e = t.legends;return r.each(e, function (e, i) {r.each(e, function (n, r) {var a = e[r - 1];t._alignLegend(n, a, i);});}), t;}, e.handleEvent = function (t) {var e = this,i = e.chart,n = r.createEvent(t, i),a = function (t, i) {var n = null,a = e.legends;return r.each(a, function (e) {r.each(e, function (e) {var a = e.itemsGroup,o = e.legendHitBoxes,s = a.get("children");if (s.length) {var c = e.x,l = e.y;r.each(o, function (r, a) {if (t >= r.x + c && t <= r.x + r.width + c && i >= r.y + l && i <= r.height + r.y + l) return n = { clickedItem: s[a], clickedLegend: e }, !1;});}});}), n;}(n.x, n.y);if (a && !1 !== a.clickedLegend.clickable) {var o = a.clickedItem,s = a.clickedLegend;if (s.onClick) t.clickedItem = o, s.onClick(t);else if (!s.custom) {var c = o.get("checked"),l = o.get("dataValue"),u = s.filterVals,h = s.field;"single" === s.selectedMode ? i.filter(h, function (t) {return t === l;}) : (c ? r.Array.remove(u, l) : u.push(l), i.filter(h, function (t) {return -1 !== u.indexOf(t);})), i.repaint();}}}, e.bindEvents = function () {var t = this.legendCfg.triggerOn || "touchstart",e = r.wrapBehavior(this, "handleEvent");r.addEventListener(this.canvasDom, t, e);}, e.unBindEvents = function () {var t = this.legendCfg.triggerOn || "touchstart",e = r.getWrapBehavior(this, "handleEvent");r.removeEventListener(this.canvasDom, t, e);}, t;}();t.exports = { init: function init(t) {var e = new c({ container: t.get("backPlot"), plotRange: t.get("plotRange"), chart: t });t.set("legendController", e), t.legend = function (t, i) {var n = e.legendCfg;return e.enable = !0, r.isBoolean(t) ? (e.enable = t, n = i || {}) : r.isObject(t) ? n = t : n[t] = i, e.legendCfg = n, this;};}, beforeGeomDraw: function beforeGeomDraw(t) {var e = t.get("legendController");if (!e.enable) return null;var i = e.legendCfg;if (i && i.custom) e.addCustomLegend();else {var a = t.getLegendItems(),o = t.get("scales"),s = t.get("filters");r.each(a, function (t, i) {var n,r = o[i],a = r.values;n = s && s[i] ? a.filter(s[i]) : a.slice(0), e.addLegend(r, t, n);});}i && !1 !== i.clickable && e.bindEvents();var c = e.legends,l = { top: 0, right: 0, bottom: 0, left: 0 };r.each(c, function (e, i) {var a = 0;r.each(e, function (t) {var e = t.getWidth(),n = t.getHeight();"top" === i || "bottom" === i ? (a = Math.max(a, n), t.offsetY > 0 && (a += t.offsetY)) : (a = Math.max(a, e), t.offsetX > 0 && (a += t.offsetX));}), l[i] = a + n(i, t.get("appendPadding"));}), t.set("legendRange", l);}, afterGeomDraw: function afterGeomDraw(t) {t.get("legendController").alignLegends();}, clearInner: function clearInner(t) {t.get("legendController").clear(), t.set("legendRange", null);} };}, function (t, e, i) {function n(t, e) {var i = {};for (var n in e) {f.isNumber(t[n]) && t[n] !== e[n] ? i[n] = e[n] : f.isArray(t[n]) && JSON.stringify(t[n]) !== JSON.stringify(e[n]) && (i[n] = e[n]);}return i;}function r(t, e, i) {var n,r = t.get("type"),a = "geom" + i + "-" + r,o = t.getXScale(),s = t.getYScale(),c = o.field || "x",l = s.field || "y",u = e[l];n = o.isIdentity ? o.value : e[c], a += "interval" === r || "schema" === r ? "-" + n : "line" === r || "area" === r || "path" === r ? "-" + r : o.isCategory ? "-" + n : "-" + n + "-" + u;var h = t._getGroupScales();return f.each(h, function (t) {var i = t.field;"identity" !== t.type && (a += "-" + e[i]);}), a;}function a(t, e, i) {var n = [];return f.each(t, function (t, a) {var o = t.get("container").get("children"),s = t.get("type"),c = f.isNil(t.get("animateCfg")) ? u(s, e) : t.get("animateCfg");!1 !== c && f.each(o, function (e, o) {e.get("className") === s && (e._id = r(t, e.get("origin")._origin, a), e.set("coord", i), e.set("animateCfg", c), e.set("index", o), n.push(e));}), t.set("shapes", o);}), n;}function o(t) {for (var e = {}, i = 0, n = t.length; i < n; i++) {var r = t[i];if (r._id && !r.isClip) {var a = r._id;e[a] = { _id: a, type: r.get("type"), attrs: f.mix({}, r._attrs.attrs), className: r.get("className"), geomType: r.get("className"), index: r.get("index"), coord: r.get("coord"), animateCfg: r.get("animateCfg") };}}return e;}function s(t, e, i, n) {return f.isFunction(n) ? n : f.isString(n) ? v.Action[n] : v.getAnimation(t, e, i);}function c(t, e, i) {if (!1 === i || f.isObject(i) && !1 === i[e]) return !1;var n = v.getAnimateCfg(t, e);return i && i[e] ? f.deepMix({}, n, i[e]) : n;}function l(t, e, i) {var r,a,o = [],l = [];f.each(e, function (e) {var i = t[e._id];i ? (e.set("cacheShape", i), o.push(e), delete t[e._id]) : l.push(e);}), f.each(t, function (t) {var e = t.className,n = t.coord,o = t._id,l = t.attrs,u = t.index,h = t.type;if (!1 === (a = c(e, "leave", t.animateCfg))) return !0;if (r = s(e, n, "leave", a.animation), f.isFunction(r)) {var p = i.addShape(h, { attrs: l, index: u, canvas: i, className: e });p._id = o, r(p, a, n);}}), f.each(o, function (t) {var e = t.get("className");if (!1 === (a = c(e, "update", t.get("animateCfg")))) return !0;var i = t.get("coord"),o = t.get("cacheShape").attrs,l = n(o, t._attrs.attrs);Object.keys(l).length && (r = s(e, i, "update", a.animation), f.isFunction(r) ? r(t, a, i) : (t.attr(o), t.animate().to({ attrs: l, duration: a.duration, easing: a.easing, delay: a.delay }).onEnd(function () {t.set("cacheShape", null);})));}), f.each(l, function (t) {var e = t.get("className"),i = t.get("coord");if (!1 === (a = c(e, "enter", t.get("animateCfg")))) return !0;if (r = s(e, i, "enter", a.animation), f.isFunction(r)) if ("interval" === e && i.isPolar && i.transposed) {var n = t.get("index"),l = o[n - 1];r(t, a, l);} else r(t, a, i);});}function u(t, e) {if (!t) return null;var i = e.get("animate");return t.indexOf("guide-tag") > -1 && (t = "guide-tag"), f.isObject(i) ? i[t] : !1 !== i && null;}var h,f = i(0),p = i(27),g = i(128),d = i(129),v = i(99),y = i(131),m = i(132),x = i(15);p.prototype.animate = function () {var t = f.mix({}, this.get("attrs"));return new d(this, t, h);}, x.prototype.animate = function (t) {return this.set("animate", t), this;}, v.Action = y, v.defaultCfg = { interval: { enter: function enter(t) {return t.isPolar && t.transposed ? function (t) {t.set("zIndex", -1), t.get("parent").sort();} : y.fadeIn;} }, area: { enter: function enter(t) {return t.isPolar ? null : y.fadeIn;} }, line: { enter: function enter(t) {return t.isPolar ? null : y.fadeIn;} }, path: { enter: function enter(t) {return t.isPolar ? null : y.fadeIn;} } };var _ = { line: function line(t) {return t.isPolar ? m.groupScaleInXY : m.groupWaveIn;}, area: function area(t) {return t.isPolar ? m.groupScaleInXY : m.groupWaveIn;}, path: function path(t) {return t.isPolar ? m.groupScaleInXY : m.groupWaveIn;}, point: function point() {return m.shapesScaleInXY;}, interval: function interval(t) {var e;return t.isPolar ? (e = m.groupScaleInXY, t.transposed && (e = m.groupWaveIn)) : e = t.transposed ? m.groupScaleInX : m.groupScaleInY, e;}, schema: function schema() {return m.groupWaveIn;} };t.exports = { afterCanvasInit: function afterCanvasInit() {(h = new g()).play();}, beforeCanvasDraw: function beforeCanvasDraw(t) {if (!1 !== t.get("animate")) {var e = t.get("isUpdate"),i = t.get("canvas"),n = t.get("coord"),r = t.get("geoms"),h = i.get("caches") || [];0 === h.length && (e = !1);var p = a(r, t, n),g = t.get("axisController"),d = g.frontPlot,y = g.backPlot,x = d.get("children").concat(y.get("children")),S = [];t.get("guideController") && (S = t.get("guideController").guideShapes);var b = [];if (x.concat(S).forEach(function (e) {var i = u(e.get("className"), t);e.set("coord", n), e.set("animateCfg", i), b.push(e), p.push(e);}), i.set("caches", o(p)), e) l(h, p, i);else {var C, P;f.each(r, function (e) {var i = e.get("type"),r = f.isNil(e.get("animateCfg")) ? u(i, t) : e.get("animateCfg");if (!1 !== r) if (C = c(i, "appear", r), P = s(i, n, "appear", C.animation), f.isFunction(P)) {var a = e.get("shapes");f.each(a, function (t) {P(t, C, n);});} else if (_[i]) {P = m[C.animation] || _[i](n);var o = e.getYScale(),l = n.convertPoint({ x: 0, y: o.scale(e.getYMinValue()) }),h = e.get("container");P && P(h, C, n, l);}}), f.each(b, function (t) {var e = t.get("animateCfg"),i = t.get("className");if (e && e.appear) {var r = v.getAnimateCfg(i, "appear"),a = f.deepMix({}, r, e.appear),o = s(i, n, "appear", a.animation);f.isFunction(o) && o(t, a, n);}});}}}, afterCanvasDestroyed: function afterCanvasDestroyed() {h.stop();} };}, function (t, e, i) {var n = i(39).requestAnimationFrame,r = "object" == typeof performance && performance.now ? performance : Date,a = function () {function t() {this.anims = [], this.time = null, this.playing = !1, this.canvas = [];}var e = t.prototype;return e.play = function () {function t() {e.playing && (n(t), e.update());}var e = this;e.time = r.now(), e.playing = !0, n(t);}, e.stop = function () {this.playing = !1, this.time = null, this.canvas = [];}, e.update = function () {var t = r.now();this.canvas = [];for (var e = 0; e < this.anims.length; e++) {var i = this.anims[e];if (!(t < i.startTime || i.hasEnded)) {var n = i.shape;if (n.get("destroyed")) this.anims.splice(e, 1), e--;else {var a = i.startState,o = i.endState,s = i.interpolate,c = i.duration;t >= i.startTime && !i.hasStarted && (i.hasStarted = !0, i.onStart && i.onStart());var l = (t - i.startTime) / c;if (l = Math.max(0, Math.min(l, 1)), l = i.easing(l), i.onFrame) i.onFrame(l);else for (var u in s) {var h = (0, s[u])(l),f = void 0;if ("points" === u) {f = [];for (var p = Math.max(a.points.length, o.points.length), g = 0; g < p; g += 2) {f.push({ x: h[g], y: h[g + 1] });}} else f = h;n._attrs.attrs[u] = f, n._attrs.bbox = null;}var d = n.get("canvas");-1 === this.canvas.indexOf(d) && this.canvas.push(d), i.onUpdate && i.onUpdate(l), t >= i.endTime && !i.hasEnded && (i.hasEnded = !0, i.onEnd && i.onEnd()), 1 === l && (this.anims.splice(e, 1), e--);}}}this.canvas.map(function (t) {return t.draw(), t;}), this.time = r.now();}, t;}();t.exports = a;}, function (t, e, i) {function n(t) {for (var e = [], i = 0, n = t.length; i < n; i++) {t[i] && (e.push(t[i].x), e.push(t[i].y));}return e;}function r(t, e) {return t = +t, e -= t, function (i) {return t + e * i;};}function a(t, e) {var i,n = e ? e.length : 0,a = t ? Math.min(n, t.length) : 0,o = new Array(a),s = new Array(n);for (i = 0; i < a; ++i) {o[i] = r(t[i], e[i]);}for (; i < n; ++i) {s[i] = e[i];}return function (t) {for (i = 0; i < a; ++i) {s[i] = o[i](t);}return s;};}var o = i(130),s = function () {function t(t, e, i) {this.hasStarted = !1, this.hasEnded = !1, this.shape = t, this.source = e, this.timeline = i, this.animate = null;}var e = t.prototype;return e.to = function (t) {void 0 === t && (t = {});var e,i = t.delay || 0,s = t.attrs || {},c = t.duration || 1e3;e = "function" == typeof t.easing ? t.easing : o[t.easing] || o.linear;var l = { shape: this.shape, startTime: this.timeline.time + i, duration: c, easing: e },u = {};for (var h in s) {var f = this.source[h],p = s[h];"points" === h ? (f = n(f), p = n(p), u.points = a(f, p), this.source.points = f, s.points = p) : "matrix" === h ? u.matrix = a(f, p) : u[h] = r(f, p);}return l.interpolate = u, l.startState = this.source, l.endState = s, l.endTime = l.startTime + c, this.timeline.anims.push(l), this.animate = l, this;}, e.onFrame = function (t) {return this.animate && (this.animate.onFrame = function (e) {t(e);}), this;}, e.onStart = function (t) {return this.animate && (this.animate.onStart = function () {t();}), this;}, e.onUpdate = function (t) {return this.animate && (this.animate.onUpdate = function (e) {t(e);}), this;}, e.onEnd = function (t) {return this.animate && (this.animate.onEnd = function () {t();}), this;}, t;}();t.exports = s;}, function (t, e) {var i = { linear: function linear(t) {return t;}, quadraticIn: function quadraticIn(t) {return t * t;}, quadraticOut: function quadraticOut(t) {return t * (2 - t);}, quadraticInOut: function quadraticInOut(t) {return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);}, cubicIn: function cubicIn(t) {return t * t * t;}, cubicOut: function cubicOut(t) {return --t * t * t + 1;}, cubicInOut: function cubicInOut(t) {return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);}, elasticIn: function elasticIn(t) {var e,i = .1,n = .4;return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n));}, elasticOut: function elasticOut(t) {var e,i = .1,n = .4;return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);}, elasticInOut: function elasticInOut(t) {var e,i = .1,n = .4;return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1);}, backIn: function backIn(t) {var e = 1.70158;return t * t * ((e + 1) * t - e);}, backOut: function backOut(t) {var e = 1.70158;return (t -= 1) * t * ((e + 1) * t + e) + 1;}, backInOut: function backInOut(t) {var e = 2.5949095;return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);}, bounceIn: function bounceIn(t) {return 1 - i.bounceOut(1 - t);}, bounceOut: function bounceOut(t) {return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;}, bounceInOut: function bounceInOut(t) {return t < .5 ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5;} };t.exports = i;}, function (t, e, i) {var n = i(0),r = i(100);t.exports = { fadeIn: function fadeIn(t, e) {var i = n.isNil(t.attr("fillOpacity")) ? 1 : t.attr("fillOpacity"),a = n.isNil(t.attr("strokeOpacity")) ? 1 : t.attr("strokeOpacity");t.attr("fillOpacity", 0), t.attr("strokeOpacity", 0);var o = { fillOpacity: i, strokeOpacity: a };r.doAnimation(t, o, e);} };}, function (t, e, i) {function n(t, e, i, n, r) {var o,c,l = a.getCoordInfo(i),u = l.start,h = l.end,f = l.width,p = l.height,g = new s.Rect({ attrs: { x: u.x, y: h.y, width: f, height: p } });"y" === r ? (o = u.x + f / 2, c = n.y < u.y ? n.y : u.y) : "x" === r ? (o = n.x > u.x ? n.x : u.x, c = u.y + p / 2) : "xy" === r && (i.isPolar ? (o = i.center.x, c = i.center.y) : (o = (u.x + h.x) / 2, c = (u.y + h.y) / 2));var d = a.getScaledMatrix(g, [o, c], r);g.isClip = !0, g.endState = { matrix: d }, g.set("canvas", t.get("canvas")), t.attr("clip", g);a.doAnimation(g, g.endState, e, function () {t.attr("clip", null), g.remove(!0);});}function r(t, e, i) {for (var n, r, o, s = t.get("children"), c = 0, l = s.length; c < l; c++) {var u = s[c],h = u.getBBox();n = (h.minX + h.maxX) / 2, r = (h.minY + h.maxY) / 2, o = a.getScaledMatrix(u, [n, r], i), a.doAnimation(u, { matrix: o }, e);}}var a = i(100),o = i(28),s = i(5).Shape;t.exports = { groupWaveIn: function groupWaveIn(t, e, i) {var n = o.getClip(i);n.set("canvas", t.get("canvas")), t.attr("clip", n);var r = {};if (i.isPolar) {var s = i.startAngle,c = i.endAngle;r.endAngle = c, n.attr("endAngle", s);} else {var l = i.start,u = i.end,h = Math.abs(l.x - u.x),f = Math.abs(l.y - u.y);i.isTransposed ? (n.attr("height", 0), r.height = f) : (n.attr("width", 0), r.width = h);}a.doAnimation(n, r, e, function () {t.attr("clip", null), n.remove(!0);});}, groupScaleInX: function groupScaleInX(t, e, i, r) {n(t, e, i, r, "x");}, groupScaleInY: function groupScaleInY(t, e, i, r) {n(t, e, i, r, "y");}, groupScaleInXY: function groupScaleInXY(t, e, i, r) {n(t, e, i, r, "xy");}, shapesScaleInX: function shapesScaleInX(t, e) {r(t, e, "x");}, shapesScaleInY: function shapesScaleInY(t, e) {r(t, e, "y");}, shapesScaleInXY: function shapesScaleInXY(t, e) {r(t, e, "xy");} };}, function (t, e, i) {var n = i(0),r = i(96);t.exports = { beforeGeomInit: function beforeGeomInit(t) {t.set("limitInPlot", !0);var e = t.get("filteredData"),i = t.get("colDefs");if (!i) return e;var a = t.get("geoms"),o = !1;n.each(a, function (t) {if (-1 !== ["area", "line", "path"].indexOf(t.get("type"))) return o = !0, !1;});var s = [];if (n.each(i, function (t, e) {!o && t && (t.values || t.min || t.max) && s.push(e);}), 0 === s.length) return e;var c = [];n.each(e, function (t) {var e = !0;n.each(s, function (a) {var o = t[a];if (o) {var s = i[a];if ("timeCat" === s.type) {var c = s.values;n.isNumber(c[0]) && (o = r.toTimeStamp(o));}(s.values && -1 === s.values.indexOf(o) || s.min && o < s.min || s.max && o > s.max) && (e = !1);}}), e && c.push(t);}), t.set("filteredData", c);} };}, function (t, e, i) {var n = i(101),r = i(0);t.exports = { updateLinearScale: function updateLinearScale(t, e, i) {var a = this.chart,o = n.getColDef(a, t);a.scale(t, r.mix({}, o, { min: e, max: i, nice: !1 }));}, updateCatScale: function updateCatScale(t, e, i, a, o, s) {var c = this.chart,l = n.getColDef(c, t);c.scale(t, r.mix({}, l, { values: e, ticks: i, scale: function scale(t) {"timeCat" === this.type && (t = this._toTimeStamp(t));var e,i,n,r = this.rangeMin(),c = this.rangeMax(),l = c - r,u = a.indexOf(t);if (u >= 0 && u < o) e = (i = r > 0 ? -.1 : r - .1) - l, n = u / o;else if (u >= 0 && u > s) i = (e = c < 1 ? 1.1 : c + .1) + l, n = (u - s - 1) / (a.length - 1 - s);else {var h = this.translate(t);n = 1 === this.values.length ? h : h / (this.values.length - 1), e = r, i = c;}return e + n * (i - e);}, getTicks: function getTicks() {var t = this,e = this.ticks,i = [];return r.each(e, function (e) {var n;if (r.isObject(e)) n = e;else {var a = t.scale(e);a = a >= 0 && a <= 1 ? a : NaN, n = { text: r.isString(e) ? e : t.getText(e), value: a, tickValue: e };}i.push(n);}), i;} }));} };}, function (t, e, i) {var n = i(0),r = i(101),a = ["touchstart", "touchmove", "touchend", "touchStart", "touchMove", "touchEnd"];t.exports = { _handleMove: function _handleMove(t) {if ("swipe" === t.type && t.deltaTime > 350) return null;var e,i,n = this.currentDeltaX,r = this.currentDeltaY,o = this.lastPoint;if (-1 !== a.indexOf(t.type)) {var s = t.touches[0];e = s.x - o.x, i = s.y - o.y, this.lastPoint = s;} else null !== n && null !== r && (e = t.deltaX - n, i = t.deltaY - r, this.currentDeltaX = t.deltaX, this.currentDeltaY = t.deltaY);if (Math.abs(e) > 0 || Math.abs(i) > 0) {var c = this._timestamp,l = +new Date();l - c > 16 && (this._doMove(e, i), this._timestamp = l);}}, _doMove: function _doMove(t, e) {var i = this,a = i.mode,o = i.chart,s = i.limitRange,c = o.get("coord"),l = c.start,u = c.end,h = o.get("data");if (n.directionEnabled(a, "x") && 0 !== t) {var f = o.getXScale(),p = f.field;s[p] || (s[p] = r.getLimitRange(h, f));var g = u.x - l.x;f.isCategory ? i._handleCatScale(f, t, g) : f.isLinear && i._handleLinearScale(f, t, g, "x");var d = r.getColDef(o, p);i.xRange = r.getFieldRange(d, s[p], f.type);}if (n.directionEnabled(a, "y") && 0 !== e) {var v = l.y - u.y,y = o.getYScales();n.each(y, function (t) {var n = t.field;s[n] || (s[n] = r.getLimitRange(h, t)), t.isLinear && i._handleLinearScale(t, e, v, "y");});var m = r.getColDef(o, y[0].field);i.yRange = r.getFieldRange(m, s[y[0].field], y[0].type);}o.repaint();}, _handleLinearScale: function _handleLinearScale(t, e, i, r) {var a = t.field,o = t.min,s = t.max,c = this.limitRange;if (o !== c[a].min || s !== c[a].max) {var l = e / i * (s - o),u = "x" === r ? s - l : s + l,h = "x" === r ? o - l : o + l;c[a] && !n.isNil(c[a].min) && h <= c[a].min && (u = s - o + (h = c[a].min)), c[a] && !n.isNil(c[a].max) && u >= c[a].max && (h = (u = c[a].max) - (s - o)), this.updateLinearScale(a, h, u);}}, _handleCatScale: function _handleCatScale(t, e, i) {var n = t.type,r = t.field,a = t.values,o = t.ticks,s = this.limitRange[r],c = s.length - 1,l = a.length,u = i / (l * (this.speed || 1)),h = s.indexOf(a[0]),f = s.indexOf(a[l - 1]),p = h,g = f,d = Math.abs(e / i),v = this.step || Math.max(1, parseInt(d * l));if (this._panCumulativeDelta += e, p = this._panCumulativeDelta > u ? Math.max(0, p - v) : this._panCumulativeDelta < -u ? Math.min(c - l + 1, p + v) : p, g = Math.min(c, p + l - 1), p === h && g === f) return null;var y = s.slice(p, g + 1),m = null;if ("timeCat" === n) {var x = o.length > 2 ? o[1] - o[0] : 864e5;if (this._panCumulativeDelta > u) for (var _ = o[0] - x; _ >= y[0]; _ -= x) {o.unshift(_);} else if (this._panCumulativeDelta < -u) for (var S = o[o.length - 1] + x; S <= y[y.length - 1]; S += x) {o.push(S);}m = o;}this.updateCatScale(r, y, m, s, p, g), this._panCumulativeDelta = p !== h ? 0 : this._panCumulativeDelta;} };}, function (t, e, i) {var n = i(0);t.exports = { _bindPress: function _bindPress() {var t = this.chart,e = this.hammer,i = this.el,r = this.pressThreshold,a = this.pressTime,o = t.get("tooltipController");o && o.enable && (t.set("_closeTooltip", !0), e ? (e.get("press").set({ threshold: r, time: a }), e.on("press", n.wrapBehavior(this, "_handlePress"))) : n.addEventListener(i, "press", n.wrapBehavior(this, "_handlePress")));}, reset: function reset() {var t = this.chart,e = t.get("tooltipController");e && (this.pressed = !1, !e.cfg.alwaysShow && t.hideTooltip(), t.set("_closeTooltip", !0));}, _handlePress: function _handlePress(t) {this.pressed = !0;var e = t.center || t.touches[0];this.chart.set("_closeTooltip", !1), this.chart.showTooltip(e);} };},,, function (t, e, i) {var n = i(44);i(102), i(90), i(95), i(111), i(112), i(140);var r = i(122),a = i(125),o = i(126),s = i(127),c = i(143),l = i(144);n.Animate = i(99), n.Chart.plugins.register([r, o, a, s, c, l]), i(145), n.Interaction = i(43), t.exports = n;}, function (t, e, i) {t.exports = { Text: i(120), Line: i(118), Arc: i(116), Rect: i(119), Html: i(117), Tag: i(121), Point: i(141), RegionFilter: i(142) };}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(11),o = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {this.type = "point", this.position = null, this.offsetX = 0, this.offsetY = 0, this.style = { fill: "#1890FF", r: 3, lineWidth: 1, stroke: "#fff" };}, i.render = function (t, e) {var i = this.parsePoint(t, this.position);if (!i) return null;var n = e.addShape("Circle", { className: "guide-point", attrs: r.mix({ x: i.x + this.offsetX, y: i.y + this.offsetY }, this.style) });return this.element = n, n;}, e;}(a);a.Point = o, t.exports = o;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(11),o = i(2).Rect,s = function (t) {function e() {return t.apply(this, arguments) || this;}n(e, t);var i = e.prototype;return i._initDefaultCfg = function () {this.type = "regionFilter", this.start = [], this.end = [], this.color = null, this.style = null;}, i.render = function (t) {var e = this.parsePoint(t, this.start),i = this.parsePoint(t, this.end);if (e && i) {var n = new o({ attrs: { x: Math.min(e.x, i.x), y: Math.min(e.y, i.y), width: Math.abs(i.x - e.x), height: Math.abs(i.y - e.y) } });this.clip = n;var a = this.chart,s = this.color,c = this.style || {},l = [];a.get("geoms").map(function (t) {var e = t.get("container"),i = e.get("children"),a = e.addGroup({ zIndex: 10, className: "guide-region-filter" });return i.map(function (t) {if (t.get("isShape")) {var e = t.get("type"),i = r.mix({}, t.get("attrs"), c);s && (i.fill || i.fillStyle) && (i.fill = i.fillStyle = s), s && (i.stroke || i.strokeStyle) && (i.stroke = i.strokeStyle = s);var n = { attrs: i };"custom" !== e && "Custom" !== e || (n.createPath = t.get("createPath"), n.calculateBox = t.get("calculateBox")), a.addShape(e, n);}return t;}), a.attr("clip", n), e.sort(), l.push(a), t;}), this.element = l;}}, i.remove = function () {var t = this.element;r.each(t, function (t) {t && t.remove(!0);}), this.clip && this.clip.remove(!0);}, e;}(a);a.RegionFilter = s, t.exports = s;}, function (t, e, i) {var n = i(101),r = i(0),a = { mode: "x", xStyle: { backgroundColor: "rgba(202, 215, 239, .2)", fillerColor: "rgba(202, 215, 239, .5)", size: 4, lineCap: "round", offsetX: 0, offsetY: 8 }, yStyle: { backgroundColor: "rgba(202, 215, 239, .2)", fillerColor: "rgba(202, 215, 239, .5)", size: 4, lineCap: "round", offsetX: 8, offsetY: 0 } };t.exports = { init: function init(t) {t.set("_limitRange", {}), t.scrollBar = function (t) {!0 === t ? t = a : r.isObject(t) && (t = r.deepMix({}, a, t)), this.set("_scrollBarCfg", t);};}, clear: function clear(t) {t.set("_limitRange", {});}, changeData: function changeData(t) {t.set("_limitRange", {});}, clearInner: function clearInner(t) {var e = t.get("_horizontalBar"),i = t.get("_verticalBar");e && e.remove(!0), i && i.remove(!0), t.set("_horizontalBar", null), t.set("_verticalBar", null);}, afterGeomDraw: function afterGeomDraw(t) {var e = t.get("_scrollBarCfg");if (e) {var i = t.get("data"),a = t.get("plotRange"),o = t.get("backPlot"),s = t.get("canvas").get("height"),c = t.get("_limitRange"),l = e.mode;if (r.directionEnabled(l, "x")) {var u = e.xStyle,h = u.offsetX,f = u.offsetY,p = u.lineCap,g = u.backgroundColor,d = u.fillerColor,v = u.size,y = t.getXScale(),m = c[y.field];m || (m = n.getLimitRange(i, y), c[y.field] = m);var x = n.getFieldRange(y, m, y.type),_ = t.get("_horizontalBar"),S = s - v / 2 + f;_ ? _.get("children")[1].attr({ x1: Math.max(a.bl.x + a.width * x[0] + h, a.bl.x), x2: Math.min(a.bl.x + a.width * x[1] + h, a.br.x) }) : ((_ = o.addGroup({ className: "horizontalBar" })).addShape("line", { attrs: { x1: a.bl.x + h, y1: S, x2: a.br.x + h, y2: S, lineWidth: v, stroke: g, lineCap: p } }), _.addShape("line", { attrs: { x1: Math.max(a.bl.x + a.width * x[0] + h, a.bl.x), y1: S, x2: Math.min(a.bl.x + a.width * x[1] + h, a.br.x), y2: S, lineWidth: v, stroke: d, lineCap: p } }), t.set("_horizontalBar", _));}if (r.directionEnabled(l, "y")) {var b = e.yStyle,C = b.offsetX,P = b.offsetY,w = b.lineCap,M = b.backgroundColor,T = b.fillerColor,A = b.size,D = t.getYScales()[0],k = c[D.field];k || (k = n.getLimitRange(i, D), c[D.field] = k);var I = n.getFieldRange(D, k, D.type),O = t.get("_verticalBar"),E = A / 2 + C;O ? O.get("children")[1].attr({ y1: Math.max(a.tl.y + a.height * I[0] + P, a.tl.y), y2: Math.min(a.tl.y + a.height * I[1] + P, a.bl.y) }) : ((O = o.addGroup({ className: "verticalBar" })).addShape("line", { attrs: { x1: E, y1: a.tl.y + P, x2: E, y2: a.bl.y + P, lineWidth: A, stroke: M, lineCap: w } }), O.addShape("line", { attrs: { x1: E, y1: Math.max(a.tl.y + a.height * I[0] + P, a.tl.y), x2: E, y2: Math.min(a.tl.y + a.height * I[1] + P, a.bl.y), lineWidth: A, stroke: T, lineCap: w } }), t.set("_verticalBar", O));}}} };}, function (t, e, i) {function n(t, e, i) {return { x: t.x + i * Math.cos(e), y: t.y + i * Math.sin(e) };}function r(t, e) {return e < t && (e += 2 * Math.PI), (e + t) / 2;}function a(t, e) {var i = t.getBBox(),n = e.getBBox();return Math.max(i.minX, n.minX) <= Math.min(i.maxX, n.minX) && Math.max(i.minY, n.minY) <= Math.min(i.maxY, n.maxY);}var o = i(0),s = i(5).Group,c = { anchorOffset: 5, inflectionOffset: 15, sidePadding: 20, lineHeight: 32, adjustOffset: 15, skipOverlapLabels: !1, triggerOn: "touchstart", activeShape: !1, activeStyle: { offset: 1, appendRadius: 8, fillOpacity: .5 }, label1OffsetY: -1, label2OffsetY: 1 },l = function () {function t(t) {o.mix(this, t);var e = this.chart;this.canvasDom = e.get("canvas").get("el");}var e = t.prototype;return e.renderLabels = function () {var t = this,e = t.chart,i = t.pieLabelCfg,c = t.labelGroup,l = [[], []],u = e.get("geoms")[0].get("container").get("children"),h = i.anchorOffset,f = i.inflectionOffset,p = i.label1,g = i.label2,d = i.lineHeight,v = i.skipOverlapLabels,y = i.label1OffsetY,m = i.label2OffsetY,x = e.get("coord"),_ = x.center,S = x.circleRadius;u.forEach(function (t) {var i = t._attrs.attrs,a = r(i.startAngle, i.endAngle),c = n(_, a, S + h),u = n(_, a, S + f),d = t.get("origin"),v = d._origin,x = d.color,b = { _anchor: c, _inflection: u, _data: v, x: u.x, y: u.y, r: S + f, fill: x },C = new s({ context: e.get("canvas").get("context"), data: v }),P = { x: 0, y: 0, fontSize: 12, lineHeight: 12, fill: "#808080" };o.isFunction(p) && C.addShape("Text", { attrs: o.mix({ textBaseline: "bottom" }, P, p(v, x)), data: v, offsetY: y }), o.isFunction(g) && C.addShape("Text", { attrs: o.mix({ textBaseline: "top" }, P, g(v, x)), data: v, offsetY: m }), b.textGroup = C, c.x < _.x ? (b._side = "left", l[0].push(b)) : (b._side = "right", l[1].push(b));});var b = [];if (v) for (var C, P = l[1].concat(l[0]), w = 0, M = P.length; w < M; w++) {var T = P[w],A = t._drawLabel(T);C && a(A, C) || (c.add(A), t._drawLabelLine(T), C = A, b.push(A));} else {var D = e.get("height"),k = parseInt(D / d, 10);l.forEach(function (e) {e.length > k && e.splice(k, e.length - k), e.sort(function (t, e) {return t.y - e.y;});var i = t._antiCollision(e);b = b.concat(i);});}this.drawnLabels = b;}, e.bindEvents = function () {var t = this.pieLabelCfg.triggerOn || "touchstart",e = o.wrapBehavior(this, "_handleEvent");o.addEventListener(this.canvasDom, t, e);}, e.unBindEvents = function () {var t = this.pieLabelCfg.triggerOn || "touchstart",e = o.getWrapBehavior(this, "_handleEvent");o.removeEventListener(this.canvasDom, t, e);}, e.clear = function () {this.labelGroup && this.labelGroup.clear(), this.halo && this.halo.remove(!0), this.lastSelectedData = null, this.drawnLabels = [], this.unBindEvents();}, e._drawLabel = function (t) {var e = this.pieLabelCfg,i = this.chart.get("width"),n = e.sidePadding,r = t.y,a = t.textGroup,o = a.get("children"),s = { textAlign: "left" === t._side ? "left" : "right", x: "left" === t._side ? n : i - n };return o.forEach(function (t) {t.attr(s), t.attr("y", r + t.get("offsetY"));}), a;}, e._drawLabelLine = function (t, e) {var i = this.chart,n = this.pieLabelCfg,r = this.labelGroup,a = i.get("width"),s = n.sidePadding,c = n.adjustOffset,l = n.lineStyle,u = n.anchorStyle,h = n.skipOverlapLabels,f = t._anchor,p = t._inflection,g = t.fill,d = t.y,v = { x: "left" === t._side ? s : a - s, y: d },y = [f, p, v];if (!h && p.y !== d) if (p.y < d) {var m = p,x = { x: "left" === t._side ? v.x + e + c : v.x - e - c, y: p.y },_ = { x: "left" === t._side ? v.x + e : v.x - e, y: v.y };y = [f, m, x, _, v], ("right" === t._side && x.x < m.x || "left" === t._side && x.x > m.x) && (y = [f, _, v]);} else y = [f, { x: p.x, y: d }, v];r.addShape("Polyline", { attrs: o.mix({ points: y, lineWidth: 1, stroke: g }, l) }), r.addShape("Circle", { attrs: o.mix({ x: f.x, y: f.y, r: 2, fill: g }, u) });}, e._antiCollision = function (t) {var e,i = this,n = i.chart,r = i.pieLabelCfg,a = n.get("coord"),o = n.get("height"),s = a.center,c = a.circleRadius,l = r.inflectionOffset,u = r.lineHeight,h = s.y - c - l - u,f = !0,p = o,g = 0,d = Number.MIN_VALUE,v = 0,y = t.map(function (t) {var e = t.y;e > g && (g = e), e < d && (d = e);var i = t.textGroup.getBBox().width;return i >= v && (v = i), { size: u, targets: [e - h] };});g - h > p && (p = g - h);for (; f;) {for (!function (t) {t.forEach(function (t) {var e = (Math.min.apply(d, t.targets) + Math.max.apply(d, t.targets)) / 2;t.pos = Math.min(Math.max(d, e - t.size / 2), p - t.size);});}(y), f = !1, e = y.length; e--;) {if (e > 0) {var m = y[e - 1],x = y[e];m.pos + m.size > x.pos && (m.size += x.size, m.targets = m.targets.concat(x.targets), m.pos + m.size > p && (m.pos = p - m.size), y.splice(e, 1), f = !0);}}}e = 0, y.forEach(function (i) {var n = h;i.targets.forEach(function () {t[e].y = i.pos + n + u / 2, n += u, e++;});});var _ = [];return t.forEach(function (t) {var e = i._drawLabel(t);i.labelGroup.add(e), i._drawLabelLine(t, v), _.push(e);}), _;}, e._handleEvent = function (t) {for (var e, i = this, n = i.chart, r = i.drawnLabels, a = i.pieLabelCfg, s = a.onClick, c = a.activeShape, l = o.createEvent(t, n), u = l.x, h = l.y, f = 0, p = r.length; f < p; f++) {var g = r[f],d = g.getBBox();if (u >= d.minX && u <= d.maxX && h >= d.minY && h <= d.maxY) {e = g;break;}}var v = n.getSnapRecords({ x: u, y: h });e ? l.data = e.get("data") : v.length && (l.data = v[0]._origin), s && s(l), l.data && c && this._activeShape(l.data);}, e._getSelectedShapeByData = function (t) {var e = null,i = this.chart.get("geoms")[0],n = i.get("container").get("children");return o.each(n, function (n) {if (n.get("isShape") && n.get("className") === i.get("type")) {var r = n.get("origin")._origin;if (o.isObjectValueEqual(r, t)) return e = n, !1;}}), e;}, e._activeShape = function (t) {var e = this.chart,i = this.lastSelectedData,n = this.pieLabelCfg;if (t !== i) {this.lastSelectedData = t;var r = n.activeStyle,a = this._getSelectedShapeByData(t)._attrs.attrs,s = a.x,c = a.y,l = a.startAngle,u = a.endAngle,h = a.r,f = a.fill,p = e.get("frontPlot");this.halo && this.halo.remove(!0);var g = p.addShape("sector", { attrs: o.mix({ x: s, y: c, r: h + r.offset + r.appendRadius, r0: h + r.offset, fill: f, startAngle: l, endAngle: u }, r) });this.halo = g, e.get("canvas").draw();}}, t;}();t.exports = { init: function init(t) {var e = t.get("frontPlot").addGroup({ className: "pie-label", zIndex: 0 }),i = new l({ chart: t, labelGroup: e });t.set("pieLabelController", i), t.pieLabel = function (t) {return t = o.deepMix({}, c, t), i.pieLabelCfg = t, this;};}, afterGeomDraw: function afterGeomDraw(t) {var e = t.get("pieLabelController");e.pieLabelCfg && (e.renderLabels(), e.bindEvents());}, clearInner: function clearInner(t) {var e = t.get("pieLabelController");e.pieLabelCfg && e.clear();} };}, function (t, e, i) {t.exports = { Interaction: i(43), PieSelect: i(147), IntervalSelect: i(148), Swipe: i(149), Pan: i(150), Pinch: i(151) };}, function (t, e, i) {var n;!function (r, a, o, s) {"use strict";function c(t, e, i) {return setTimeout(p(t, i), e);}function l(t, e, i) {return !!Array.isArray(t) && (u(t, i[e], i), !0);}function u(t, e, i) {var n;if (t) if (t.forEach) t.forEach(e, i);else if (t.length !== s) for (n = 0; n < t.length;) {e.call(i, t[n], n, t), n++;} else for (n in t) {t.hasOwnProperty(n) && e.call(i, t[n], n, t);}}function h(t, e, i) {var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";return function () {var e = new Error("get-stack-trace"),i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",a = r.console && (r.console.warn || r.console.log);return a && a.call(r.console, n, i), t.apply(this, arguments);};}function f(t, e, i) {var n,r = e.prototype;(n = t.prototype = Object.create(r)).constructor = t, n._super = r, i && gt(n, i);}function p(t, e) {return function () {return t.apply(e, arguments);};}function g(t, e) {return typeof t == yt ? t.apply(e ? e[0] || s : s, e) : t;}function d(t, e) {return t === s ? e : t;}function v(t, e, i) {u(_(e), function (e) {t.addEventListener(e, i, !1);});}function y(t, e, i) {u(_(e), function (e) {t.removeEventListener(e, i, !1);});}function m(t, e) {for (; t;) {if (t == e) return !0;t = t.parentNode;}return !1;}function x(t, e) {return t.indexOf(e) > -1;}function _(t) {return t.trim().split(/\s+/g);}function S(t, e, i) {if (t.indexOf && !i) return t.indexOf(e);for (var n = 0; n < t.length;) {if (i && t[n][i] == e || !i && t[n] === e) return n;n++;}return -1;}function b(t) {return Array.prototype.slice.call(t, 0);}function C(t, e, i) {for (var n = [], r = [], a = 0; a < t.length;) {var o = e ? t[a][e] : t[a];S(r, o) < 0 && n.push(t[a]), r[a] = o, a++;}return i && (n = e ? n.sort(function (t, i) {return t[e] > i[e];}) : n.sort()), n;}function P(t, e) {for (var i, n, r = e[0].toUpperCase() + e.slice(1), a = 0; a < dt.length;) {if (i = dt[a], (n = i ? i + r : e) in t) return n;a++;}return s;}function w() {return Ct++;}function M(t) {var e = t.ownerDocument || t;return e.defaultView || e.parentWindow || r;}function T(t, e) {var i = this;this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {g(t.options.enable, [t]) && i.handler(e);}, this.init();}function A(t) {var e = t.options.inputClass;return new (e || (Mt ? j : Tt ? H : wt ? q : z))(t, D);}function D(t, e, i) {var n = i.pointers.length,r = i.changedPointers.length,a = e & Dt && n - r == 0,o = e & (It | Ot) && n - r == 0;i.isFirst = !!a, i.isFinal = !!o, a && (t.session = {}), i.eventType = e, k(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i;}function k(t, e) {var i = t.session,n = e.pointers,r = n.length;i.firstInput || (i.firstInput = E(e)), r > 1 && !i.firstMultiple ? i.firstMultiple = E(e) : 1 === r && (i.firstMultiple = !1);var a = i.firstInput,o = i.firstMultiple,s = o ? o.center : a.center,c = e.center = Y(n);e.timeStamp = _t(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = R(s, c), e.distance = N(s, c), I(i, e), e.offsetDirection = F(e.deltaX, e.deltaY);var l = B(e.deltaTime, e.deltaX, e.deltaY);e.overallVelocityX = l.x, e.overallVelocityY = l.y, e.overallVelocity = xt(l.x) > xt(l.y) ? l.x : l.y, e.scale = o ? L(o.pointers, n) : 1, e.rotation = o ? X(o.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, O(i, e);var u = t.element;m(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u;}function I(t, e) {var i = e.center,n = t.offsetDelta || {},r = t.prevDelta || {},a = t.prevInput || {};e.eventType !== Dt && a.eventType !== It || (r = t.prevDelta = { x: a.deltaX || 0, y: a.deltaY || 0 }, n = t.offsetDelta = { x: i.x, y: i.y }), e.deltaX = r.x + (i.x - n.x), e.deltaY = r.y + (i.y - n.y);}function O(t, e) {var i,n,r,a,o = t.lastInterval || e,c = e.timeStamp - o.timeStamp;if (e.eventType != Ot && (c > At || o.velocity === s)) {var l = e.deltaX - o.deltaX,u = e.deltaY - o.deltaY,h = B(c, l, u);n = h.x, r = h.y, i = xt(h.x) > xt(h.y) ? h.x : h.y, a = F(l, u), t.lastInterval = e;} else i = o.velocity, n = o.velocityX, r = o.velocityY, a = o.direction;e.velocity = i, e.velocityX = n, e.velocityY = r, e.direction = a;}function E(t) {for (var e = [], i = 0; i < t.pointers.length;) {e[i] = { clientX: mt(t.pointers[i].clientX), clientY: mt(t.pointers[i].clientY) }, i++;}return { timeStamp: _t(), pointers: e, center: Y(e), deltaX: t.deltaX, deltaY: t.deltaY };}function Y(t) {var e = t.length;if (1 === e) return { x: mt(t[0].clientX), y: mt(t[0].clientY) };for (var i = 0, n = 0, r = 0; r < e;) {i += t[r].clientX, n += t[r].clientY, r++;}return { x: mt(i / e), y: mt(n / e) };}function B(t, e, i) {return { x: e / t || 0, y: i / t || 0 };}function F(t, e) {return t === e ? Et : xt(t) >= xt(e) ? t < 0 ? Yt : Bt : e < 0 ? Ft : Nt;}function N(t, e, i) {i || (i = zt);var n = e[i[0]] - t[i[0]],r = e[i[1]] - t[i[1]];return Math.sqrt(n * n + r * r);}function R(t, e, i) {i || (i = zt);var n = e[i[0]] - t[i[0]],r = e[i[1]] - t[i[1]];return 180 * Math.atan2(r, n) / Math.PI;}function X(t, e) {return R(e[1], e[0], jt) + R(t[1], t[0], jt);}function L(t, e) {return N(e[0], e[1], jt) / N(t[0], t[1], jt);}function z() {this.evEl = Wt, this.evWin = Ht, this.pressed = !1, T.apply(this, arguments);}function j() {this.evEl = Ut, this.evWin = Zt, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];}function G() {this.evTarget = $t, this.evWin = Kt, this.started = !1, T.apply(this, arguments);}function W(t, e) {var i = b(t.touches),n = b(t.changedTouches);return e & (It | Ot) && (i = C(i.concat(n), "identifier", !0)), [i, n];}function H() {this.evTarget = te, this.targetIds = {}, T.apply(this, arguments);}function V(t, e) {var i = b(t.touches),n = this.targetIds;if (e & (Dt | kt) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];var r,a,o = b(t.changedTouches),s = [],c = this.target;if (a = i.filter(function (t) {return m(t.target, c);}), e === Dt) for (r = 0; r < a.length;) {n[a[r].identifier] = !0, r++;}for (r = 0; r < o.length;) {n[o[r].identifier] && s.push(o[r]), e & (It | Ot) && delete n[o[r].identifier], r++;}return s.length ? [C(a.concat(s), "identifier", !0), s] : void 0;}function q() {T.apply(this, arguments);var t = p(this.handler, this);this.touch = new H(this.manager, t), this.mouse = new z(this.manager, t), this.primaryTouch = null, this.lastTouches = [];}function U(t, e) {t & Dt ? (this.primaryTouch = e.changedPointers[0].identifier, Z.call(this, e)) : t & (It | Ot) && Z.call(this, e);}function Z(t) {var e = t.changedPointers[0];if (e.identifier === this.primaryTouch) {var i = { x: e.clientX, y: e.clientY };this.lastTouches.push(i);var n = this.lastTouches;setTimeout(function () {var t = n.indexOf(i);t > -1 && n.splice(t, 1);}, ee);}}function J(t) {for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {var r = this.lastTouches[n],a = Math.abs(e - r.x),o = Math.abs(i - r.y);if (a <= ie && o <= ie) return !0;}return !1;}function $(t, e) {this.manager = t, this.set(e);}function K(t) {if (x(t, se)) return se;var e = x(t, ce),i = x(t, le);return e && i ? se : e || i ? e ? ce : le : x(t, oe) ? oe : ae;}function Q(t) {this.options = gt({}, this.defaults, t || {}), this.id = w(), this.manager = null, this.options.enable = d(this.options.enable, !0), this.state = he, this.simultaneous = {}, this.requireFail = [];}function tt(t) {return t & ve ? "cancel" : t & ge ? "end" : t & pe ? "move" : t & fe ? "start" : "";}function et(t) {return t == Nt ? "down" : t == Ft ? "up" : t == Yt ? "left" : t == Bt ? "right" : "";}function it(t, e) {var i = e.manager;return i ? i.get(t) : t;}function nt() {Q.apply(this, arguments);}function rt() {nt.apply(this, arguments), this.pX = null, this.pY = null;}function at() {nt.apply(this, arguments);}function ot() {Q.apply(this, arguments), this._timer = null, this._input = null;}function st() {nt.apply(this, arguments);}function ct() {nt.apply(this, arguments);}function lt() {Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;}function ut(t, e) {return e = e || {}, e.recognizers = d(e.recognizers, ut.defaults.preset), new ht(t, e);}function ht(t, e) {this.options = gt({}, ut.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = A(this), this.touchAction = new $(this, this.options.touchAction), ft(this, !0), u(this.options.recognizers, function (t) {var e = this.add(new t[0](t[1]));t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);}, this);}function ft(t, e) {var i = t.element;if (i.style) {var n;u(t.options.cssProps, function (r, a) {n = P(i.style, a), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = t.oldCssProps[n] || "";}), e || (t.oldCssProps = {});}}function pt(t, e) {var i = a.createEvent("Event");i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i);}var gt,dt = ["", "webkit", "Moz", "MS", "ms", "o"],vt = a.createElement("div"),yt = "function",mt = Math.round,xt = Math.abs,_t = Date.now;gt = "function" != typeof Object.assign ? function (t) {if (t === s || null === t) throw new TypeError("Cannot convert undefined or null to object");for (var e = Object(t), i = 1; i < arguments.length; i++) {var n = arguments[i];if (n !== s && null !== n) for (var r in n) {n.hasOwnProperty(r) && (e[r] = n[r]);}}return e;} : Object.assign;var St = h(function (t, e, i) {for (var n = Object.keys(e), r = 0; r < n.length;) {(!i || i && t[n[r]] === s) && (t[n[r]] = e[n[r]]), r++;}return t;}, "extend", "Use `assign`."),bt = h(function (t, e) {return St(t, e, !0);}, "merge", "Use `assign`."),Ct = 1,Pt = /mobile|tablet|ip(ad|hone|od)|android/i,wt = "ontouchstart" in r,Mt = P(r, "PointerEvent") !== s,Tt = wt && Pt.test(navigator.userAgent),At = 25,Dt = 1,kt = 2,It = 4,Ot = 8,Et = 1,Yt = 2,Bt = 4,Ft = 8,Nt = 16,Rt = Yt | Bt,Xt = Ft | Nt,Lt = Rt | Xt,zt = ["x", "y"],jt = ["clientX", "clientY"];T.prototype = { handler: function handler() {}, init: function init() {this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(M(this.element), this.evWin, this.domHandler);}, destroy: function destroy() {this.evEl && y(this.element, this.evEl, this.domHandler), this.evTarget && y(this.target, this.evTarget, this.domHandler), this.evWin && y(M(this.element), this.evWin, this.domHandler);} };var Gt = { mousedown: Dt, mousemove: kt, mouseup: It },Wt = "mousedown",Ht = "mousemove mouseup";f(z, T, { handler: function handler(t) {var e = Gt[t.type];e & Dt && 0 === t.button && (this.pressed = !0), e & kt && 1 !== t.which && (e = It), this.pressed && (e & It && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: "mouse", srcEvent: t }));} });var Vt = { pointerdown: Dt, pointermove: kt, pointerup: It, pointercancel: Ot, pointerout: Ot },qt = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },Ut = "pointerdown",Zt = "pointermove pointerup pointercancel";r.MSPointerEvent && !r.PointerEvent && (Ut = "MSPointerDown", Zt = "MSPointerMove MSPointerUp MSPointerCancel"), f(j, T, { handler: function handler(t) {var e = this.store,i = !1,n = t.type.toLowerCase().replace("ms", ""),r = Vt[n],a = qt[t.pointerType] || t.pointerType,o = "touch" == a,s = S(e, t.pointerId, "pointerId");r & Dt && (0 === t.button || o) ? s < 0 && (e.push(t), s = e.length - 1) : r & (It | Ot) && (i = !0), s < 0 || (e[s] = t, this.callback(this.manager, r, { pointers: e, changedPointers: [t], pointerType: a, srcEvent: t }), i && e.splice(s, 1));} });var Jt = { touchstart: Dt, touchmove: kt, touchend: It, touchcancel: Ot },$t = "touchstart",Kt = "touchstart touchmove touchend touchcancel";f(G, T, { handler: function handler(t) {var e = Jt[t.type];if (e === Dt && (this.started = !0), this.started) {var i = W.call(this, t, e);e & (It | Ot) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: "touch", srcEvent: t });}} });var Qt = { touchstart: Dt, touchmove: kt, touchend: It, touchcancel: Ot },te = "touchstart touchmove touchend touchcancel";f(H, T, { handler: function handler(t) {var e = Qt[t.type],i = V.call(this, t, e);i && this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: "touch", srcEvent: t });} });var ee = 2500,ie = 25;f(q, T, { handler: function handler(t, e, i) {var n = "touch" == i.pointerType,r = "mouse" == i.pointerType;if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {if (n) U.call(this, e, i);else if (r && J.call(this, i)) return;this.callback(t, e, i);}}, destroy: function destroy() {this.touch.destroy(), this.mouse.destroy();} });var ne = P(vt.style, "touchAction"),re = ne !== s,ae = "auto",oe = "manipulation",se = "none",ce = "pan-x",le = "pan-y",ue = function () {if (!re) return !1;var t = {},e = r.CSS && r.CSS.supports;return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {t[i] = !e || r.CSS.supports("touch-action", i);}), t;}();$.prototype = { set: function set(t) {"compute" == t && (t = this.compute()), re && this.manager.element.style && ue[t] && (this.manager.element.style[ne] = t), this.actions = t.toLowerCase().trim();}, update: function update() {this.set(this.manager.options.touchAction);}, compute: function compute() {var t = [];return u(this.manager.recognizers, function (e) {g(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));}), K(t.join(" "));}, preventDefaults: function preventDefaults(t) {var e = t.srcEvent,i = t.offsetDirection;if (this.manager.session.prevented) e.preventDefault();else {var n = this.actions,r = x(n, se) && !ue[se],a = x(n, le) && !ue[le],o = x(n, ce) && !ue[ce];if (r) {var s = 1 === t.pointers.length,c = t.distance < 2,l = t.deltaTime < 250;if (s && c && l) return;}if (!o || !a) return r || a && i & Rt || o && i & Xt ? this.preventSrc(e) : void 0;}}, preventSrc: function preventSrc(t) {this.manager.session.prevented = !0, t.preventDefault();} };var he = 1,fe = 2,pe = 4,ge = 8,de = ge,ve = 16;Q.prototype = { defaults: {}, set: function set(t) {return gt(this.options, t), this.manager && this.manager.touchAction.update(), this;}, recognizeWith: function recognizeWith(t) {if (l(t, "recognizeWith", this)) return this;var e = this.simultaneous;return t = it(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;}, dropRecognizeWith: function dropRecognizeWith(t) {return l(t, "dropRecognizeWith", this) ? this : (t = it(t, this), delete this.simultaneous[t.id], this);}, requireFailure: function requireFailure(t) {if (l(t, "requireFailure", this)) return this;var e = this.requireFail;return t = it(t, this), -1 === S(e, t) && (e.push(t), t.requireFailure(this)), this;}, dropRequireFailure: function dropRequireFailure(t) {if (l(t, "dropRequireFailure", this)) return this;t = it(t, this);var e = S(this.requireFail, t);return e > -1 && this.requireFail.splice(e, 1), this;}, hasRequireFailures: function hasRequireFailures() {return this.requireFail.length > 0;}, canRecognizeWith: function canRecognizeWith(t) {return !!this.simultaneous[t.id];}, emit: function emit(t) {function e(e) {i.manager.emit(e, t);}var i = this,n = this.state;n < ge && e(i.options.event + tt(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= ge && e(i.options.event + tt(n));}, tryEmit: function tryEmit(t) {if (this.canEmit()) return this.emit(t);this.state = 32;}, canEmit: function canEmit() {for (var t = 0; t < this.requireFail.length;) {if (!(this.requireFail[t].state & (32 | he))) return !1;t++;}return !0;}, recognize: function recognize(t) {var e = gt({}, t);if (!g(this.options.enable, [this, e])) return this.reset(), void (this.state = 32);this.state & (de | ve | 32) && (this.state = he), this.state = this.process(e), this.state & (fe | pe | ge | ve) && this.tryEmit(e);}, process: function process(t) {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, f(nt, Q, { defaults: { pointers: 1 }, attrTest: function attrTest(t) {var e = this.options.pointers;return 0 === e || t.pointers.length === e;}, process: function process(t) {var e = this.state,i = t.eventType,n = e & (fe | pe),r = this.attrTest(t);return n && (i & Ot || !r) ? e | ve : n || r ? i & It ? e | ge : e & fe ? e | pe : fe : 32;} }), f(rt, nt, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Lt }, getTouchAction: function getTouchAction() {var t = this.options.direction,e = [];return t & Rt && e.push(le), t & Xt && e.push(ce), e;}, directionTest: function directionTest(t) {var e = this.options,i = !0,n = t.distance,r = t.direction,a = t.deltaX,o = t.deltaY;return r & e.direction || (e.direction & Rt ? (r = 0 === a ? Et : a < 0 ? Yt : Bt, i = a != this.pX, n = Math.abs(t.deltaX)) : (r = 0 === o ? Et : o < 0 ? Ft : Nt, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction;}, attrTest: function attrTest(t) {return nt.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this.directionTest(t));}, emit: function emit(t) {this.pX = t.deltaX, this.pY = t.deltaY;var e = et(t.direction);e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);} }), f(at, nt, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {return [se];}, attrTest: function attrTest(t) {return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & fe);}, emit: function emit(t) {if (1 !== t.scale) {var e = t.scale < 1 ? "in" : "out";t.additionalEvent = this.options.event + e;}this._super.emit.call(this, t);} }), f(ot, Q, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function getTouchAction() {return [ae];}, process: function process(t) {var e = this.options,i = t.pointers.length === e.pointers,n = t.distance < e.threshold,r = t.deltaTime > e.time;if (this._input = t, !n || !i || t.eventType & (It | Ot) && !r) this.reset();else if (t.eventType & Dt) this.reset(), this._timer = c(function () {this.state = de, this.tryEmit();}, e.time, this);else if (t.eventType & It) return de;return 32;}, reset: function reset() {clearTimeout(this._timer);}, emit: function emit(t) {this.state === de && (t && t.eventType & It ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = _t(), this.manager.emit(this.options.event, this._input)));} }), f(st, nt, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {return [se];}, attrTest: function attrTest(t) {return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & fe);} }), f(ct, nt, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Rt | Xt, pointers: 1 }, getTouchAction: function getTouchAction() {return rt.prototype.getTouchAction.call(this);}, attrTest: function attrTest(t) {var e,i = this.options.direction;return i & (Rt | Xt) ? e = t.overallVelocity : i & Rt ? e = t.overallVelocityX : i & Xt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && xt(e) > this.options.velocity && t.eventType & It;}, emit: function emit(t) {var e = et(t.offsetDirection);e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);} }), f(lt, Q, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function getTouchAction() {return [oe];}, process: function process(t) {var e = this.options,i = t.pointers.length === e.pointers,n = t.distance < e.threshold,r = t.deltaTime < e.time;if (this.reset(), t.eventType & Dt && 0 === this.count) return this.failTimeout();if (n && r && i) {if (t.eventType != It) return this.failTimeout();var a = !this.pTime || t.timeStamp - this.pTime < e.interval,o = !this.pCenter || N(this.pCenter, t.center) < e.posThreshold;if (this.pTime = t.timeStamp, this.pCenter = t.center, o && a ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = c(function () {this.state = de, this.tryEmit();}, e.interval, this), fe) : de;}return 32;}, failTimeout: function failTimeout() {return this._timer = c(function () {this.state = 32;}, this.options.interval, this), 32;}, reset: function reset() {clearTimeout(this._timer);}, emit: function emit() {this.state == de && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));} }), ut.VERSION = "2.0.7", ut.defaults = { domEvents: !1, touchAction: "compute", enable: !0, inputTarget: null, inputClass: null, preset: [[st, { enable: !1 }], [at, { enable: !1 }, ["rotate"]], [ct, { direction: Rt }], [rt, { direction: Rt }, ["swipe"]], [lt], [lt, { event: "doubletap", taps: 2 }, ["tap"]], [ot]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };ht.prototype = { set: function set(t) {return gt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;}, stop: function stop(t) {this.session.stopped = t ? 2 : 1;}, recognize: function recognize(t) {var e = this.session;if (!e.stopped) {this.touchAction.preventDefaults(t);var i,n = this.recognizers,r = e.curRecognizer;(!r || r && r.state & de) && (r = e.curRecognizer = null);for (var a = 0; a < n.length;) {i = n[a], 2 === e.stopped || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t), !r && i.state & (fe | pe | ge) && (r = e.curRecognizer = i), a++;}}}, get: function get(t) {if (t instanceof Q) return t;for (var e = this.recognizers, i = 0; i < e.length; i++) {if (e[i].options.event == t) return e[i];}return null;}, add: function add(t) {if (l(t, "add", this)) return this;var e = this.get(t.options.event);return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;}, remove: function remove(t) {if (l(t, "remove", this)) return this;if (t = this.get(t)) {var e = this.recognizers,i = S(e, t);-1 !== i && (e.splice(i, 1), this.touchAction.update());}return this;}, on: function on(t, e) {if (t !== s && e !== s) {var i = this.handlers;return u(_(t), function (t) {i[t] = i[t] || [], i[t].push(e);}), this;}}, off: function off(t, e) {if (t !== s) {var i = this.handlers;return u(_(t), function (t) {e ? i[t] && i[t].splice(S(i[t], e), 1) : delete i[t];}), this;}}, emit: function emit(t, e) {this.options.domEvents && pt(t, e);var i = this.handlers[t] && this.handlers[t].slice();if (i && i.length) {e.type = t, e.preventDefault = function () {e.srcEvent.preventDefault();};for (var n = 0; n < i.length;) {i[n](e), n++;}}}, destroy: function destroy() {this.element && ft(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;} }, gt(ut, { INPUT_START: Dt, INPUT_MOVE: kt, INPUT_END: It, INPUT_CANCEL: Ot, STATE_POSSIBLE: he, STATE_BEGAN: fe, STATE_CHANGED: pe, STATE_ENDED: ge, STATE_RECOGNIZED: de, STATE_CANCELLED: ve, STATE_FAILED: 32, DIRECTION_NONE: Et, DIRECTION_LEFT: Yt, DIRECTION_RIGHT: Bt, DIRECTION_UP: Ft, DIRECTION_DOWN: Nt, DIRECTION_HORIZONTAL: Rt, DIRECTION_VERTICAL: Xt, DIRECTION_ALL: Lt, Manager: ht, Input: T, TouchAction: $, TouchInput: H, MouseInput: z, PointerEventInput: j, TouchMouseInput: q, SingleTouchInput: G, Recognizer: Q, AttrRecognizer: nt, Tap: lt, Pan: rt, Swipe: ct, Pinch: at, Rotate: st, Press: ot, on: v, off: y, each: u, merge: bt, extend: St, assign: gt, inherit: f, bindFn: p, prefixed: P }), (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = ut, (n = function () {return ut;}.call(e, i, e, t)) !== s && (t.exports = n);}(window, document);}, function (t, e, i) {function n(t) {if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}function r(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var a = i(0),o = i(43),s = i(15),c = function (t) {function e(e, i) {var r,o = n(r = t.call(this, e, i) || this);i.registerPlugins({ clearInner: function clearInner() {o.halo && o.halo.remove(!0), o.selected = !1, o.selectedShape = null, o.lastShape = null, o.halo = null, o.defaultSelected = null;} });var s = o.defaultSelected;if (a.isObject(s)) {var c = o._getSelectedShapeByData(s);c && o._selectedShape(c), r.canvas.draw();}return r;}r(e, t);var i = e.prototype;return i.getDefaultCfg = function () {var e = t.prototype.getDefaultCfg.call(this);return e = a.mix({}, e, { startEvent: "tap", processEvent: null, animate: !1, offset: 1, appendRadius: 8, style: { fillOpacity: .5 }, cancelable: !0, defaultSelected: null }), (a.isWx || a.isMy) && (e.startEvent = "touchstart", e.endEvent = "touchend"), e;}, i._getSelectedShapeByData = function (t) {var e = null,i = this.chart.get("geoms")[0],n = i.get("container").get("children");return a.each(n, function (n) {if (n.get("isShape") && n.get("className") === i.get("type")) {var r = n.get("origin")._origin;if (a.isObjectValueEqual(r, t)) return e = n, !1;}}), e;}, i._selectedShape = function (t) {var e = this.offset,i = this.style,n = this.appendRadius,r = this.chart;this.lastShape = t;var o = t._attrs.attrs,s = o.x,c = o.y,l = o.startAngle,u = o.endAngle,h = o.r,f = o.fill,p = r.get("frontPlot").addShape("sector", { attrs: a.mix({ x: s, y: c, r: h + e + n, r0: h + e, fill: f, startAngle: l, endAngle: u }, i) });this.halo = p;var g = this.animate;g && (!0 === g && (g = { duration: 300 }), p.attr("r", h + e), p.animate().to(a.mix({ attrs: { r: h + e + n } }, g)));}, i.start = function (t) {var e = this.chart;"tap" === t.type && (t.clientX = t.center.x, t.clientY = t.center.y);var i = a.createEvent(t, e),n = i.x,r = i.y;this.halo && this.halo.remove(!0);var o = e.getSnapRecords({ x: n, y: r });if (!o.length) return this.selected = !1, void (this.selectedShape = null);var s = o[0]._origin,c = this._getSelectedShapeByData(s),l = this.lastShape;if (this.selectedShape = c, this.selected = !0, c === l) {if (!this.cancelable) return;this.halo && this.halo.remove(!0), this.lastShape = null, this.selected = !1;} else this._selectedShape(c);this.canvas.draw();}, i.end = function (t) {var e = this.selectedShape;e && !e.get("destroyed") && (t.data = e.get("origin")._origin, t.shapeInfo = e.get("origin"), t.shape = e, t.selected = !!this.selected);}, e;}(o);s.registerInteraction("pie-select", c), t.exports = c;}, function (t, e, i) {function n(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var r = i(0),a = i(28),o = i(43),s = i(15),c = function (t) {function e(e, i) {var n,a = (n = t.call(this, e, i) || this).defaultSelected;if (r.isObject(a)) {var o = n._selectShapesByData(a),s = o.selectedShape,c = o.unSelectedShapes;s && n._selectShapes(s, c), n.selectedShape = s;}return n;}n(e, t);var i = e.prototype;return i.getDefaultCfg = function () {var e = t.prototype.getDefaultCfg.call(this);return e = r.mix({}, e, { startEvent: "tap", processEvent: null, selectAxis: !0, selectAxisStyle: { fontWeight: "bold" }, mode: "shape", selectStyle: { fillOpacity: 1 }, unSelectStyle: { fillOpacity: .4 }, cancelable: !0, defaultSelected: null }), (r.isWx || r.isMy) && (e.startEvent = "touchstart", e.endEvent = "touchend"), e;}, i._getIntervalShapes = function () {var t = [];return this.chart.get("geoms").forEach(function (e) {if ("interval" === e.get("type")) {var i = e.get("container");t = t.concat(i.get("children"));}}), t;}, i._resetShape = function (t) {var e = t.get("_originAttrs");e && (t._attrs.attrs = e, t.set("_originAttrs", null));}, i._setEventData = function (t) {var e = this.selectedShape;e && !e.get("destroyed") && (t.data = e.get("origin")._origin, t.shapeInfo = e.get("origin"), t.shape = e, t.selected = !!e.get("_selected"));}, i._selectShapesByData = function (t) {var e = this._getIntervalShapes(),i = null,n = [];return r.each(e, function (e) {if (e.get("isShape") && "interval" === e.get("className")) {var a = e.get("origin")._origin;r.isObjectValueEqual(a, t) ? i = e : n.push(e);}}), { selectedShape: i, unSelectedShapes: n };}, i._selectShapes = function (t, e) {var i = this.selectStyle,n = this.unSelectStyle,a = this.selectAxisStyle,o = this.chart;if (!t.get("_originAttrs")) {var s = Object.assign({}, t.attr());t.set("_originAttrs", s);}if (t.attr(i), r.each(e, function (t) {if (t.get("_originAttrs")) t.attr(t.get("_originAttrs"));else {var e = Object.assign({}, t.attr());t.set("_originAttrs", e);}t.set("_selected", !1), n && t.attr(n);}), t.set("_selected", !0), this.selectAxis) {this.selectedAxisShape && this._resetShape(this.selectedAxisShape);var c,l = o.getXScale(),u = t.get("origin")._origin,h = o.get("axisController"),f = h.frontPlot,p = h.backPlot;r.each(f.get("children").concat(p.get("children")), function (t) {if (t.get("value") === l.scale(u[l.field])) return c = t, !1;}), this.selectedAxisShape = c, c.set("_originAttrs", Object.assign({}, c.attr())), c.attr(a);}this.canvas.draw();}, i.reset = function () {var t = this;if (t.selectedShape) {var e = t._getIntervalShapes();r.each(e, function (e) {t._resetShape(e), e.set("_selected", !1);}), t.selectedAxisShape && t._resetShape(t.selectedAxisShape), t.canvas.draw(), t.selectedShape = null, t.selectedAxisShape = null;}}, i.start = function (t) {var e = this.chart;"tap" === t.type && (t.clientX = t.center.x, t.clientY = t.center.y);var i,n = r.createEvent(t, e),o = n.x,s = n.y,c = this.mode,l = this._getIntervalShapes(),u = [];if ("shape" === c) {var h = e.get("plotRange");if (!a.isPointInPlot({ x: o, y: s }, h)) return void this.reset();r.each(l, function (t) {var e = t.getBBox();o >= e.x && o <= e.x + e.width && s >= e.y && s <= e.height + e.y ? i = t : u.push(t);});} else if ("range" === c) {var f = e.getSnapRecords({ x: o, y: s });if (!f.length) return void this.reset();var p = f[0]._origin,g = this._selectShapesByData(p);i = g.selectedShape, u = g.unSelectedShapes;}if (i) {if (this.selectedShape = i, i.get("_selected")) {if (!this.cancelable) return void this._setEventData(t);this.reset();} else this._selectShapes(i, u);} else this.reset();this._setEventData(t);}, i.end = function (t) {this._setEventData(t);}, e;}(o);s.registerInteraction("interval-select", c), t.exports = c;}, function (t, e, i) {function n(t) {if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}function r(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var a = i(0),o = i(43),s = i(15),c = i(133),l = i(135),u = i(134),h = function (t) {function e(e, i) {var r,o = n(r = t.call(this, e, i) || this),s = o.hammer,h = o.threshold,f = o.velocity;return s && s.get("swipe").set({ direction: 6, threshold: h, velocity: f }), i.registerPlugins([c, { changeData: function changeData() {o.limitRange = {};}, clear: function clear() {o.limitRange = {};} }]), o.mode = "x", a.mix(o, u, l), r;}r(e, t);var i = e.prototype;return i.getDefaultCfg = function () {var e = t.prototype.getDefaultCfg.call(this);return e = a.mix({}, e, { startEvent: "touchstart", processEvent: "swipe", endEvent: "touchend", currentDeltaX: null, threshold: 10, velocity: .3, limitRange: {}, _timestamp: 0, _panCumulativeDelta: 0, speed: 5 });}, i.process = function (t) {this.currentDeltaX = 0, this._handleMove(t);}, i.end = function () {this.currentDeltaX = null, this._panCumulativeDelta = 0;}, e;}(o);s.registerInteraction("swipe", h), t.exports = h;}, function (t, e, i) {function n(t) {if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}function r(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var a = i(0),o = i(43),s = i(15),c = i(133),l = i(135),u = i(136),h = i(134),f = function (t) {function e(e, i) {var r,o = n(r = t.call(this, e, i) || this),s = o.hammer,f = o.panThreshold;return s && s.get("pan").set({ threshold: f }), i.registerPlugins([c, { changeData: function changeData() {o.limitRange = {};}, clear: function clear() {o.limitRange = {};} }]), a.mix(n(r), h, l, u), r._bindPress(), r;}r(e, t);var i = e.prototype;return i.getDefaultCfg = function () {var e = t.prototype.getDefaultCfg.call(this);return e = a.mix({}, e, { startEvent: "panstart", processEvent: "panmove", endEvent: "panend", resetEvent: "touchend", mode: "x", panThreshold: 10, pressThreshold: 9, pressTime: 251, currentDeltaX: null, currentDeltaY: null, limitRange: {}, _timestamp: 0, lastPoint: null, _panCumulativeDelta: 0, speed: 5 }), (a.isWx || a.isMy) && (e.startEvent = "touchstart", e.processEvent = "touchmove", e.endEvent = "touchend"), e;}, i.start = function (t) {this.pressed || (this.currentDeltaX = 0, this.currentDeltaY = 0, "touchstart" !== t.type && "touchStart" !== t.type || (this.lastPoint = t.touches[0]), this._handleMove(t));}, i.process = function (t) {this.pressed || this._handleMove(t);}, i.end = function () {this.pressed || (this.currentDeltaX = null, this.currentDeltaY = null, this.lastPoint = null, this._panCumulativeDelta = 0);}, e;}(o);s.registerInteraction("pan", f), t.exports = f;}, function (t, e, i) {function n(t) {if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}function r(t, e) {t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;}var a = i(0),o = i(101),s = i(43),c = i(15),l = i(133),u = i(136),h = i(134),f = function (t) {function e(e, i) {var r,o = n(r = t.call(this, e, i) || this);return o.hammer.get("pinch").set({ enable: !0 }), i.registerPlugins([l, { changeData: function changeData() {o.limitRange = {}, o.originTicks = null;}, clear: function clear() {o.limitRange = {}, o.originTicks = null;} }]), a.mix(o, u, h), o._bindPress(), r;}r(e, t);var i = e.prototype;return i.getDefaultCfg = function () {var e = t.prototype.getDefaultCfg.call(this);return a.mix({}, e, { startEvent: "pinchstart", processEvent: "pinch", endEvent: "pinchend", resetEvent: "touchend", pressThreshold: 9, pressTime: 251, mode: "x", currentPinchScaling: null, originValues: null, minScale: null, maxScale: null, limitRange: {}, sensitivity: 1, _pinchCumulativeDelta: 0, _timestamp: 0 });}, i.start = function () {this.pressed || (this.currentPinchScaling = 1);}, i.process = function (t) {this.pressed || this._handlePinch(t);}, i.end = function (t) {this.pressed || (this._handlePinch(t), this.currentPinchScaling = null, this.pinchCumulativeDelta = 0);}, i._handlePinch = function (t) {var e,i = 1 / this.currentPinchScaling * t.scale,n = t.target.getBoundingClientRect(),r = { x: t.center.x - n.left, y: t.center.y - n.top },a = Math.abs(t.pointers[0].clientX - t.pointers[1].clientX),o = Math.abs(t.pointers[0].clientY - t.pointers[1].clientY),s = a / o;e = s > .3 && s < 1.7 ? "xy" : a > o ? "x" : "y";var c = this._timestamp,l = +new Date();l - c > 16 && (this._doZoom(i, r, e), this._timestamp = l), this.currentPinchScaling = t.scale;}, i._doZoom = function (t, e, i) {var n,r = this,s = r.mode,c = r.chart,l = r.limitRange;n = "xy" === s && void 0 !== i ? i : "xy";var u = c.get("data");if (a.directionEnabled(s, "x") && a.directionEnabled(n, "x")) {var h = c.getXScale(),f = h.field;l[f] || (l[f] = o.getLimitRange(u, h)), h.isCategory ? r._zoomCatScale(h, t, e) : h.isLinear && r._zoomLinearScale(h, t, e, "x");var p = o.getColDef(c, f);this.xRange = o.getFieldRange(p, l[f], h.type);}if (a.directionEnabled(s, "y") && a.directionEnabled(n, "y")) {var g = c.getYScales();a.each(g, function (i) {var n = i.field;l[n] || (l[n] = o.getLimitRange(u, i)), i.isLinear && r._zoomLinearScale(i, t, e, "y");});var d = o.getColDef(c, g[0].field);this.yRange = o.getFieldRange(d, l[g[0].field], g[0].type);}c.repaint();}, i._zoomLinearScale = function (t, e, i, n) {var r = this.chart,a = t.min,o = t.max,s = t.field,c = o - a,l = this.limitRange,u = l[s].max - l[s].min,h = r.get("coord"),f = c * (e - 1);if (this.minScale && e < 1) {var p = u / this.minScale;f = Math.max(c - p, f);}if (this.maxScale && e >= 1) {var g = u / this.maxScale;f = Math.min(c - g, f);}var d = h.invertPoint(i),v = "x" === n ? d.x : d.y,y = o - f * (1 - v),m = a + f * v;this.updateLinearScale(s, m, y);}, i._zoomCatScale = function (t, e, i) {var n = this._pinchCumulativeDelta,r = this.sensitivity;n = e > 1 ? n + 1 : n - 1, this._pinchCumulativeDelta = n;var a = t.field,o = t.values,s = this.chart.get("coord");this.originTicks || (this.originTicks = t.ticks);var c = this.limitRange[a],l = c.length,u = this.minScale || 1,h = this.maxScale || 5,f = parseInt(l / h),p = parseInt(l / u),g = o.length;if (n > 0 && g <= f) return null;if (n < 0 && g >= p) return null;var d = l - 1,v = o[0],y = o[g - 1],m = c.indexOf(v),x = c.indexOf(y),_ = (s.start.x + s.end.x) / 2,S = i.x;if (Math.abs(n) > r) {var b = Math.max(1, parseInt(g * Math.abs(e - 1)));n < 0 ? (S >= _ ? m <= 0 ? x = Math.min(d, x + b) : m = Math.max(0, m - b) : S < _ && (x >= d ? m = Math.max(0, m - b) : x = Math.min(d, x + b)), this._pinchCumulativeDelta = 0) : n > 0 && (S >= _ ? m = m < x ? m = Math.min(x, m + b) : m : S < _ && (x = x > m ? x = Math.max(m, x - b) : x), this._pinchCumulativeDelta = 0);var C = c.slice(m, x + 1);this.updateCatScale(a, C, this.originTicks, c, m, x);}}, e;}(s);c.registerInteraction("pinch", f), t.exports = f;}]);});

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */
/*!******************************************************************!*\
  !*** E:/公司项目/Nfslink/main.js?{"page":"pages%2Fsplash%2Fsplash"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _splash = _interopRequireDefault(__webpack_require__(/*! ./pages/splash/splash.vue */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_splash.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/*!****************************************************************!*\
  !*** E:/公司项目/Nfslink/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ 29));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/*!************************************!*\
  !*** E:/公司项目/Nfslink/utils/api.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getajax = getajax;exports.postajax = postajax;exports.default = exports.api = void 0;var _request = _interopRequireDefault(__webpack_require__(/*! ./request */ 35));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function JsontoForm(params) {
  var str = [];
  for (var key in params) {
    str.push(key + "=" + params[key]);
  }
  return str.join('&');

}
var api = {
  /* 登录 */
  login: '/plat/login',
  getuserinfo: '/foun/student/list_by_curr_login_parents_role',
  gettopiclist: '/inte/homeSchool/courseDetail', //主题列表
  advanceProgress: '/inte/homeSchool/advanceProgress', //进步趋势
  studentAnalyseDetail: '/inte/homeSchool/studentAnalyseDetail', //答题记录
  getvoiceRecord: '/inte/homeSchool/voiceRecord', //语言记录
  getDatePullList: '/inte/homeSchool/getDatePullList' };exports.api = api;

function getajax(url) {
  return _request.default.get(url);
}
function postajax(url, params) {
  // let myparams = JsontoForm(params);
  return _request.default.post(url, params);
}var _default =
{
  api: api,
  getajax: getajax,
  postajax: postajax };exports.default = _default;

/***/ }),
/* 35 */
/*!****************************************!*\
  !*** E:/公司项目/Nfslink/utils/request.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _index = __webpack_require__(/*! @/utils/index.js */ 36);


var Fly = __webpack_require__(/*! ./wx */ 37);
var request = new Fly();

request.config.timeout = 60 * 1000;
request.config.withCredentials = true;
request.config.baseURL = _index.basePath;
request.interceptors.request.use(function (request) {
  if (uni.getStorageSync('cookiekey')) {
    request.headers["Cookie"] = uni.getStorageSync('cookiekey');
  }
  uni.showLoading({
    title: '拼命加载中...' });

  request.withCredentials = true;
  return request;
});

request.interceptors.response.use(
function (response, promise) {
  console.log(response.headers);
  if (response && response.headers && response.headers['set-cookie']) {
    uni.setStorage({
      key: 'cookiekey',
      data: response.headers['set-cookie'][0] });

  }
  wx.hideLoading();
  if (response.data.code == 0) {
    return promise.resolve(response.data);
  } else {
    console.log(response.data.msg);
    uni.showToast({
      title: response.data.msg || '请求发生错误了',
      icon: 'none' });

    if (response.data.code == 401) {
      setTimeout(function () {
        uni.redirectTo({
          url: '/pages/login/login' });

      }, 500);
    }
    return promise.reject(err);
  }
},
function (err, promise) {
  uni.hideLoading();
  console.log(err);
  uni.showToast({
    title: err.response && err.response.data.msg || '请求发生错误了',
    icon: 'none' });

  return promise.reject(err);
});var _default =


request;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 36 */
/*!**************************************!*\
  !*** E:/公司项目/Nfslink/utils/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.formatTime = formatTime;exports.regPhone = regPhone;exports.regpayPwd = regpayPwd;exports.toBase64 = toBase64;exports.base64ToString = base64ToString;exports.default = exports.fileUrl = exports.basePath = void 0;function formatNumber(n) {
  var str = n.toString();
  return str[1] ? str : "0".concat(str);
}

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var t1 = [year, month, day].map(formatNumber).join('-');
  var t2 = [hour, minute, second].map(formatNumber).join(':');

  return "".concat(t1, " ").concat(t2);
}
function regPhone(phone) {
  var reg = /^1[3-9]\d{9}$/;

  return reg.test(phone);
}
/*校验支付密码*/
function regpayPwd(pwd) {
  var reg = /^\d{6}$/;
  return reg.test(pwd);
}
var toBase64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var base64Pad = '=';
/*字符串转化base64*/
function toBase64(data) {
  var result = '';
  var length = data.length;
  var i;
  // Convert every three bytes to 4 ascii characters.                                                 

  for (i = 0; i < length - 2; i += 3) {
    result += toBase64Table[data.charCodeAt(i) >> 2];
    result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)];
    result += toBase64Table[((data.charCodeAt(i + 1) & 0x0f) << 2) + (data.charCodeAt(i + 2) >> 6)];
    result += toBase64Table[data.charCodeAt(i + 2) & 0x3f];
  }

  // Convert the remaining 1 or 2 bytes, pad out to 4 characters.                                     

  if (length % 3) {
    i = length - length % 3;
    result += toBase64Table[data.charCodeAt(i) >> 2];
    if (length % 3 == 2) {
      result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)];
      result += toBase64Table[(data.charCodeAt(i + 1) & 0x0f) << 2];
      result += base64Pad;
    } else {
      result += toBase64Table[(data.charCodeAt(i) & 0x03) << 4];
      result += base64Pad + base64Pad;
    }
  }
  return result;
}
/** Convert Base64 data to a string */
var toBinaryTable = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 0, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];


function base64ToString(data) {
  var result = '';
  var leftbits = 0; // number of bits decoded, but yet to be appended  
  var leftdata = 0; // bits decoded, but yet to be appended 
  // Convert one by one.                                                                             
  for (var i = 0; i < data.length; i++) {
    var c = toBinaryTable[data.charCodeAt(i) & 0x7f];
    var padding = data.charCodeAt(i) == base64Pad.charCodeAt(0);
    // Skip illegal characters and whitespace  
    if (c == -1) continue;
    // Collect data into leftdata, update bitcount  
    leftdata = leftdata << 6 | c;
    leftbits += 6;
    // If we have 8 or more bits, append 8 bits to the result 
    if (leftbits >= 8) {
      leftbits -= 8;
      // Append if not padding. 
      if (!padding)
      result += String.fromCharCode(leftdata >> leftbits & 0xff);
      leftdata &= (1 << leftbits) - 1;
    }
  }
  // If there are any bits left, the base64 string was corrupted                                      
  if (leftbits)
  throw Components.Exception('Corrupted base64 string');
  return result;
}
var basePath = 'http://113.57.172.27:8880/platform-face';exports.basePath = basePath;
var fileUrl = 'http://113.57.172.27:8880/platform-face';exports.fileUrl = fileUrl;var _default =
{
  formatNumber: formatNumber,
  formatTime: formatTime,
  regPhone: regPhone,
  regpayPwd: regpayPwd,
  toBase64: toBase64,
  base64ToString: base64ToString,
  basePath: basePath,
  fileUrl: fileUrl };exports.default = _default;

/***/ }),
/* 37 */
/*!***********************************!*\
  !*** E:/公司项目/Nfslink/utils/wx.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
!function (e, t) {if (true) module.exports = t();else { var r, n; }}(void 0, function () {return function (e) {function t(r) {if (n[r]) return n[r].exports;var o = n[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;}var n = {};return t.m = e, t.c = n, t.i = function (e) {return e;}, t.d = function (e, n, r) {t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });}, t.n = function (e) {var n = e && e.__esModule ? function () {return e.default;} : function () {return e;};return t.d(n, "a", n), n;}, t.o = function (e, t) {return Object.prototype.hasOwnProperty.call(e, t);}, t.p = "", t(t.s = 13);}([function (e, t, n) {"use strict";var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e;} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;};e.exports = { type: function type(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}, isObject: function isObject(e, t) {return t ? "object" === this.type(e) : e && "object" === (void 0 === e ? "undefined" : r(e));}, isFormData: function isFormData(e) {return "undefined" != typeof FormData && e instanceof FormData;}, trim: function trim(e) {return e.replace(/(^\s*)|(\s*$)/g, "");}, encode: function encode(e) {return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");}, formatParams: function formatParams(e) {function t(e, s) {var a = o.encode,i = o.type(e);if ("array" == i) e.forEach(function (e, n) {o.isObject(e) || (n = ""), t(e, s + "%5B" + n + "%5D");});else if ("object" == i) for (var u in e) {s ? t(e[u], s + "%5B" + a(u) + "%5D") : t(e[u], a(u));} else r || (n += "&"), r = !1, n += s + "=" + a(e);}var n = "",r = !0,o = this;return this.isObject(e) ? (t(e, ""), n) : e;}, merge: function merge(e, t) {for (var n in t) {e.hasOwnProperty(n) ? this.isObject(t[n], 1) && this.isObject(e[n], 1) && this.merge(e[n], t[n]) : e[n] = t[n];}return e;} };}, function (e, t, n) {function r(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}function o(e) {return function () {function t() {r(this, t), this.requestHeaders = {}, this.readyState = 0, this.timeout = 0, this.responseURL = "", this.responseHeaders = {};}return a(t, [{ key: "_call", value: function value(e) {this[e] && this[e].apply(this, [].splice.call(arguments, 1));} }, { key: "_changeReadyState", value: function value(e) {this.readyState = e, this._call("onreadystatechange");} }, { key: "open", value: function value(e, t) {if (this.method = e, t) {if (t = i.trim(t), 0 !== t.indexOf("http") && u) {var n = document.createElement("a");n.href = t, t = n.href;}} else t = location.href;this.responseURL = t, this._changeReadyState(1);} }, { key: "send", value: function value(t) {var n = this;t = t || null;var r = this;if (e) {var o = { method: r.method, url: r.responseURL, headers: r.requestHeaders || {}, body: t };i.merge(o, r._options || {}), "GET" === o.method && (o.body = null), r._changeReadyState(3);var a = void 0;r.timeout = r.timeout || 0, r.timeout > 0 && (a = setTimeout(function () {3 === r.readyState && (n._call("onloadend"), r._changeReadyState(0), r._call("ontimeout"));}, r.timeout)), o.timeout = r.timeout, e(o, function (e) {function t(t) {var n = e[t];return delete e[t], n;}if (3 === r.readyState) {clearTimeout(a), r.status = t("statusCode") - 0;var n = t("responseText"),o = t("statusMessage");if (r.status) {var i = t("headers"),c = {};for (var f in i) {var l = i[f],p = f.toLowerCase();"object" === (void 0 === l ? "undefined" : s(l)) ? c[p] = l : (c[p] = c[p] || [], c[p].push(l));}var d = c["set-cookie"];u && d && d.forEach(function (e) {document.cookie = e.replace(/;\s*httpOnly/gi, "");}), r.responseHeaders = c, r.statusText = o || "", r.response = r.responseText = n, r._response = e, r._changeReadyState(4), r._call("onload");} else r.statusText = n, r._call("onerror", { msg: o });r._call("onloadend");}});} else console.error("Ajax require adapter");} }, { key: "setRequestHeader", value: function value(e, t) {this.requestHeaders[i.trim(e)] = t;} }, { key: "getResponseHeader", value: function value(e) {return (this.responseHeaders[e.toLowerCase()] || "").toString() || null;} }, { key: "getAllResponseHeaders", value: function value() {var e = "";for (var t in this.responseHeaders) {e += t + ":" + this.getResponseHeader(t) + "\r\n";}return e || null;} }, { key: "abort", value: function value(e) {this._changeReadyState(0), this._call("onerror", { msg: e }), this._call("onloadend");} }], [{ key: "setAdapter", value: function value(t) {e = t;} }]), t;}();}var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e;} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;},a = function () {function e(e, t) {for (var n = 0; n < t.length; n++) {var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);}}return function (t, n, r) {return n && e(t.prototype, n), r && e(t, r), t;};}(),i = n(0),u = "undefined" != typeof document;e.exports = o;}, function (e, t, n) {function r(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");}var o = function () {function e(e, t) {for (var n = 0; n < t.length; n++) {var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);}}return function (t, n, r) {return n && e(t.prototype, n), r && e(t, r), t;};}(),s = n(0),a = "undefined" != typeof document,i = function () {function e(t) {function n(e) {function t() {e.p = n = r = null;}var n = void 0,r = void 0;s.merge(e, { lock: function lock() {n || (e.p = new Promise(function (e, t) {n = e, r = t;}));}, unlock: function unlock() {n && (n(), t());}, clear: function clear() {r && (r("cancel"), t());} });}r(this, e), this.engine = t || XMLHttpRequest, this.default = this;var o = this.interceptors = { response: { use: function use(e, t) {this.handler = e, this.onerror = t;} }, request: { use: function use(e) {this.handler = e;} } },a = o.request;n(o.response), n(a), this.config = { method: "GET", baseURL: "", headers: {}, timeout: 0, params: {}, parseJson: !0, withCredentials: !1 };}return o(e, [{ key: "request", value: function value(e, t, n) {var r = this,o = new this.engine(),i = "Content-Type",u = i.toLowerCase(),c = this.interceptors,f = c.request,l = c.response,p = f.handler,d = new Promise(function (c, d) {function h(e) {return e && e.then && e.catch;}function m(e, t) {e ? e.then(function () {t();}) : t();}function y(n) {function r(e, t, r) {m(l.p, function () {if (e) {r && (t.request = n);var o = e.call(l, t, Promise);t = void 0 === o ? t : o;}h(t) || (t = Promise[0 === r ? "resolve" : "reject"](t)), t.then(function (e) {c(e);}).catch(function (e) {d(e);});});}function f(e) {e.engine = o, r(l.onerror, e, -1);}function p(e, t) {this.message = e, this.status = t;}t = n.body, e = s.trim(n.url);var y = s.trim(n.baseURL || "");if (e || !a || y || (e = location.href), 0 !== e.indexOf("http")) {var v = "/" === e[0];if (!y && a) {var g = location.pathname.split("/");g.pop(), y = location.protocol + "//" + location.host + (v ? "" : g.join("/"));}if ("/" !== y[y.length - 1] && (y += "/"), e = y + (v ? e.substr(1) : e), a) {var b = document.createElement("a");b.href = e, e = b.href;}}var x = s.trim(n.responseType || ""),w = -1 !== ["GET", "HEAD", "DELETE", "OPTION"].indexOf(n.method),j = s.type(t),O = n.params || {};w && "object" === j && (O = s.merge(t, O)), O = s.formatParams(O);var S = [];O && S.push(O), w && t && "string" === j && S.push(t), S.length > 0 && (e += (-1 === e.indexOf("?") ? "?" : "&") + S.join("&")), o.open(n.method, e);try {o.withCredentials = !!n.withCredentials, o.timeout = n.timeout || 0, "stream" !== x && (o.responseType = x);} catch (e) {}var T = n.headers[i] || n.headers[u],k = "application/x-www-form-urlencoded";s.trim((T || "").toLowerCase()) === k ? t = s.formatParams(t) : s.isFormData(t) || -1 === ["object", "array"].indexOf(s.type(t)) || (k = "application/json;charset=utf-8", t = JSON.stringify(t)), T || w || (n.headers[i] = k);for (var R in n.headers) {if (R === i && s.isFormData(t)) delete n.headers[R];else try {o.setRequestHeader(R, n.headers[R]);} catch (e) {}}o.onload = function () {try {var e = o.response || o.responseText;e && n.parseJson && -1 !== (o.getResponseHeader(i) || "").indexOf("json") && !s.isObject(e) && (e = JSON.parse(e));var t = o.responseHeaders;if (!t) {t = {};var a = (o.getAllResponseHeaders() || "").split("\r\n");a.pop(), a.forEach(function (e) {if (e) {var n = e.split(":")[0];t[n] = o.getResponseHeader(n);}});}var u = o.status,c = o.statusText,d = { data: e, headers: t, status: u, statusText: c };if (s.merge(d, o._response), u >= 200 && u < 300 || 304 === u) d.engine = o, d.request = n, r(l.handler, d, 0);else {var h = new p(c, u);h.response = d, f(h);}} catch (h) {f(new p(h.msg, o.status));}}, o.onerror = function (e) {f(new p(e.msg || "Network Error", 0));}, o.ontimeout = function () {f(new p("timeout [ " + o.timeout + "ms ]", 1));}, o._options = n, setTimeout(function () {o.send(w ? null : t);}, 0);}s.isObject(e) && (n = e, e = n.url), n = n || {}, n.headers = n.headers || {}, m(f.p, function () {s.merge(n, JSON.parse(JSON.stringify(r.config)));var o = n.headers;o[i] = o[i] || o[u] || "", delete o[u], n.body = t || n.body, e = s.trim(e || ""), n.method = n.method.toUpperCase(), n.url = e;var a = n;p && (a = p.call(f, n, Promise) || n), h(a) || (a = Promise.resolve(a)), a.then(function (e) {e === n ? y(e) : c(e);}, function (e) {d(e);});});});return d.engine = o, d;} }, { key: "all", value: function value(e) {return Promise.all(e);} }, { key: "spread", value: function value(e) {return function (t) {return e.apply(null, t);};} }]), e;}();i.default = i, ["get", "post", "put", "patch", "head", "delete"].forEach(function (e) {i.prototype[e] = function (t, n, r) {return this.request(t, n, s.merge({ method: e }, r));};}), ["lock", "unlock", "clear"].forEach(function (e) {i.prototype[e] = function () {this.interceptors.request[e]();};}), e.exports = i;},,,,, function (e, t, n) {"use strict";e.exports = function (e, t) {var n = { method: e.method, url: e.url, dataType: e.dataType || void 0, header: e.headers, data: e.body || {}, responseType: e.responseType || "text", success: function success(e) {t({ statusCode: e.statusCode, responseText: e.data, headers: e.header, statusMessage: e.errMsg });}, fail: function fail(e) {t({ statusCode: e.statusCode || 0, statusMessage: e.errMsg });} };wx.request(n);};},,,,,, function (e, t, n) {"use strict";var r = n(2),o = n(1),s = n(7),a = o(s);e.exports = function (e) {return new r(e || a);};}]);});

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */
/*!****************************************************************!*\
  !*** E:/公司项目/Nfslink/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index/index.vue */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/*!******************************************!*\
  !*** E:/公司项目/Nfslink/utils/dayjs.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
!function (t, n) { true ? module.exports = n() : undefined;}(void 0, function () {"use strict";var t = "millisecond",n = "second",e = "minute",r = "hour",i = "day",s = "week",u = "month",o = "quarter",a = "year",h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c = function c(t, n, e) {var r = String(t);return !r || r.length >= n ? t : "" + Array(n + 1 - r.length).join(e) + t;},d = { s: c, z: function z(t) {var n = -t.utcOffset(),e = Math.abs(n),r = Math.floor(e / 60),i = e % 60;return (n <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0");}, m: function m(t, n) {var e = 12 * (n.year() - t.year()) + (n.month() - t.month()),r = t.clone().add(e, u),i = n - r < 0,s = t.clone().add(e + (i ? -1 : 1), u);return Number(-(e + (n - r) / (i ? r - s : s - r)) || 0);}, a: function a(t) {return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);}, p: function p(h) {return { M: u, y: a, w: s, d: i, D: "date", h: r, m: e, s: n, ms: t, Q: o }[h] || String(h || "").toLowerCase().replace(/s$/, "");}, u: function u(t) {return void 0 === t;} },$ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },l = "en",m = {};m[l] = $;var y = function y(t) {return t instanceof v;},M = function M(t, n, e) {var r;if (!t) return l;if ("string" == typeof t) m[t] && (r = t), n && (m[t] = n, r = t);else {var i = t.name;m[i] = t, r = i;}return !e && r && (l = r), r || !e && l;},g = function g(t, n, e) {if (y(t)) return t.clone();var r = n ? "string" == typeof n ? { format: n, pl: e } : n : {};return r.date = t, new v(r);},D = d;D.l = M, D.i = y, D.w = function (t, n) {return g(t, { locale: n.$L, utc: n.$u, $offset: n.$offset });};var v = function () {function c(t) {this.$L = this.$L || M(t.locale, null, !0), this.parse(t);}var d = c.prototype;return d.parse = function (t) {this.$d = function (t) {var n = t.date,e = t.utc;if (null === n) return new Date(NaN);if (D.u(n)) return new Date();if (n instanceof Date) return new Date(n);if ("string" == typeof n && !/Z$/i.test(n)) {var r = n.match(h);if (r) return e ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0);}return new Date(n);}(t), this.init();}, d.init = function () {var t = this.$d;this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();}, d.$utils = function () {return D;}, d.isValid = function () {return !("Invalid Date" === this.$d.toString());}, d.isSame = function (t, n) {var e = g(t);return this.startOf(n) <= e && e <= this.endOf(n);}, d.isAfter = function (t, n) {return g(t) < this.startOf(n);}, d.isBefore = function (t, n) {return this.endOf(n) < g(t);}, d.$g = function (t, n, e) {return D.u(t) ? this[n] : this.set(e, t);}, d.year = function (t) {return this.$g(t, "$y", a);}, d.month = function (t) {return this.$g(t, "$M", u);}, d.day = function (t) {return this.$g(t, "$W", i);}, d.date = function (t) {return this.$g(t, "$D", "date");}, d.hour = function (t) {return this.$g(t, "$H", r);}, d.minute = function (t) {return this.$g(t, "$m", e);}, d.second = function (t) {return this.$g(t, "$s", n);}, d.millisecond = function (n) {return this.$g(n, "$ms", t);}, d.unix = function () {return Math.floor(this.valueOf() / 1e3);}, d.valueOf = function () {return this.$d.getTime();}, d.startOf = function (t, o) {var h = this,f = !!D.u(o) || o,c = D.p(t),d = function d(t, n) {var e = D.w(h.$u ? Date.UTC(h.$y, n, t) : new Date(h.$y, n, t), h);return f ? e : e.endOf(i);},$ = function $(t, n) {return D.w(h.toDate()[t].apply(h.toDate(), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), h);},l = this.$W,m = this.$M,y = this.$D,M = "set" + (this.$u ? "UTC" : "");switch (c) {case a:return f ? d(1, 0) : d(31, 11);case u:return f ? d(1, m) : d(0, m + 1);case s:var g = this.$locale().weekStart || 0,v = (l < g ? l + 7 : l) - g;return d(f ? y - v : y + (6 - v), m);case i:case "date":return $(M + "Hours", 0);case r:return $(M + "Minutes", 1);case e:return $(M + "Seconds", 2);case n:return $(M + "Milliseconds", 3);default:return this.clone();}}, d.endOf = function (t) {return this.startOf(t, !1);}, d.$set = function (s, o) {var h,f = D.p(s),c = "set" + (this.$u ? "UTC" : ""),d = (h = {}, h[i] = c + "Date", h.date = c + "Date", h[u] = c + "Month", h[a] = c + "FullYear", h[r] = c + "Hours", h[e] = c + "Minutes", h[n] = c + "Seconds", h[t] = c + "Milliseconds", h)[f],$ = f === i ? this.$D + (o - this.$W) : o;if (f === u || f === a) {var l = this.clone().set("date", 1);l.$d[d]($), l.init(), this.$d = l.set("date", Math.min(this.$D, l.daysInMonth())).toDate();} else d && this.$d[d]($);return this.init(), this;}, d.set = function (t, n) {return this.clone().$set(t, n);}, d.get = function (t) {return this[D.p(t)]();}, d.add = function (t, o) {var h,f = this;t = Number(t);var c = D.p(o),d = function d(n) {var e = g(f);return D.w(e.date(e.date() + Math.round(n * t)), f);};if (c === u) return this.set(u, this.$M + t);if (c === a) return this.set(a, this.$y + t);if (c === i) return d(1);if (c === s) return d(7);var $ = (h = {}, h[e] = 6e4, h[r] = 36e5, h[n] = 1e3, h)[c] || 1,l = this.$d.getTime() + t * $;return D.w(l, this);}, d.subtract = function (t, n) {return this.add(-1 * t, n);}, d.format = function (t) {var n = this;if (!this.isValid()) return "Invalid Date";var e = t || "YYYY-MM-DDTHH:mm:ssZ",r = D.z(this),i = this.$locale(),s = this.$H,u = this.$m,o = this.$M,a = i.weekdays,h = i.months,c = function c(t, r, i, s) {return t && (t[r] || t(n, e)) || i[r].substr(0, s);},d = function d(t) {return D.s(s % 12 || 12, t, "0");},$ = i.meridiem || function (t, n, e) {var r = t < 12 ? "AM" : "PM";return e ? r.toLowerCase() : r;},l = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: o + 1, MM: D.s(o + 1, 2, "0"), MMM: c(i.monthsShort, o, h, 3), MMMM: h[o] || h(this, e), D: this.$D, DD: D.s(this.$D, 2, "0"), d: String(this.$W), dd: c(i.weekdaysMin, this.$W, a, 2), ddd: c(i.weekdaysShort, this.$W, a, 3), dddd: a[this.$W], H: String(s), HH: D.s(s, 2, "0"), h: d(1), hh: d(2), a: $(s, u, !0), A: $(s, u, !1), m: String(u), mm: D.s(u, 2, "0"), s: String(this.$s), ss: D.s(this.$s, 2, "0"), SSS: D.s(this.$ms, 3, "0"), Z: r };return e.replace(f, function (t, n) {return n || l[t] || r.replace(":", "");});}, d.utcOffset = function () {return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);}, d.diff = function (t, h, f) {var c,d = D.p(h),$ = g(t),l = 6e4 * ($.utcOffset() - this.utcOffset()),m = this - $,y = D.m(this, $);return y = (c = {}, c[a] = y / 12, c[u] = y, c[o] = y / 3, c[s] = (m - l) / 6048e5, c[i] = (m - l) / 864e5, c[r] = m / 36e5, c[e] = m / 6e4, c[n] = m / 1e3, c)[d] || m, f ? y : D.a(y);}, d.daysInMonth = function () {return this.endOf(u).$D;}, d.$locale = function () {return m[this.$L];}, d.locale = function (t, n) {if (!t) return this.$L;var e = this.clone(),r = M(t, n, !0);return r && (e.$L = r), e;}, d.clone = function () {return D.w(this.$d, this);}, d.toDate = function () {return new Date(this.valueOf());}, d.toJSON = function () {return this.isValid() ? this.toISOString() : null;}, d.toISOString = function () {return this.$d.toISOString();}, d.toString = function () {return this.$d.toUTCString();}, c;}();return g.prototype = v.prototype, g.extend = function (t, n) {return t(n, v, g), g;}, g.locale = M, g.isDayjs = y, g.unix = function (t) {return g(1e3 * t);}, g.en = m[l], g.Ls = m, g;});

/***/ }),
/* 47 */
/*!*******************************************************!*\
  !*** E:/公司项目/Nfslink/components/u-charts/u-charts.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {/*
 * uCharts v1.9.3.20190922
 * uni-app平台高性能跨全端图表，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）
 * Copyright (c) 2019 QIUN秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 
 * uCharts官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 */



var config = {
  yAxisWidth: 15,
  yAxisSplit: 5,
  xAxisHeight: 15,
  xAxisLineHeight: 15,
  legendHeight: 15,
  yAxisTitleWidth: 15,
  padding: [10, 10, 10, 10],
  pixelRatio: 1,
  rotate: false,
  columePadding: 3,
  fontSize: 13,
  //dataPointShape: ['diamond', 'circle', 'triangle', 'rect'],
  dataPointShape: ['circle', 'circle', 'circle', 'circle'],
  colors: ['#1890ff', '#2fc25b', '#facc14', '#f04864', '#8543e0', '#90ed7d'],
  pieChartLinePadding: 15,
  pieChartTextPadding: 5,
  xAxisTextPadding: 3,
  titleColor: '#333333',
  titleFontSize: 20,
  subtitleColor: '#999999',
  subtitleFontSize: 15,
  toolTipPadding: 3,
  toolTipBackground: '#000000',
  toolTipOpacity: 0.7,
  toolTipLineHeight: 20,
  radarLabelTextMargin: 15,
  gaugeLabelTextMargin: 15 };


var assign = function assign(target) {for (var _len2 = arguments.length, varArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {varArgs[_key2 - 1] = arguments[_key2];}
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  if (!varArgs || varArgs.length <= 0) {
    return target;
  }
  // 深度合并对象
  function deepAssign(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj1[key] && obj1[key].toString() === "[object Object]" ?
      deepAssign(obj1[key], obj2[key]) : obj1[key] = obj2[key];
    }
    return obj1;
  }

  varArgs.forEach(function (val) {
    target = deepAssign(target, val);
  });
  return target;
};

var util = {
  toFixed: function toFixed(num, limit) {
    limit = limit || 2;
    if (this.isFloat(num)) {
      num = num.toFixed(limit);
    }
    return num;
  },
  isFloat: function isFloat(num) {
    return num % 1 !== 0;
  },
  approximatelyEqual: function approximatelyEqual(num1, num2) {
    return Math.abs(num1 - num2) < 1e-10;
  },
  isSameSign: function isSameSign(num1, num2) {
    return Math.abs(num1) === num1 && Math.abs(num2) === num2 || Math.abs(num1) !== num1 && Math.abs(num2) !== num2;
  },
  isSameXCoordinateArea: function isSameXCoordinateArea(p1, p2) {
    return this.isSameSign(p1.x, p2.x);
  },
  isCollision: function isCollision(obj1, obj2) {
    obj1.end = {};
    obj1.end.x = obj1.start.x + obj1.width;
    obj1.end.y = obj1.start.y - obj1.height;
    obj2.end = {};
    obj2.end.x = obj2.start.x + obj2.width;
    obj2.end.y = obj2.start.y - obj2.height;
    var flag = obj2.start.x > obj1.end.x || obj2.end.x < obj1.start.x || obj2.end.y > obj1.start.y || obj2.start.y < obj1.end.y;
    return !flag;
  } };


//兼容H5点击事件
function getH5Offset(e) {
  e.mp = {
    changedTouches: [] };

  e.mp.changedTouches.push({
    x: e.offsetX,
    y: e.offsetY });

  return e;
}

// hex 转 rgba
function hexToRgb(hexValue, opc) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opc + ')';
}

function findRange(num, type, limit) {
  if (isNaN(num)) {
    throw new Error('[uCharts] unvalid series data!');
  }
  limit = limit || 10;
  type = type ? type : 'upper';
  var multiple = 1;
  while (limit < 1) {
    limit *= 10;
    multiple *= 10;
  }
  if (type === 'upper') {
    num = Math.ceil(num * multiple);
  } else {
    num = Math.floor(num * multiple);
  }
  while (num % limit !== 0) {
    if (type === 'upper') {
      num++;
    } else {
      num--;
    }
  }
  return num / multiple;
}

function calCandleMA(dayArr, nameArr, colorArr, kdata) {
  var seriesTemp = [];
  for (var k = 0; k < dayArr.length; k++) {
    var seriesItem = {
      data: [],
      name: nameArr[k],
      color: colorArr[k] };

    for (var i = 0, len = kdata.length; i < len; i++) {
      if (i < dayArr[k]) {
        seriesItem.data.push(null);
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayArr[k]; j++) {
        sum += kdata[i - j][1];
      }
      seriesItem.data.push(+(sum / dayArr[k]).toFixed(3));
    }
    seriesTemp.push(seriesItem);
  }
  return seriesTemp;
}

function calValidDistance(self, distance, chartData, config, opts) {
  var dataChartAreaWidth = opts.width - opts.area[1] - opts.area[3];
  var dataChartWidth = chartData.eachSpacing * (opts.chartData.xAxisData.xAxisPoints.length - 1);
  var validDistance = distance;
  if (distance >= 0) {
    validDistance = 0;
    self.event.trigger('scrollLeft');
  } else if (Math.abs(distance) >= dataChartWidth - dataChartAreaWidth) {
    validDistance = dataChartAreaWidth - dataChartWidth;
    self.event.trigger('scrollRight');
  }
  return validDistance;
}

function isInAngleRange(angle, startAngle, endAngle) {
  function adjust(angle) {
    while (angle < 0) {
      angle += 2 * Math.PI;
    }
    while (angle > 2 * Math.PI) {
      angle -= 2 * Math.PI;
    }
    return angle;
  }
  angle = adjust(angle);
  startAngle = adjust(startAngle);
  endAngle = adjust(endAngle);
  if (startAngle > endAngle) {
    endAngle += 2 * Math.PI;
    if (angle < startAngle) {
      angle += 2 * Math.PI;
    }
  }
  return angle >= startAngle && angle <= endAngle;
}

function calRotateTranslate(x, y, h) {
  var xv = x;
  var yv = h - y;
  var transX = xv + (h - yv - xv) / Math.sqrt(2);
  transX *= -1;
  var transY = (h - yv) * (Math.sqrt(2) - 1) - (h - yv - xv) / Math.sqrt(2);
  return {
    transX: transX,
    transY: transY };

}

function createCurveControlPoints(points, i) {

  function isNotMiddlePoint(points, i) {
    if (points[i - 1] && points[i + 1]) {
      return points[i].y >= Math.max(points[i - 1].y, points[i + 1].y) || points[i].y <= Math.min(points[i - 1].y,
      points[
      i + 1].y);
    } else {
      return false;
    }
  }
  var a = 0.2;
  var b = 0.2;
  var pAx = null;
  var pAy = null;
  var pBx = null;
  var pBy = null;
  if (i < 1) {
    pAx = points[0].x + (points[1].x - points[0].x) * a;
    pAy = points[0].y + (points[1].y - points[0].y) * a;
  } else {
    pAx = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
    pAy = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
  }

  if (i > points.length - 3) {
    var last = points.length - 1;
    pBx = points[last].x - (points[last].x - points[last - 1].x) * b;
    pBy = points[last].y - (points[last].y - points[last - 1].y) * b;
  } else {
    pBx = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
    pBy = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
  }
  if (isNotMiddlePoint(points, i + 1)) {
    pBy = points[i + 1].y;
  }
  if (isNotMiddlePoint(points, i)) {
    pAy = points[i].y;
  }
  if (pAy >= Math.max(points[i].y, points[i + 1].y) || pAy <= Math.min(points[i].y, points[i + 1].y)) {
    pAy = points[i].y;
  }
  if (pBy >= Math.max(points[i].y, points[i + 1].y) || pBy <= Math.min(points[i].y, points[i + 1].y)) {
    pBy = points[i + 1].y;
  }
  return {
    ctrA: {
      x: pAx,
      y: pAy },

    ctrB: {
      x: pBx,
      y: pBy } };


}

function convertCoordinateOrigin(x, y, center) {
  return {
    x: center.x + x,
    y: center.y - y };

}

function avoidCollision(obj, target) {
  if (target) {
    // is collision test
    while (util.isCollision(obj, target)) {
      if (obj.start.x > 0) {
        obj.start.y--;
      } else if (obj.start.x < 0) {
        obj.start.y++;
      } else {
        if (obj.start.y > 0) {
          obj.start.y++;
        } else {
          obj.start.y--;
        }
      }
    }
  }
  return obj;
}

function fillSeries(series, opts, config) {
  var index = 0;
  return series.map(function (item) {
    if (!item.color) {
      item.color = config.colors[index];
      index = (index + 1) % config.colors.length;
    }
    if (!item.index) {
      item.index = 0;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (typeof item.show == "undefined") {
      item.show = true;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (!item.pointShape) {
      item.pointShape = "circle";
    }
    if (!item.legendShape) {
      switch (item.type) {
        case 'line':
          item.legendShape = "line";
          break;
        case 'column':
          item.legendShape = "rect";
          break;
        case 'area':
          item.legendShape = "triangle";
          break;
        default:
          item.legendShape = "circle";}

    }
    return item;
  });
}

function getDataRange(minData, maxData) {
  var limit = 0;
  var range = maxData - minData;
  if (range >= 10000) {
    limit = 1000;
  } else if (range >= 1000) {
    limit = 100;
  } else if (range >= 100) {
    limit = 10;
  } else if (range >= 10) {
    limit = 5;
  } else if (range >= 1) {
    limit = 1;
  } else if (range >= 0.1) {
    limit = 0.1;
  } else if (range >= 0.01) {
    limit = 0.01;
  } else if (range >= 0.001) {
    limit = 0.001;
  } else if (range >= 0.0001) {
    limit = 0.0001;
  } else if (range >= 0.00001) {
    limit = 0.00001;
  } else {
    limit = 0.000001;
  }
  return {
    minRange: findRange(minData, 'lower', limit),
    maxRange: findRange(maxData, 'upper', limit) };

}

function measureText(text) {
  var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.fontSize;
  text = String(text);
  var text = text.split('');
  var width = 0;
  for (var i = 0; i < text.length; i++) {
    var item = text[i];
    if (/[a-zA-Z]/.test(item)) {
      width += 7;
    } else if (/[0-9]/.test(item)) {
      width += 5.5;
    } else if (/\./.test(item)) {
      width += 2.7;
    } else if (/-/.test(item)) {
      width += 3.25;
    } else if (/[\u4e00-\u9fa5]/.test(item)) {
      width += 10;
    } else if (/\(|\)/.test(item)) {
      width += 3.73;
    } else if (/\s/.test(item)) {
      width += 2.5;
    } else if (/%/.test(item)) {
      width += 8;
    } else {
      width += 10;
    }
  }
  return width * fontSize / 10;
}

function dataCombine(series) {
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data);
  }, []);
}

function dataCombineStack(series, len) {
  var sum = new Array(len);
  for (var j = 0; j < sum.length; j++) {
    sum[j] = 0;
  }
  for (var i = 0; i < series.length; i++) {
    for (var j = 0; j < sum.length; j++) {
      sum[j] += series[i].data[j];
    }
  }
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data).concat(sum);
  }, []);
}

function getTouches(touches, opts, e) {
  var x, y;
  if (touches.clientX) {
    if (opts.rotate) {
      y = opts.height - touches.clientX * opts.pixelRatio;
      x = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    } else {
      x = touches.clientX * opts.pixelRatio;
      y = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    }
  } else {
    if (opts.rotate) {
      y = opts.height - touches.x * opts.pixelRatio;
      x = touches.y * opts.pixelRatio;
    } else {
      x = touches.x * opts.pixelRatio;
      y = touches.y * opts.pixelRatio;
    }
  }
  return {
    x: x,
    y: y };

}

function getSeriesDataItem(series, index) {
  var data = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    if (item.data[index] !== null && typeof item.data[index] !== 'undefined' && item.show) {
      var seriesItem = {};
      seriesItem.color = item.color;
      seriesItem.type = item.type;
      seriesItem.style = item.style;
      seriesItem.pointShape = item.pointShape;
      seriesItem.disableLegend = item.disableLegend;
      seriesItem.name = item.name;
      seriesItem.show = item.show;
      seriesItem.data = item.format ? item.format(item.data[index]) : item.data[index];
      data.push(seriesItem);
    }
  }
  return data;
}

function getMaxTextListLength(list) {
  var lengthList = list.map(function (item) {
    return measureText(item);
  });
  return Math.max.apply(null, lengthList);
}

function getRadarCoordinateSeries(length) {
  var eachAngle = 2 * Math.PI / length;
  var CoordinateSeries = [];
  for (var i = 0; i < length; i++) {
    CoordinateSeries.push(eachAngle * i);
  }

  return CoordinateSeries.map(function (item) {
    return -1 * item + Math.PI / 2;
  });
}

function getToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var textList = seriesData.map(function (item) {
    var titleText = [];
    if (categories) {
      titleText = categories;
    } else {
      titleText = item.data;
    }
    return {
      text: option.format ? option.format(item, titleText[index]) : item.name + ': ' + item.data,
      color: item.color };

  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  for (var _i = 0; _i < validCalPoints.length; _i++) {
    var item = validCalPoints[_i];
    offset.x = Math.round(item.x);
    offset.y += item.y;
  }
  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getMixToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var textList = seriesData.map(function (item) {
    return {
      text: option.format ? option.format(item, categories[index]) : item.name + ': ' + item.data,
      color: item.color,
      disableLegend: item.disableLegend ? true : false };

  });
  textList = textList.filter(function (item) {
    if (item.disableLegend !== true) {
      return item;
    }
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  for (var _i2 = 0; _i2 < validCalPoints.length; _i2++) {
    var item = validCalPoints[_i2];
    offset.x = Math.round(item.x);
    offset.y += item.y;
  }
  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getCandleToolTipData(series, seriesData, calPoints, index, categories, extra) {
  var option = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  var upColor = extra.color.upFill;
  var downColor = extra.color.downFill;
  //颜色顺序为开盘，收盘，最低，最高
  var color = [upColor, upColor, downColor, upColor];
  var textList = [];
  var text0 = {
    text: categories[index],
    color: null };

  textList.push(text0);
  seriesData.map(function (item) {
    if (index == 0 && item.data[1] - item.data[0] < 0) {
      color[1] = downColor;
    } else {
      if (item.data[0] < series[index - 1][1]) {
        color[0] = downColor;
      }
      if (item.data[1] < item.data[0]) {
        color[1] = downColor;
      }
      if (item.data[2] > series[index - 1][1]) {
        color[2] = upColor;
      }
      if (item.data[3] < series[index - 1][1]) {
        color[3] = downColor;
      }
    }
    var text1 = {
      text: '开盘：' + item.data[0],
      color: color[0] };

    var text2 = {
      text: '收盘：' + item.data[1],
      color: color[1] };

    var text3 = {
      text: '最低：' + item.data[2],
      color: color[2] };

    var text4 = {
      text: '最高：' + item.data[3],
      color: color[3] };

    textList.push(text1, text2, text3, text4);
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  offset.x = Math.round(validCalPoints[0][0].x);
  return {
    textList: textList,
    offset: offset };

}

function filterSeries(series) {
  var tempSeries = [];
  for (var i = 0; i < series.length; i++) {
    if (series[i].show == true) {
      tempSeries.push(series[i]);
    }
  }
  return tempSeries;
}

function findCurrentIndex(currentPoints, calPoints, opts, config) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var currentIndex = -1;
  var spacing = 0;
  var xAxisPoints = [];
  for (var i = 0; i < calPoints[0].length; i++) {
    xAxisPoints.push(calPoints[0][i].x);
  }
  if ((opts.type == 'line' || opts.type == 'area') && opts.xAxis.boundaryGap == 'justify') {
    spacing = opts.chartData.eachSpacing / 2;
  }
  if (!opts.categories) {
    spacing = 0;
  }
  if (isInExactChartArea(currentPoints, opts, config)) {
    xAxisPoints.forEach(function (item, index) {
      if (currentPoints.x + offset + spacing > item) {
        currentIndex = index;
      }
    });
  }
  return currentIndex;
}

function findLegendIndex(currentPoints, legendData, opts) {
  var currentIndex = -1;
  if (isInExactLegendArea(currentPoints, legendData.area)) {
    var points = legendData.points;
    var index = -1;
    for (var i = 0, len = points.length; i < len; i++) {
      var item = points[i];
      for (var j = 0; j < item.length; j++) {
        index += 1;
        var area = item[j]['area'];
        if (currentPoints.x > area[0] && currentPoints.x < area[2] && currentPoints.y > area[1] && currentPoints.y < area[3]) {
          currentIndex = index;
          break;
        }
      }
    }
    return currentIndex;
  }
  return currentIndex;
}

function isInExactLegendArea(currentPoints, area) {
  return currentPoints.x > area.start.x && currentPoints.x < area.end.x && currentPoints.y > area.start.y &&
  currentPoints.y < area.end.y;
}

function isInExactChartArea(currentPoints, opts, config) {
  return currentPoints.x <= opts.width - opts.area[1] + 10 && currentPoints.x >= opts.area[3] - 10 && currentPoints.y >= opts.area[0] && currentPoints.y <= opts.height - opts.area[2];
}

function findRadarChartCurrentIndex(currentPoints, radarData, count) {
  var eachAngleArea = 2 * Math.PI / count;
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, radarData.center, radarData.radius)) {
    var fixAngle = function fixAngle(angle) {
      if (angle < 0) {
        angle += 2 * Math.PI;
      }
      if (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }
      return angle;
    };

    var angle = Math.atan2(radarData.center.y - currentPoints.y, currentPoints.x - radarData.center.x);
    angle = -1 * angle;
    if (angle < 0) {
      angle += 2 * Math.PI;
    }

    var angleList = radarData.angleList.map(function (item) {
      item = fixAngle(-1 * item);

      return item;
    });

    angleList.forEach(function (item, index) {
      var rangeStart = fixAngle(item - eachAngleArea / 2);
      var rangeEnd = fixAngle(item + eachAngleArea / 2);
      if (rangeEnd < rangeStart) {
        rangeEnd += 2 * Math.PI;
      }
      if (angle >= rangeStart && angle <= rangeEnd || angle + 2 * Math.PI >= rangeStart && angle + 2 * Math.PI <=
      rangeEnd) {
        currentIndex = index;
      }
    });
  }

  return currentIndex;
}

function findFunnelChartCurrentIndex(currentPoints, funnelData) {
  var currentIndex = -1;
  for (var i = 0, len = funnelData.series.length; i < len; i++) {
    var item = funnelData.series[i];
    if (currentPoints.x > item.funnelArea[0] && currentPoints.x < item.funnelArea[2] && currentPoints.y > item.funnelArea[1] && currentPoints.y < item.funnelArea[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findWordChartCurrentIndex(currentPoints, wordData) {
  var currentIndex = -1;
  for (var i = 0, len = wordData.length; i < len; i++) {
    var item = wordData[i];
    if (currentPoints.x > item.area[0] && currentPoints.x < item.area[2] && currentPoints.y > item.area[1] && currentPoints.y < item.area[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findMapChartCurrentIndex(currentPoints, opts) {
  var currentIndex = -1;
  var cData = opts.chartData.mapData;
  var data = opts.series;
  var tmp = pointToCoordinate(currentPoints.y, currentPoints.x, cData.bounds, cData.scale, cData.xoffset, cData.yoffset);
  var poi = [tmp.x, tmp.y];
  for (var i = 0, len = data.length; i < len; i++) {
    var item = data[i].geometry.coordinates;
    if (isPoiWithinPoly(poi, item)) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findPieChartCurrentIndex(currentPoints, pieData) {
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, pieData.center, pieData.radius)) {
    var angle = Math.atan2(pieData.center.y - currentPoints.y, currentPoints.x - pieData.center.x);
    angle = -angle;
    for (var i = 0, len = pieData.series.length; i < len; i++) {
      var item = pieData.series[i];
      if (isInAngleRange(angle, item._start_, item._start_ + item._proportion_ * 2 * Math.PI)) {
        currentIndex = i;
        break;
      }
    }
  }

  return currentIndex;
}

function isInExactPieChartArea(currentPoints, center, radius) {
  return Math.pow(currentPoints.x - center.x, 2) + Math.pow(currentPoints.y - center.y, 2) <= Math.pow(radius, 2);
}

function splitPoints(points) {
  var newPoints = [];
  var items = [];
  points.forEach(function (item, index) {
    if (item !== null) {
      items.push(item);
    } else {
      if (items.length) {
        newPoints.push(items);
      }
      items = [];
    }
  });
  if (items.length) {
    newPoints.push(items);
  }

  return newPoints;
}

function calLegendData(series, opts, config, chartData) {
  var legendData = {
    area: {
      start: {
        x: 0,
        y: 0 },

      end: {
        x: 0,
        y: 0 },

      width: 0,
      height: 0,
      wholeWidth: 0,
      wholeHeight: 0 },

    points: [],
    widthArr: [],
    heightArr: [] };

  if (opts.legend.show === false) {
    chartData.legendData = legendData;
    return legendData;
  }

  var padding = opts.legend.padding;
  var margin = opts.legend.margin;
  var fontSize = opts.legend.fontSize;
  var shapeWidth = 15 * opts.pixelRatio;
  var shapeRight = 5 * opts.pixelRatio;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pixelRatio, fontSize);
  if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
    var legendList = [];
    var widthCount = 0;
    var widthCountArr = [];
    var currentRow = [];
    for (var i = 0; i < series.length; i++) {
      var item = series[i];
      var itemWidth = shapeWidth + shapeRight + measureText(item.name || 'undefined', fontSize) + opts.legend.itemGap;
      if (widthCount + itemWidth > opts.width - opts.padding[1] - opts.padding[3]) {
        legendList.push(currentRow);
        widthCountArr.push(widthCount - opts.legend.itemGap);
        widthCount = itemWidth;
        currentRow = [item];
      } else {
        widthCount += itemWidth;
        currentRow.push(item);
      }
    }
    if (currentRow.length) {
      legendList.push(currentRow);
      widthCountArr.push(widthCount - opts.legend.itemGap);
      legendData.widthArr = widthCountArr;
      var legendWidth = Math.max.apply(null, widthCountArr);
      switch (opts.legend.float) {
        case 'left':
          legendData.area.start.x = opts.padding[3];
          legendData.area.end.x = opts.padding[3] + 2 * padding;
          break;
        case 'right':
          legendData.area.start.x = opts.width - opts.padding[1] - legendWidth - 2 * padding;
          legendData.area.end.x = opts.width - opts.padding[1];
          break;
        default:
          legendData.area.start.x = (opts.width - legendWidth) / 2 - padding;
          legendData.area.end.x = (opts.width + legendWidth) / 2 + padding;}

      legendData.area.width = legendWidth + 2 * padding;
      legendData.area.wholeWidth = legendWidth + 2 * padding;
      legendData.area.height = legendList.length * lineHeight + 2 * padding;
      legendData.area.wholeHeight = legendList.length * lineHeight + 2 * padding + 2 * margin;
      legendData.points = legendList;
    }
  } else {
    var len = series.length;
    var maxHeight = opts.height - opts.padding[0] - opts.padding[2] - 2 * margin - 2 * padding;
    var maxLength = Math.min(Math.floor(maxHeight / lineHeight), len);
    legendData.area.height = maxLength * lineHeight + padding * 2;
    legendData.area.wholeHeight = maxLength * lineHeight + padding * 2;
    switch (opts.legend.float) {
      case 'top':
        legendData.area.start.y = opts.padding[0] + margin;
        legendData.area.end.y = opts.padding[0] + margin + legendData.area.height;
        break;
      case 'bottom':
        legendData.area.start.y = opts.height - opts.padding[2] - margin - legendData.area.height;
        legendData.area.end.y = opts.height - opts.padding[2] - margin;
        break;
      default:
        legendData.area.start.y = (opts.height - legendData.area.height) / 2;
        legendData.area.end.y = (opts.height + legendData.area.height) / 2;}

    var lineNum = len % maxLength === 0 ? len / maxLength : Math.floor(len / maxLength + 1);
    var _currentRow = [];
    for (var _i3 = 0; _i3 < lineNum; _i3++) {
      var temp = series.slice(_i3 * maxLength, _i3 * maxLength + maxLength);
      _currentRow.push(temp);
    }

    legendData.points = _currentRow;

    if (_currentRow.length) {
      for (var _i4 = 0; _i4 < _currentRow.length; _i4++) {
        var _item = _currentRow[_i4];
        var maxWidth = 0;
        for (var j = 0; j < _item.length; j++) {
          var _itemWidth = shapeWidth + shapeRight + measureText(_item[j].name || 'undefined', fontSize) + opts.legend.itemGap;
          if (_itemWidth > maxWidth) {
            maxWidth = _itemWidth;
          }
        }
        legendData.widthArr.push(maxWidth);
        legendData.heightArr.push(_item.length * lineHeight + padding * 2);
      }
      var _legendWidth = 0;
      for (var _i5 = 0; _i5 < legendData.widthArr.length; _i5++) {
        _legendWidth += legendData.widthArr[_i5];
      }
      legendData.area.width = _legendWidth - opts.legend.itemGap + 2 * padding;
      legendData.area.wholeWidth = legendData.area.width + padding;
    }
  }

  switch (opts.legend.position) {
    case 'top':
      legendData.area.start.y = opts.padding[0] + margin;
      legendData.area.end.y = opts.padding[0] + margin + legendData.area.height;
      break;
    case 'bottom':
      legendData.area.start.y = opts.height - opts.padding[2] - legendData.area.height - margin;
      legendData.area.end.y = opts.height - opts.padding[2] - margin;
      break;
    case 'left':
      legendData.area.start.x = opts.padding[3];
      legendData.area.end.x = opts.padding[3] + legendData.area.width;
      break;
    case 'right':
      legendData.area.start.x = opts.width - opts.padding[1] - legendData.area.width;
      legendData.area.end.x = opts.width - opts.padding[1];
      break;}

  chartData.legendData = legendData;
  return legendData;
}

function calCategoriesData(categories, opts, config, eachSpacing) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };

  var categoriesTextLenth = categories.map(function (item) {
    return measureText(item, opts.xAxis.fontSize || config.fontSize);
  });
  var maxTextLength = Math.max.apply(this, categoriesTextLenth);

  if (opts.xAxis.rotateLabel == true && maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }
  return result;
}

function getXAxisTextList(series, opts, config) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
  var data = dataCombine(series);
  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      if (item.constructor == Array) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor == Array) {
        if (opts.type == 'candle') {
          item.map(function (subitem) {
            sorted.push(subitem);
          });
        } else {
          sorted.push(item[0]);
        }
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
  });

  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  //为了兼容v1.9.0之前的项目
  if (index > -1) {
    if (typeof opts.xAxis.data[index].min === 'number') {
      minData = Math.min(opts.xAxis.data[index].min, minData);
    }
    if (typeof opts.xAxis.data[index].max === 'number') {
      maxData = Math.max(opts.xAxis.data[index].max, maxData);
    }
  } else {
    if (typeof opts.xAxis.min === 'number') {
      minData = Math.min(opts.xAxis.min, minData);
    }
    if (typeof opts.xAxis.max === 'number') {
      maxData = Math.max(opts.xAxis.max, maxData);
    }
  }


  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    maxData += rangeSpan;
  }

  var dataRange = getDataRange(minData, maxData);
  var minRange = dataRange.minRange;
  var maxRange = dataRange.maxRange;

  var range = [];
  var eachRange = (maxRange - minRange) / opts.xAxis.splitNumber;

  for (var i = 0; i <= opts.xAxis.splitNumber; i++) {
    range.push(minRange + eachRange * i);
  }
  return range;
}

function calXAxisData(series, opts, config) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };


  result.ranges = getXAxisTextList(series, opts, config);
  result.rangesFormat = result.ranges.map(function (item) {
    item = opts.xAxis.format ? opts.xAxis.format(item) : util.toFixed(item, 2);
    return item;
  });
  var xAxisScaleValues = result.ranges.map(function (item) {
    // 如果刻度值是浮点数,则保留两位小数
    item = util.toFixed(item, 2);
    // 若有自定义格式则调用自定义的格式化函数
    item = opts.xAxis.format ? opts.xAxis.format(Number(item)) : item;
    return item;
  });

  result = Object.assign(result, getXAxisPoints(xAxisScaleValues, opts, config));
  // 计算X轴刻度的属性譬如每个刻度的间隔,刻度的起始点\结束点以及总长
  var eachSpacing = result.eachSpacing;

  var textLength = xAxisScaleValues.map(function (item) {
    return measureText(item);
  });

  // get max length of categories text
  var maxTextLength = Math.max.apply(this, textLength);

  // 如果刻度值文本内容过长,则将其逆时针旋转45°
  if (maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }

  if (opts.xAxis.disabled === true) {
    result.xAxisHeight = 0;
  }

  return result;
}

function getRadarDataPoints(angleList, center, radius, series, opts) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

  var radarOption = opts.extra.radar || {};
  radarOption.max = radarOption.max || 0;
  var maxData = Math.max(radarOption.max, Math.max.apply(null, dataCombine(series)));

  var data = [];var _loop2 = function _loop2(
  i) {
    var each = series[i];
    var listItem = {};
    listItem.color = each.color;
    listItem.legendShape = each.legendShape;
    listItem.pointShape = each.pointShape;
    listItem.data = [];
    each.data.forEach(function (item, index) {
      var tmp = {};
      tmp.angle = angleList[index];

      tmp.proportion = item / maxData;
      tmp.position = convertCoordinateOrigin(radius * tmp.proportion * process * Math.cos(tmp.angle), radius * tmp.proportion *
      process * Math.sin(tmp.angle), center);
      listItem.data.push(tmp);
    });

    data.push(listItem);};for (var i = 0; i < series.length; i++) {_loop2(i);
  }

  return data;
}

function getPieDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var count = 0;
  var _start_ = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
  }
  for (var _i6 = 0; _i6 < series.length; _i6++) {
    var _item2 = series[_i6];
    _item2.data = _item2.data === null ? 0 : _item2.data;
    if (count === 0) {
      _item2._proportion_ = 1 / series.length * process;
    } else {
      _item2._proportion_ = _item2.data / count * process;
    }
    _item2._radius_ = radius;
  }
  for (var _i7 = 0; _i7 < series.length; _i7++) {
    var _item3 = series[_i7];
    _item3._start_ = _start_;
    _start_ += 2 * _item3._proportion_ * Math.PI;
  }

  return series;
}

function getFunnelDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  series = series.sort(function (a, b) {return parseInt(b.data) - parseInt(a.data);});
  for (var i = 0; i < series.length; i++) {
    series[i].radius = series[i].data / series[0].data * radius * process;
    series[i]._proportion_ = series[i].data / series[0].data;
  }
  return series.reverse();
}

function getRoseDataPoints(series, type, minRadius, radius) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var count = 0;
  var _start_ = 0;

  var dataArr = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
    dataArr.push(item.data);
  }

  var minData = Math.min.apply(null, dataArr);
  var maxData = Math.max.apply(null, dataArr);
  var radiusLength = radius - minRadius;

  for (var _i8 = 0; _i8 < series.length; _i8++) {
    var _item4 = series[_i8];
    _item4.data = _item4.data === null ? 0 : _item4.data;
    if (count === 0 || type == 'area') {
      _item4._proportion_ = _item4.data / count * process;
      _item4._rose_proportion_ = 1 / series.length * process;
    } else {
      _item4._proportion_ = _item4.data / count * process;
      _item4._rose_proportion_ = _item4.data / count * process;
    }
    _item4._radius_ = minRadius + radiusLength * ((_item4.data - minData) / (maxData - minData));
  }
  for (var _i9 = 0; _i9 < series.length; _i9++) {
    var _item5 = series[_i9];
    _item5._start_ = _start_;
    _start_ += 2 * _item5._rose_proportion_ * Math.PI;
  }

  return series;
}

function getArcbarDataPoints(series, arcbarOption) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (process == 1) {
    process = 0.999999;
  }
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    var totalAngle = void 0;
    if (arcbarOption.type == 'circle') {
      totalAngle = 2;
    } else {
      if (arcbarOption.endAngle < arcbarOption.startAngle) {
        totalAngle = 2 + arcbarOption.endAngle - arcbarOption.startAngle;
      } else {
        totalAngle = arcbarOption.startAngle - arcbarOption.endAngle;
      }
    }
    item._proportion_ = totalAngle * item.data * process + arcbarOption.startAngle;
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getGaugeAxisPoints(categories, startAngle, endAngle) {
  var totalAngle = startAngle - endAngle + 1;
  var tempStartAngle = startAngle;
  for (var i = 0; i < categories.length; i++) {
    categories[i].value = categories[i].value === null ? 0 : categories[i].value;
    categories[i]._startAngle_ = tempStartAngle;
    categories[i]._endAngle_ = totalAngle * categories[i].value + startAngle;
    if (categories[i]._endAngle_ >= 2) {
      categories[i]._endAngle_ = categories[i]._endAngle_ % 2;
    }
    tempStartAngle = categories[i]._endAngle_;
  }
  return categories;
}

function getGaugeDataPoints(series, categories, gaugeOption) {
  var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    if (gaugeOption.pointer.color == 'auto') {
      for (var _i10 = 0; _i10 < categories.length; _i10++) {
        if (item.data <= categories[_i10].value) {
          item.color = categories[_i10].color;
          break;
        }
      }
    } else {
      item.color = gaugeOption.pointer.color;
    }
    var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    item._endAngle_ = totalAngle * item.data + gaugeOption.startAngle;
    item._oldAngle_ = gaugeOption.oldAngle;
    if (gaugeOption.oldAngle < gaugeOption.endAngle) {
      item._oldAngle_ += 2;
    }
    if (item.data >= gaugeOption.oldData) {
      item._proportion_ = (item._endAngle_ - item._oldAngle_) * process + gaugeOption.oldAngle;
    } else {
      item._proportion_ = item._oldAngle_ - (item._oldAngle_ - item._endAngle_) * process;
    }
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getPieTextMaxLength(series) {
  series = getPieDataPoints(series);
  var maxLength = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    maxLength = Math.max(maxLength, measureText(text));
  }

  return maxLength;
}

function fixColumeData(points, eachSpacing, columnLen, index, config, opts) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / columnLen);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }
    if (item.width <= 0) {
      item.width = 1;
    }
    item.x += (index + 0.5 - columnLen / 2) * item.width;
    return item;
  });
}

function fixColumeMeterData(points, eachSpacing, columnLen, index, config, opts, border) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / 2);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }

    if (index > 0) {
      item.width -= 2 * border;
    }
    return item;
  });
}

function fixColumeStackData(points, eachSpacing, columnLen, index, config, opts, series) {

  return points.map(function (item, indexn) {

    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / 2);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }
    return item;
  });
}

function getXAxisPoints(categories, opts, config) {
  var spacingValid = opts.width - opts.area[1] - opts.area[3];
  var dataCount = opts.enableScroll ? Math.min(opts.xAxis.itemCount, categories.length) : categories.length;
  if ((opts.type == 'line' || opts.type == 'area') && dataCount > 1 && opts.xAxis.boundaryGap == 'justify') {
    dataCount -= 1;
  }
  var eachSpacing = spacingValid / dataCount;

  var xAxisPoints = [];
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  categories.forEach(function (item, index) {
    xAxisPoints.push(startX + index * eachSpacing);
  });
  if (opts.xAxis.boundaryGap !== 'justify') {
    if (opts.enableScroll === true) {
      xAxisPoints.push(startX + categories.length * eachSpacing);
    } else {
      xAxisPoints.push(endX);
    }
  }
  return {
    xAxisPoints: xAxisPoints,
    startX: startX,
    endX: endX,
    eachSpacing: eachSpacing };

}

function getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var cPoints = [];
      item.forEach(function (items, indexs) {
        var point = {};
        point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);
        var value = items.value || items;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        height *= process;
        point.y = opts.height - Math.round(height) - opts.area[2];
        cPoints.push(point);
      });
      points.push(cPoints);
    }
  });

  return points;
}

function getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  var validWidth = opts.width - opts.area[1] - opts.area[3];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index];
      var value = item;
      if (typeof item === 'object' && item !== null) {
        if (item.constructor == Array) {
          var xranges, xminRange, xmaxRange;
          xranges = [].concat(opts.chartData.xAxisData.ranges);

          xminRange = xranges.shift();
          xmaxRange = xranges.pop();
          value = item[1];
          point.x = opts.area[3] + validWidth * (item[0] - xminRange) / (xmaxRange - xminRange);
        } else {
          value = item.value;
        }
      }
      if (boundaryGap == 'center') {
        point.x += Math.round(eachSpacing / 2);
      }
      var height = validHeight * (value - minRange) / (maxRange - minRange);
      height *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      points.push(point);
    }
  });

  return points;
}

function getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, stackSeries) {
  var process = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];

  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);

      if (seriesIndex > 0) {
        var value = 0;
        for (var i = 0; i <= seriesIndex; i++) {
          value += stackSeries[i].data[index];
        }
        var value0 = value - item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = validHeight * (value0 - minRange) / (maxRange - minRange);
      } else {
        var value = item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = 0;
      }
      var heightc = height0;
      height *= process;
      heightc *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      point.y0 = opts.height - Math.round(heightc) - opts.area[2];
      points.push(point);
    }
  });

  return points;
}

function getYAxisTextList(series, opts, config, stack) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
  var data;
  if (stack == 'stack') {
    data = dataCombineStack(series, opts.categories.length);
  } else {
    data = dataCombine(series);
  }
  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      if (item.constructor == Array) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor == Array) {
        if (opts.type == 'candle') {
          item.map(function (subitem) {
            sorted.push(subitem);
          });
        } else {
          sorted.push(item[1]);
        }
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
  });

  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  //为了兼容v1.9.0之前的项目
  if (index > -1) {
    if (typeof opts.yAxis.data[index].min === 'number') {
      minData = Math.min(opts.yAxis.data[index].min, minData);
    }
    if (typeof opts.yAxis.data[index].max === 'number') {
      maxData = Math.max(opts.yAxis.data[index].max, maxData);
    }
  } else {
    if (typeof opts.yAxis.min === 'number') {
      minData = Math.min(opts.yAxis.min, minData);
    }
    if (typeof opts.yAxis.max === 'number') {
      maxData = Math.max(opts.yAxis.max, maxData);
    }
  }


  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    maxData += rangeSpan;
  }

  var dataRange = getDataRange(minData, maxData);
  var minRange = dataRange.minRange;
  var maxRange = dataRange.maxRange;

  var range = [];
  var eachRange = (maxRange - minRange) / opts.yAxis.splitNumber;

  for (var i = 0; i <= opts.yAxis.splitNumber; i++) {
    range.push(minRange + eachRange * i);
  }
  return range.reverse();
}

function calYAxisData(series, opts, config) {
  //堆叠图重算Y轴
  var columnstyle = assign({}, {
    type: "" },
  opts.extra.column);
  //如果是多Y轴，重新计算
  var YLength = opts.yAxis.data.length;
  var newSeries = new Array(YLength);
  if (YLength > 0) {
    for (var i = 0; i < YLength; i++) {
      newSeries[i] = [];
      for (var j = 0; j < series.length; j++) {
        if (series[j].index == i) {
          newSeries[i].push(series[j]);
        }
      }
    }
    var rangesArr = new Array(YLength);
    var rangesFormatArr = new Array(YLength);
    var yAxisWidthArr = new Array(YLength);var _loop3 = function _loop3(

    _i11) {
      var yData = opts.yAxis.data[_i11];
      //如果总开关不显示，强制每个Y轴为不显示
      if (opts.yAxis.disabled == true) {
        yData.disabled = true;
      }
      rangesArr[_i11] = getYAxisTextList(newSeries[_i11], opts, config, columnstyle.type, _i11);
      var yAxisFontSizes = yData.fontSize || config.fontSize;
      yAxisWidthArr[_i11] = { position: yData.position ? yData.position : 'left', width: 0 };
      rangesFormatArr[_i11] = rangesArr[_i11].map(function (items) {
        items = util.toFixed(items, 6);
        items = yData.format ? yData.format(Number(items)) : items;
        yAxisWidthArr[_i11].width = Math.max(yAxisWidthArr[_i11].width, measureText(items, yAxisFontSizes) + 5);
        return items;
      });
      var calibration = yData.calibration ? 4 * opts.pixelRatio : 0;
      yAxisWidthArr[_i11].width += calibration + 3 * opts.pixelRatio;
      if (yData.disabled === true) {
        yAxisWidthArr[_i11].width = 0;
      }};for (var _i11 = 0; _i11 < YLength; _i11++) {_loop3(_i11);
    }

  } else {
    var rangesArr = new Array(1);
    var rangesFormatArr = new Array(1);
    var yAxisWidthArr = new Array(1);
    rangesArr[0] = getYAxisTextList(series, opts, config, columnstyle.type);
    yAxisWidthArr[0] = { position: 'left', width: 0 };
    var yAxisFontSize = opts.yAxis.fontSize || config.fontSize;
    rangesFormatArr[0] = rangesArr[0].map(function (item) {
      item = util.toFixed(item, 6);
      item = opts.yAxis.format ? opts.yAxis.format(Number(item)) : item;
      yAxisWidthArr[0].width = Math.max(yAxisWidthArr[0].width, measureText(item, yAxisFontSize) + 5);
      return item;
    });
    yAxisWidthArr[0].width += 3 * opts.pixelRatio;
    if (opts.yAxis.disabled === true) {
      yAxisWidthArr[0] = { position: 'left', width: 0 };
      opts.yAxis.data[0] = { disabled: true };
    } else {
      opts.yAxis.data[0] = { disabled: false, position: 'left', max: opts.yAxis.max, min: opts.yAxis.min, format: opts.yAxis.format };
    }

  }

  return {
    rangesFormat: rangesFormatArr,
    ranges: rangesArr,
    yAxisWidth: yAxisWidthArr };


}

function calTooltipYAxisData(point, series, opts, config, eachSpacing) {
  var ranges = [].concat(opts.chartData.yAxisData.ranges);
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var minAxis = opts.area[0];
  var items = [];
  for (var i = 0; i < ranges.length; i++) {
    var maxVal = ranges[i].shift();
    var minVal = ranges[i].pop();
    var item = maxVal - (maxVal - minVal) * (point - minAxis) / spacingValid;
    item = opts.yAxis.data[i].format ? opts.yAxis.data[i].format(Number(item)) : item.toFixed(0);
    items.push(String(item));
  }
  return items;
}

function calMarkLineData(points, opts) {
  var minRange, maxRange;
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  for (var i = 0; i < points.length; i++) {
    points[i].yAxisIndex = points[i].yAxisIndex ? points[i].yAxisIndex : 0;
    var range = [].concat(opts.chartData.yAxisData.ranges[points[i].yAxisIndex]);
    minRange = range.pop();
    maxRange = range.shift();
    var height = spacingValid * (points[i].value - minRange) / (maxRange - minRange);
    points[i].y = opts.height - Math.round(height) - opts.area[2];
  }
  return points;
}

function contextRotate(context, opts) {
  if (opts.rotateLock !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
  } else if (opts._rotate_ !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
    opts._rotate_ = true;
  }
}

function drawPointShape(points, color, shape, context, opts) {
  context.beginPath();
  if (opts.dataPointShapeType == 'hollow') {
    context.setStrokeStyle(color);
    context.setFillStyle(opts.background);
    context.setLineWidth(2 * opts.pixelRatio);
  } else {
    context.setStrokeStyle("#ffffff");
    context.setFillStyle(color);
    context.setLineWidth(1 * opts.pixelRatio);
  }
  if (shape === 'diamond') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y);
        context.lineTo(item.x, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  } else if (shape === 'circle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x + 2.5 * opts.pixelRatio, item.y);
        context.arc(item.x, item.y, 3 * opts.pixelRatio, 0, 2 * Math.PI, false);
      }
    });
  } else if (shape === 'rect') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x - 3.5, item.y - 3.5);
        context.rect(item.x - 3.5, item.y - 3.5, 7, 7);
      }
    });
  } else if (shape === 'triangle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y + 4.5);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  }
  context.closePath();
  context.fill();
  context.stroke();
}

function drawRingTitle(opts, config, context, center) {
  var titlefontSize = opts.title.fontSize || config.titleFontSize;
  var subtitlefontSize = opts.subtitle.fontSize || config.subtitleFontSize;
  var title = opts.title.name || '';
  var subtitle = opts.subtitle.name || '';
  var titleFontColor = opts.title.color || config.titleColor;
  var subtitleFontColor = opts.subtitle.color || config.subtitleColor;
  var titleHeight = title ? titlefontSize : 0;
  var subtitleHeight = subtitle ? subtitlefontSize : 0;
  var margin = 5;

  if (subtitle) {
    var textWidth = measureText(subtitle, subtitlefontSize);
    var startX = center.x - textWidth / 2 + (opts.subtitle.offsetX || 0);
    var startY = center.y + subtitlefontSize / 2 + (opts.subtitle.offsetY || 0);
    if (title) {
      startY += (titleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(subtitlefontSize);
    context.setFillStyle(subtitleFontColor);
    context.fillText(subtitle, startX, startY);
    context.closePath();
    context.stroke();
  }
  if (title) {
    var _textWidth = measureText(title, titlefontSize);
    var _startX = center.x - _textWidth / 2 + (opts.title.offsetX || 0);
    var _startY = center.y + titlefontSize / 2 + (opts.title.offsetY || 0);
    if (subtitle) {
      _startY -= (subtitleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(titlefontSize);
    context.setFillStyle(titleFontColor);
    context.fillText(title, _startX, _startY);
    context.closePath();
    context.stroke();
  }
}

function drawPointText(points, series, config, context) {
  // 绘制数据文案
  var data = series.data;
  points.forEach(function (item, index) {
    if (item !== null) {
      //var formatVal = series.format ? series.format(data[index]) : data[index];
      context.beginPath();
      context.setFontSize(series.textSize || config.fontSize);
      context.setFillStyle(series.textColor || '#666666');
      var value = data[index];
      if (typeof data[index] === 'object' && data[index] !== null) {
        if (data[index].constructor == Array) {
          value = data[index][1];
        } else {
          value = data[index].value;
        }
      }
      var formatVal = series.format ? series.format(value) : value;
      context.fillText(String(formatVal), item.x - measureText(formatVal, series.textSize || config.fontSize) / 2, item.y - 4);
      context.closePath();
      context.stroke();
    }
  });

}

function drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context) {
  radius -= gaugeOption.width / 2 + config.gaugeLabelTextMargin;

  var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
  var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
  var totalNumber = gaugeOption.endNumber - gaugeOption.startNumber;
  var splitNumber = totalNumber / gaugeOption.splitLine.splitNumber;
  var nowAngle = gaugeOption.startAngle;
  var nowNumber = gaugeOption.startNumber;
  for (var i = 0; i < gaugeOption.splitLine.splitNumber + 1; i++) {
    var pos = {
      x: radius * Math.cos(nowAngle * Math.PI),
      y: radius * Math.sin(nowAngle * Math.PI) };

    var labelText = gaugeOption.labelFormat ? gaugeOption.labelFormat(nowNumber) : nowNumber;
    pos.x += centerPosition.x - measureText(labelText) / 2;
    pos.y += centerPosition.y;
    var startX = pos.x;
    var startY = pos.y;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(gaugeOption.labelColor || '#666666');
    context.fillText(labelText, startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();

    nowAngle += splitAngle;
    if (nowAngle >= 2) {
      nowAngle = nowAngle % 2;
    }
    nowNumber += splitNumber;
  }

}

function drawRadarLabel(angleList, radius, centerPosition, opts, config, context) {
  var radarOption = opts.extra.radar || {};
  radius += config.radarLabelTextMargin;

  angleList.forEach(function (angle, index) {
    var pos = {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle) };

    var posRelativeCanvas = convertCoordinateOrigin(pos.x, pos.y, centerPosition);
    var startX = posRelativeCanvas.x;
    var startY = posRelativeCanvas.y;
    if (util.approximatelyEqual(pos.x, 0)) {
      startX -= measureText(opts.categories[index] || '') / 2;
    } else if (pos.x < 0) {
      startX -= measureText(opts.categories[index] || '');
    }
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(radarOption.labelColor || '#666666');
    context.fillText(opts.categories[index] || '', startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();
  });

}

function drawPieText(series, opts, config, context, radius, center) {
  var lineRadius = config.pieChartLinePadding;
  var textObjectCollection = [];
  var lastTextObject = null;

  var seriesConvert = series.map(function (item) {
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_.toFixed(4) * 100) + '%';
    if (item._rose_proportion_) item._proportion_ = item._rose_proportion_;
    var arc = 2 * Math.PI - (item._start_ + 2 * Math.PI * item._proportion_ / 2);
    var color = item.color;
    var radius = item._radius_;
    return {
      arc: arc,
      text: text,
      color: color,
      radius: radius,
      textColor: item.textColor,
      textSize: item.textSize };

  });
  for (var i = 0; i < seriesConvert.length; i++) {
    var item = seriesConvert[i];
    // line end
    var orginX1 = Math.cos(item.arc) * (item.radius + lineRadius);
    var orginY1 = Math.sin(item.arc) * (item.radius + lineRadius);

    // line start
    var orginX2 = Math.cos(item.arc) * item.radius;
    var orginY2 = Math.sin(item.arc) * item.radius;

    // text start
    var orginX3 = orginX1 >= 0 ? orginX1 + config.pieChartTextPadding : orginX1 - config.pieChartTextPadding;
    var orginY3 = orginY1;
    var textWidth = measureText(item.text, item.textSize || config.fontSize);
    var startY = orginY3;

    if (lastTextObject && util.isSameXCoordinateArea(lastTextObject.start, {
      x: orginX3 }))
    {
      if (orginX3 > 0) {
        startY = Math.min(orginY3, lastTextObject.start.y);
      } else if (orginX1 < 0) {
        startY = Math.max(orginY3, lastTextObject.start.y);
      } else {
        if (orginY3 > 0) {
          startY = Math.max(orginY3, lastTextObject.start.y);
        } else {
          startY = Math.min(orginY3, lastTextObject.start.y);
        }
      }
    }
    if (orginX3 < 0) {
      orginX3 -= textWidth;
    }

    var textObject = {
      lineStart: {
        x: orginX2,
        y: orginY2 },

      lineEnd: {
        x: orginX1,
        y: orginY1 },

      start: {
        x: orginX3,
        y: startY },

      width: textWidth,
      height: config.fontSize,
      text: item.text,
      color: item.color,
      textColor: item.textColor,
      textSize: item.textSize };

    lastTextObject = avoidCollision(textObject, lastTextObject);
    textObjectCollection.push(lastTextObject);
  }

  for (var _i12 = 0; _i12 < textObjectCollection.length; _i12++) {
    var _item6 = textObjectCollection[_i12];
    var lineStartPoistion = convertCoordinateOrigin(_item6.lineStart.x, _item6.lineStart.y, center);
    var lineEndPoistion = convertCoordinateOrigin(_item6.lineEnd.x, _item6.lineEnd.y, center);
    var textPosition = convertCoordinateOrigin(_item6.start.x, _item6.start.y, center);
    context.setLineWidth(1 * opts.pixelRatio);
    context.setFontSize(config.fontSize);
    context.beginPath();
    context.setStrokeStyle(_item6.color);
    context.setFillStyle(_item6.color);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    var curveStartX = _item6.start.x < 0 ? textPosition.x + _item6.width : textPosition.x;
    var textStartX = _item6.start.x < 0 ? textPosition.x - 5 : textPosition.x + 5;
    context.quadraticCurveTo(lineEndPoistion.x, lineEndPoistion.y, curveStartX, textPosition.y);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(textPosition.x + _item6.width, textPosition.y);
    context.arc(curveStartX, textPosition.y, 2, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.setFontSize(_item6.textSize || config.fontSize);
    context.setFillStyle(_item6.textColor || '#666666');
    context.fillText(_item6.text, textStartX, textPosition.y + 3);
    context.closePath();
    context.stroke();
    context.closePath();
  }
}

function drawToolTipSplitLine(offsetX, opts, config, context) {
  var toolTipOption = opts.extra.tooltip || {};
  toolTipOption.gridType = toolTipOption.gridType == undefined ? 'solid' : toolTipOption.gridType;
  toolTipOption.dashLength = toolTipOption.dashLength == undefined ? 4 : toolTipOption.dashLength;
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.beginPath();
  context.moveTo(offsetX, startY);
  context.lineTo(offsetX, endY);
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.xAxisLabel) {
    var labelText = opts.categories[opts.tooltip.index];
    context.setFontSize(config.fontSize);
    var textWidth = measureText(labelText, config.fontSize);

    var textX = offsetX - 0.5 * textWidth;
    var textY = endY;
    context.beginPath();
    context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
    context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
    context.setLineWidth(1 * opts.pixelRatio);
    context.rect(textX - config.toolTipPadding, textY, textWidth + 2 * config.toolTipPadding, config.fontSize + 2 * config.toolTipPadding);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
    context.fillText(String(labelText), textX, textY + config.toolTipPadding + config.fontSize);
    context.closePath();
    context.stroke();
  }
}

function drawMarkLine(opts, config, context) {
  var markLineOption = assign({}, {
    type: 'solid',
    dashLength: 4,
    data: [] },
  opts.extra.markLine);
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  var points = calMarkLineData(markLineOption.data, opts);

  for (var i = 0; i < points.length; i++) {
    var item = assign({}, {
      lineColor: '#DE4A42',
      showLabel: false,
      labelFontColor: '#666666',
      labelBgColor: '#DFE8FF',
      labelBgOpacity: 0.8,
      yAxisIndex: 0 },
    points[i]);

    if (markLineOption.type == 'dash') {
      context.setLineDash([markLineOption.dashLength, markLineOption.dashLength]);
    }
    context.setStrokeStyle(item.lineColor);
    context.setLineWidth(1 * opts.pixelRatio);
    context.beginPath();
    context.moveTo(startX, item.y);
    context.lineTo(endX, item.y);
    context.stroke();
    context.setLineDash([]);
    if (item.showLabel) {
      var labelText = opts.yAxis.format ? opts.yAxis.format(Number(item.value)) : item.value;
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText, config.fontSize);
      var bgStartX = opts.padding[3] + config.yAxisTitleWidth - config.toolTipPadding;
      var bgEndX = Math.max(opts.area[3], textWidth + config.toolTipPadding * 2);
      var bgWidth = bgEndX - bgStartX;

      var textX = bgStartX + (bgWidth - textWidth) / 2;
      var textY = item.y;
      context.setFillStyle(hexToRgb(item.labelBgColor, item.labelBgOpacity));
      context.setStrokeStyle(item.labelBgColor);
      context.setLineWidth(1 * opts.pixelRatio);
      context.beginPath();
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();

      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(item.labelFontColor);
      context.fillText(String(labelText), textX, textY + 0.5 * config.fontSize);
      context.stroke();
    }
  }
}

function drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    gridType: 'solid',
    dashLength: 4 },
  opts.extra.tooltip);

  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.beginPath();
  context.moveTo(startX, opts.tooltip.offset.y);
  context.lineTo(endX, opts.tooltip.offset.y);
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.yAxisLabel) {
    var labelText = calTooltipYAxisData(opts.tooltip.offset.y, opts.series, opts, config, eachSpacing);
    var widthArr = opts.chartData.yAxisData.yAxisWidth;
    var tStartLeft = opts.area[3];
    var tStartRight = opts.width - opts.area[1];
    for (var i = 0; i < labelText.length; i++) {
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText[i], config.fontSize);
      var bgStartX = void 0,bgEndX = void 0,bgWidth = void 0;
      if (widthArr[i].position == 'left') {
        bgStartX = tStartLeft - widthArr[i].width;
        bgEndX = Math.max(bgStartX, bgStartX + textWidth + config.toolTipPadding * 2);
      } else {
        bgStartX = tStartRight;
        bgEndX = Math.max(bgStartX + widthArr[i].width, bgStartX + textWidth + config.toolTipPadding * 2);
      }
      bgWidth = bgEndX - bgStartX;

      var textX = bgStartX + (bgWidth - textWidth) / 2;
      var textY = opts.tooltip.offset.y;
      context.beginPath();
      context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
      context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
      context.setLineWidth(1 * opts.pixelRatio);
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();

      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
      context.fillText(labelText[i], textX, textY + 0.5 * config.fontSize);
      context.closePath();
      context.stroke();
      if (widthArr[i].position == 'left') {
        tStartLeft -= widthArr[i].width + opts.yAxis.padding;
      } else {
        tStartRight += widthArr[i].width + opts.yAxis.padding;
      }
    }
  }
}

function drawToolTipSplitArea(offsetX, opts, config, context, eachSpacing) {
  var toolTipOption = assign({}, {
    activeBgColor: '#000000',
    activeBgOpacity: 0.08 },
  opts.extra.tooltip);
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.activeBgColor, toolTipOption.activeBgOpacity));
  context.rect(offsetX - eachSpacing / 2, startY, eachSpacing, endY - startY);
  context.closePath();
  context.fill();
}

function drawToolTip(textList, offset, opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    showBox: true,
    bgColor: '#000000',
    bgOpacity: 0.7,
    fontColor: '#FFFFFF' },
  opts.extra.tooltip);
  var legendWidth = 4 * opts.pixelRatio;
  var legendMarginRight = 5 * opts.pixelRatio;
  var arrowWidth = 8 * opts.pixelRatio;
  var isOverRightBorder = false;
  if (opts.type == 'line' || opts.type == 'area' || opts.type == 'candle' || opts.type == 'mix') {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }

  offset = assign({
    x: 0,
    y: 0 },
  offset);
  offset.y -= 8 * opts.pixelRatio;
  var textWidth = textList.map(function (item) {
    return measureText(item.text, config.fontSize);
  });
  var toolTipWidth = legendWidth + legendMarginRight + 4 * config.toolTipPadding + Math.max.apply(null, textWidth);
  var toolTipHeight = 2 * config.toolTipPadding + textList.length * config.toolTipLineHeight;

  if (toolTipOption.showBox == false) {return;}
  // if beyond the right border
  if (offset.x - Math.abs(opts._scrollDistance_) + arrowWidth + toolTipWidth > opts.width) {
    isOverRightBorder = true;
  }
  if (toolTipHeight + offset.y > opts.height) {
    offset.y = opts.height - toolTipHeight;
  }
  // draw background rect
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.bgColor || config.toolTipBackground, toolTipOption.bgOpacity || config.toolTipOpacity));
  if (isOverRightBorder) {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  } else {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  }

  context.closePath();
  context.fill();

  // draw legend
  textList.forEach(function (item, index) {
    if (item.color !== null) {
      context.beginPath();
      context.setFillStyle(item.color);
      var startX = offset.x + arrowWidth + 2 * config.toolTipPadding;
      var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
      config.toolTipPadding + 1;
      if (isOverRightBorder) {
        startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding;
      }
      context.fillRect(startX, startY, legendWidth, config.fontSize);
      context.closePath();
    }
  });

  // draw text list

  textList.forEach(function (item, index) {
    var startX = offset.x + arrowWidth + 2 * config.toolTipPadding + legendWidth + legendMarginRight;
    if (isOverRightBorder) {
      startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding + +legendWidth + legendMarginRight;
    }
    var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
    config.toolTipPadding;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.fontColor);
    context.fillText(item.text, startX, startY + config.fontSize);
    context.closePath();
    context.stroke();
  });
}

function drawYAxisTitle(title, opts, config, context) {
  var startX = config.xAxisHeight + (opts.height - config.xAxisHeight - measureText(title)) / 2;
  context.save();
  context.beginPath();
  context.setFontSize(config.fontSize);
  context.setFillStyle(opts.yAxis.titleFontColor || '#333333');
  context.translate(0, opts.height);
  context.rotate(-90 * Math.PI / 180);
  context.fillText(title, startX, opts.padding[3] + 0.5 * config.fontSize);
  context.closePath();
  context.stroke();
  context.restore();
}

function drawColumnDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var columnOption = assign({}, {
    type: 'group',
    width: eachSpacing / 2,
    meter: {
      border: 4,
      fillColor: '#FFFFFF' } },

  opts.extra.column);

  var calPoints = [];
  context.save();

  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitArea(opts.tooltip.offset.x, opts, config, context, eachSpacing);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();

    var data = eachSeries.data;
    switch (columnOption.type) {
      case 'group':
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        var tooltipPoints = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(tooltipPoints);
        points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
        for (var i = 0; i < points.length; i++) {
          var item = points[i];
          if (item !== null && i > leftNum && i < rightNum) {
            context.beginPath();
            context.setStrokeStyle(item.color || eachSeries.color);
            context.setLineWidth(1);
            context.setFillStyle(item.color || eachSeries.color);
            var startX = item.x - item.width / 2;
            var height = opts.height - item.y - opts.area[2];
            context.moveTo(startX - 1, item.y);
            context.lineTo(startX + item.width - 2, item.y);
            context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
            context.lineTo(startX, opts.height - opts.area[2]);
            context.lineTo(startX, item.y);
            context.closePath();
            context.stroke();
            context.fill();
          }
        };
        break;
      case 'stack':
        // 绘制堆叠数据图
        var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(points);
        points = fixColumeStackData(points, eachSpacing, series.length, seriesIndex, config, opts, series);

        for (var _i13 = 0; _i13 < points.length; _i13++) {
          var _item7 = points[_i13];
          if (_item7 !== null && _i13 > leftNum && _i13 < rightNum) {
            context.beginPath();
            context.setFillStyle(_item7.color || eachSeries.color);
            var startX = _item7.x - _item7.width / 2 + 1;
            var height = opts.height - _item7.y - opts.area[2];
            var height0 = opts.height - _item7.y0 - opts.area[2];
            if (seriesIndex > 0) {
              height -= height0;
            }
            context.moveTo(startX, _item7.y);
            context.fillRect(startX, _item7.y, _item7.width - 2, height);
            context.closePath();
            context.fill();
          }
        };
        break;
      case 'meter':
        // 绘制温度计数据图
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        calPoints.push(points);
        points = fixColumeMeterData(points, eachSpacing, series.length, seriesIndex, config, opts, columnOption.meter.border);
        if (seriesIndex == 0) {
          for (var _i14 = 0; _i14 < points.length; _i14++) {
            var _item8 = points[_i14];
            if (_item8 !== null && _i14 > leftNum && _i14 < rightNum) {
              //画背景颜色
              context.beginPath();
              context.setFillStyle(columnOption.meter.fillColor);
              var startX = _item8.x - _item8.width / 2;
              var height = opts.height - _item8.y - opts.area[2];
              context.moveTo(startX, _item8.y);
              context.fillRect(startX, _item8.y, _item8.width, height);
              context.closePath();
              context.fill();
              //画边框线
              if (columnOption.meter.border > 0) {
                context.beginPath();
                context.setStrokeStyle(eachSeries.color);
                context.setLineWidth(columnOption.meter.border * opts.pixelRatio);
                context.moveTo(startX + columnOption.meter.border * 0.5, _item8.y + height);
                context.lineTo(startX + columnOption.meter.border * 0.5, _item8.y + columnOption.meter.border * 0.5);
                context.lineTo(startX + _item8.width - columnOption.meter.border * 0.5, _item8.y + columnOption.meter.border * 0.5);
                context.lineTo(startX + _item8.width - columnOption.meter.border * 0.5, _item8.y + height);
                context.stroke();
              }
            }
          };
        } else {
          for (var _i15 = 0; _i15 < points.length; _i15++) {
            var _item9 = points[_i15];
            if (_item9 !== null && _i15 > leftNum && _i15 < rightNum) {
              context.beginPath();
              context.setFillStyle(_item9.color || eachSeries.color);
              var startX = _item9.x - _item9.width / 2;
              var height = opts.height - _item9.y - opts.area[2];
              context.moveTo(startX, _item9.y);
              context.fillRect(startX, _item9.y, _item9.width, height);
              context.closePath();
              context.fill();
            }
          };
        }
        break;}

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      switch (columnOption.type) {
        case 'group':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'stack':
          var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'meter':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          drawPointText(points, eachSeries, config, context);
          break;}

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawCandleDataPoints(series, seriesMA, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var candleOption = assign({}, {
    color: {},
    average: {} },
  opts.extra.candle);
  candleOption.color = assign({}, {
    upLine: '#f04864',
    upFill: '#f04864',
    downLine: '#2fc25b',
    downFill: '#2fc25b' },
  candleOption.color);
  candleOption.average = assign({}, {
    show: false,
    name: [],
    day: [],
    color: config.colors },
  candleOption.average);
  opts.extra.candle = candleOption;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var calPoints = [];

  context.save();

  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  //画均线
  if (candleOption.average.show) {
    seriesMA.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();

      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      var splitPointList = splitPoints(points);

      for (var i = 0; i < splitPointList.length; i++) {
        var _points = splitPointList[i];
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(1);
        if (_points.length === 1) {
          context.moveTo(_points[0].x, _points[0].y);
          context.arc(_points[0].x, _points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(_points[0].x, _points[0].y);
          var startPoint = 0;
          for (var j = 0; j < _points.length; j++) {
            var item = _points[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(_points, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          }
          context.moveTo(_points[0].x, _points[0].y);
        }
        context.closePath();
        context.stroke();
      }
    });
  }
  //画K线
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);

    for (var i = 0; i < splitPointList[0].length; i++) {
      if (i > leftNum && i < rightNum) {
        var item = splitPointList[0][i];
        context.beginPath();
        //如果上涨
        if (data[i][1] - data[i][0] > 0) {
          context.setStrokeStyle(candleOption.color.upLine);
          context.setFillStyle(candleOption.color.upFill);
          context.setLineWidth(1 * opts.pixelRatio);
          context.moveTo(item[3].x, item[3].y); //顶点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[1].x - eachSpacing / 4, item[1].y); //收盘左侧点
          context.lineTo(item[0].x - eachSpacing / 4, item[0].y); //开盘左侧点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[2].x, item[2].y); //底点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[0].x + eachSpacing / 4, item[0].y); //开盘右侧点
          context.lineTo(item[1].x + eachSpacing / 4, item[1].y); //收盘右侧点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.moveTo(item[3].x, item[3].y); //顶点
        } else {
          context.setStrokeStyle(candleOption.color.downLine);
          context.setFillStyle(candleOption.color.downFill);
          context.setLineWidth(1 * opts.pixelRatio);
          context.moveTo(item[3].x, item[3].y); //顶点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[0].x - eachSpacing / 4, item[0].y); //开盘左侧点
          context.lineTo(item[1].x - eachSpacing / 4, item[1].y); //收盘左侧点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[2].x, item[2].y); //底点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[1].x + eachSpacing / 4, item[1].y); //收盘右侧点
          context.lineTo(item[0].x + eachSpacing / 4, item[0].y); //开盘右侧点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.moveTo(item[3].x, item[3].y); //顶点
        }
        context.closePath();
        context.fill();
        context.stroke();
      }
    }
  });

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawAreaDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var areaOption = assign({}, {
    type: 'straight',
    opacity: 0.2,
    addLine: false,
    width: 2,
    gradient: false },
  opts.extra.area);

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var endY = opts.height - opts.area[2];
  var calPoints = [];

  context.save();
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    var splitPointList = splitPoints(points);
    for (var i = 0; i < splitPointList.length; i++) {
      var _points2 = splitPointList[i];
      // 绘制区域数
      context.beginPath();
      context.setStrokeStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      if (areaOption.gradient) {
        var gradient = context.createLinearGradient(0, opts.area[0], 0, opts.height - opts.area[2]);
        gradient.addColorStop('0', hexToRgb(eachSeries.color, areaOption.opacity));
        gradient.addColorStop('1.0', hexToRgb("#FFFFFF", 0.1));
        context.setFillStyle(gradient);
      } else {
        context.setFillStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      }
      context.setLineWidth(areaOption.width * opts.pixelRatio);
      if (_points2.length > 1) {
        var firstPoint = _points2[0];
        var lastPoint = _points2[_points2.length - 1];
        context.moveTo(firstPoint.x, firstPoint.y);
        var startPoint = 0;
        if (areaOption.type === 'curve') {
          for (var j = 0; j < _points2.length; j++) {
            var item = _points2[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(_points2, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          };
        } else {
          for (var _j = 0; _j < _points2.length; _j++) {
            var _item10 = _points2[_j];
            if (startPoint == 0 && _item10.x > leftSpace) {
              context.moveTo(_item10.x, _item10.y);
              startPoint = 1;
            }
            if (_j > 0 && _item10.x > leftSpace && _item10.x < rightSpace) {
              context.lineTo(_item10.x, _item10.y);
            }
          };
        }

        context.lineTo(lastPoint.x, endY);
        context.lineTo(firstPoint.x, endY);
        context.lineTo(firstPoint.x, firstPoint.y);
      } else {
        var _item11 = _points2[0];
        context.moveTo(_item11.x - eachSpacing / 2, _item11.y);
        context.lineTo(_item11.x + eachSpacing / 2, _item11.y);
        context.lineTo(_item11.x + eachSpacing / 2, endY);
        context.lineTo(_item11.x - eachSpacing / 2, endY);
        context.moveTo(_item11.x - eachSpacing / 2, _item11.y);
      }
      context.closePath();
      context.fill();

      //画连线
      if (areaOption.addLine) {
        if (eachSeries.lineType == 'dash') {
          var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
          dashLength *= opts.pixelRatio;
          context.setLineDash([dashLength, dashLength]);
        }
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(areaOption.width * opts.pixelRatio);
        if (_points2.length === 1) {
          context.moveTo(_points2[0].x, _points2[0].y);
          context.arc(_points2[0].x, _points2[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(_points2[0].x, _points2[0].y);
          var _startPoint = 0;
          if (areaOption.type === 'curve') {
            for (var _j2 = 0; _j2 < _points2.length; _j2++) {
              var _item12 = _points2[_j2];
              if (_startPoint == 0 && _item12.x > leftSpace) {
                context.moveTo(_item12.x, _item12.y);
                _startPoint = 1;
              }
              if (_j2 > 0 && _item12.x > leftSpace && _item12.x < rightSpace) {
                var _ctrlPoint = createCurveControlPoints(_points2, _j2 - 1);
                context.bezierCurveTo(_ctrlPoint.ctrA.x, _ctrlPoint.ctrA.y, _ctrlPoint.ctrB.x, _ctrlPoint.ctrB.y, _item12.x, _item12.y);
              }
            };
          } else {
            for (var _j3 = 0; _j3 < _points2.length; _j3++) {
              var _item13 = _points2[_j3];
              if (_startPoint == 0 && _item13.x > leftSpace) {
                context.moveTo(_item13.x, _item13.y);
                _startPoint = 1;
              }
              if (_j3 > 0 && _item13.x > leftSpace && _item13.x < rightSpace) {
                context.lineTo(_item13.x, _item13.y);
              }
            };
          }
          context.moveTo(_points2[0].x, _points2[0].y);
        }
        context.stroke();
        context.setLineDash([]);
      }
    }

    //画点
    if (opts.dataPointShape !== false) {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawLineDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var lineOption = assign({}, {
    type: 'straight',
    width: 2 },
  opts.extra.line);
  lineOption.width *= opts.pixelRatio;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var calPoints = [];

  context.save();
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);

    if (eachSeries.lineType == 'dash') {
      var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
      dashLength *= opts.pixelRatio;
      context.setLineDash([dashLength, dashLength]);
    }
    context.beginPath();
    context.setStrokeStyle(eachSeries.color);
    context.setLineWidth(lineOption.width);

    splitPointList.forEach(function (points, index) {

      if (points.length === 1) {
        context.moveTo(points[0].x, points[0].y);
        context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
      } else {
        context.moveTo(points[0].x, points[0].y);
        var startPoint = 0;
        if (lineOption.type === 'curve') {
          for (var j = 0; j < points.length; j++) {
            var item = points[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(points, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          };
        } else {
          for (var _j4 = 0; _j4 < points.length; _j4++) {
            var _item14 = points[_j4];
            if (startPoint == 0 && _item14.x > leftSpace) {
              context.moveTo(_item14.x, _item14.y);
              startPoint = 1;
            }
            if (_j4 > 0 && _item14.x > leftSpace && _item14.x < rightSpace) {
              context.lineTo(_item14.x, _item14.y);
            }
          };
        }
        context.moveTo(points[0].x, points[0].y);
      }

    });

    context.stroke();
    context.setLineDash([]);

    if (opts.dataPointShape !== false) {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawMixDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var endY = opts.height - opts.area[2];
  var calPoints = [];

  var columnIndex = 0;
  var columnLength = 0;
  series.forEach(function (eachSeries, seriesIndex) {
    if (eachSeries.type == 'column') {
      columnLength += 1;
    }
  });
  context.save();
  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;

    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();

    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    // 绘制柱状数据图
    if (eachSeries.type == 'column') {
      points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
      for (var i = 0; i < points.length; i++) {
        var item = points[i];
        if (item !== null && i > leftNum && i < rightNum) {
          context.beginPath();
          context.setStrokeStyle(item.color || eachSeries.color);
          context.setLineWidth(1);
          context.setFillStyle(item.color || eachSeries.color);
          var startX = item.x - item.width / 2;
          var height = opts.height - item.y - opts.area[2];
          context.moveTo(startX, item.y);
          context.moveTo(startX - 1, item.y);
          context.lineTo(startX + item.width - 2, item.y);
          context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
          context.lineTo(startX, opts.height - opts.area[2]);
          context.lineTo(startX, item.y);
          context.closePath();
          context.stroke();
          context.fill();
          context.closePath();
          context.fill();
        }
      }
      columnIndex += 1;
    }

    //绘制区域图数据

    if (eachSeries.type == 'area') {
      var _splitPointList = splitPoints(points);
      for (var _i16 = 0; _i16 < _splitPointList.length; _i16++) {
        var _points3 = _splitPointList[_i16];
        // 绘制区域数据
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setFillStyle(hexToRgb(eachSeries.color, 0.2));
        context.setLineWidth(2 * opts.pixelRatio);
        if (_points3.length > 1) {
          var firstPoint = _points3[0];
          var lastPoint = _points3[_points3.length - 1];
          context.moveTo(firstPoint.x, firstPoint.y);
          var startPoint = 0;
          if (eachSeries.style === 'curve') {
            for (var j = 0; j < _points3.length; j++) {
              var _item15 = _points3[j];
              if (startPoint == 0 && _item15.x > leftSpace) {
                context.moveTo(_item15.x, _item15.y);
                startPoint = 1;
              }
              if (j > 0 && _item15.x > leftSpace && _item15.x < rightSpace) {
                var ctrlPoint = createCurveControlPoints(_points3, j - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, _item15.x, _item15.y);
              }
            };
          } else {
            for (var _j5 = 0; _j5 < _points3.length; _j5++) {
              var _item16 = _points3[_j5];
              if (startPoint == 0 && _item16.x > leftSpace) {
                context.moveTo(_item16.x, _item16.y);
                startPoint = 1;
              }
              if (_j5 > 0 && _item16.x > leftSpace && _item16.x < rightSpace) {
                context.lineTo(_item16.x, _item16.y);
              }
            };
          }
          context.lineTo(lastPoint.x, endY);
          context.lineTo(firstPoint.x, endY);
          context.lineTo(firstPoint.x, firstPoint.y);
        } else {
          var _item17 = _points3[0];
          context.moveTo(_item17.x - eachSpacing / 2, _item17.y);
          context.lineTo(_item17.x + eachSpacing / 2, _item17.y);
          context.lineTo(_item17.x + eachSpacing / 2, endY);
          context.lineTo(_item17.x - eachSpacing / 2, endY);
          context.moveTo(_item17.x - eachSpacing / 2, _item17.y);
        }
        context.closePath();
        context.fill();
      }
    }

    // 绘制折线数据图
    if (eachSeries.type == 'line') {
      var splitPointList = splitPoints(points);
      splitPointList.forEach(function (points, index) {
        if (eachSeries.lineType == 'dash') {
          var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
          dashLength *= opts.pixelRatio;
          context.setLineDash([dashLength, dashLength]);
        }
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(2 * opts.pixelRatio);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          var _startPoint2 = 0;
          if (eachSeries.style == 'curve') {
            for (var _j6 = 0; _j6 < points.length; _j6++) {
              var _item18 = points[_j6];
              if (_startPoint2 == 0 && _item18.x > leftSpace) {
                context.moveTo(_item18.x, _item18.y);
                _startPoint2 = 1;
              }
              if (_j6 > 0 && _item18.x > leftSpace && _item18.x < rightSpace) {
                var ctrlPoint = createCurveControlPoints(points, _j6 - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, _item18.x, _item18.y);
              }
            }
          } else {
            for (var _j7 = 0; _j7 < points.length; _j7++) {
              var _item19 = points[_j7];
              if (_startPoint2 == 0 && _item19.x > leftSpace) {
                context.moveTo(_item19.x, _item19.y);
                _startPoint2 = 1;
              }
              if (_j7 > 0 && _item19.x > leftSpace && _item19.x < rightSpace) {
                context.lineTo(_item19.x, _item19.y);
              }
            }
          }
          context.moveTo(points[0].x, points[0].y);
        }
        context.stroke();
        context.setLineDash([]);
      });
    }

    // 绘制点数据图
    if (eachSeries.type == 'point') {
      eachSeries.addPoint = true;
    }

    if (eachSeries.addPoint == true && eachSeries.type !== 'column') {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });
  if (opts.dataLabel !== false && process === 1) {
    var columnIndex = 0;
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;

      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();

      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      if (eachSeries.type !== 'column') {
        drawPointText(points, eachSeries, config, context);
      } else {
        points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
        drawPointText(points, eachSeries, config, context);
        columnIndex += 1;
      }

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || {};
  if (toolTipOption.horizentalLine && opts.tooltip && process === 1 && (opts.type == 'line' || opts.type == 'area' || opts.type == 'column' || opts.type == 'candle' || opts.type == 'mix')) {
    drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints);
  }
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTip(opts.tooltip.textList, opts.tooltip.offset, opts, config, context, eachSpacing, xAxisPoints);
  }
  context.restore();

}

function drawXAxis(categories, opts, config, context) {

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  startX = xAxisData.startX,
  endX = xAxisData.endX,
  eachSpacing = xAxisData.eachSpacing;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var startY = opts.height - opts.area[2];
  var endY = opts.area[0];

  //绘制滚动条
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    var scrollY = opts.height - opts.area[2] + config.xAxisHeight;
    var scrollScreenWidth = endX - startX;
    var scrollTotalWidth = eachSpacing * (xAxisPoints.length - 1);
    var scrollWidth = scrollScreenWidth * scrollScreenWidth / scrollTotalWidth;
    var scrollLeft = 0;
    if (opts._scrollDistance_) {
      scrollLeft = -opts._scrollDistance_ * scrollScreenWidth / scrollTotalWidth;
    }
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollBackgroundColor || "#EFEBEF");
    context.moveTo(startX, scrollY);
    context.lineTo(endX, scrollY);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollColor || "#A6A6A6");
    context.moveTo(startX + scrollLeft, scrollY);
    context.lineTo(startX + scrollLeft + scrollWidth, scrollY);
    context.stroke();
    context.closePath();
    context.setLineCap('butt');
  }

  context.save();

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  //绘制X轴刻度线
  if (opts.xAxis.calibration === true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pixelRatio);
    xAxisPoints.forEach(function (item, index) {
      if (index > 0) {
        context.beginPath();
        context.moveTo(item - eachSpacing / 2, startY);
        context.lineTo(item - eachSpacing / 2, startY + 3 * opts.pixelRatio);
        context.closePath();
        context.stroke();
      }
    });
  }
  //绘制X轴网格
  if (opts.xAxis.disableGrid !== true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pixelRatio);
    if (opts.xAxis.gridType == 'dash') {
      context.setLineDash([opts.xAxis.dashLength, opts.xAxis.dashLength]);
    }
    opts.xAxis.gridEval = opts.xAxis.gridEval || 1;
    xAxisPoints.forEach(function (item, index) {
      if (index % opts.xAxis.gridEval == 0) {
        context.beginPath();
        context.moveTo(item, startY);
        context.lineTo(item, endY);
        context.stroke();
      }
    });
    context.setLineDash([]);
  }


  //绘制X轴文案
  if (opts.xAxis.disabled !== true) {
    // 对X轴列表做抽稀处理
    //默认全部显示X轴标签
    var maxXAxisListLength = categories.length;
    //如果设置了X轴单屏数量
    if (opts.xAxis.labelCount) {
      //如果设置X轴密度
      if (opts.xAxis.itemCount) {
        maxXAxisListLength = Math.ceil(categories.length / opts.xAxis.itemCount * opts.xAxis.labelCount);
      } else {
        maxXAxisListLength = opts.xAxis.labelCount;
      }
      maxXAxisListLength -= 1;
    }

    var ratio = Math.ceil(categories.length / maxXAxisListLength);

    var newCategories = [];
    var cgLength = categories.length;
    for (var i = 0; i < cgLength; i++) {
      if (i % ratio !== 0) {
        newCategories.push("");
      } else {
        newCategories.push(categories[i]);
      }
    }
    newCategories[cgLength - 1] = categories[cgLength - 1];

    var xAxisFontSize = opts.xAxis.fontSize || config.fontSize;
    if (config._xAxisTextAngle_ === 0) {
      newCategories.forEach(function (item, index) {
        var offset = -measureText(String(item), xAxisFontSize) / 2;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var scrollHeight = 0;
        if (opts.xAxis.scrollShow) {
          scrollHeight = 6 * opts.pixelRatio;
        }
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        context.fillText(String(item), xAxisPoints[index] + offset, startY + xAxisFontSize + (config.xAxisHeight - scrollHeight - xAxisFontSize) / 2);
        context.closePath();
        context.stroke();
      });

    } else {
      newCategories.forEach(function (item, index) {
        context.save();
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        var textWidth = measureText(String(item), xAxisFontSize);
        var offset = -textWidth;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var _calRotateTranslate = calRotateTranslate(xAxisPoints[index] + eachSpacing / 2, startY + xAxisFontSize / 2 + 5, opts.height),
        transX = _calRotateTranslate.transX,
        transY = _calRotateTranslate.transY;

        context.rotate(-1 * config._xAxisTextAngle_);
        context.translate(transX, transY);
        context.fillText(String(item), xAxisPoints[index] + offset, startY + xAxisFontSize + 5);
        context.closePath();
        context.stroke();
        context.restore();
      });
    }
  }
  context.restore();

  //绘制X轴轴线
  if (opts.xAxis.axisLine) {
    context.beginPath();
    context.setStrokeStyle(opts.xAxis.axisLineColor);
    context.setLineWidth(1 * opts.pixelRatio);
    context.moveTo(startX, opts.height - opts.area[2]);
    context.lineTo(endX, opts.height - opts.area[2]);
    context.stroke();
  }
}

function drawYAxisGrid(categories, opts, config, context) {
  if (opts.yAxis.disableGrid === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / opts.yAxis.splitNumber;
  var startX = opts.area[3];
  var xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
  xAxiseachSpacing = opts.chartData.xAxisData.eachSpacing;
  var TotalWidth = xAxiseachSpacing * (xAxisPoints.length - 1);
  var endX = startX + TotalWidth;

  var points = [];
  for (var i = 0; i < opts.yAxis.splitNumber + 1; i++) {
    points.push(opts.height - opts.area[2] - eachSpacing * i);
  }

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.yAxis.gridType == 'dash') {
    context.setLineDash([opts.yAxis.dashLength, opts.yAxis.dashLength]);
  }
  context.setStrokeStyle(opts.yAxis.gridColor);
  context.setLineWidth(1 * opts.pixelRatio);
  points.forEach(function (item, index) {
    context.beginPath();
    context.moveTo(startX, item);
    context.lineTo(endX, item);
    context.stroke();
  });
  context.setLineDash([]);

  context.restore();
}

function drawYAxis(series, opts, config, context) {
  if (opts.yAxis.disabled === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / opts.yAxis.splitNumber;
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  var endY = opts.height - opts.area[2];
  var fillEndY = endY + config.xAxisHeight;
  if (opts.xAxis.scrollShow) {
    fillEndY -= 3 * opts.pixelRatio;
  }
  if (opts.xAxis.rotateLabel) {
    fillEndY = opts.height - opts.area[2] + 3;
  }
  // set YAxis background
  context.beginPath();
  context.setFillStyle(opts.background || '#ffffff');
  if (opts._scrollDistance_ < 0) {
    context.fillRect(0, 0, startX, fillEndY);
  }
  if (opts.enableScroll == true) {
    context.fillRect(endX, 0, opts.width, fillEndY);
  }
  context.closePath();
  context.stroke();

  var points = [];
  for (var i = 0; i <= opts.yAxis.splitNumber; i++) {
    points.push(opts.area[0] + eachSpacing * i);
  }

  var tStartLeft = opts.area[3];
  var tStartRight = opts.width - opts.area[1];var _loop4 = function _loop4(

  _i17) {
    var yData = opts.yAxis.data[_i17];
    if (yData.disabled !== true) {
      var rangesFormat = opts.chartData.yAxisData.rangesFormat[_i17];
      var yAxisFontSize = yData.fontSize || config.fontSize;
      var yAxisWidth = opts.chartData.yAxisData.yAxisWidth[_i17];
      //画Y轴刻度及文案
      rangesFormat.forEach(function (item, index) {
        var pos = points[index] ? points[index] : endY;
        context.beginPath();
        context.setFontSize(yAxisFontSize);
        context.setLineWidth(1 * opts.pixelRatio);
        context.setStrokeStyle(yData.axisLineColor || '#cccccc');
        context.setFillStyle(yData.fontColor || '#666666');
        if (yAxisWidth.position == 'left') {
          context.fillText(String(item), tStartLeft - yAxisWidth.width, pos + yAxisFontSize / 2);
          //画刻度线
          if (yData.calibration == true) {
            context.moveTo(tStartLeft, pos);
            context.lineTo(tStartLeft - 3 * opts.pixelRatio, pos);
          }
        } else {
          context.fillText(String(item), tStartRight + 4 * opts.pixelRatio, pos + yAxisFontSize / 2);
          //画刻度线
          if (yData.calibration == true) {
            context.moveTo(tStartRight, pos);
            context.lineTo(tStartRight + 3 * opts.pixelRatio, pos);
          }
        }
        context.closePath();
        context.stroke();
      });
      //画Y轴轴线
      if (yData.axisLine !== false) {
        context.beginPath();
        context.setStrokeStyle(yData.axisLineColor || '#cccccc');
        context.setLineWidth(1 * opts.pixelRatio);
        if (yAxisWidth.position == 'left') {
          context.moveTo(tStartLeft, opts.height - opts.area[2]);
          context.lineTo(tStartLeft, opts.area[0]);
        } else {
          context.moveTo(tStartRight, opts.height - opts.area[2]);
          context.lineTo(tStartRight, opts.area[0]);
        }
        context.stroke();
      }

      //画Y轴标题
      if (opts.yAxis.showTitle) {

        var titleFontSize = yData.titleFontSize || config.fontSize;
        var title = yData.title;
        context.beginPath();
        context.setFontSize(titleFontSize);
        context.setFillStyle(yData.titleFontColor || '#666666');
        if (yAxisWidth.position == 'left') {
          context.fillText(title, tStartLeft - measureText(title, titleFontSize) / 2, opts.area[0] - 10 * opts.pixelRatio);
        } else {
          context.fillText(title, tStartRight - measureText(title, titleFontSize) / 2, opts.area[0] - 10 * opts.pixelRatio);
        }
        context.closePath();
        context.stroke();
      }
      if (yAxisWidth.position == 'left') {
        tStartLeft -= yAxisWidth.width + opts.yAxis.padding;
      } else {
        tStartRight += yAxisWidth.width + opts.yAxis.padding;
      }
    }};for (var _i17 = 0; _i17 < opts.yAxis.data.length; _i17++) {_loop4(_i17);
  }
}

function drawLegend(series, opts, config, context, chartData) {
  if (opts.legend.show === false) {
    return;
  }
  var legendData = chartData.legendData;
  var legendList = legendData.points;
  var legendArea = legendData.area;
  var padding = opts.legend.padding;
  var fontSize = opts.legend.fontSize;
  var shapeWidth = 15 * opts.pixelRatio;
  var shapeRight = 5 * opts.pixelRatio;
  var itemGap = opts.legend.itemGap;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pixelRatio, fontSize);

  //画背景及边框
  context.beginPath();
  context.setLineWidth(opts.legend.borderWidth);
  context.setStrokeStyle(opts.legend.borderColor);
  context.setFillStyle(opts.legend.backgroundColor);
  context.moveTo(legendArea.start.x, legendArea.start.y);
  context.rect(legendArea.start.x, legendArea.start.y, legendArea.width, legendArea.height);
  context.closePath();
  context.fill();
  context.stroke();

  legendList.forEach(function (itemList, listIndex) {
    var width = 0;
    var height = 0;
    width = legendData.widthArr[listIndex];
    height = legendData.heightArr[listIndex];
    var startX = 0;
    var startY = 0;
    if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
      startX = legendArea.start.x + (legendArea.width - width) / 2;
      startY = legendArea.start.y + padding + listIndex * lineHeight;
    } else {
      if (listIndex == 0) {
        width = 0;
      } else {
        width = legendData.widthArr[listIndex - 1];
      }
      startX = legendArea.start.x + padding + width;
      startY = legendArea.start.y + padding + (legendArea.height - height) / 2;
    }

    context.setFontSize(config.fontSize);
    for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      item.area = [0, 0, 0, 0];
      item.area[0] = startX;
      item.area[1] = startY;
      item.area[3] = startY + lineHeight;
      context.beginPath();
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.show ? item.color : opts.legend.hiddenColor);
      context.setFillStyle(item.show ? item.color : opts.legend.hiddenColor);
      switch (item.legendShape) {
        case 'line':
          context.moveTo(startX, startY + 0.5 * lineHeight - 2 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 2 * opts.pixelRatio, 15 * opts.pixelRatio, 4 * opts.pixelRatio);
          break;
        case 'triangle':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.lineTo(startX + 2.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 12.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          break;
        case 'diamond':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.lineTo(startX + 2.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 12.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          break;
        case 'circle':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.arc(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight, 5 * opts.pixelRatio, 0, 2 * Math.PI);
          break;
        case 'rect':
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio, 15 * opts.pixelRatio, 10 * opts.pixelRatio);
          break;
        default:
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio, 15 * opts.pixelRatio, 10 * opts.pixelRatio);}

      context.closePath();
      context.fill();
      context.stroke();

      startX += shapeWidth + shapeRight;
      var fontTrans = 0.5 * lineHeight + 0.5 * fontSize - 2;
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.show ? opts.legend.fontColor : opts.legend.hiddenColor);
      context.fillText(item.name, startX, startY + fontTrans);
      context.closePath();
      context.stroke();
      if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
        startX += measureText(item.name, fontSize) + itemGap;
        item.area[2] = startX;
      } else {
        item.area[2] = startX + measureText(item.name, fontSize) + itemGap;;
        startX -= shapeWidth + shapeRight;
        startY += lineHeight;
      }
    }
  });
}

function drawPieDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var pieOption = assign({}, {
    activeOpacity: 0.5,
    activeRadius: 10 * opts.pixelRatio,
    offsetAngle: 0,
    labelWidth: 15 * opts.pixelRatio,
    ringWidth: 0,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF' },
  opts.extra.pie);
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = pieOption.activeRadius;
  }

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);

  series = getPieDataPoints(series, radius, process);

  var activeRadius = pieOption.activeRadius;

  series = series.map(function (eachSeries) {
    eachSeries._start_ += pieOption.offsetAngle * Math.PI / 180;
    return eachSeries;
  });
  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, opts.extra.pie.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_ + activeRadius, eachSeries._start_,
        eachSeries._start_ + 2 *
        eachSeries._proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(pieOption.borderWidth * opts.pixelRatio);
    context.lineJoin = "round";
    context.setStrokeStyle(pieOption.borderColor);
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (pieOption.border == true) {
      context.stroke();
    }
  });

  if (opts.type === 'ring') {
    var innerPieWidth = radius * 0.6;
    if (typeof opts.extra.pie.ringWidth === 'number' && opts.extra.pie.ringWidth > 0) {
      innerPieWidth = Math.max(0, radius - opts.extra.pie.ringWidth);
    }
    context.beginPath();
    context.setFillStyle(opts.background || '#ffffff');
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, innerPieWidth, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  if (process === 1 && opts.type === 'ring') {
    drawRingTitle(opts, config, context, centerPosition);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawRoseDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var roseOption = assign({}, {
    type: 'area',
    activeOpacity: 0.5,
    activeRadius: 10 * opts.pixelRatio,
    offsetAngle: 0,
    labelWidth: 15 * opts.pixelRatio,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF' },
  opts.extra.rose);
  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = roseOption.activeRadius;
  }
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);
  var minRadius = roseOption.minRadius || radius * 0.5;

  series = getRoseDataPoints(series, roseOption.type, minRadius, radius, process);

  var activeRadius = roseOption.activeRadius;

  series = series.map(function (eachSeries) {
    eachSeries._start_ += (roseOption.offsetAngle || 0) * Math.PI / 180;
    return eachSeries;
  });

  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, roseOption.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, activeRadius + eachSeries._radius_, eachSeries._start_,
        eachSeries._start_ + 2 * eachSeries._rose_proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(roseOption.borderWidth * opts.pixelRatio);
    context.lineJoin = "round";
    context.setStrokeStyle(roseOption.borderColor);
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 *
    eachSeries._rose_proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (roseOption.border == true) {
      context.stroke();
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawArcbarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var arcbarOption = assign({}, {
    startAngle: 0.75,
    endAngle: 0.25,
    type: 'default',
    width: 12 * opts.pixelRatio,
    gap: 2 * opts.pixelRatio },
  opts.extra.arcbar);

  series = getArcbarDataPoints(series, arcbarOption, process);

  var centerPosition;
  if (arcbarOption.center) {
    centerPosition = arcbarOption.center;
  } else {
    centerPosition = {
      x: opts.width / 2,
      y: opts.height / 2 };

  }

  var radius;
  if (arcbarOption.radius) {
    radius = arcbarOption.radius;
  } else {
    radius = Math.min(centerPosition.x, centerPosition.y);
    radius -= 5 * opts.pixelRatio;
    radius -= arcbarOption.width / 2;
  }

  for (var i = 0; i < series.length; i++) {
    var eachSeries = series[i];
    //背景颜色
    context.setLineWidth(arcbarOption.width);
    context.setStrokeStyle(arcbarOption.backgroundColor || '#E9E9E9');
    context.setLineCap('round');
    context.beginPath();
    if (arcbarOption.type == 'default') {
      context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width + arcbarOption.gap) * i, arcbarOption.startAngle * Math.PI, arcbarOption.endAngle * Math.PI, false);
    } else {
      context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width + arcbarOption.gap) * i, 0, 2 * Math.PI, false);
    }
    context.stroke();
    //进度条
    context.setLineWidth(arcbarOption.width);
    context.setStrokeStyle(eachSeries.color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width + arcbarOption.gap) * i, arcbarOption.startAngle * Math.PI, eachSeries._proportion_ * Math.PI, false);
    context.stroke();
  }

  drawRingTitle(opts, config, context, centerPosition);

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawGaugeDataPoints(categories, series, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var gaugeOption = assign({}, {
    type: 'default',
    startAngle: 0.75,
    endAngle: 0.25,
    width: 15,
    splitLine: {
      fixRadius: 0,
      splitNumber: 10,
      width: 15,
      color: '#FFFFFF',
      childNumber: 5,
      childWidth: 5 },

    pointer: {
      width: 15,
      color: 'auto' } },

  opts.extra.gauge);

  if (gaugeOption.oldAngle == undefined) {
    gaugeOption.oldAngle = gaugeOption.startAngle;
  }
  if (gaugeOption.oldData == undefined) {
    gaugeOption.oldData = 0;
  }
  categories = getGaugeAxisPoints(categories, gaugeOption.startAngle, gaugeOption.endAngle);

  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);
  radius -= 5 * opts.pixelRatio;
  radius -= gaugeOption.width / 2;
  var innerRadius = radius - gaugeOption.width;
  var totalAngle = 0;

  //判断仪表盘的样式：default百度样式，progress新样式
  if (gaugeOption.type == 'progress') {

    //## 第一步画中心圆形背景和进度条背景
    //中心圆形背景
    var pieRadius = radius - gaugeOption.width * 3;
    context.beginPath();
    var gradient = context.createLinearGradient(centerPosition.x, centerPosition.y - pieRadius, centerPosition.x, centerPosition.y + pieRadius);
    //配置渐变填充（起点：中心点向上减半径；结束点中心点向下加半径）
    gradient.addColorStop('0', hexToRgb(series[0].color, 0.3));
    gradient.addColorStop('1.0', hexToRgb("#FFFFFF", 0.1));
    context.setFillStyle(gradient);
    context.arc(centerPosition.x, centerPosition.y, pieRadius, 0, 2 * Math.PI, false);
    context.fill();
    //画进度条背景
    context.setLineWidth(gaugeOption.width);
    context.setStrokeStyle(hexToRgb(series[0].color, 0.3));
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, innerRadius, gaugeOption.startAngle * Math.PI, gaugeOption.endAngle * Math.PI, false);
    context.stroke();

    //## 第二步画刻度线
    totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
    var childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
    var startX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
    var endX = -radius - gaugeOption.width - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);
    var len = gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1;
    var proc = series[0].data * process;
    for (var i = 0; i < len; i++) {
      context.beginPath();
      //刻度线随进度变色
      if (proc > i / len) {
        context.setStrokeStyle(hexToRgb(series[0].color, 1));
      } else {
        context.setStrokeStyle(hexToRgb(series[0].color, 0.3));
      }
      context.setLineWidth(3 * opts.pixelRatio);
      context.moveTo(startX, 0);
      context.lineTo(endX, 0);
      context.stroke();
      context.rotate(childAngle * Math.PI);
    }
    context.restore();

    //## 第三步画进度条
    series = getArcbarDataPoints(series, gaugeOption, process);
    context.setLineWidth(gaugeOption.width);
    context.setStrokeStyle(series[0].color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, innerRadius, gaugeOption.startAngle * Math.PI, series[0]._proportion_ * Math.PI, false);
    context.stroke();

    //## 第四步画指针
    var pointerRadius = radius - gaugeOption.width * 2.5;
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((series[0]._proportion_ - 1) * Math.PI);
    context.beginPath();
    context.setLineWidth(gaugeOption.width / 3);
    var gradient3 = context.createLinearGradient(0, -pointerRadius * 0.6, 0, pointerRadius * 0.6);
    gradient3.addColorStop('0', hexToRgb('#FFFFFF', 0));
    gradient3.addColorStop('0.5', hexToRgb(series[0].color, 1));
    gradient3.addColorStop('1.0', hexToRgb('#FFFFFF', 0));
    context.setStrokeStyle(gradient3);
    context.arc(0, 0, pointerRadius, 0.85 * Math.PI, 1.15 * Math.PI, false);
    context.stroke();
    context.beginPath();
    context.setLineWidth(1);
    context.setStrokeStyle(series[0].color);
    context.setFillStyle(series[0].color);
    context.moveTo(-pointerRadius - gaugeOption.width / 3 / 2, -4);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2 - 4, 0);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2, 4);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2, -4);
    context.stroke();
    context.fill();
    context.restore();

    //default百度样式
  } else {
    //画背景
    context.setLineWidth(gaugeOption.width);
    context.setLineCap('butt');
    for (var _i18 = 0; _i18 < categories.length; _i18++) {
      var eachCategories = categories[_i18];
      context.beginPath();
      context.setStrokeStyle(eachCategories.color);
      context.arc(centerPosition.x, centerPosition.y, radius, eachCategories._startAngle_ * Math.PI, eachCategories._endAngle_ * Math.PI, false);
      context.stroke();
    }
    context.save();

    //画刻度线
    totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    var _splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
    var _childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
    var _startX2 = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
    var _endX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
    var childendX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.childWidth;

    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);

    for (var _i19 = 0; _i19 < gaugeOption.splitLine.splitNumber + 1; _i19++) {
      context.beginPath();
      context.setStrokeStyle(gaugeOption.splitLine.color);
      context.setLineWidth(2 * opts.pixelRatio);
      context.moveTo(_startX2, 0);
      context.lineTo(_endX, 0);
      context.stroke();
      context.rotate(_splitAngle * Math.PI);
    }
    context.restore();

    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);

    for (var _i20 = 0; _i20 < gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1; _i20++) {
      context.beginPath();
      context.setStrokeStyle(gaugeOption.splitLine.color);
      context.setLineWidth(1 * opts.pixelRatio);
      context.moveTo(_startX2, 0);
      context.lineTo(childendX, 0);
      context.stroke();
      context.rotate(_childAngle * Math.PI);
    }
    context.restore();

    //画指针
    series = getGaugeDataPoints(series, categories, gaugeOption, process);

    for (var _i21 = 0; _i21 < series.length; _i21++) {
      var eachSeries = series[_i21];
      context.save();
      context.translate(centerPosition.x, centerPosition.y);
      context.rotate((eachSeries._proportion_ - 1) * Math.PI);
      context.beginPath();
      context.setFillStyle(eachSeries.color);
      context.moveTo(gaugeOption.pointer.width, 0);
      context.lineTo(0, -gaugeOption.pointer.width / 2);
      context.lineTo(-innerRadius, 0);
      context.lineTo(0, gaugeOption.pointer.width / 2);
      context.lineTo(gaugeOption.pointer.width, 0);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFillStyle('#FFFFFF');
      context.arc(0, 0, gaugeOption.pointer.width / 6, 0, 2 * Math.PI, false);
      context.fill();
      context.restore();
    }

    if (opts.dataLabel !== false) {
      drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context);
    }
  }

  //画仪表盘标题，副标题
  drawRingTitle(opts, config, context, centerPosition);

  if (process === 1 && opts.type === 'gauge') {
    opts.extra.gauge.oldAngle = series[0]._proportion_;
    opts.extra.gauge.oldData = series[0].data;
  }
  return {
    center: centerPosition,
    radius: radius,
    innerRadius: innerRadius,
    categories: categories,
    totalAngle: totalAngle };

}

function drawRadarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var radarOption = assign({}, {
    gridColor: '#cccccc',
    labelColor: '#666666',
    opacity: 0.2,
    gridCount: 3 },
  opts.extra.radar);

  var coordinateAngle = getRadarCoordinateSeries(opts.categories.length);

  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };


  var radius = Math.min(centerPosition.x - (getMaxTextListLength(opts.categories) + config.radarLabelTextMargin),
  centerPosition.y - config.radarLabelTextMargin);
  //TODO逻辑不对
  radius -= opts.padding[1];

  // draw grid
  context.beginPath();
  context.setLineWidth(1 * opts.pixelRatio);
  context.setStrokeStyle(radarOption.gridColor);
  coordinateAngle.forEach(function (angle) {
    var pos = convertCoordinateOrigin(radius * Math.cos(angle), radius * Math.sin(angle), centerPosition);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.lineTo(pos.x, pos.y);
  });
  context.stroke();
  context.closePath();
  // draw split line grid

  var _loop = function _loop(i) {
    var startPos = {};
    context.beginPath();
    context.setLineWidth(1 * opts.pixelRatio);
    context.setStrokeStyle(radarOption.gridColor);
    coordinateAngle.forEach(function (angle, index) {
      var pos = convertCoordinateOrigin(radius / radarOption.gridCount * i * Math.cos(angle), radius / radarOption.gridCount * i * Math.sin(angle), centerPosition);
      if (index === 0) {
        startPos = pos;
        context.moveTo(pos.x, pos.y);
      } else {
        context.lineTo(pos.x, pos.y);
      }
    });
    context.lineTo(startPos.x, startPos.y);
    context.stroke();
    context.closePath();
  };

  for (var i = 1; i <= radarOption.gridCount; i++) {
    _loop(i);
  }

  var radarDataPoints = getRadarDataPoints(coordinateAngle, centerPosition, radius, series, opts, process);

  radarDataPoints.forEach(function (eachSeries, seriesIndex) {
    // 绘制区域数据
    context.beginPath();
    context.setFillStyle(hexToRgb(eachSeries.color, radarOption.opacity));
    eachSeries.data.forEach(function (item, index) {
      if (index === 0) {
        context.moveTo(item.position.x, item.position.y);
      } else {
        context.lineTo(item.position.x, item.position.y);
      }
    });
    context.closePath();
    context.fill();

    if (opts.dataPointShape !== false) {
      var points = eachSeries.data.map(function (item) {
        return item.position;
      });
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });
  // draw label text
  drawRadarLabel(coordinateAngle, radius, centerPosition, opts, config, context);

  return {
    center: centerPosition,
    radius: radius,
    angleList: coordinateAngle };

}

function normalInt(min, max, iter) {
  iter = iter == 0 ? 1 : iter;
  var arr = [];
  for (var i = 0; i < iter; i++) {
    arr[i] = Math.random();
  };
  return Math.floor(arr.reduce(function (i, j) {return i + j;}) / iter * (max - min)) + min;
};

function collisionNew(area, points, width, height) {
  var isIn = false;
  for (var i = 0; i < points.length; i++) {
    if (points[i].area) {
      if (area[3] < points[i].area[1] || area[0] > points[i].area[2] || area[1] > points[i].area[3] || area[2] < points[i].area[0]) {
        if (area[0] < 0 || area[1] < 0 || area[2] > width || area[3] > height) {
          isIn = true;
          break;
        } else {
          isIn = false;
        }
      } else {
        isIn = true;
        break;
      }
    }
  }
  return isIn;
};

function getBoundingBox(data) {
  var bounds = {},coords;
  bounds.xMin = 180;
  bounds.xMax = 0;
  bounds.yMin = 90;
  bounds.yMax = 0;
  for (var i = 0; i < data.length; i++) {
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        var longitude = coords[j][0];
        var latitude = coords[j][1];
        var point = {
          x: longitude,
          y: latitude };

        bounds.xMin = bounds.xMin < point.x ? bounds.xMin : point.x;
        bounds.xMax = bounds.xMax > point.x ? bounds.xMax : point.x;
        bounds.yMin = bounds.yMin < point.y ? bounds.yMin : point.y;
        bounds.yMax = bounds.yMax > point.y ? bounds.yMax : point.y;
      }
    }
  }
  return bounds;
}

function coordinateToPoint(latitude, longitude, bounds, scale, xoffset, yoffset) {
  return {
    x: (longitude - bounds.xMin) * scale + xoffset,
    y: (bounds.yMax - latitude) * scale + yoffset };

}

function pointToCoordinate(pointY, pointX, bounds, scale, xoffset, yoffset) {
  return {
    x: (pointX - xoffset) / scale + bounds.xMin,
    y: bounds.yMax - (pointY - yoffset) / scale };

}

function isRayIntersectsSegment(poi, s_poi, e_poi) {
  if (s_poi[1] == e_poi[1]) {return false;}
  if (s_poi[1] > poi[1] && e_poi[1] > poi[1]) {return false;}
  if (s_poi[1] < poi[1] && e_poi[1] < poi[1]) {return false;}
  if (s_poi[1] == poi[1] && e_poi[1] > poi[1]) {return false;}
  if (e_poi[1] == poi[1] && s_poi[1] > poi[1]) {return false;}
  if (s_poi[0] < poi[0] && e_poi[1] < poi[1]) {return false;}
  var xseg = e_poi[0] - (e_poi[0] - s_poi[0]) * (e_poi[1] - poi[1]) / (e_poi[1] - s_poi[1]);
  if (xseg < poi[0]) {
    return false;
  } else {
    return true;
  }
}

function isPoiWithinPoly(poi, poly) {
  var sinsc = 0;
  for (var i = 0; i < poly.length; i++) {
    var epoly = poly[i][0];
    if (poly.length == 1) {
      epoly = poly[i][0];
    }
    for (var j = 0; j < epoly.length - 1; j++) {
      var s_poi = epoly[j];
      var e_poi = epoly[j + 1];
      if (isRayIntersectsSegment(poi, s_poi, e_poi)) {
        sinsc += 1;
      }
    }
  }

  if (sinsc % 2 == 1) {
    return true;
  } else {
    return false;
  }
}


function drawMapDataPoints(series, opts, config, context) {
  var mapOption = assign({}, {
    border: true,
    borderWidth: 1,
    borderColor: '#666666',
    fillOpacity: 0.6,
    activeBorderColor: '#f04864',
    activeFillColor: '#facc14',
    activeFillOpacity: 1 },
  opts.extra.map);
  var coords, point;
  var data = series;
  var bounds = getBoundingBox(data);
  var xScale = opts.width / Math.abs(bounds.xMax - bounds.xMin);
  var yScale = opts.height / Math.abs(bounds.yMax - bounds.yMin);
  var scale = xScale < yScale ? xScale : yScale;
  var xoffset = opts.width / 2 - Math.abs(bounds.xMax - bounds.xMin) / 2 * scale;
  var yoffset = opts.height / 2 - Math.abs(bounds.yMax - bounds.yMin) / 2 * scale;
  context.beginPath();
  context.clearRect(0, 0, opts.width, opts.height);
  context.setFillStyle(opts.background || '#FFFFFF');
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  for (var i = 0; i < data.length; i++) {
    context.beginPath();
    context.setLineWidth(mapOption.borderWidth * opts.pixelRatio);
    context.setStrokeStyle(mapOption.borderColor);
    context.setFillStyle(hexToRgb(series[i].color, mapOption.fillOpacity));
    if (opts.tooltip) {
      if (opts.tooltip.index == i) {
        context.setStrokeStyle(mapOption.activeBorderColor);
        context.setFillStyle(hexToRgb(mapOption.activeFillColor, mapOption.activeFillOpacity));
      }
    }
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        point = coordinateToPoint(coords[j][1], coords[j][0], bounds, scale, xoffset, yoffset);
        if (j === 0) {
          context.beginPath();
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      }
      context.fill();
      if (mapOption.border == true) {
        context.stroke();
      }
    }
    if (opts.dataLabel == true) {
      var centerPoint = data[i].properties.centroid;
      if (centerPoint) {
        point = coordinateToPoint(centerPoint[1], centerPoint[0], bounds, scale, xoffset, yoffset);
        var fontSize = data[i].textSize || config.fontSize;
        var text = data[i].properties.name;
        context.beginPath();
        context.setFontSize(fontSize);
        context.setFillStyle(data[i].textColor || '#666666');
        context.fillText(text, point.x - measureText(text, fontSize) / 2, point.y + fontSize / 2);
        context.closePath();
        context.stroke();
      }
    }
  }
  opts.chartData.mapData = {
    bounds: bounds,
    scale: scale,
    xoffset: xoffset,
    yoffset: yoffset };

  drawToolTipBridge(opts, config, context, 1);
  context.draw();
}

function getWordCloudPoint(opts, type) {
  var points = opts.series.sort(function (a, b) {return parseInt(b.textSize) - parseInt(a.textSize);});
  switch (type) {
    case 'normal':
      for (var i = 0; i < points.length; i++) {
        var text = points[i].name;
        var tHeight = points[i].textSize;
        var tWidth = measureText(text, tHeight);
        var x = void 0,y = void 0;
        var area = void 0;
        var breaknum = 0;
        while (true) {
          breaknum++;
          x = normalInt(-opts.width / 2, opts.width / 2, 5) - tWidth / 2;
          y = normalInt(-opts.height / 2, opts.height / 2, 5) + tHeight / 2;
          area = [x - 5 + opts.width / 2, y - 5 - tHeight + opts.height / 2, x + tWidth + 5 + opts.width / 2, y + 5 + opts.height / 2];
          var isCollision = collisionNew(area, points, opts.width, opts.height);
          if (!isCollision) break;
          if (breaknum == 1000) {
            area = [-100, -100, -100, -100];
            break;
          }
        };
        points[i].area = area;
      }
      break;
    case 'vertical':var
      Spin = function Spin() {
        //获取均匀随机值，是否旋转，旋转的概率为（1-0.5）
        if (Math.random() > 0.7) {
          return true;
        } else {return false;};
      };;
      for (var _i22 = 0; _i22 < points.length; _i22++) {
        var _text = points[_i22].name;
        var _tHeight = points[_i22].textSize;
        var _tWidth = measureText(_text, _tHeight);
        var isSpin = Spin();
        var _x = void 0,_y = void 0,_area = void 0,areav = void 0;
        var _breaknum = 0;
        while (true) {
          _breaknum++;
          var _isCollision = void 0;
          if (isSpin) {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_y - 5 - _tWidth + opts.width / 2, -_x - 5 + opts.height / 2, _y + 5 + opts.width / 2, -_x + _tHeight + 5 + opts.height / 2];
            areav = [opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) - 5, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) - 5, opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) + _tHeight, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) + _tWidth + 5];
            _isCollision = collisionNew(areav, points, opts.height, opts.width);
          } else {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_x - 5 + opts.width / 2, _y - 5 - _tHeight + opts.height / 2, _x + _tWidth + 5 + opts.width / 2, _y + 5 + opts.height / 2];
            _isCollision = collisionNew(_area, points, opts.width, opts.height);
          }
          if (!_isCollision) break;
          if (_breaknum == 1000) {
            _area = [-1000, -1000, -1000, -1000];
            break;
          }
        };
        if (isSpin) {
          points[_i22].area = areav;
          points[_i22].areav = _area;
        } else {
          points[_i22].area = _area;
        }
        points[_i22].rotate = isSpin;
      };
      break;}

  return points;
}


function drawWordCloudDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var wordOption = assign({}, {
    type: 'normal',
    autoColors: true },
  opts.extra.word);

  context.beginPath();
  context.setFillStyle(opts.background || '#FFFFFF');
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  context.save();
  var points = opts.chartData.wordCloudData;
  context.translate(opts.width / 2, opts.height / 2);

  for (var i = 0; i < points.length; i++) {
    context.save();
    if (points[i].rotate) {
      context.rotate(90 * Math.PI / 180);
    }
    var text = points[i].name;
    var tHeight = points[i].textSize;
    var tWidth = measureText(text, tHeight);
    context.beginPath();
    context.setStrokeStyle(points[i].color);
    context.setFillStyle(points[i].color);
    context.setFontSize(tHeight);
    if (points[i].rotate) {
      if (points[i].areav[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
        }
      }
    } else {
      if (points[i].area[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
        }

      }
    }

    context.stroke();
    context.restore();
  }
  context.restore();
}

function drawFunnelDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var funnelOption = assign({}, {
    activeWidth: 10,
    activeOpacity: 0.3,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    fillOpacity: 1,
    labelAlign: 'right' },
  opts.extra.funnel);
  var eachSpacing = (opts.height - opts.area[0] - opts.area[2]) / series.length;
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.height - opts.area[2] };

  var activeWidth = funnelOption.activeWidth;
  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - activeWidth, (opts.height - opts.area[0] - opts.area[2]) / 2 - activeWidth);
  series = getFunnelDataPoints(series, radius, process);
  context.save();
  context.translate(centerPosition.x, centerPosition.y);
  for (var i = 0; i < series.length; i++) {
    if (i == 0) {
      if (opts.tooltip) {
        if (opts.tooltip.index == i) {
          context.beginPath();
          context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
          context.moveTo(-activeWidth, 0);
          context.lineTo(-series[i].radius - activeWidth, -eachSpacing);
          context.lineTo(series[i].radius + activeWidth, -eachSpacing);
          context.lineTo(activeWidth, 0);
          context.lineTo(-activeWidth, 0);
          context.closePath();
          context.fill();
        }
      }
      series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing, centerPosition.x + series[i].radius, centerPosition.y];
      context.beginPath();
      context.setLineWidth(funnelOption.borderWidth * opts.pixelRatio);
      context.setStrokeStyle(funnelOption.borderColor);
      context.setFillStyle(hexToRgb(series[i].color, funnelOption.fillOpacity));
      context.moveTo(0, 0);
      context.lineTo(-series[i].radius, -eachSpacing);
      context.lineTo(series[i].radius, -eachSpacing);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();
      if (funnelOption.border == true) {
        context.stroke();
      }
    } else {
      if (opts.tooltip) {
        if (opts.tooltip.index == i) {
          context.beginPath();
          context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
          context.moveTo(0, 0);
          context.lineTo(-series[i - 1].radius - activeWidth, 0);
          context.lineTo(-series[i].radius - activeWidth, -eachSpacing);
          context.lineTo(series[i].radius + activeWidth, -eachSpacing);
          context.lineTo(series[i - 1].radius + activeWidth, 0);
          context.lineTo(0, 0);
          context.closePath();
          context.fill();
        }
      }
      series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing * (i + 1), centerPosition.x + series[i].radius, centerPosition.y - eachSpacing * i];
      context.beginPath();
      context.setLineWidth(funnelOption.borderWidth * opts.pixelRatio);
      context.setStrokeStyle(funnelOption.borderColor);
      context.setFillStyle(hexToRgb(series[i].color, funnelOption.fillOpacity));
      context.moveTo(0, 0);
      context.lineTo(-series[i - 1].radius, 0);
      context.lineTo(-series[i].radius, -eachSpacing);
      context.lineTo(series[i].radius, -eachSpacing);
      context.lineTo(series[i - 1].radius, 0);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();
      if (funnelOption.border == true) {
        context.stroke();
      }
    }
    context.translate(0, -eachSpacing);
  }
  context.restore();

  if (opts.dataLabel !== false && process === 1) {
    drawFunnelText(series, opts, context, eachSpacing, funnelOption.labelAlign, activeWidth, centerPosition);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawFunnelText(series, opts, context, eachSpacing, labelAlign, activeWidth, centerPosition) {
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var startX = void 0,endX = void 0,startY = void 0,fontSize = void 0;
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    if (labelAlign == 'right') {
      if (i == 0) {
        startX = (item.funnelArea[2] + centerPosition.x) / 2;
      } else {
        startX = (item.funnelArea[2] + series[i - 1].funnelArea[2]) / 2;
      }
      endX = startX + activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize || opts.fontSize;
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || '#666666');
      context.fillText(text, endX + 5, startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    } else {
      if (i == 0) {
        startX = (item.funnelArea[0] + centerPosition.x) / 2;
      } else {
        startX = (item.funnelArea[0] + series[i - 1].funnelArea[0]) / 2;
      }
      endX = startX - activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize || opts.fontSize;
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || '#666666');
      context.fillText(text, endX - 5 - measureText(text), startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    }

  }
}


function drawCanvas(opts, context) {
  context.draw();
}

var Timing = {
  easeIn: function easeIn(pos) {
    return Math.pow(pos, 3);
  },
  easeOut: function easeOut(pos) {
    return Math.pow(pos - 1, 3) + 1;
  },
  easeInOut: function easeInOut(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    } else {
      return 0.5 * (Math.pow(pos - 2, 3) + 2);
    }
  },
  linear: function linear(pos) {
    return pos;
  } };


function Animation(opts) {
  this.isStop = false;
  opts.duration = typeof opts.duration === 'undefined' ? 1000 : opts.duration;
  opts.timing = opts.timing || 'linear';
  var delay = 17;

  function createAnimationFrame() {
    if (typeof setTimeout !== 'undefined') {
      return function (step, delay) {
        setTimeout(function () {
          var timeStamp = +new Date();
          step(timeStamp);
        }, delay);
      };
    } else if (typeof requestAnimationFrame !== 'undefined') {
      return requestAnimationFrame;
    } else {
      return function (step) {
        step(null);
      };
    }
  };
  var animationFrame = createAnimationFrame();
  var startTimeStamp = null;
  var _step = function step(timestamp) {
    if (timestamp === null || this.isStop === true) {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
      return;
    }
    if (startTimeStamp === null) {
      startTimeStamp = timestamp;
    }
    if (timestamp - startTimeStamp < opts.duration) {
      var process = (timestamp - startTimeStamp) / opts.duration;
      var timingFunction = Timing[opts.timing];
      process = timingFunction(process);

      opts.onProcess && opts.onProcess(process);
      animationFrame(_step, delay);
    } else {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
    }
  };
  _step = _step.bind(this);
  animationFrame(_step, delay);
}

// stop animation immediately
// and tigger onAnimationFinish
Animation.prototype.stop = function () {
  this.isStop = true;
};

function drawCharts(type, opts, config, context) {
  var _this = this;
  var series = opts.series;
  var categories = opts.categories;
  series = fillSeries(series, opts, config);
  var duration = opts.animation ? opts.duration : 0;
  _this.animationInstance && _this.animationInstance.stop();
  var seriesMA = null;
  if (type == 'candle') {
    var average = assign({}, opts.extra.candle.average);
    if (average.show) {
      seriesMA = calCandleMA(average.day, average.name, average.color, series[0].data);
      seriesMA = fillSeries(seriesMA, opts, config);
      opts.seriesMA = seriesMA;
    } else if (opts.seriesMA) {
      seriesMA = opts.seriesMA = fillSeries(opts.seriesMA, opts, config);
    } else {
      seriesMA = series;
    }
  } else {
    seriesMA = series;
  }

  /* 过滤掉show=false的series */
  opts._series_ = series = filterSeries(series);

  //重新计算图表区域

  opts.area = new Array(4);
  //复位绘图区域
  for (var j = 0; j < 4; j++) {
    opts.area[j] = opts.padding[j];
  }

  //通过计算三大区域：图例、X轴、Y轴的大小，确定绘图区域
  var _calLegendData = calLegendData(seriesMA, opts, config, opts.chartData),
  legendHeight = _calLegendData.area.wholeHeight,
  legendWidth = _calLegendData.area.wholeWidth;

  switch (opts.legend.position) {
    case 'top':
      opts.area[0] += legendHeight;
      break;
    case 'bottom':
      opts.area[2] += legendHeight;
      break;
    case 'left':
      opts.area[3] += legendWidth;
      break;
    case 'right':
      opts.area[1] += legendWidth;
      break;}


  var _calYAxisData = {},yAxisWidth = 0;
  if (opts.type === 'line' || opts.type === 'column' || opts.type === 'area' || opts.type === 'mix' || opts.type === 'candle') {
    _calYAxisData = calYAxisData(series, opts, config);
    yAxisWidth = _calYAxisData.yAxisWidth;
    //如果显示Y轴标题
    if (opts.yAxis.showTitle) {
      var maxTitleHeight = 0;
      for (var i = 0; i < opts.yAxis.data.length; i++) {
        maxTitleHeight = Math.max(maxTitleHeight, opts.yAxis.data[i].titleFontSize ? opts.yAxis.data[i].titleFontSize : config.fontSize);
      }
      opts.area[0] += (maxTitleHeight + 6) * opts.pixelRatio;
    }
    var rightIndex = 0,leftIndex = 0;
    //计算主绘图区域左右位置
    for (var _i23 = 0; _i23 < yAxisWidth.length; _i23++) {
      if (yAxisWidth[_i23].position == 'left') {
        if (leftIndex > 0) {
          opts.area[3] += yAxisWidth[_i23].width + opts.yAxis.padding;
        } else {
          opts.area[3] += yAxisWidth[_i23].width;
        }
        leftIndex += 1;
      } else {
        if (rightIndex > 0) {
          opts.area[1] += yAxisWidth[_i23].width + opts.yAxis.padding;
        } else {
          opts.area[1] += yAxisWidth[_i23].width;
        }
        rightIndex += 1;
      }
    }
  } else {
    config.yAxisWidth = yAxisWidth;
  }
  opts.chartData.yAxisData = _calYAxisData;

  if (opts.categories && opts.categories.length) {
    opts.chartData.xAxisData = getXAxisPoints(opts.categories, opts, config);
    var _calCategoriesData = calCategoriesData(opts.categories, opts, config, opts.chartData.xAxisData.eachSpacing),
    xAxisHeight = _calCategoriesData.xAxisHeight,
    angle = _calCategoriesData.angle;
    config.xAxisHeight = xAxisHeight;
    config._xAxisTextAngle_ = angle;
    opts.area[2] += xAxisHeight;
    opts.chartData.categoriesData = _calCategoriesData;
  } else {
    if (opts.type === 'line' || opts.type === 'area' || opts.type === 'points') {
      opts.chartData.xAxisData = calXAxisData(series, opts, config);
      categories = opts.chartData.xAxisData.rangesFormat;
      var _calCategoriesData2 = calCategoriesData(categories, opts, config, opts.chartData.xAxisData.eachSpacing),
      _xAxisHeight = _calCategoriesData2.xAxisHeight,
      _angle = _calCategoriesData2.angle;
      config.xAxisHeight = _xAxisHeight;
      config._xAxisTextAngle_ = _angle;
      opts.area[2] += _xAxisHeight;
      opts.chartData.categoriesData = _calCategoriesData2;
    } else {
      opts.chartData.xAxisData = {
        xAxisPoints: [] };

    }
  }
  //计算右对齐偏移距离
  if (opts.enableScroll && opts.xAxis.scrollAlign == 'right' && opts._scrollDistance_ === undefined) {
    var offsetLeft = 0,
    xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
    startX = opts.chartData.xAxisData.startX,
    endX = opts.chartData.xAxisData.endX,
    eachSpacing = opts.chartData.xAxisData.eachSpacing;
    var totalWidth = eachSpacing * (xAxisPoints.length - 1);
    var screenWidth = endX - startX;
    offsetLeft = screenWidth - totalWidth;
    _this.scrollOption = {
      currentOffset: offsetLeft,
      startTouchX: offsetLeft,
      distance: 0,
      lastMoveTime: 0 };

    opts._scrollDistance_ = offsetLeft;
  }

  if (type === 'pie' || type === 'ring' || type === 'rose') {
    config._pieTextMaxLength_ = opts.dataLabel === false ? 0 : getPieTextMaxLength(seriesMA);
  }

  switch (type) {
    case 'word':
      var wordOption = assign({}, {
        type: 'normal',
        autoColors: true },
      opts.extra.word);
      if (opts.updateData == true || opts.updateData == undefined) {
        opts.chartData.wordCloudData = getWordCloudPoint(opts, wordOption.type);
      }
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawWordCloudDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'map':
      context.clearRect(0, 0, opts.width, opts.height);
      drawMapDataPoints(series, opts, config, context);
      break;
    case 'funnel':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.funnelData = drawFunnelDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'line':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawLineDataPoints = drawLineDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawLineDataPoints.xAxisPoints,
          calPoints = _drawLineDataPoints.calPoints,
          eachSpacing = _drawLineDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);

        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'mix':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawMixDataPoints = drawMixDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawMixDataPoints.xAxisPoints,
          calPoints = _drawMixDataPoints.calPoints,
          eachSpacing = _drawMixDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'column':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawColumnDataPoints = drawColumnDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawColumnDataPoints.xAxisPoints,
          calPoints = _drawColumnDataPoints.calPoints,
          eachSpacing = _drawColumnDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'area':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawAreaDataPoints = drawAreaDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawAreaDataPoints.xAxisPoints,
          calPoints = _drawAreaDataPoints.calPoints,
          eachSpacing = _drawAreaDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'ring':
    case 'pie':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawPieDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'rose':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawRoseDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'radar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.radarData = drawRadarDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'arcbar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.arcbarData = drawArcbarDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'gauge':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.gaugeData = drawGaugeDataPoints(categories, series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'candle':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawCandleDataPoints = drawCandleDataPoints(series, seriesMA, opts, config, context, process),
          xAxisPoints = _drawCandleDataPoints.xAxisPoints,
          calPoints = _drawCandleDataPoints.calPoints,
          eachSpacing = _drawCandleDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          if (seriesMA) {
            drawLegend(seriesMA, opts, config, context, opts.chartData);
          } else {
            drawLegend(opts.series, opts, config, context, opts.chartData);
          }
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;}

}

// simple event implement

function Event() {
  this.events = {};
}

Event.prototype.addEventListener = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Event.prototype.trigger = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var type = args[0];
  var params = args.slice(1);
  if (!!this.events[type]) {
    this.events[type].forEach(function (listener) {
      try {
        listener.apply(null, params);
      } catch (e) {
        console.error(e);
      }
    });
  }
};

var Charts = function Charts(opts) {
  opts.pixelRatio = opts.pixelRatio ? opts.pixelRatio : 1;
  opts.fontSize = opts.fontSize ? opts.fontSize * opts.pixelRatio : 13 * opts.pixelRatio;
  opts.title = assign({}, opts.title);
  opts.subtitle = assign({}, opts.subtitle);
  opts.duration = opts.duration ? opts.duration : 1000;
  opts.yAxis = assign({}, {
    data: [],
    showTitle: false,
    disabled: false,
    disableGrid: false,
    splitNumber: 5,
    gridType: 'solid',
    dashLength: 4 * opts.pixelRatio,
    gridColor: '#cccccc',
    padding: 10,
    fontColor: '#666666' },
  opts.yAxis);
  opts.yAxis.dashLength *= opts.pixelRatio;
  opts.yAxis.padding *= opts.pixelRatio;
  opts.xAxis = assign({}, {
    rotateLabel: false,
    type: 'calibration',
    gridType: 'solid',
    dashLength: 4,
    scrollAlign: 'left',
    boundaryGap: 'center',
    axisLine: true,
    axisLineColor: '#cccccc' },
  opts.xAxis);
  opts.xAxis.dashLength *= opts.pixelRatio;
  opts.legend = assign({}, {
    show: true,
    position: 'bottom',
    float: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    padding: 5,
    margin: 5,
    itemGap: 10,
    fontSize: opts.fontSize,
    lineHeight: opts.fontSize,
    fontColor: '#333333',
    format: {},
    hiddenColor: '#CECECE' },
  opts.legend);
  opts.legend.borderWidth = opts.legend.borderWidth * opts.pixelRatio;
  opts.legend.itemGap = opts.legend.itemGap * opts.pixelRatio;
  opts.legend.padding = opts.legend.padding * opts.pixelRatio;
  opts.legend.margin = opts.legend.margin * opts.pixelRatio;
  opts.extra = assign({}, opts.extra);
  opts.rotate = opts.rotate ? true : false;
  opts.animation = opts.animation ? true : false;
  opts.rotate = opts.rotate ? true : false;

  var config$$1 = JSON.parse(JSON.stringify(config));
  config$$1.colors = opts.colors ? opts.colors : config$$1.colors;
  config$$1.yAxisTitleWidth = opts.yAxis.disabled !== true && opts.yAxis.title ? config$$1.yAxisTitleWidth : 0;
  if (opts.type == 'pie' || opts.type == 'ring') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.pie.labelWidth * opts.pixelRatio || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  if (opts.type == 'rose') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.rose.labelWidth * opts.pixelRatio || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  config$$1.pieChartTextPadding = opts.dataLabel === false ? 0 : config$$1.pieChartTextPadding * opts.pixelRatio;
  config$$1.yAxisSplit = opts.yAxis.splitNumber ? opts.yAxis.splitNumber : config.yAxisSplit;

  //屏幕旋转
  config$$1.rotate = opts.rotate;
  if (opts.rotate) {
    var tempWidth = opts.width;
    var tempHeight = opts.height;
    opts.width = tempHeight;
    opts.height = tempWidth;
  }

  //适配高分屏
  opts.padding = opts.padding ? opts.padding : config$$1.padding;
  for (var i = 0; i < 4; i++) {
    opts.padding[i] *= opts.pixelRatio;
  }
  config$$1.yAxisWidth = config.yAxisWidth * opts.pixelRatio;
  config$$1.xAxisHeight = config.xAxisHeight * opts.pixelRatio;
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    config$$1.xAxisHeight += 6 * opts.pixelRatio;
  }
  config$$1.xAxisLineHeight = config.xAxisLineHeight * opts.pixelRatio;
  config$$1.fontSize = opts.fontSize;
  config$$1.titleFontSize = config.titleFontSize * opts.pixelRatio;
  config$$1.subtitleFontSize = config.subtitleFontSize * opts.pixelRatio;
  config$$1.toolTipPadding = config.toolTipPadding * opts.pixelRatio;
  config$$1.toolTipLineHeight = config.toolTipLineHeight * opts.pixelRatio;
  config$$1.columePadding = config.columePadding * opts.pixelRatio;
  opts.$this = opts.$this ? opts.$this : this;

  this.context = uni.createCanvasContext(opts.canvasId, opts.$this);
  /* 兼容原生H5
                                                                     this.context = document.getElementById(opts.canvasId).getContext("2d");
                                                                     this.context.setStrokeStyle = function(e){ return this.strokeStyle=e; }
                                                                     this.context.setLineWidth = function(e){ return this.lineWidth=e; }
                                                                     this.context.setLineCap = function(e){ return this.lineCap=e; }
                                                                     this.context.setFontSize = function(e){ return this.font=e+"px sans-serif"; }
                                                                     this.context.setFillStyle = function(e){ return this.fillStyle=e; }
                                                                     this.context.draw = function(){ }
                                                                     */

  opts.chartData = {};
  this.event = new Event();
  this.scrollOption = {
    currentOffset: 0,
    startTouchX: 0,
    distance: 0,
    lastMoveTime: 0 };


  this.opts = opts;
  this.config = config$$1;

  drawCharts.call(this, opts.type, opts, config$$1, this.context);
};

Charts.prototype.updateData = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.opts = assign({}, this.opts, data);
  this.opts.updateData = true;
  var scrollPosition = data.scrollPosition || 'current';
  switch (scrollPosition) {
    case 'current':
      this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      break;
    case 'left':
      this.opts._scrollDistance_ = 0;
      this.scrollOption = {
        currentOffset: 0,
        startTouchX: 0,
        distance: 0,
        lastMoveTime: 0 };

      break;
    case 'right':
      var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config),
      yAxisWidth = _calYAxisData.yAxisWidth;
      this.config.yAxisWidth = yAxisWidth;
      var offsetLeft = 0;
      var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
      xAxisPoints = _getXAxisPoints0.xAxisPoints,
      startX = _getXAxisPoints0.startX,
      endX = _getXAxisPoints0.endX,
      eachSpacing = _getXAxisPoints0.eachSpacing;
      var totalWidth = eachSpacing * (xAxisPoints.length - 1);
      var screenWidth = endX - startX;
      offsetLeft = screenWidth - totalWidth;
      this.scrollOption = {
        currentOffset: offsetLeft,
        startTouchX: offsetLeft,
        distance: 0,
        lastMoveTime: 0 };

      this.opts._scrollDistance_ = offsetLeft;
      break;}

  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.zoom = function () {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.opts.xAxis.itemCount;
  if (this.opts.enableScroll !== true) {
    console.log('请启用滚动条后使用！');
    return;
  }
  //当前屏幕中间点
  var centerPoint = Math.round(Math.abs(this.scrollOption.currentOffset) / this.opts.chartData.eachSpacing) + Math.round(
  this.opts.xAxis.itemCount / 2);
  this.opts.animation = false;
  this.opts.xAxis.itemCount = val.itemCount;
  //重新计算x轴偏移距离
  var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config),
  yAxisWidth = _calYAxisData.yAxisWidth;
  this.config.yAxisWidth = yAxisWidth;
  var offsetLeft = 0;
  var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
  xAxisPoints = _getXAxisPoints0.xAxisPoints,
  startX = _getXAxisPoints0.startX,
  endX = _getXAxisPoints0.endX,
  eachSpacing = _getXAxisPoints0.eachSpacing;
  var centerLeft = eachSpacing * centerPoint;
  var screenWidth = endX - startX;
  var MaxLeft = screenWidth - eachSpacing * (xAxisPoints.length - 1);
  offsetLeft = screenWidth / 2 - centerLeft;
  if (offsetLeft > 0) {
    offsetLeft = 0;
  }
  if (offsetLeft < MaxLeft) {
    offsetLeft = MaxLeft;
  }
  this.scrollOption = {
    currentOffset: offsetLeft,
    startTouchX: offsetLeft,
    distance: 0,
    lastMoveTime: 0 };

  this.opts._scrollDistance_ = offsetLeft;
  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.stopAnimation = function () {
  this.animationInstance && this.animationInstance.stop();
};

Charts.prototype.addEventListener = function (type, listener) {
  this.event.addEventListener(type, listener);
};

Charts.prototype.getCurrentDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose') {
      return findPieChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.pieData);
    } else if (this.opts.type === 'radar') {
      return findRadarChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.radarData, this.opts.categories.length);
    } else if (this.opts.type === 'funnel') {
      return findFunnelChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.funnelData);
    } else if (this.opts.type === 'map') {
      return findMapChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts);
    } else if (this.opts.type === 'word') {
      return findWordChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.wordCloudData);
    } else {
      return findCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.calPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));
    }
  }
  return -1;
};

Charts.prototype.getLegendDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    return findLegendIndex({
      x: _touches$.x,
      y: _touches$.y },
    this.opts.chartData.legendData);
  }
  return -1;
};

Charts.prototype.touchLegend = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    var index = this.getLegendDataIndex(e);
    if (index >= 0) {
      this.opts.series[index].show = !this.opts.series[index].show;
      this.opts.animation = option.animation ? true : false;
      this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
    }
  }

};

Charts.prototype.showToolTip = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (!touches) {
    console.log("touchError");
  }
  var _touches$ = getTouches(touches, this.opts, e);
  var currentOffset = this.scrollOption.currentOffset;
  var opts = assign({}, this.opts, {
    _scrollDistance_: currentOffset,
    animation: false });

  if (this.opts.type === 'line' || this.opts.type === 'area' || this.opts.type === 'column') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getToolTipData(seriesData, this.opts.chartData.calPoints, index, this.opts.categories, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'mix') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getMixToolTipData = getMixToolTipData(seriesData, this.opts.chartData.calPoints, index, this.opts.categories, option),
        textList = _getMixToolTipData.textList,
        offset = _getMixToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'candle') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getCandleToolTipData(this.opts.series[0].data, seriesData, this.opts.chartData.calPoints,
        index, this.opts.categories, this.opts.extra.candle, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose' || this.opts.type === 'funnel') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = this.opts._series_[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.name + ': ' + seriesData.data,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: textList,
        offset: offset,
        option: option,
        index: index };

    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'map' || this.opts.type === 'word') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = this.opts._series_[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.properties.name,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: textList,
        offset: offset,
        option: option,
        index: index };

    }
    opts.updateData = false;
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'radar') {
    var index = this.getCurrentDataIndex(e);
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var textList = seriesData.map(function (item) {
          return {
            text: option.format ? option.format(item) : item.name + ': ' + item.data,
            color: item.color };

        });
        var offset = {
          x: _touches$.x,
          y: _touches$.y };

        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
};

Charts.prototype.translate = function (distance) {
  this.scrollOption = {
    currentOffset: distance,
    startTouchX: distance,
    distance: 0,
    lastMoveTime: 0 };

  var opts = assign({}, this.opts, {
    _scrollDistance_: distance,
    animation: false });

  drawCharts.call(this, this.opts.type, opts, this.config, this.context);
};

Charts.prototype.scrollStart = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  var _touches$ = getTouches(touches, this.opts, e);
  if (touches && this.opts.enableScroll === true) {
    this.scrollOption.startTouchX = _touches$.x;
  }
};

Charts.prototype.scroll = function (e) {
  if (this.scrollOption.lastMoveTime === 0) {
    this.scrollOption.lastMoveTime = Date.now();
  }
  var Limit = this.opts.extra.touchMoveLimit || 20;
  var currMoveTime = Date.now();
  var duration = currMoveTime - this.scrollOption.lastMoveTime;
  if (duration < Math.floor(1000 / Limit)) return;
  this.scrollOption.lastMoveTime = currMoveTime;
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches && this.opts.enableScroll === true) {
    var _touches$ = getTouches(touches, this.opts, e);
    var _distance;
    _distance = _touches$.x - this.scrollOption.startTouchX;
    var currentOffset = this.scrollOption.currentOffset;
    var validDistance = calValidDistance(this, currentOffset + _distance, this.opts.chartData, this.config, this.opts);
    this.scrollOption.distance = _distance = validDistance - currentOffset;
    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset + _distance,
      animation: false });

    drawCharts.call(this, opts.type, opts, this.config, this.context);
    return currentOffset + _distance;
  }
};

Charts.prototype.scrollEnd = function (e) {
  if (this.opts.enableScroll === true) {
    var _scrollOption = this.scrollOption,
    currentOffset = _scrollOption.currentOffset,
    distance = _scrollOption.distance;
    this.scrollOption.currentOffset = currentOffset + distance;
    this.scrollOption.distance = 0;
  }
};
if ( true && typeof module.exports === "object") {
  module.exports = Charts;
  //export default Charts;//建议使用nodejs的module导出方式，如报错请使用export方式导出
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */
/*!******************************************************************************!*\
  !*** E:/公司项目/Nfslink/main.js?{"page":"pages%2Fclassdetails%2Fclassdetails"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _classdetails = _interopRequireDefault(__webpack_require__(/*! ./pages/classdetails/classdetails.vue */ 51));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_classdetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/*!************************************************************************!*\
  !*** E:/公司项目/Nfslink/main.js?{"page":"pages%2Fforgetpwd%2Fforgetpwd"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _forgetpwd = _interopRequireDefault(__webpack_require__(/*! ./pages/forgetpwd/forgetpwd.vue */ 59));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_forgetpwd.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/*!**********************************************************************!*\
  !*** E:/公司项目/Nfslink/main.js?{"page":"pages%2Fhomework%2Fhomework"} ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _homework = _interopRequireDefault(__webpack_require__(/*! ./pages/homework/homework.vue */ 65));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_homework.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map