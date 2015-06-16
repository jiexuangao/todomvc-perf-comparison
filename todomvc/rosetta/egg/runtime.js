var hubble = window.hubble = {};

hubble.init = function (json) {
    var children = [];
    var attributes = {};

    for (var name in json) {
        var subJSON = json[name];

        switch (name) {
            case "backStage":
                children.push(parseStage(subJSON, 'back'));
                break;

            case "frontStage":
                children.push(parseStage(subJSON, 'front'));
                break;

            case "pages":
                children.push(parsePages(subJSON));
                break;

            case 'attributes':
                attributes = parseAttribute(subJSON);
                break;

            default:
                break;
        }
    }

    var container = document.querySelector('.lg-container');
    Rosetta.render(Rosetta.create('div', attributes, children), container);
    document.querySelector('#loading').remove();
    container.style.opacity = 1;
};

function parseStage(json, type) {
    var components = parseComponents(json.components);
    var attributes = parseAttribute(json.attributes) || {};
    attributes = $.extend(attributes, {
        class: 'lg-' + type + '-stage'
    });

    return Rosetta.create('div', attributes, components);
}

function parsePages(arr) {
    var pages = [];

    (arr || []).map(function(pageJSON, index) {
        var page = Rosetta.create('div', {
            class: 'lg-page swiper-slide'
        }, parseComponents(pageJSON.components));

        pages.push(page);
    });

    return Rosetta.create('div', {
        class: 'lg-page-container swiper-container swiper-container-vertical swiper-container-android'
    }, Rosetta.create('div', {
        class: 'lg-page-wrapper swiper-wrapper'
    }, pages));
}

function parseAttribute(json) {
    return {};
}

function parseComponents(components) {
    var result = [];
    result.push(Rosetta.create('div', {
        class: 'lg-backface'
    }))

    components.map(function(component, index) {
        var createComponent = null;

        if (component.type == 'image') {
            createComponent = createImage;
        } else if (component.type == 'label') {
            createComponent = createLabel;
        }

        var item = createComponent(component);


        result.push(item);
    });

    return result;
}


function createImage(json) {
    var coordinate = getCoodinate(json.surface);
    var position = [];
    var size = [];
    var animation = [];

    for (var key in coordinate) {
        if (key == 'width' || key == 'height') {
            size.push(key + ':' + coordinate[key] + ';');
        }

        position.push(key + ':' + coordinate[key] + ';');
    }

    size = size.join('');
    position = position.join('');

    return Rosetta.create('div', {
            class: 'lg-trailer',
            style: position
        }, Rosetta.create('div', {
            class: 'lg-surface',
            style: size
        }, Rosetta.create('img', {
            class: 'lg-component-img',
            src: json.attributes.src,
            style: size
        })));
}


function createLabel(json) {
    return Rosetta.create('div', {
            class: 'lg-trailer'
        }, Rosetta.create('div', {
            class: 'lg-surface'
        }, Rosetta.create('div', {
            class: 'lg-component-label'
        })));
}


function getCoodinate(surface) {
    var height = document.querySelector(".lg-container").clientHeight/2;

    var t = 325;

    height = height || t;

    var result = {
        left: surface.x + "px",
        width: surface.width + "px",
        height: surface.height + "px"
    };
    switch (surface.coordinate) {
        case "bottom":
            result.bottom = -surface.height - surface.y + "px";
            break;
        case "central":
            result.top = surface.y + height + "px";
            break;
        default:
            result.top = surface.y + "px"
    }
    return result;
}