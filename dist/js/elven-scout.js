/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Animation =
/*#__PURE__*/
function (_Sprite) {
  _inherits(Animation, _Sprite);

  function Animation(_ref) {
    var _this;

    var imageName = _ref.imageName,
        frames = _ref.frames,
        speed = _ref.speed,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? true : _ref$autorun,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, {
      imageName: imageName,
      sourceX: frames[0].sx,
      sourceY: frames[0].sy,
      width: width,
      height: height
    }));
    _this.frames = frames;
    _this.speed = speed;
    _this.repeat = repeat;
    _this.running = autorun;
    _this.lastTime = 0;
    _this.currentFrame = 0;
    _this.totalFrames = _this.frames.length;
    return _this;
  }

  _createClass(Animation, [{
    key: "setFrame",
    value: function setFrame(index) {
      this.currentFrame = index;
      this.sourceX = this.frames[index].sx;
      this.sourceY = this.frames[index].sy;
    }
  }, {
    key: "run",
    value: function run() {
      if (!this.running) {
        this.setFrame(0);
        this.running = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    } //метод определения следующего фрейма или остановки анимации

  }, {
    key: "nextFrame",
    value: function nextFrame() {
      if (this.currentFrame + 1 == this.totalFrames) {
        if (this.repeat) {
          this.setFrame(0);
          return;
        }

        this.stop();
        return;
      }

      this.setFrame(this.currentFrame + 1);
    } //метод обновления анимации в цикли

  }, {
    key: "update",
    value: function update(time) {
      if (!this.running) {
        return;
      }

      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      }

      if (time - this.lastTime > this.speed) {
        this.nextFrame();
        this.lastTime = time;
      }
    }
  }]);

  return Animation;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _character_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-sheet */ "./src/character-sheet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Body =
/*#__PURE__*/
function () {
  function Body(_ref) {
    var _this = this;

    var imageName = _ref.imageName,
        speed = _ref.speed;

    _classCallCheck(this, Body);

    this.x = 0;
    this.y = 0;
    this.speed = speed;
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]("down", 0);
    this.lastTime = 0;
    this.animations = {};
    var animationSheet = new _character_sheet__WEBPACK_IMPORTED_MODULE_1__["CharacterSheet"]({
      imageName: imageName
    });
    "walk_down,walk_up,walk_left,walk_right".split(",").forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name);
    });
    this.stand("down");
  }

  _createClass(Body, [{
    key: "walk",
    value: function walk(direction) {
      this.velocity.setDirection(direction, this.speed);
      this.view = this.animations["walk_" + direction];
      this.view.run();
    }
  }, {
    key: "stand",
    value: function stand(direction) {
      this.velocity.setDirection(direction, 0);
      this.view = this.animations["walk_" + direction];
      this.view.stop();
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      }

      this.x += (time - this.lastTime) * (this.velocity.x / 1000);
      this.y += (time - this.lastTime) * (this.velocity.y / 1000);
      this.lastTime = time;
      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y));
      this.view.update(time);
    }
  }]);

  return Body;
}();

/***/ }),

/***/ "./src/character-sheet.js":
/*!********************************!*\
  !*** ./src/character-sheet.js ***!
  \********************************/
/*! exports provided: CharacterSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheet", function() { return CharacterSheet; });
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite-sheet */ "./src/sprite-sheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var CharacterSheet =
/*#__PURE__*/
function (_SpriteSheet) {
  _inherits(CharacterSheet, _SpriteSheet);

  function CharacterSheet(_ref) {
    var _this;

    var imageName = _ref.imageName;

    _classCallCheck(this, CharacterSheet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterSheet).call(this, {
      imageName: imageName,
      imageWidth: 832,
      imageHeight: 1344
    }));
    _this.sequences = _this.getSequences();
    return _this;
  }

  _createClass(CharacterSheet, [{
    key: "getSequences",
    value: function getSequences() {
      var data = __webpack_require__(/*! ./maps/animations */ "./src/maps/animations.json");

      var sequences = {};
      data.layers.forEach(function (layer) {
        sequences[layer.name] = layer.data.filter(function (i) {
          return i > 0;
        });
      });
      return sequences;
    }
  }, {
    key: "getAnimation",
    value: function getAnimation(name) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return _get(_getPrototypeOf(CharacterSheet.prototype), "getAnimation", this).call(this, this.sequences[name], speed, repeat, autorun);
    }
  }]);

  return CharacterSheet;
}(_sprite_sheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"]);

/***/ }),

/***/ "./src/control-state.js":
/*!******************************!*\
  !*** ./src/control-state.js ***!
  \******************************/
/*! exports provided: ControlState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlState", function() { return ControlState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ControlState =
/*#__PURE__*/
function () {
  function ControlState() {
    var _this = this;

    _classCallCheck(this, ControlState);

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.fire = false;
    this.keyMap = new Map([[37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'fire']]);
    document.addEventListener('keydown', function (event) {
      return _this.update(event, true);
    });
    document.addEventListener('keyup', function (event) {
      return _this.update(event, false);
    });
  }

  _createClass(ControlState, [{
    key: "update",
    value: function update(event, pressed) {
      if (this.keyMap.has(event.keyCode)) {
        event.preventDefault();
        event.stopPropagation();
        this[this.keyMap.get(event.keyCode)] = pressed;
        console.log(this);
      }
    }
  }]);

  return ControlState;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/loading */ "./src/scenes/loading.js");
