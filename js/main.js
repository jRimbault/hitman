"use strict";
var play = function (file) { return new Audio("sounds/" + file).play(); };
var listenToClick = function (sound) { return function () { return play(sound.file); }; };
function createNode(tagName, options) {
    var _a;
    var node = document.createElement(tagName);
    if (options === undefined)
        return node;
    if (options.classList) {
        if (typeof options.classList === 'string') {
            node.classList.add(options.classList);
        }
        else {
            (_a = node.classList).add.apply(_a, options.classList);
        }
    }
    if (options.innerHTML) {
        node.innerHTML = options.innerHTML;
    }
    if (options.attributes) {
        for (var _i = 0, _b = Object.entries(options.attributes); _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], attr = _c[1];
            node.setAttribute(key, attr);
        }
    }
    if (options.children) {
        for (var _d = 0, _e = options.children; _d < _e.length; _d++) {
            var child = _e[_d];
            node.appendChild(child);
        }
    }
    return node;
}
function makeListItem(sound) {
    var node = createNode('li', {
        attributes: { 'data-sound': sound.file.replace('.ogg', '') },
        children: [
            createNode('strong', { innerHTML: sound.key }),
            createNode('span', { classList: 'words-text', innerHTML: sound.text }),
        ],
    });
    node.addEventListener('click', listenToClick(sound));
    return node;
}
function insertList(listNodes) {
    var ul = createNode('ul', { classList: 'words', children: listNodes });
    document.body.appendChild(ul);
}
function listeningToKeyboard(sounds) {
    var charCodes = sounds.reduce(function (acc, sound) {
        acc[sound.key.charCodeAt(0)] = sound.file;
        return acc;
    }, {});
    document.addEventListener('keydown', function ($event) {
        var audioCode = charCodes[$event.keyCode];
        if (audioCode)
            play(audioCode);
    });
    return sounds;
}
window.onload = function () {
    fetch('sounds/index.json')
        .then(function (r) { return r.json(); })
        .then(function (r) { return r.sounds; })
        .then(listeningToKeyboard)
        .then(function (sounds) { return sounds.map(makeListItem); })
        .then(insertList);
};
//# sourceMappingURL=main.js.map