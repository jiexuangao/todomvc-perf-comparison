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
        var item = Rosetta.create('div', {
            class: 'lg-trailer'
        }, Rosetta.create('div', {
            class: 'lg-surface'
        }, []))
        result.push(item);
    });

    return result;
}