/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/menu */ "./src/scenes/menu.js");
/* harmony import */ var _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/game-level */ "./src/scenes/game-level.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _control_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-state */ "./src/control-state.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game =
/*#__PURE__*/
function () {
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height;

    _classCallCheck(this, Game);

    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](width, height);
    this.screen.loadImages({
      orc: 'img/orc.png',
      player: 'img/player.png',
      title: 'img/title.jpg',
      tiles: 'img/tiles.png'
    });
    this.control = new _control_state__WEBPACK_IMPORTED_MODULE_5__["ControlState"]();
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this),
      gameLevel: new _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__["GameLevel"](this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].LOADED:
          return this.scenes.menu;

        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].START_GAME:
          return this.scenes.gameLevel;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].WORKING) {
        this.currentScene = this.changeScene(this.currentScene.status);
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/image-loader.js":
/*!*****************************!*\
  !*** ./src/image-loader.js ***!
  \*****************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoader =
/*#__PURE__*/
function () {
  function ImageLoader(imageFiles) {
    _classCallCheck(this, ImageLoader);

    this.imageFiles = imageFiles;
    this.images = {};
  } //основной метод собирает промисы в массив


  _createClass(ImageLoader, [{
    key: "load",
    value: function load() {
      var promises = [];

      for (var name in this.imageFiles) {
        promises.push(this.loadImage(name, this.imageFiles[name]));
      }

      return Promise.all(promises);
    } // метод для загрузки одной картинки

  }, {
    key: "loadImage",
    value: function loadImage(name, src) {
      var _this = this;

      return new Promise(function (resolve) {
        var image = new Image();
        _this.images[name] = image;

        image.onload = function () {
          return resolve(name);
        };

        image.src = src;
      });
    }
  }]);

  return ImageLoader;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  var elvenScout = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  elvenScout.run();
};

/***/ }),

/***/ "./src/maps/animations.json":
/*!**********************************!*\
  !*** ./src/maps/animations.json ***!
  \**********************************/
/*! exports provided: height, layers, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"height":1,"layers":[{"data":[1,2,3,4,5,6,7,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[15,16,17,18,19,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[27,28,29,30,31,32,33,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[40,41,42,43,44,45,46,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[53,54,55,56,57,58,59,60,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[66,67,68,69,70,71,72,73,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[79,80,81,82,83,84,85,86,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[92,93,94,95,96,97,98,99,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[105,106,107,108,109,110,111,112,113,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[118,119,120,121,122,123,124,125,126,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[131,132,133,134,135,136,137,138,139,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[144,145,146,147,148,149,150,151,152,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[157,158,159,160,161,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[170,171,172,173,174,175,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[183,184,185,186,187,188,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[196,197,198,199,200,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[209,210,211,212,213,214,215,216,217,218,219,220,221,0,0,0,0,0,0,0],"height":1,"name":"shoot_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[222,223,224,225,226,227,228,229,230,231,232,233,234,0,0,0,0,0,0,0],"height":1,"name":"shoot_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[235,236,237,238,239,240,241,242,243,244,245,246,247,0,0,0,0,0,0,0],"height":1,"name":"shoot_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[248,249,250,251,252,253,254,255,256,257,258,259,260,0,0,0,0,0,0,0],"height":1,"name":"shoot_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[261,262,263,264,265,266,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"death","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0}],"nextobjectid":1,"orientation":"orthogonal","renderorder":"left-up","tiledversion":"1.0.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"../../resources/playertiles.tsx"}],"tilewidth":64,"type":"map","version":1,"width":20};

/***/ }),

/***/ "./src/maps/level1.json":
/*!******************************!*\
  !*** ./src/maps/level1.json ***!
  \******************************/
