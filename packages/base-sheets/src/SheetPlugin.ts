import { Engine, IRenderingEngine } from '@univerjs/base-render';
import { Plugin, PLUGIN_NAMES, DEFAULT_SELECTION, UniverSheet, PluginType, CommandManager, ICurrentUniverService, LocaleService } from '@univerjs/core';
import { Dependency, Inject, Injector } from '@wendellhu/redi';

import { SheetPluginObserve, uninstall } from './Basics/Observer';
import { CANVAS_VIEW_KEY } from './View/BaseView';
import { CanvasView } from './View/CanvasView';
import {
    RightMenuController,
    SheetBarController,
    CellEditorController,
    SheetContainerController,
    ToolbarController,
    CountBarController,
    EditTooltipsController,
    SelectionManager,
    HideColumnController,
} from './Controller';
import { DEFAULT_SPREADSHEET_PLUGIN_DATA, install, ISheetPluginConfig } from './Basics';
import { FormulaBarController } from './Controller/FormulaBarController';
import { NamedRangeActionExtensionFactory } from './Basics/Register/NamedRangeActionExtension';
import { en, zh } from './Locale';
import { ISelectionManager } from './Services/tokens';
import { DragLineController } from './Controller/Selection/DragLineController';
import { ColumnTitleController } from './Controller/Selection/ColumnTitleController';
import { RowTitleController } from './Controller/Selection/RowTitleController';
import { ColumnRulerManager } from './Basics/Register/ColumnRegister';
import { HideColumnRulerFactory } from './Basics/Register/HideColumnRuler';

/**
 * The main sheet base, construct the sheet container and layout, mount the rendering engine
 */
export class SheetPlugin extends Plugin<SheetPluginObserve> {
    static override type = PluginType.Sheet;

    private _config: ISheetPluginConfig;

    private _canvasEngine: Engine;

    // TODO: @wzhudev these controllers should be removed finally after we completely refactored base-sheet plugin

    private _rightMenuController: RightMenuController;

    private _toolbarController: ToolbarController;

    private _editTooltipsController: EditTooltipsController;

    private _formulaBarController: FormulaBarController;

    private _sheetBarController: SheetBarController;

    private _cellEditorController: CellEditorController;

    private _countBarController: CountBarController;

    private _hideColumnController: HideColumnController;

    private _sheetContainerController: SheetContainerController;

    private _namedRangeActionExtensionFactory: NamedRangeActionExtensionFactory;

    private _columnRulerManager: ColumnRulerManager;

    private _hideColumnRulerFactory: HideColumnRulerFactory;

    constructor(
        config: Partial<ISheetPluginConfig>,
        @ICurrentUniverService private readonly _currentUniverService: ICurrentUniverService,
        @Inject(LocaleService) private readonly _localeService: LocaleService,
        @Inject(Injector) private readonly _sheetInjector: Injector,
        @Inject(CommandManager) private readonly _commandManager: CommandManager
    ) {
        super(PLUGIN_NAMES.SPREADSHEET);

        this._config = Object.assign(DEFAULT_SPREADSHEET_PLUGIN_DATA, config);

        this.initializeDependencies(_sheetInjector);
    }

    installTo(universheetInstance: UniverSheet) {
        universheetInstance.installPlugin(this);
    }

    initialize(): void {
        this._localeService.getLocale().load({
            en,
            zh,
        });

        install(this);

        this.initConfig();
        this.initController();
        this.initCanvasView();
        this.registerExtension();
        this.listenEventManager();
    }

    getConfig() {
        return this._config;
    }

    initConfig() {
        const config = this._config;
        if (!config.selections) {
            const worksheetId = this._currentUniverService.getCurrentUniverSheetInstance().getWorkBook().getActiveSheet().getSheetId();
            config.selections = {
                [worksheetId]: [
                    {
                        selection: DEFAULT_SELECTION,
                    },
                ],
            };
        }
    }

    // TODO@huwenzhao: We don't need to init controllers manually
    initController() {
        this._sheetContainerController = this._sheetInjector.get(SheetContainerController);
        this._cellEditorController = this._sheetInjector.get(CellEditorController);
        this._formulaBarController = this._sheetInjector.get(FormulaBarController);
        this._editTooltipsController = this._sheetInjector.get(EditTooltipsController);
        this._sheetBarController = this._sheetInjector.get(SheetBarController);
        this._toolbarController = this._sheetInjector.get(ToolbarController);
        this._rightMenuController = this._sheetInjector.get(RightMenuController);
        this._countBarController = this._sheetInjector.get(CountBarController);
        this._hideColumnController = this._sheetInjector.get(HideColumnController);
    }

