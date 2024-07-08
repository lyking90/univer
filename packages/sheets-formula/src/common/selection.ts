/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ColorKit, type ThemeService } from '@univerjs/core';
import type { ISelectionStyle } from '@univerjs/sheets';

export const FORMULA_REF_SELECTION_PLUGIN_NAME = 'formula_reference_selection_plugin_name';

export function getFormulaRefSelectionStyle(themeService: ThemeService, refColor: string, id: string): ISelectionStyle {
    const style = themeService.getCurrentTheme();
    const fill = new ColorKit(refColor).setAlpha(0.05).toRgbString();
    return {
        id,
        strokeWidth: 1,
        stroke: refColor,
        fill,
        widgets: { tl: true, tc: true, tr: true, ml: true, mr: true, bl: true, bc: true, br: true },
        widgetSize: 6,
        widgetStrokeWidth: 1,
        widgetStroke: style.colorWhite,
        hasAutoFill: false,
        hasRowHeader: false,
        hasColumnHeader: false,
    };
}