/*! exports provided: height, layers, nextobjectid, orientation, properties, propertytypes, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"height":20,"layers":[{"data":[1,22,22,22,1,1,1,16,45,45,45,45,45,45,1,18,1,1,1,1,1,22,22,22,1,1,1,16,45,45,45,45,45,45,1,18,1,1,1,1,1,22,22,22,1,1,1,16,1,1,1,1,1,1,1,18,1,1,1,1,1,22,22,22,1,1,1,26,27,27,27,27,17,27,27,28,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,22,22,22,22,22,22,22,22,22,22,1,1,1,1,1,1,1,22,22,22,22,22,22,22,22,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,34,34,34,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,34,34,34,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"height":20,"name":"layer1","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[7,21,0,23,7,0,7,3,11,12,12,12,12,13,0,2,7,7,7,7,7,21,0,23,0,0,7,3,31,32,32,32,32,33,4,0,2,2,2,7,7,21,0,23,7,0,7,5,4,2,3,0,0,3,3,5,2,7,2,7,7,21,0,23,0,0,7,0,0,0,0,0,0,0,0,0,2,2,2,7,7,21,0,23,7,7,2,2,2,2,2,21,0,23,2,4,2,2,2,7,7,21,0,23,0,0,0,0,0,0,0,21,0,23,0,6,6,6,4,7,7,21,5,23,6,6,6,6,6,6,5,21,0,23,0,6,5,6,4,7,7,21,0,24,12,12,12,12,12,12,12,25,0,23,0,6,6,6,4,7,7,31,32,32,32,32,32,32,32,32,32,32,32,33,2,0,0,0,4,7,7,7,7,0,7,7,7,7,7,7,7,0,0,0,0,11,12,12,13,7,6,2,0,0,0,0,0,0,0,0,0,0,0,2,0,21,14,15,23,7,7,0,0,2,0,7,0,2,7,0,0,7,0,0,0,21,24,25,23,7,6,0,0,7,0,0,0,0,0,0,0,0,0,7,0,31,32,32,33,7,7,7,7,0,0,0,2,0,0,7,0,11,12,12,13,6,0,0,0,6,6,6,6,0,6,6,6,0,6,6,3,31,32,32,33,0,0,0,6,7,6,3,0,0,6,0,0,0,6,6,0,7,0,0,3,0,6,0,0,7,6,6,2,0,6,0,6,0,0,0,0,0,0,7,4,11,12,12,12,12,6,6,6,3,3,3,6,0,6,6,0,0,0,0,0,31,32,32,32,32,5,2,6,6,3,3,3,0,0,7,7,7,7,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],"height":20,"name":"layer2","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"draworder":"topdown","name":"hitboxes","objects":[{"height":1279,"id":1,"name":"","rotation":0,"type":"","visible":true,"width":61,"x":1,"y":1},{"height":59,"id":4,"name":"","rotation":0,"type":"","visible":true,"width":1276,"x":1,"y":1218},{"height":65,"id":5,"name":"","rotation":0,"type":"","visible":true,"width":127,"x":129,"y":1153},{"height":57,"id":6,"name":"","rotation":0,"type":"","visible":true,"width":117,"x":67,"y":1090},{"height":55,"id":7,"name":"","rotation":0,"type":"","visible":true,"width":52,"x":71,"y":1027},{"height":184,"id":8,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":257,"y":899},{"height":54,"id":9,"name":"","rotation":0,"type":"","visible":true,"width":117,"x":323,"y":900},{"height":118,"id":11,"name":"","rotation":0,"type":"","visible":true,"width":122,"x":515,"y":899},{"height":63,"id":12,"name":"","rotation":0,"type":"","visible":true,"width":61,"x":577,"y":831},{"height":62,"id":13,"name":"","rotation":0,"type":"","visible":true,"width":63,"x":705,"y":961},{"height":60,"id":14,"name":"","rotation":0,"type":"","visible":true,"width":62,"x":834,"y":1026},{"height":58,"id":15,"name":"","rotation":0,"type":"","visible":true,"width":121,"x":515,"y":1090},{"height":59,"id":16,"name":"","rotation":0,"type":"","visible":true,"width":247,"x":579,"y":1154},{"height":120,"id":17,"name":"","rotation":0,"type":"","visible":true,"width":55,"x":387,"y":1027},{"height":120,"id":18,"name":"","rotation":0,"type":"","visible":true,"width":123,"x":66,"y":834},{"height":60,"id":19,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":193,"y":771},{"height":63,"id":20,"name":"","rotation":0,"type":"","visible":true,"width":62,"x":321,"y":703},{"height":62,"id":21,"name":"","rotation":0,"type":"","visible":true,"width":57,"x":514,"y":706},{"height":58,"id":22,"name":"","rotation":0,"type":"","visible":true,"width":56,"x":707,"y":705},{"height":61,"id":23,"name":"","rotation":0,"type":"","visible":true,"width":58,"x":835,"y":769},{"height":58,"id":24,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":960,"y":835},{"height":54,"id":25,"name":"","rotation":0,"type":"","visible":true,"width":50,"x":1031,"y":965},{"height":55,"id":26,"name":"","rotation":0,"type":"","visible":true,"width":56,"x":1152,"y":899},{"height":63,"id":27,"name":"","rotation":0,"type":"","visible":true,"width":58,"x":1218,"y":1151},{"height":1019,"id":28,"name":"","rotation":0,"type":"","visible":true,"width":57,"x":1219,"y":4},{"height":183,"id":29,"name":"","rotation":0,"type":"","visible":true,"width":183,"x":964,"y":324},{"height":64,"id":30,"name":"","rotation":0,"type":"","visible":true,"width":193,"x":1024,"y":-1},{"height":60,"id":31,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":1089,"y":127},{"height":130,"id":32,"name":"","rotation":0,"type":"","visible":true,"width":11,"x":1016,"y":63},{"height":64,"id":33,"name":"","rotation":0,"type":"","visible":true,"width":381,"x":385,"y":192},{"height":62,"id":34,"name":"","rotation":0,"type":"","visible":true,"width":186,"x":833,"y":190},{"height":188,"id":35,"name":"","rotation":0,"type":"","visible":true,"width":64,"x":384,"y":1},{"height":61,"id":36,"name":"","rotation":0,"type":"","visible":true,"width":120,"x":259,"y":257},{"height":61,"id":37,"name":"","rotation":0,"type":"","visible":true,"width":61,"x":255,"y":129},{"height":60,"id":38,"name":"","rotation":0,"type":"","visible":true,"width":58,"x":259,"y":2},{"height":56,"id":39,"name":"","rotation":0,"type":"","visible":true,"width":371,"x":262,"y":387},{"height":61,"id":40,"name":"","rotation":0,"type":"","visible":true,"width":125,"x":63,"y":577},{"height":65,"id":41,"name":"","rotation":0,"type":"","visible":true,"width":446,"x":257,"y":578}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0}],"nextobjectid":42,"orientation":"orthogonal","properties":{"name":"level1"},"propertytypes":{"name":"string"},"renderorder":"left-up","tiledversion":"1.0.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"../../resources/tileset.tsx"}],"tilewidth":64,"type":"map","version":1,"width":20};

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Player =
/*#__PURE__*/
function (_Body) {
  _inherits(Player, _Body);

  function Player(control) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, {
      imageName: "player",
      speed: 50
    }));
    _this.control = control;
    return _this;
  }

  _createClass(Player, [{
    key: "update",
    value: function update(time) {
      if (this.control.up) {
        this.walk("up");
      } else if (this.control.down) {
        this.walk("down");
      } else if (this.control.left) {
        this.walk("left");
      } else if (this.control.right) {
        this.walk("right");
      } else {
        this.stand(this.velocity.direction);
      }

      _get(_getPrototypeOf(Player.prototype), "update", this).call(this, time);
    }
  }]);

  return Player;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene =
/*#__PURE__*/
function () {
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
    this.status = this.constructor.WORKING;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.status = this.constructor.WORKING;
    }
  }, {
    key: "finish",
    value: function finish(status) {
      this.status = status;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }], [{
    key: "WORKING",
    get: function get() {
      return 'WORKING';
    }
  }, {
    key: "LOADED",
    get: function get() {
      return 'LOADED';
    }
  }, {
    key: "START_GAME",
    get: function get() {
      return 'START_GAME';
    }
  }, {
    key: "GAME_OVER",
    get: function get() {
      return 'GAME_OVER';
    }
  }, {
    key: "GAME_WIN",
    get: function get() {
      return 'GAME_WIN';
    }
  }, {
    key: "FINISHED",
    get: function get() {
      return 'FINISHED';
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/scenes/game-level.js":
/*!**********************************!*\
  !*** ./src/scenes/game-level.js ***!
  \**********************************/
/*! exports provided: GameLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLevel", function() { return GameLevel; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
/* harmony import */ var _character_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../character-sheet */ "./src/character-sheet.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ "./src/player.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GameLevel =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameLevel, _Scene);

  function GameLevel(game) {
    var _this;

    _classCallCheck(this, GameLevel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameLevel).call(this, game));
    _this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    _this.tree = _this.tiles.getSprite(7);

    _this.tree.setXY(10, 10);

    _this.orcTiles = new _character_sheet__WEBPACK_IMPORTED_MODULE_2__["CharacterSheet"]({
      imageName: "orc"
    });
    _this.orc = _this.orcTiles.getAnimation("walk_down");

    _this.orc.setXY(100, 10);

    _this.player = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](_this.game.control);
    _this.player.x = 100;
    _this.player.y = 100;
    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      var mapData = __webpack_require__(/*! ../maps/level1 */ "./src/maps/level1.json");

      this.map = this.game.screen.createMap('level1', mapData, this.tiles);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.orc.update(time);
      this.player.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map); // this.game.screen.drawSprite(this.tree);

      this.game.screen.drawSprite(this.orc);
      this.game.screen.drawSprite(this.player.view);

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);
    }
  }]);

  return GameLevel;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 //

