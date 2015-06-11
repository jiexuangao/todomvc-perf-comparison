Rosetta.register('r-todoapp', function () {
    var __m = arguments[0];
    __m.__t = function tmpl(tag, attrs, refs) {
        return tag.create('div', { 'class': tag.type }, tag.create('section', { 'id': 'todoapp' }, tag.create('header', { 'id': 'header' }, tag.create('h1', null, 'todos'), tag.create('input', {
            'id': 'new-todo',
            'placeholder': 'What needs to be done?',
            'autofocus': true
        })), tag.create('section', { 'id': 'main' }, tag.create('input', {
            'id': 'toggle-all',
            'type': 'checkbox'
        }), tag.create('label', { 'for': 'toggle-all' }, 'Mark all as complete'), tag.create('ul', { 'id': 'todo-list' }, (attrs.list || []).map(function (item) {
            var arr = [];
            var completed = false;
            if (item.completed) {
                completed = true;
            }
            arr.push(tag.create('li', null, tag.create('div', { 'class': 'view' }, tag.create('input', {
                'class': 'toggle',
                'type': 'checkbox',
                'checked': completed
            }), tag.create('label', null, item.title), tag.create('button', { 'class': 'destroy' }))));
            return arr;
        }))), tag.create('footer', { 'id': 'footer' }, tag.create('span', { 'id': 'todo-count' }, tag.create('strong', null, attrs.remaining), attrs.items, 'left'), tag.create('ul', { 'id': 'filters' }, tag.create('li', null, tag.create('a', {
            'class': 'selected',
            'href': '#/'
        }, 'All')), tag.create('li', null, tag.create('a', { 'href': '#/active' }, 'Active')), tag.create('li', null, tag.create('a', { 'href': '#/completed' }, 'Completed'))))));
    };
});