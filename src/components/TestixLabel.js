import React from 'react'
import './testix_main.scss'

export default function TestixLabel({small = false}) {
    return '<a href="//testix.me" target="_blank" class="tstx_pwrd '+((small)?'__small':'')+'" onclick="testix.onLabelClick()"></a>';
}


TODO:

/**
 * Клик на иконку сервиса в углу проекта.
 * Для сбора статистики
 *
 * @param e
 */
function onLabelClick(e) {
    stat('TestixLoader','Label_click');
}