var Loading =
/*#__PURE__*/
function (_Scene) {
  _inherits(Loading, _Scene);

  function Loading(game) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, game));
    _this.loadedAt = 0;
    return _this;
  }

  _createClass(Loading, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Loading.prototype), "init", this).call(this);

      this.loadedAt = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {
        this.loadedAt = time;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].LOADED);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.print(50, 70, "Loading...");

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/menu.js":
/*!****************************!*\
  !*** ./src/scenes/menu.js ***!
  \****************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Menu =
/*#__PURE__*/
function (_Scene) {
  _inherits(Menu, _Scene);

  function Menu(game) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, game));
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Menu.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.game.control.fire) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.drawImage(0, 0, 'title');
      this.game.screen.print(250, 500, 'Нажмите пробел');

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-loader */ "./src/image-loader.js");
/* harmony import */ var _tile_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile-map */ "./src/tile-map.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Screen =
/*#__PURE__*/
function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
    this.images = {};
    this.isImagesLoaded = false;
  }

  _createClass(Screen, [{
    key: "loadImages",
    value: function loadImages(imageFiles) {
      var _this = this;

      var loader = new _image_loader__WEBPACK_IMPORTED_MODULE_0__["ImageLoader"](imageFiles);
      loader.load().then(function (names) {
        _this.images = Object.assign(_this.images, loader.images);
        _this.isImagesLoaded = true;
      });
    }
  }, {
    key: "createCanvas",
    value: function createCanvas(width, height) {
      var elements = document.getElementsByTagName('canvas');
      var canvas = elements[0] || document.createElement('canvas');
      document.body.appendChild(canvas);
      canvas.height = height;
      canvas.width = width;
      return canvas;
    }
  }, {
    key: "createMap",
    value: function createMap(name, mapData, tileset) {
      var _this2 = this;

      var mapImage = document.createElement('canvas');
      mapImage.width = mapData.width * mapData.tilewidth;
      mapImage.height = mapData.height * mapData.tileheight;
      var mapContext = mapImage.getContext('2d');
      var hitboxes = [];
      var row, col;
      mapData.layers.forEach(function (layer) {
        if (layer.type == 'tilelayer') {
          row = 0;
          col = 0;
          layer.data.forEach(function (index) {
            if (index > 0) {
              mapContext.drawImage(_this2.images[tileset.imageName], tileset.getSourceX(index), tileset.getSourceY(index), mapData.tilewidth, mapData.tileheight, col * mapData.tilewidth, row * mapData.tileheight, mapData.tilewidth, mapData.tileheight);
            }

            col++;

            if (col > mapData.width - 1) {
              col = 0;
              row++;
            }
          });
        }

        if (layer.type == 'objectgroup') {
          hitboxes.push.apply(hitboxes, _toConsumableArray(layer.objects.map(function (obj) {
            return {
              x1: obj.x,
              x2: obj.x + obj.width,
              y1: obj.y,
              y2: obj.y + obj.height
            };
          })));
        }
      });
      this.images[name] = mapImage;
      return new _tile_map__WEBPACK_IMPORTED_MODULE_1__["TileMap"]({
        imageName: name,
        sourceX: 0,
        sourceY: 0,
        width: mapImage.width,
        height: mapImage.height,
        hitboxes: hitboxes
      });
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "print",
    value: function print(x, y, text) {
      this.context.fillStyle = "#FFFFFF";
      this.context.font = "22px Georgia";
      this.context.fillText(text, x, y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(x, y, imageName) {
      this.context.drawImage(this.images[imageName], x, y);
    }
  }, {
    key: "drawSprite",
    value: function drawSprite(sprite) {
      this.context.drawImage(this.images[sprite.imageName], sprite.sourceX, sprite.sourceY, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height);
    }
  }]);

  return Screen;
}();

/***/ }),

/***/ "./src/sprite-sheet.js":
/*!*****************************!*\
  !*** ./src/sprite-sheet.js ***!
  \*****************************/
