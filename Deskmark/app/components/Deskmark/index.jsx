/**
 * @file component Deskmark
 */

import React from 'react';
import uuid from 'uuid';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';

import './style.scss';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            selectedId: null,
            editing: false
        };

        this.selectItem = this.selectItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.createItem = this.createItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    selectItem(id) {
        if (id === this.state.selectedId) {
            return;
        }

        this.setState({
            selectedId: id,
            editing: false
        });
    }

    saveItem(item) {
        let items = this.state.items;

        // new item
        if (!item.id) {
            items = [...items, {
                ...item,
                id: uuid.v4(),
                time: new Date().getTime(),
                // stop here first mdn Date 看看英文，不行就对译，还不行就看中文
            }];
        // existed item
        } else {
            items = items.map(
                // stop here
                // 什么时候箭头函数需要使用括号，看看阮一峰 es6；
            );
        }
    }
}
