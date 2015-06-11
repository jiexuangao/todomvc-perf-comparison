Rosetta.register('r-todoapp', function (tag) {
    var __m = arguments[0];
    __m.__t = function tmpl(tag, attrs, refs) {
        return tag.create('div', { 'class': tag.type }, tag.create('section', { 'id': 'todoapp' }, tag.create('header', { 'id': 'header' }, tag.create('h1', null, 'todos'), tag.create('input', {
            'id': 'new-todo',
            'placeholder': 'What needs to be done?',
            'autofocus': true,
            'onKeyPress': submitChange
        })), tag.create('section', { 'id': 'main' }, tag.create('input', {
            'id': 'toggle-all',
            'type': 'checkbox'
        }), tag.create('label', { 'for': 'toggle-all' }, 'Mark all as complete'), tag.create('ul', { 'id': 'todo-list' }, (attrs.list || []).map(function (item, index) {
            var arr = [];
            var completed = '';
            if (item.completed) {
                completed = 'checked';
            }
            arr.push(tag.create('li', { 'index': index }, tag.create('div', { 'class': 'view' }, tag.create('input', {
                'class': 'toggle',
                'type': 'checkbox',
                'checked': completed,
                'onClick': toggle
            }), tag.create('label', null, item.title), tag.create('button', {
                'class': 'destroy',
                'onClick': deleteLi
            }))));
            return arr;
        }))), tag.create('footer', { 'id': 'footer' }, tag.create('span', { 'id': 'todo-count' }, tag.create('strong', null, attrs.remaining), attrs.items, 'left'), tag.create('ul', { 'id': 'filters' }, tag.create('li', null, tag.create('a', {
            'class': 'selected',
            'href': '#/'
        }, 'All')), tag.create('li', null, tag.create('a', { 'href': '#/active' }, 'Active')), tag.create('li', null, tag.create('a', { 'href': '#/completed' }, 'Completed'))))));
    };
    function toggle(e) {
        if ($(e.target).attr('checked') == 'checked') {
            $(e.target).parent().parent().addClass('completed');
        } else {
            $(e.target).parent().parent().removeClass('completed');
        }
    }
    function submitChange(e) {
        if (e.which === 13 && $(e.target).val().trim()) {
            var list = tag.attrs.list;
            list.push({
                completed: '',
                title: $(e.target).val().trim()
            });
            tag.update({ list: list });
        }
    }
    function deleteLi(e) {
        var index = parseInt($(e.target).parents('li').attr('index'), 10);
        var list = tag.attrs.list;
        list.splice(index, 1);
        tag.update({ list: list });
    }
});