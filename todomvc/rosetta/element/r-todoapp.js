Rosetta.register('r-todoapp', function (tag) {
    var __m = arguments[0];
    __m.__t = function tmpl(tag, attrs, refs) {
        return tag.create('div', { 'class': tag.type }, tag.create('ul', { 'id': 'todo-list' }, (attrs.list || []).map(function (item, index) {
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
        })));
    };
    function toggle(e) {
        if ($(e.target).attr('checked') == 'checked') {
            $(e.target).parent().parent().addClass('completed');
        } else {
            $(e.target).parent().parent().removeClass('completed');
        }
    }

    function deleteLi(e) {
        var index = parseInt($(e.target).parents('li').attr('index'), 10);
        var list = tag.attrs.list;
        list.splice(index, 1);
        tag.update({ list: list || [] });
    }
});