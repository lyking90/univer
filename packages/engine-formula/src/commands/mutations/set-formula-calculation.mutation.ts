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

import type { IExecutionOptions, IMutation, IUnitRange, Nullable } from '@univerjs/core';
import { CommandType } from '@univerjs/core';

import type {
    IDirtyUnitFeatureMap,
    IDirtyUnitSheetNameMap,
    INumfmtItemMap,
    IRuntimeOtherUnitDataType,
    IRuntimeUnitDataPrimitiveType,
} from '../../basics/common';
import type { FormulaExecutedStateType, IExecutionInProgressParams } from '../../services/runtime.service';

export interface ISetFormulaCalculationStartMutation {
    dirtyRanges: IUnitRange[];
    dirtyNameMap: IDirtyUnitSheetNameMap;
    dirtyUnitFeatureMap: IDirtyUnitFeatureMap;
    options: Nullable<IExecutionOptions>;
    numfmtItemMap: INumfmtItemMap;
    forceCalculation?: boolean;
}
/**
 * TODO: @DR-Univer
 * Trigger the calculation of the formula and stop the formula
 */
export const SetFormulaCalculationStartMutation: IMutation<ISetFormulaCalculationStartMutation> = {
    id: 'formula.mutation.set-formula-calculation-start',
    type: CommandType.MUTATION,
    handler: () => true,
};

export interface ISetFormulaCalculationStopMutation {}

export const SetFormulaCalculationStopMutation: IMutation<ISetFormulaCalculationStopMutation> = {
    id: 'formula.mutation.set-formula-calculation-stop',
    type: CommandType.MUTATION,
    handler: () => true,
};

export interface ISetFormulaCalculationNotificationMutation {
    functionsExecutedState?: FormulaExecutedStateType;
    stageInfo?: IExecutionInProgressParams;
}

export const SetFormulaCalculationNotificationMutation: IMutation<ISetFormulaCalculationNotificationMutation> = {
    id: 'formula.mutation.set-formula-calculation-notification',
    type: CommandType.MUTATION,
    handler: () => true,
};

export interface ISetFormulaCalculationResultMutation {
    unitData: IRuntimeUnitDataPrimitiveType;
    unitOtherData: IRuntimeOtherUnitDataType;
}

export const SetFormulaCalculationResultMutation: IMutation<ISetFormulaCalculationResultMutation> = {
    id: 'formula.mutation.set-formula-calculation-result',
    type: CommandType.MUTATION,
    handler: () => true,
};
