/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"alterShipSection\": () => (/* binding */ alterShipSection),\n/* harmony export */   \"computerDisplay\": () => (/* binding */ computerDisplay),\n/* harmony export */   \"display\": () => (/* binding */ display),\n/* harmony export */   \"displayShot\": () => (/* binding */ displayShot),\n/* harmony export */   \"dragAndDrop\": () => (/* binding */ dragAndDrop),\n/* harmony export */   \"generateBoard\": () => (/* binding */ generateBoard),\n/* harmony export */   \"makeBoats\": () => (/* binding */ makeBoats),\n/* harmony export */   \"playAgain\": () => (/* binding */ playAgain),\n/* harmony export */   \"shipSunkMsg\": () => (/* binding */ shipSunkMsg),\n/* harmony export */   \"winMsg\": () => (/* binding */ winMsg)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n/* harmony import */ var _eventlisteners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventlisteners */ \"./src/eventlisteners.js\");\n/* harmony import */ var _game_end__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-end */ \"./src/game-end.js\");\n\n\n\n\nfunction generateBoard(board) {\n    const thisBoard = document.querySelector(`.${board}`)\n\n    for(let i=1; i<=100; i++) {\n        const div = document.createElement('div')\n        let a = ''\n        if(board === 'player-board'){\n            div.classList.add('player-tile')\n            a='p'\n        }\n        else {\n            div.classList.add('comp-tile')\n            a='c'\n        }\n\n        div.setAttribute('id', `${a}${i}`)\n        thisBoard.appendChild(div)\n    }\n}\n\nfunction display() {\n    const body = document.querySelector('body');\n    const container = document.createElement('div');\n    container.setAttribute('class', 'container');\n    const header = document.createElement('div');\n    header.setAttribute('class', 'header');\n    const main = document.createElement('div');\n    main.setAttribute('class', 'main');\n\n    const title = document.createElement('h1');\n    title.innerHTML = 'BATTLESHIP';\n\n    const playAgain = document.createElement('button');\n    playAgain.setAttribute('id', 'play-again');\n    playAgain.innerHTML = 'Play Again';\n\n    const dispMessage = document.createElement('div');\n    dispMessage.setAttribute('id', 'msg');\n    \n    const playerSection = document.createElement('div');\n    playerSection.setAttribute('class', 'player-section');\n    const playerBoard = document.createElement('div');\n    playerBoard.setAttribute('class', 'player-board');\n\n\n    const computerSection = document.createElement('div');\n    computerSection.setAttribute('class', 'computer-section');\n    const computerBoard = document.createElement('div');\n    computerBoard.setAttribute('class', 'computer-board');\n        \n    const shipSection = document.createElement('div');\n    shipSection.setAttribute('class', 'ship-section');\n\n    const ships = document.createElement('div');\n    ships.setAttribute('class', 'ships');\n\n    const carrier = document.createElement('div');\n    carrier.setAttribute('class', 'ship');\n    carrier.setAttribute('id', 'carrier');\n    carrier.setAttribute('draggable', 'true');\n\n    _addBoats(5, carrier, 'carrier');\n\n    const battleship = document.createElement('div');\n    battleship.setAttribute('class', 'ship');\n    battleship.setAttribute('id', 'battleship');\n    battleship.setAttribute('draggable', 'true');\n\n    _addBoats(4, battleship, 'battleship');\n        \n    const cruiser = document.createElement('div');\n    cruiser.setAttribute('class', 'ship');\n    cruiser.setAttribute('id', 'cruiser');\n    cruiser.setAttribute('draggable', 'true');\n\n    _addBoats(3, cruiser, 'cruiser');\n    \n    const submarine = document.createElement('div');\n    submarine.setAttribute('class', 'ship');\n    submarine.setAttribute('id', 'submarine');\n    submarine.setAttribute('draggable', 'true');\n\n    _addBoats(3, submarine, 'submarine');\n\n    const destroyer = document.createElement('div');\n    destroyer.setAttribute('class', 'ship');\n    destroyer.setAttribute('id', 'destroyer');\n    destroyer.setAttribute('draggable', 'true');\n\n    _addBoats(2, destroyer, 'destroyer')\n\n    const axis = document.createElement('button');\n    axis.setAttribute('class', 'axis');\n    axis.innerHTML = 'X';\n\n    ships.appendChild(carrier);\n    ships.appendChild(battleship);\n    ships.appendChild(cruiser);\n    ships.appendChild(submarine);\n    ships.appendChild(destroyer);\n    shipSection.appendChild(ships);\n    shipSection.appendChild(axis);\n       \n\n    header.appendChild(title);\n    header.appendChild(playAgain);\n    header.appendChild(dispMessage);\n    playerSection.appendChild(playerBoard);\n    computerSection.appendChild(computerBoard);\n\n    main.appendChild(playerSection);\n    main.appendChild(computerSection);\n\n    container.appendChild(header);\n    container.appendChild(main);\n    container.appendChild(shipSection);\n\n    body.appendChild(container);\n}\n\nfunction _addBoats (length, boat, name) {\n    for(let i = 0; i < length; i++) {\n        const innerBoat = document.createElement('div');\n        innerBoat.classList.add('draggable');\n        innerBoat.classList.add(`${name}`);\n\n        boat.appendChild(innerBoat);\n    }\n}\n\nfunction makeBoats() {\n    \n    const setComputerShips = (boat, array) => {\n            array.forEach(node => {\n                node.classList.add(boat);\n                node.classList.add('boat');\n                node.classList.add('draggable');\n        })\n        _pubsub__WEBPACK_IMPORTED_MODULE_0__.ps.publish('comp-set-location', {\n            boat,\n            array \n        })\n    }\n\n    const setPlayerShips = (boat) => {\n        boat.coordinates.forEach(spot => {\n            if(spot.classList.length <= 3) {\n                spot.classList.add(boat.boatName);\n                spot.classList.add('player-tile');\n            }\n        })\n    }\n\n    return {\n        setComputerShips,\n        setPlayerShips\n    }\n}\n\nfunction computerDisplay() {\n    const compBoard = document.querySelector('.computer-board')\n\n    const randomNumGenerator = (length) => {\n        let randomNum = Math.floor(Math.random() * (100-1) + 1)\n        const isVertical = Math.random()\n        const r = randomCompDisp(length)\n        let arr = []\n        if(isVertical > 0.5) {\n            arr = r.mkVertical(randomNum)\n        }\n        else {\n            arr = r.mkHorizontal(randomNum)\n        }\n\n        return arr\n    }\n\n    const randomCompDisp = (length) => {\n        let array = []\n\n        const mkVertical = (num) => {\n            const firstNum = Number(String(num)[0])\n            let endCol = firstNum + 90\n\n            for(let i=num; i<num+(length*10); i+=10) {\n                const node = document.getElementById(`c${i}`)\n                //if space is occupied by boat\n                if(node.classList.length > 2) {\n                    return randomNumGenerator(length)\n                }\n                \n                if(num.length > 2) {\n                    const secondNum = Number(String(num)[1])\n                    endCol = secondNum + 90\n                }\n                const gap = endCol - num\n                //if boat will overlap\n                if(gap <= length * 10) {\n                    return randomNumGenerator(length)\n                }\n                array.push(node)\n            }\n            return array\n        }\n        const mkHorizontal = (num) => {\n            for(let i=num; i<num+length; i++) {\n                const node = document.getElementById(`c${i}`)\n                //if space is occupied by boat\n                if(node.classList.length > 2) {\n                    return randomNumGenerator(length)\n                }\n                const nodeId = node.id\n                let endRow = parseInt(nodeId.slice(1, 2))\n                if(nodeId.length > 2) {\n                    endRow = (endRow+1)*10\n                }\n                //if boat will overlap\n                if(array.length === 0 && ((num + length) > endRow  || num % 10 === 0)) {\n                    return randomNumGenerator(length)\n                }\n                array.push(node)\n            }\n            return array\n        }\n        return {\n            array,\n            mkVertical,\n            mkHorizontal\n        }\n    }\n\n    const toggleClick = () => {\n        compBoard.classList.toggle('no-click')\n    }\n\n    return {\n        randomCompDisp,\n        toggleClick,\n        randomNumGenerator\n\n    }\n}\n\nfunction dragAndDrop() {\n    const playerBoard = document.querySelector('.player-board');\n    const ships = document.querySelectorAll('.ship');\n    const tiles = document.querySelectorAll('.player-tile');\n\n    ships.forEach(ship => {\n        ship.addEventListener('dragstart', (e) => handleDragStart(e));\n        ship.addEventListener('dragend', (e) => handleDragEnd(e));\n    })\n\n    tiles.forEach( tile => tile.addEventListener('dragleave', e => handleDragLeave(e)))\n    playerBoard.addEventListener('dragover', e => dragOverHandler(e));\n    playerBoard.addEventListener('drop', (e) => dropHandler(e, playerBoard));\n}\n\nfunction checkVertical(boat) {\n    if(boat.classList.contains('Y')) return true;\n    return false;\n}\n\nfunction handleDragStart(e) {\n    const target = e.target;\n    const children = target.children;\n    [...children].forEach(child => {\n        child.classList.add('dragging');\n        child.classList.add('placed');\n    });\n}\n\nfunction handleDragLeave(e) {\n    const dragging = document.querySelectorAll('.dragging');\n    const target = e.target;\n    const isVertical = checkVertical(dragging[0]);\n    const length = dragging.length;\n    const id = target.id.slice(1);\n\n    target.style.opacity = '1'\n\n    if(isVertical === false) {\n        for(let i = 1; i < length; i++) {\n            const selectNext = parseInt(id) + i;\n            const nextDiv = document.querySelector(`#p${selectNext}`)\n            if(nextDiv === null) return;\n            nextDiv.style.opacity = '1';\n        }\n    }\n    else if(isVertical === true) {\n        for(let i = 1; i < length; i++) {\n            const selectNext = parseInt(id) + (10*i);\n            if(selectNext > 100) return;\n            const nextDiv = document.querySelector(`#p${selectNext}`)\n            if(nextDiv === null) return;\n            nextDiv.style.opacity = '1';\n        }\n    }\n\n}\n\nfunction handleDragEnd(e) {\n    e.preventDefault();\n    const target = e.target;\n    target.style.opacity='1';\n}\n\nfunction dragOverHandler(e) {\n    //removes default state not allowing drops\n    e.preventDefault();\n    const dragging = document.querySelectorAll('.dragging');\n    const target = e.target;\n    const isVertical = checkVertical(dragging[0]);\n    const id = target.id.slice(1);\n    const length = dragging.length;\n\n    target.style.opacity = '0.4';\n\n    if(isVertical === false) {\n        for(let i=1; i<length; i++) {\n            if(isNaN(id)) return;\n            const right = parseInt(id) + i;\n            const prevNum = right - 1;\n            if(prevNum % 10 === 0 && right > 10*(1) + 1) return;\n            const highlight = document.querySelector(`#p${right}`);\n            if(highlight === null) return;\n            highlight.style.opacity = '0.4';\n        }  \n    }\n    else if(isVertical === true) {\n        for(let i=1; i<length; i++) {\n            if(isNaN(id)) return;\n            const bottom = parseInt(id) + (10 * i);\n            if(bottom > 100) return;\n            const highlight = document.querySelector(`#p${bottom}`);\n            if(highlight === null) return;\n            highlight.style.opacity = '0.4';\n        }  \n    }\n}\n\nfunction labelBoatEmpty(boatName) {\n    const boatHolder = document.querySelector(`#${boatName}`)\n    boatHolder.classList.add('empty');\n}\n\nfunction replaceChildren(e, board, vertical) {\n    const dragging = document.querySelectorAll('.dragging');\n    let target = e.target;\n    const id = target.id.slice(1);\n    const length = dragging.length;\n    const coordinates = [];\n    \n    if(vertical === false) {\n        for(let i=0; i<length; i++) {\n            const child = dragging[i];\n            child.classList.remove('dragging');\n            child.setAttribute('id', target.id);\n            coordinates.push({id: target.id});\n            const nextSibling = target.nextSibling;\n            board.replaceChild(child, target);\n            target = nextSibling;\n        }\n    }\n    else if(vertical === true) {\n        for(let i=1; i<=length; i++) {\n            const child = dragging[i-1];\n            child.classList.remove('dragging');\n            child.classList.remove('Y');\n            child.setAttribute('id', target.id);\n            coordinates.push({id: target.id});\n            const nextNode = parseInt(id) + (10*i);\n            const nextSibling = document.querySelector(`#p${nextNode}`);\n            board.replaceChild(child, target);\n            target = nextSibling;\n        }\n    }\n\n    return coordinates;\n}\n\nfunction dropHandler(e, board) {\n    e.preventDefault();\n    const dragging = document.querySelectorAll('.dragging');\n    const boat = dragging[0];\n    const name = boat.classList[1]; \n    const isVertical = checkVertical(boat);\n    \n    const target = e.target;\n    target.style.opacity = '1';\n\n    const coordinates = replaceChildren(e, board, isVertical);\n    labelBoatEmpty(name);\n\n    // keep track of number of ships within ship storing div\n    const emptyShips = document.querySelectorAll('.empty');\n  \n    const numId = boat.id;\n    const num = numId.slice(1, 3);\n\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.ps.publish('set-location', {\n        name,\n        num,\n        isVertical,\n        coordinates\n    })\n\n    if(emptyShips.length === 5) alterShipSection().isFinished();\n}\n\nfunction alterShipSection() {\n\n    const changeAxis = () => {\n        const ships = document.querySelectorAll('.ships > .ship')\n        const button = document.querySelector('.axis')\n\n        const flip = (ship) => {\n            ship.classList.toggle('vertical');\n\n            const children = ship.children;\n            [...children].forEach(child => child.classList.toggle('Y'));\n            \n            if(ship.classList.contains('vertical')) {\n                button.innerHTML = 'Y'\n            }\n            else {\n                button.innerHTML = 'X'\n            }\n        }        \n\n        ships.forEach(ship => flip(ship))\n    }\n\n    const isFinished = () => {\n        const shipSection = document.querySelector('.ship-section');\n        computerDisplay().toggleClick();\n        shipSection.style.display = 'none';\n        return getAllLocations();\n    }\n    \n    return {\n        changeAxis,\n        isFinished\n    }\n    \n}\n\nfunction getAllLocations() {\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.ps.publish('send-to-index');\n\n}\n\nfunction displayShot() {\n\n    const shotMissed = (spot) => {\n        const target = document.querySelector(`#${spot}`);\n        target.classList.add('miss');\n    }\n\n    const shotHit = (obj) => {\n        const num = obj.num; \n        const boatHit = obj.boatHit; \n        const playerBoats = obj.playerBoat;\n        boatHit.hitSpot.push(num);\n        const target = document.querySelector(`#${num}`);\n        const name = target.classList[1];\n        target.classList.add('boom');\n        shipSunkMsg().isShipSunk({ target, name, boatHit, playerBoats });\n    }\n    \n    return {\n        shotMissed,\n        shotHit\n    }\n}\n\nfunction playAgain() {\n    const main = document.querySelector('.main');\n    const container = document.querySelector('.container');\n\n    const removeMain = () => {\n        while (main.firstChild) {\n            main.removeChild(main.lastChild);\n        }\n        container.removeChild(container.lastChild);\n    }\n\n    const newMain = () => {\n\n        const playerSection = document.createElement('div');\n        playerSection.setAttribute('class', 'player-section');\n        const playerBoard = document.createElement('div');\n        playerBoard.setAttribute('class', 'player-board');\n\n        const computerSection = document.createElement('div');\n        computerSection.setAttribute('class', 'computer-section');\n        const computerBoard = document.createElement('div');\n        computerBoard.setAttribute('class', 'computer-board');\n\n        const shipSection = document.createElement('div');\n        shipSection.setAttribute('class', 'ship-section');\n\n        const ships = document.createElement('div');\n        ships.setAttribute('class', 'ships');\n\n        const carrier = document.createElement('div');\n        carrier.setAttribute('class', 'ship');\n        carrier.setAttribute('id', 'carrier');\n        carrier.setAttribute('draggable', 'true');\n\n        const battleship = document.createElement('div');\n        battleship.setAttribute('class', 'ship') ;\n        battleship.setAttribute('id', 'battleship');\n        battleship.setAttribute('draggable', 'true');\n        \n        const cruiser = document.createElement('div');\n        cruiser.setAttribute('class', 'ship');\n        cruiser.setAttribute('id', 'cruiser');\n        cruiser.setAttribute('draggable', 'true');\n\n        const submarine = document.createElement('div');\n        submarine.setAttribute('class', 'ship');\n        submarine.setAttribute('id', 'submarine');\n        submarine.setAttribute('draggable', 'true');\n\n        const destroyer = document.createElement('div');\n        destroyer.setAttribute('class', 'ship');\n        destroyer.setAttribute('id', 'destroyer');\n        destroyer.setAttribute('draggable', 'true');\n\n        _addBoats(5, carrier, 'carrier');\n        _addBoats(4, battleship, 'battleship');\n        _addBoats(3, submarine, 'submarine');\n        _addBoats(3, cruiser, 'cruiser');\n        _addBoats(2, destroyer, 'destroyer');\n\n\n        const axis = document.createElement('button');\n        axis.setAttribute('class', 'axis');\n        axis.innerHTML = 'X';\n\n        ships.appendChild(carrier);\n        ships.appendChild(battleship);\n        ships.appendChild(cruiser);\n        ships.appendChild(submarine);\n        ships.appendChild(destroyer);\n\n        shipSection.appendChild(ships);\n        shipSection.appendChild(axis);\n\n        playerSection.appendChild(playerBoard);\n        computerSection.appendChild(computerBoard);\n\n        main.appendChild(playerSection);\n        main.appendChild(computerSection);\n        container.appendChild(shipSection);\n    }\n\n    const rmEventListeners = () => {\n        const compTiles = document.querySelectorAll('.comp-tile')\n        const axis = document.querySelector('.axis')\n\n        compTiles.forEach((tile) => tile.removeEventListener('click', _eventlisteners__WEBPACK_IMPORTED_MODULE_1__.toggleTurn))\n        axis.removeEventListener('click', _eventlisteners__WEBPACK_IMPORTED_MODULE_1__.changeAxis)\n    }\n    \n    return {\n        removeMain,\n        newMain,\n        rmEventListeners\n    }\n}\n\nfunction shipSunkMsg() {\n    const msg = document.querySelector('#msg');\n\n    const isShipSunk = (obj) => {\n        const target = obj.target;\n        const name = obj.name;\n        const boat = obj.boatHit;\n        const playerBoats = obj.playerBoats;\n        const length = boat.length;\n        const hitSpots = boat.hitSpot.length;\n\n        if(length === hitSpots) {\n            boat.sunk = true;\n            _selectPlayer(target, name);\n            _checkGameEnd(boat, playerBoats);\n        }\n            return boat.sunk;\n    }\n\n    const _checkGameEnd = (boat, playerBoats) => {\n        const sunkBoats = playerBoats.filter(boat => boat.sunk === true)\n\n        if(sunkBoats.length === 5) {\n            (0,_game_end__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(boat);\n        }\n    }\n\n    const _selectPlayer = (location, name) => {\n        const player = location.id;\n\n        if(player.includes('p')) {\n            _playerSunkShip(name);\n        }\n        else if(player.includes('c')) {\n            _compSunkShip(name);\n        }\n    }\n\n    const _playerSunkShip = (ship) => msg.innerHTML = `Your ${ship} has been sunk!`\n    \n    const _compSunkShip = (ship) => msg.innerHTML = `You have sunk your opponent's ${ship}!`\n\n    return {\n        isShipSunk,\n    }\n}\n\nfunction winMsg(player) {\n    const msg = document.querySelector('#msg')\n    msg.innerHTML = `${player} Wins!`\n}\n\n\n//# sourceURL=webpack://battleship/./src/display.js?");