    initCanvasView() {
        this._canvasEngine = this._sheetInjector.get(IRenderingEngine);
    }

    override onMounted(): void {
        this.initialize();
    }

    override onDestroy(): void {
        super.onDestroy();
        uninstall(this);

        const actionRegister = this._commandManager.getActionExtensionManager().getRegister();
        actionRegister.delete(this._namedRangeActionExtensionFactory);

        const rulerRegister = this._columnRulerManager.getRegister();
        rulerRegister.delete(this._hideColumnRulerFactory);
    }

    registerExtension() {
        const actionRegister = this._commandManager.getActionExtensionManager().getRegister();
        this._namedRangeActionExtensionFactory = new NamedRangeActionExtensionFactory(this);
        actionRegister.add(this._namedRangeActionExtensionFactory);

        this._columnRulerManager = this._sheetInjector.get(ColumnRulerManager);
        const rulerRegister = this._columnRulerManager.getRegister();
        this._hideColumnRulerFactory = new HideColumnRulerFactory(this);
        rulerRegister.add(this._hideColumnRulerFactory);
    }

    listenEventManager() {
        // TODO: move to toolbarcontroller
        this._countBarController.listenEventManager();
        this._sheetBarController.listenEventManager();
        this._toolbarController.listenEventManager();
        this._rightMenuController.listenEventManager();
    }

    /** @deprecated DI */
    getEditTooltipsController(): EditTooltipsController {
        return this._editTooltipsController;
    }

    /** @deprecated DI */
    getCanvasEngine() {
        return this._canvasEngine;
    }

    /** @deprecated DI */
    getCanvasView() {
        return this._sheetInjector.get(CanvasView);
    }

    /** @deprecated DI */
    getMainScene() {
        return this._canvasEngine.getScene(CANVAS_VIEW_KEY.MAIN_SCENE);
    }

    /** @deprecated DI */
    getSheetView() {
        return this.getCanvasView().getSheetView();
    }

    /** @deprecated DI */
    getSelectionManager() {
        return this._sheetInjector.get(ISelectionManager);
    }

    /** @deprecated DI */
    getCurrentControls() {
        return this.getSelectionManager()?.getCurrentControls();
    }

    /** @deprecated DI */
    getSelectionShape() {
        return this._canvasEngine;
    }

    /** @deprecated DI */
    getMainComponent() {
        return this.getSheetView().getSpreadsheet();
    }

    /** @deprecated DI */
    getLeftTopComponent() {
        return this.getSheetView().getSpreadsheetLeftTopPlaceholder();
    }

    /** @deprecated DI */
    getRowComponent() {
        return this.getSheetView().getSpreadsheetRowTitle();
    }

    /** @deprecated DI */
    getColumnComponent() {
        return this.getSheetView().getSpreadsheetColumnTitle();
    }

    /** @deprecated DI */
    getSpreadsheetSkeleton() {
        return this.getSheetView().getSpreadsheetSkeleton();
    }

    /** @deprecated DI */
    getRightMenuControl() {
        return this._rightMenuController;
    }

    /** @deprecated DI */
    getToolbarControl() {
        return this._toolbarController;
    }

    /** @deprecated DI */
    getSheetBarControl() {
        return this._sheetBarController;
    }

    /** @deprecated DI */
    getCellEditorController() {
        return this._cellEditorController;
    }

    /** @deprecated DI */
    getCountBarController() {
        return this._countBarController;
    }

    /** @deprecated DI */
    getHideColumnController() {
        return this._hideColumnController;
    }

    private initializeDependencies(sheetInjector: Injector) {
        const dependencies: Dependency[] = [
            [CanvasView],

            [CellEditorController],
            [SheetContainerController],
            [FormulaBarController],
            [EditTooltipsController],
            [SheetBarController],
            [ToolbarController],
            [RightMenuController],
            [CountBarController],

            // TODO@huwenzhao: this is a temporary solution
            [
                ISelectionManager,
                {
                    useFactory: (injector: Injector, canvasView: CanvasView) => injector.createInstance(SelectionManager, canvasView.getSheetView(), this._config),
                    deps: [Injector, CanvasView],
                },
            ],
            [RowTitleController],
            [ColumnTitleController],
            [DragLineController],
            [HideColumnController],

            [ColumnRulerManager],
        ];

        dependencies.forEach((d) => {
            sheetInjector.add(d);
        });
    }
}