/*! exports provided: SpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return SpriteSheet; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SpriteSheet =
/*#__PURE__*/
function () {
  function SpriteSheet(_ref) {
    var imageName = _ref.imageName,
        imageWidth = _ref.imageWidth,
        imageHeight = _ref.imageHeight,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, SpriteSheet);

    this.imageName = imageName;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  } //метод создания анимации в фабрике спрайтов


  _createClass(SpriteSheet, [{
    key: "getAnimation",
    value: function getAnimation(indexes, speed) {
      var _this = this;

      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return new _animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]({
        imageName: this.imageName,
        frames: indexes.map(function (index) {
          return {
            sx: _this.getSourceX(index),
            sy: _this.getSourceY(index)
          };
        }),
        speed: speed,
        repeat: repeat,
        autorun: autorun,
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSprite",
    value: function getSprite(index) {
      return new _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
        imageName: this.imageName,
        sourceX: this.getSourceX(index),
        sourceY: this.getSourceY(index),
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSourceX",
    value: function getSourceX(index) {
      return --index * this.spriteWidth % this.imageWidth;
    }
  }, {
    key: "getSourceY",
    value: function getSourceY(index) {
      return Math.trunc(--index * this.spriteWidth / this.imageWidth) * this.spriteHeight;
    }
  }]);

  return SpriteSheet;
}();

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(_ref) {
    var imageName = _ref.imageName,
        sourceX = _ref.sourceX,
        sourceY = _ref.sourceY,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Sprite);

    this.imageName = imageName;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  }

  _createClass(Sprite, [{
    key: "setXY",
    value: function setXY(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Sprite;
}();

/***/ }),

/***/ "./src/tile-map.js":
/*!*************************!*\
  !*** ./src/tile-map.js ***!
  \*************************/
/*! exports provided: TileMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMap", function() { return TileMap; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TileMap =
/*#__PURE__*/
function (_Sprite) {
  _inherits(TileMap, _Sprite);

  function TileMap(props) {
    var _this;

    _classCallCheck(this, TileMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TileMap).call(this, props));
    _this.hitboxes = props.hitboxes || [];
    return _this;
  }

  return TileMap;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector =
/*#__PURE__*/
function () {
  function Vector(direction, speed) {
    _classCallCheck(this, Vector);

    this.setDirection(direction, speed);
  }

  _createClass(Vector, [{
    key: "setDirection",
    value: function setDirection(direction, speed) {
      this.direction = direction;
      this.speed = speed;
      this.x = 0;
      this.y = 0;

      switch (direction) {
        case 'up':
          this.y = -speed;
          break;

        case 'down':
          this.y = speed;
          break;

        case 'right':
          this.x = speed;
          break;

        case 'left':
          this.x = -speed;
          break;
      }
    }
  }]);

  return Vector;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS1sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS1zaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVjdG9yLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbiIsImltYWdlTmFtZSIsImZyYW1lcyIsInNwZWVkIiwicmVwZWF0IiwiYXV0b3J1biIsIndpZHRoIiwiaGVpZ2h0Iiwic291cmNlWCIsInN4Iiwic291cmNlWSIsInN5IiwicnVubmluZyIsImxhc3RUaW1lIiwiY3VycmVudEZyYW1lIiwidG90YWxGcmFtZXMiLCJsZW5ndGgiLCJpbmRleCIsInNldEZyYW1lIiwic3RvcCIsInRpbWUiLCJuZXh0RnJhbWUiLCJTcHJpdGUiLCJCb2R5IiwieCIsInkiLCJ2ZWxvY2l0eSIsIlZlY3RvciIsImFuaW1hdGlvbnMiLCJhbmltYXRpb25TaGVldCIsIkNoYXJhY3RlclNoZWV0Iiwic3BsaXQiLCJmb3JFYWNoIiwibmFtZSIsImdldEFuaW1hdGlvbiIsInN0YW5kIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwidmlldyIsInJ1biIsInNldFhZIiwiTWF0aCIsInRydW5jIiwidXBkYXRlIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0Iiwic2VxdWVuY2VzIiwiZ2V0U2VxdWVuY2VzIiwiZGF0YSIsInJlcXVpcmUiLCJsYXllcnMiLCJsYXllciIsImZpbHRlciIsImkiLCJTcHJpdGVTaGVldCIsIkNvbnRyb2xTdGF0ZSIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsImZpcmUiLCJrZXlNYXAiLCJNYXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXNzZWQiLCJoYXMiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiR2FtZSIsInNjcmVlbiIsIlNjcmVlbiIsImxvYWRJbWFnZXMiLCJvcmMiLCJwbGF5ZXIiLCJ0aXRsZSIsInRpbGVzIiwiY29udHJvbCIsInNjZW5lcyIsImxvYWRpbmciLCJMb2FkaW5nIiwibWVudSIsIk1lbnUiLCJnYW1lTGV2ZWwiLCJHYW1lTGV2ZWwiLCJjdXJyZW50U2NlbmUiLCJpbml0Iiwic3RhdHVzIiwiU2NlbmUiLCJMT0FERUQiLCJTVEFSVF9HQU1FIiwiV09SS0lORyIsImNoYW5nZVNjZW5lIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJJbWFnZUxvYWRlciIsImltYWdlRmlsZXMiLCJpbWFnZXMiLCJwcm9taXNlcyIsInB1c2giLCJsb2FkSW1hZ2UiLCJQcm9taXNlIiwiYWxsIiwic3JjIiwicmVzb2x2ZSIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3aW5kb3ciLCJlbHZlblNjb3V0IiwiUGxheWVyIiwid2FsayIsImdhbWUiLCJjb25zdHJ1Y3RvciIsInRyZWUiLCJnZXRTcHJpdGUiLCJvcmNUaWxlcyIsIm1hcERhdGEiLCJtYXAiLCJjcmVhdGVNYXAiLCJmaWxsIiwiZHJhd1Nwcml0ZSIsImxvYWRlZEF0IiwiaXNJbWFnZXNMb2FkZWQiLCJmaW5pc2giLCJwcmludCIsImRyYXdJbWFnZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidGlsZXNldCIsIm1hcEltYWdlIiwidGlsZXdpZHRoIiwidGlsZWhlaWdodCIsIm1hcENvbnRleHQiLCJoaXRib3hlcyIsInJvdyIsImNvbCIsInR5cGUiLCJnZXRTb3VyY2VYIiwiZ2V0U291cmNlWSIsIm9iamVjdHMiLCJvYmoiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIlRpbGVNYXAiLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dCIsImZvbnQiLCJmaWxsVGV4dCIsInNwcml0ZSIsInNwcml0ZVdpZHRoIiwic3ByaXRlSGVpZ2h0IiwiaW5kZXhlcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdI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bnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgZnJhbWVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUsIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0fSl7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6IGltYWdlTmFtZSxcclxuICAgICAgICAgICAgc291cmNlWDogZnJhbWVzWzBdLnN4LFxyXG4gICAgICAgICAgICBzb3VyY2VZOiBmcmFtZXNbMF0uc3ksXHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGF1dG9ydW47XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxGcmFtZXMgPSB0aGlzLmZyYW1lcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RnJhbWUoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN4O1xyXG4gICAgICAgIHRoaXMuc291cmNlWSA9IHRoaXMuZnJhbWVzW2luZGV4XS5zeTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKXtcclxuICAgICAgICBpZighdGhpcy5ydW5uaW5nKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpe1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy/QvNC10YLQvtC0INC+0L/RgNC10LTQtdC70LXQvdC40Y8g0YHQu9C10LTRg9GO0YnQtdCz0L4g0YTRgNC10LnQvNCwINC40LvQuCDQvtGB0YLQsNC90L7QstC60Lgg0LDQvdC40LzQsNGG0LjQuFxyXG4gICAgbmV4dEZyYW1lKCl7XHJcbiAgICAgICAgaWYoKHRoaXMuY3VycmVudEZyYW1lICsgMSkgPT0gdGhpcy50b3RhbEZyYW1lcykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnJlcGVhdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZyYW1lKDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRGcmFtZSh0aGlzLmN1cnJlbnRGcmFtZSArMSk7XHJcbiAgICB9XHJcbiAgICAvL9C80LXRgtC+0LQg0L7QsdC90L7QstC70LXQvdC40Y8g0LDQvdC40LzQsNGG0LjQuCDQsiDRhtC40LrQu9C4XHJcbiAgICB1cGRhdGUodGltZSl7XHJcbiAgICAgICAgaWYoIXRoaXMucnVubmluZyl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5sYXN0VGltZSA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSA+IHRoaXMuc3BlZWQpe1xyXG4gICAgICAgICAgICB0aGlzLm5leHRGcmFtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIi4vdmVjdG9yXCI7XHJcbmltcG9ydCB7Q2hhcmFjdGVyU2hlZXR9IGZyb20gXCIuL2NoYXJhY3Rlci1zaGVldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvZHkge1xyXG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc3BlZWR9KSB7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcihcImRvd25cIiwgMCk7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0ge307XHJcblxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblNoZWV0ID0gbmV3IENoYXJhY3RlclNoZWV0KHtpbWFnZU5hbWU6IGltYWdlTmFtZX0pO1xyXG4gICAgICAgIFwid2Fsa19kb3duLHdhbGtfdXAsd2Fsa19sZWZ0LHdhbGtfcmlnaHRcIi5zcGxpdChcIixcIikuZm9yRWFjaChuYW1lID0+e1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGFuZChcImRvd25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2FsayhkaXJlY3Rpb24pe1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW1wid2Fsa19cIiArIGRpcmVjdGlvbl07XHJcbiAgICAgICAgdGhpcy52aWV3LnJ1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YW5kKGRpcmVjdGlvbil7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCAwKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbXCJ3YWxrX1wiKyBkaXJlY3Rpb25dO1xyXG4gICAgICAgIHRoaXMudmlldy5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpe1xyXG4gICAgICAgIGlmKHRoaXMubGFzdFRpbWUgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnggKz0gKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSoodGhpcy52ZWxvY2l0eS54LzEwMDApO1xyXG4gICAgICAgIHRoaXMueSArPSAodGltZSAtIHRoaXMubGFzdFRpbWUpKih0aGlzLnZlbG9jaXR5LnkvMTAwMCk7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSwgTWF0aC50cnVuYyh0aGlzLnkpKTtcclxuICAgICAgICB0aGlzLnZpZXcudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi9zcHJpdGUtc2hlZXRcIlxyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlclNoZWV0IGV4dGVuZHMgU3ByaXRlU2hlZXQge1xyXG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZX0pIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogaW1hZ2VOYW1lLFxyXG4gICAgICAgICAgICBpbWFnZVdpZHRoOiA4MzIsXHJcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0OiAxMzQ0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXF1ZW5jZXMgPSB0aGlzLmdldFNlcXVlbmNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlcXVlbmNlcygpe1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL21hcHMvYW5pbWF0aW9ucycpO1xyXG4gICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9e307XHJcbiAgICAgICAgZGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgc2VxdWVuY2VzW2xheWVyLm5hbWVdID0gbGF5ZXIuZGF0YS5maWx0ZXIoaSA9PiBpPjApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzZXF1ZW5jZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5pbWF0aW9uKG5hbWUsIHNwZWVkID0xMDAsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldEFuaW1hdGlvbih0aGlzLnNlcXVlbmNlc1tuYW1lXSwgc3BlZWQsIHJlcGVhdCwgYXV0b3J1bik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ29udHJvbFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmtleU1hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbMzcsJ2xlZnQnXSxbMzksICdyaWdodCddLFszOCwndXAnXSxbNDAsJ2Rvd24nXSxbMzIsJ2ZpcmUnXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGV2ZW50LCB0cnVlKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGV2ZW50LCBmYWxzZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShldmVudCwgcHJlc3NlZCl7XHJcbiAgICAgICAgaWYodGhpcy5rZXlNYXAuaGFzKGV2ZW50LmtleUNvZGUpKXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXNbdGhpcy5rZXlNYXAuZ2V0KGV2ZW50LmtleUNvZGUpXSA9IHByZXNzZWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gXCIuL3NjcmVlblwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIi4vc2NlbmVzL2xvYWRpbmdcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL3NjZW5lcy9tZW51XCI7XHJcbmltcG9ydCB7IEdhbWVMZXZlbCB9IGZyb20gXCIuL3NjZW5lcy9nYW1lLWxldmVsXCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgQ29udHJvbFN0YXRlIH0gZnJvbSBcIi4vY29udHJvbC1zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3Ioe3dpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDB9ID0ge30pe1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnNjcmVlbi5sb2FkSW1hZ2VzKHtcclxuICAgICAgICAgICAgb3JjOiAnaW1nL29yYy5wbmcnLFxyXG4gICAgICAgICAgICBwbGF5ZXI6ICdpbWcvcGxheWVyLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnaW1nL3RpdGxlLmpwZycsXHJcbiAgICAgICAgICAgIHRpbGVzOiAnaW1nL3RpbGVzLnBuZydcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbFN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxyXG4gICAgICAgICAgICBtZW51OiBuZXcgTWVudSh0aGlzKSxcclxuICAgICAgICAgICAgZ2FtZUxldmVsOiBuZXcgR2FtZUxldmVsKHRoaXMpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzLmxvYWRpbmc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNjZW5lKHN0YXR1cykge1xyXG4gICAgICAgIHN3aXRjaChzdGF0dXMpe1xyXG4gICAgICAgICAgICBjYXNlIFNjZW5lLkxPQURFRDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgICAgICAgICBjYXNlIFNjZW5lLlNUQVJUX0dBTUU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMuZ2FtZUxldmVsO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZyYW1lKHRpbWUpIHtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgIT0gU2NlbmUuV09SS0lORyl7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICAgIH1cclxuICAgIHJ1bigpe1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlRmlsZXMpe1xyXG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlcyA9IGltYWdlRmlsZXM7XHJcbiAgICAgICAgdGhpcy5pbWFnZXMgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIC8v0L7RgdC90L7QstC90L7QuSDQvNC10YLQvtC0INGB0L7QsdC40YDQsNC10YIg0L/RgNC+0LzQuNGB0Ysg0LIg0LzQsNGB0YHQuNCyXHJcbiAgICBsb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmltYWdlRmlsZXMpe1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZEltYWdlKG5hbWUsIHRoaXMuaW1hZ2VGaWxlc1tuYW1lXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINC80LXRgtC+0LQg0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0L7QtNC90L7QuSDQutCw0YDRgtC40L3QutC4XHJcbiAgICBsb2FkSW1hZ2UobmFtZSwgc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gaW1hZ2U7XHJcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobmFtZSk7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbHZlblNjb3V0ID0gbmV3IEdhbWUoKTtcclxuICAgIGVsdmVuU2NvdXQucnVuKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IEJvZHl9IGZyb20gXCIuL2JvZHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBCb2R5IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wpe1xyXG4gICAgICAgIHN1cGVyKHtpbWFnZU5hbWU6IFwicGxheWVyXCIsIHNwZWVkOiA1MH0pO1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udHJvbC51cCl7XHJcbiAgICAgICAgICAgIHRoaXMud2FsayhcInVwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuY29udHJvbC5kb3duKXtcclxuICAgICAgICAgICAgdGhpcy53YWxrKFwiZG93blwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmNvbnRyb2wubGVmdCl7XHJcbiAgICAgICAgICAgIHRoaXMud2FsayhcImxlZnRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5jb250cm9sLnJpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy53YWxrKFwicmlnaHRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0YW5kKHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IFdPUktJTkcoKSB7IHJldHVybiAnV09SS0lORyc7IH1cclxuICAgIHN0YXRpYyBnZXQgTE9BREVEKCkgeyByZXR1cm4gJ0xPQURFRCc7IH1cclxuICAgIHN0YXRpYyBnZXQgU1RBUlRfR0FNRSgpIHsgcmV0dXJuICdTVEFSVF9HQU1FJzsgfVxyXG4gICAgc3RhdGljIGdldCBHQU1FX09WRVIoKSB7IHJldHVybiAnR0FNRV9PVkVSJzsgfVxyXG4gICAgc3RhdGljIGdldCBHQU1FX1dJTigpIHsgcmV0dXJuICdHQU1FX1dJTic7IH1cclxuICAgIHN0YXRpYyBnZXQgRklOSVNIRUQoKSB7IHJldHVybiAnRklOSVNIRUQnOyB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaChzdGF0dXMpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKHRpbWUpe1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4uL3Nwcml0ZS1zaGVldFwiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gXCIuLi9jaGFyYWN0ZXItc2hlZXRcIjtcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9wbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLnRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxyXG4gICAgICAgICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0OiA2NDBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRyZWUgPSB0aGlzLnRpbGVzLmdldFNwcml0ZSg3KTtcclxuICAgICAgICB0aGlzLnRyZWUuc2V0WFkoMTAsMTApO1xyXG4gICAgICAgIHRoaXMub3JjVGlsZXMgPSBuZXcgQ2hhcmFjdGVyU2hlZXQoe2ltYWdlTmFtZTogXCJvcmNcIn0pO1xyXG4gICAgICAgIHRoaXMub3JjID0gdGhpcy5vcmNUaWxlcy5nZXRBbmltYXRpb24oXCJ3YWxrX2Rvd25cIik7XHJcbiAgICAgICAgdGhpcy5vcmMuc2V0WFkoMTAwLDEwKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZ2FtZS5jb250cm9sKTtcclxuICAgICAgICB0aGlzLnBsYXllci54ID0gMTAwO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnkgPSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgICAgICBjb25zdCBtYXBEYXRhID0gcmVxdWlyZSgnLi4vbWFwcy9sZXZlbDEnKTtcclxuICAgICAgICB0aGlzLm1hcCA9IHRoaXMuZ2FtZS5zY3JlZW4uY3JlYXRlTWFwKCdsZXZlbDEnLCBtYXBEYXRhLCB0aGlzLnRpbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSl7XHJcbiAgICAgICAgdGhpcy5vcmMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSl7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMubWFwKTtcclxuICAgICAgICAvLyB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy50cmVlKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5vcmMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnBsYXllci52aWV3KTtcclxuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG4vL1xyXG5leHBvcnQgY2xhc3MgTG9hZGluZyBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpe1xyXG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgPT0gMCAmJiB0aGlzLmdhbWUuc2NyZWVuLmlzSW1hZ2VzTG9hZGVkID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZEF0ID0gdGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCAhPSAwICYmICh0aW1lIC0gdGhpcy5sb2FkZWRBdCkgPiA1MDApe1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbCgnIzAwMDAwMCcpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoNTAsNzAsXCJMb2FkaW5nLi4uXCIpXHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpe1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZS5jb250cm9sLmZpcmUpe1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsMCwndGl0bGUnKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDI1MCw1MDAsICfQndCw0LbQvNC40YLQtSDQv9GA0L7QsdC10LsnKVxyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSBcIi4vaW1hZ2UtbG9hZGVyXCI7XHJcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tIFwiLi90aWxlLW1hcFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSW1hZ2VzKGltYWdlRmlsZXMpe1xyXG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBJbWFnZUxvYWRlcihpbWFnZUZpbGVzKTtcclxuICAgICAgICBsb2FkZXIubG9hZCgpLnRoZW4oKG5hbWVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzPSBPYmplY3QuYXNzaWduKHRoaXMuaW1hZ2VzLCBsb2FkZXIuaW1hZ2VzKTtcclxuICAgICAgICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCl7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpO1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBlbGVtZW50c1swXSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1hcChuYW1lLCBtYXBEYXRhLCB0aWxlc2V0KXtcclxuICAgICAgICBjb25zdCBtYXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIG1hcEltYWdlLndpZHRoID0gbWFwRGF0YS53aWR0aCAqIG1hcERhdGEudGlsZXdpZHRoO1xyXG4gICAgICAgIG1hcEltYWdlLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0ICogbWFwRGF0YS50aWxlaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IG1hcENvbnRleHQgPSBtYXBJbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnN0IGhpdGJveGVzID0gW107XHJcbiAgICAgICAgbGV0IHJvdywgY29sO1xyXG4gICAgICAgIG1hcERhdGEubGF5ZXJzLmZvckVhY2goIGxheWVyID0+IHtcclxuICAgICAgICAgICAgaWYobGF5ZXIudHlwZSA9PSAndGlsZWxheWVyJykge1xyXG4gICAgICAgICAgICAgICAgcm93ID0gMDtcclxuICAgICAgICAgICAgICAgIGNvbCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXllci5kYXRhLmZvckVhY2goaW5kZXggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3RpbGVzZXQuaW1hZ2VOYW1lXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVzZXQuZ2V0U291cmNlWChpbmRleCksIHRpbGVzZXQuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sICogbWFwRGF0YS50aWxld2lkdGgsIHJvdyAqIG1hcERhdGEudGlsZWhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbD4obWFwRGF0YS53aWR0aCAtIDEpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihsYXllci50eXBlID09ICdvYmplY3Rncm91cCcpe1xyXG4gICAgICAgICAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5sYXllci5vYmplY3RzLm1hcChvYmogPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICB4MTogb2JqLngsIHgyOiBvYmoueCArIG9iai53aWR0aCwgeTE6IG9iai55LCB5Mjogb2JqLnkgKyBvYmouaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gbWFwSW1hZ2U7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUaWxlTWFwKHtcclxuICAgICAgICAgICAgaW1hZ2VOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBzb3VyY2VYOiAwLFxyXG4gICAgICAgICAgICBzb3VyY2VZOiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogbWFwSW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogbWFwSW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICAgICBoaXRib3hlczogaGl0Ym94ZXNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLDAsdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KHgseSwgdGV4dCl7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiI0ZGRkZGRlwiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMnB4IEdlb3JnaWFcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQodGV4dCwgeCx5KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SW1hZ2UoeCx5LCBpbWFnZU5hbWUpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbaW1hZ2VOYW1lXSx4LHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdTcHJpdGUoc3ByaXRlKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxyXG4gICAgICAgICAgICBzcHJpdGUuc291cmNlWCwgc3ByaXRlLnNvdXJjZVksIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodCxcclxuICAgICAgICAgICAgc3ByaXRlLngsIHNwcml0ZS55LCBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZVNoZWV0IHtcclxuICAgIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWUsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCBzcHJpdGVXaWR0aCA9IDY0LCBzcHJpdGVIZWlnaHQgPSA2NH0pe1xyXG4gICAgICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IGltYWdlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlV2lkdGggPSBzcHJpdGVXaWR0aDtcclxuICAgICAgICB0aGlzLnNwcml0ZUhlaWdodCA9IHNwcml0ZUhlaWdodDtcclxuICAgIH1cclxuICAgIC8v0LzQtdGC0L7QtCDRgdC+0LfQtNCw0L3QuNGPINCw0L3QuNC80LDRhtC40Lgg0LIg0YTQsNCx0YDQuNC60LUg0YHQv9GA0LDQudGC0L7QslxyXG4gICAgZ2V0QW5pbWF0aW9uKGluZGV4ZXMsIHNwZWVkLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYXRpb24oe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxyXG4gICAgICAgICAgICBmcmFtZXM6IGluZGV4ZXMubWFwKGluZGV4ID0+ICh7XHJcbiAgICAgICAgICAgICAgICBzeDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSwgc3k6IHRoaXMuZ2V0U291cmNlWShpbmRleClcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBzcGVlZDogc3BlZWQsXHJcbiAgICAgICAgICAgIHJlcGVhdDogcmVwZWF0LFxyXG4gICAgICAgICAgICBhdXRvcnVuOiBhdXRvcnVuLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3ByaXRlKGluZGV4KXtcclxuICAgICAgICByZXR1cm4gbmV3IFNwcml0ZSh7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXHJcbiAgICAgICAgICAgIHNvdXJjZVg6IHRoaXMuZ2V0U291cmNlWChpbmRleCksXHJcbiAgICAgICAgICAgIHNvdXJjZVk6IHRoaXMuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U291cmNlWChpbmRleCl7XHJcbiAgICAgICAgcmV0dXJuICgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgJSB0aGlzLmltYWdlV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U291cmNlWShpbmRleCl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgudHJ1bmMoKC0taW5kZXgqdGhpcy5zcHJpdGVXaWR0aCkvdGhpcy5pbWFnZVdpZHRoKSp0aGlzLnNwcml0ZUhlaWdodDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc291cmNlWCwgc291cmNlWSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjR9KXtcclxuICAgICAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcclxuICAgICAgICB0aGlzLnNvdXJjZVggPSBzb3VyY2VYO1xyXG4gICAgICAgIHRoaXMuc291cmNlWSA9IHNvdXJjZVk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRYWSh4LHkpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCBleHRlbmRzIFNwcml0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhpdGJveGVzID0gcHJvcHMuaGl0Ym94ZXMgfHwgW107XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgIFZlY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXJlY3Rpb24sIHNwZWVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCBzcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgc3BlZWQpe1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gLXNwZWVkOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBzcGVlZDsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHNwZWVkOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSAtc3BlZWQ7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=