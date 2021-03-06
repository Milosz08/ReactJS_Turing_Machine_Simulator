/*
 * Copyright (c) 2022, by Miłosz Gilga <https://miloszgilga.pl>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

export enum prefReducerTypes {
    CHANGE_SINGLE_FIELD = 'CHANGE_SINGLE_FIELD__P',
}

export enum prefStateKeys {
    CURRENT_THEME_MODE = 'currentThemeMode',
    HEAD_SPEED = 'headSpeed',
    IF_CODE_FOLLOW = 'ifCodeFollow',
    CODE_SCROLL_POS = 'codeScrollPos',
    CURSOR_POSITION = 'cursorPosition',
    IF_OPEN_ERRORS = 'ifOpenErrors',
}

export enum ThemeModes {
    LIGHT = 'LIGHT',
    DARK = 'DARK',
}

export enum headSpeed {
    IMMEDIATELY = 1,
    MIN = 100,
    MAX = 1000,
}