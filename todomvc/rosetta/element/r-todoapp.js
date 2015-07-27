Rosetta({
    is: 'r-todoapp',
    properties: {
        list: Array,
        ref: String,
        adad: Object
    },
    toggle: function (e) {
        var $el = $(e.target);
        if ($el.attr('checked') != 'checked') {
            $el.attr('checked', 'checked');
            $el.parent().parent().addClass('completed');
        } else {
            $el.attr('checked', false);
            $el.parent().parent().removeClass('completed');
        }
    },
    deleteLi: function (e) {
        var index = parseInt($(e.target).attr('index'), 10);
        var list = this.list;
        list.splice(index, 1);
        this.update({ list: list || [] });
    },
    submitChange: function (e) {
        var $newtodo = $(e.target);
        if (e.which === 13 && $newtodo.val()) {
            var aaa = Rosetta.ref('aaa');
            this.list.push({
                completed: '',
                title: $newtodo.val().trim()
            });
            this.update({ list: this.list });
            $newtodo.val('');
        }
    },
    __t: function tmpl(tag, refs) {
        with (tag) {
            return tag.create('div', { 'class': tag.type }, tag.create('section', { 'id': 'todoapp' }, tag.create('header', { 'id': 'header' }, tag.create('h1', null, 'todos'), tag.create('input', {
                'id': 'new-todo',
                'placeholder': 'What needs to be done?',
                'autofocus': true,
                'onKeyPress': submitChange
            })), tag.create('section', { 'id': 'main' }, tag.create('input', {
                'id': 'toggle-all',
                'type': 'checkbox'
            }), tag.create('label', { 'for': 'toggle-all' }, 'Mark all as complete'), tag.create('ul', { 'id': 'todo-list' }, (list || []).map(function (item, index) {
                var arr = [];
                var completed = '';
                if (item.completed) {
                    completed = 'checked';
                }
                arr.push(tag.create('li', null, tag.create('div', { 'class': 'view' }, tag.create('input', {
                    'class': 'toggle',
                    'type': 'checkbox',
                    'onClick': toggle,
                    'index': index
                }), tag.create('label', null, item.title), tag.create('button', {
                    'class': 'destroy',
                    'onClick': deleteLi
                }))));
                return arr;
            }))), tag.create('footer', { 'id': 'footer' }, tag.create('content', { 'select': 'a' }), tag.create('span', { 'id': 'todo-count' }, tag.create('strong', null)), tag.create('ul', { 'id': 'filters' }, tag.create('li', null, tag.create('a', {
                'class': 'selected',
                'href': '#/'
            })), tag.create('li', null, tag.create('a', { 'href': '#/active' })), tag.create('li', null, tag.create('a', { 'href': '#/completed' }))))));
        }
    },
    __rid: 'elements/r-todoapp'
});