/***/ }),

/***/ "./src/eventlisteners.js":
/*!*******************************!*\
  !*** ./src/eventlisteners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeAxis\": () => (/* binding */ changeAxis),\n/* harmony export */   \"click\": () => (/* binding */ click),\n/* harmony export */   \"toggleTurn\": () => (/* binding */ toggleTurn)\n/* harmony export */ });\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n\n\n    \nfunction click () {\n    const compTiles = document.querySelectorAll('.comp-tile');\n    const axis = document.querySelector('.axis');\n    const a = (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.alterShipSection)();\n\n    compTiles.forEach((tile) => tile.addEventListener('click', e => toggleTurn(e)));\n    axis.addEventListener('click', () => changeAxis(a));\n}\n\nconst toggleTurn = (e) => { \n    const target = e.target.id;\n    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.ps.publish('player-turn', target);\n    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.ps.publish('player-turn', target);\n}\n\nconst changeAxis = (a) => a.changeAxis();\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/eventlisteners.js?");

/***/ }),

/***/ "./src/game-end.js":
/*!*************************!*\
  !*** ./src/game-end.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n\n\nconst gameEnd = (player = 'player') => {\n    if(player.coordinates[0].id[0] === 'c') {\n        player = 'Player'\n    }\n    else {\n        player = 'Computer'\n    }\n    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.ps.publish('end-msg', player)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameEnd);\n\n//# sourceURL=webpack://battleship/./src/game-end.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ps\": () => (/* binding */ ps)\n/* harmony export */ });\nfunction pubSub() {\n    let subscribers = {};\n\n    const publish = (eventName, data) => {\n        if (!Array.isArray(subscribers[eventName])) {\n            return\n          }\n          subscribers[eventName].forEach((callback) => {\n            callback(data)\n          })\n    }\n    const subscribe = (eventName, callback) => {\n        if (!Array.isArray(subscribers[eventName])) {\n            subscribers[eventName] = []\n            }\n            subscribers[eventName].push(callback);\n            const index = subscribers[eventName].length-1\n    \n            return {\n                unsubscribe() {\n                    subscribers[eventName].splice(index, 1)\n                }\n            }\n    }\n    return {\n        publish,\n        subscribe,\n    }\n}\nconst ps = pubSub();\n\n\n\n//# sourceURL=webpack://battleship/./src/pubsub.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/eventlisteners.js");
/******/ 	
/******/ })()
;