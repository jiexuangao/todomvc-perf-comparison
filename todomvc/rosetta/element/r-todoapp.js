Rosetta.register('r-todoapp', function(tag) {
    var __m = arguments[0];
    __m.__t = function tmpl(tag, attrs, refs) {
        return tag.create('div', {
            'class': tag.type
        }, tag.create('section', {
            'id': 'todoapp'
        }, tag.create('header', {
            'id': 'header'
        }, tag.create('h1', null, 'todos'), tag.create('input', {
            'id': 'new-todo',
            'placeholder': 'What needs to be done?',
            'autofocus': true,
            'onKeyPress': submitChange
        })), tag.create('section', {
            'id': 'main'
        }, tag.create('input', {
            'id': 'toggle-all',
            'type': 'checkbox'
        }), tag.create('label', {
            'for': 'toggle-all'
        }, 'Mark all as complete'), tag.create('ul', {
            'id': 'todo-list'
        }, (attrs.list || []).map(function(item, index) {
            var arr = [];
            var completed = '';
            if (item.completed) {
                completed = 'checked';
            }
            arr.push(tag.create('li', {
                'key': Math.random()
            }, tag.create('div', {
                'class': 'view'
            }, tag.create('input', {
                'class': 'toggle',
                'type': 'checkbox',
                'onClick': toggle,
                'index': index
            }), tag.create('label', null, item.title), tag.create('button', {
                'class': 'destroy',
                'onClick': deleteLi
            }))));
            return arr;
        }))), tag.create('footer', {
            'id': 'footer'
        }, tag.create('span', {
            'id': 'todo-count'
        }, tag.create('strong', null)), tag.create('ul', {
            'id': 'filters'
        }, tag.create('li', null, tag.create('a', {
            'class': 'selected',
            'href': '#/'
        })), tag.create('li', null, tag.create('a', {
            'href': '#/active'
        })), tag.create('li', null, tag.create('a', {
            'href': '#/completed'
        })))), tag.create('content', {
            'select': 'a'
        })));
    };

    tag.attrs = {
        list: [],
        ref: '',
        adad: {}
    };

    function toggle(e) {
        var $el = $(e.target);
        if ($el.attr('checked') != 'checked') {
            $el.attr('checked', 'checked');
            $el.parent().parent().addClass('completed');
        } else {
            $el.attr('checked', false);
            $el.parent().parent().removeClass('completed');
        }
    }

    function deleteLi(e) {
        var index = parseInt($(e.target).attr('index'), 10);
        var list = tag.attrs.list;
        list.splice(index, 1);
        tag.update({
            list: list || []
        });
    }

    function submitChange(e) {
        var $newtodo = $(e.target);
        if (e.which === 13 && $newtodo.val()) {
            var tag = Rosetta.ref('aaa');
            tag.attrs.list.push({
                completed: '',
                title: $newtodo.val().trim()
            });
            tag.update({
                list: tag.attrs.list
            });
            $newtodo.val('');
        }
    }
});
