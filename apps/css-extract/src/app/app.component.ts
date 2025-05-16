import { Component, inject, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { getCSS } from 'primeng/usestyle';

import { AccordionStyle } from 'primeng/accordion';
import { AutoCompleteStyle } from 'primeng/autocomplete';
import { AvatarStyle } from 'primeng/avatar';
import { AvatarGroupStyle } from 'primeng/avatargroup';
import { BadgeStyle } from 'primeng/badge';
import { BaseStyle } from 'primeng/base';
import { BaseComponentStyle } from 'primeng/basecomponent';
import { BlockUiStyle } from 'primeng/blockui';
import { BreadCrumbStyle } from 'primeng/breadcrumb';
import { ButtonStyle } from 'primeng/button';
import { ButtonGroupStyle } from 'primeng/buttongroup';
import { CalendarStyle } from 'primeng/calendar';
import { CardStyle } from 'primeng/card';
import { CarouselStyle } from 'primeng/carousel';
import { CascadeSelectStyle } from 'primeng/cascadeselect';
import { ChartStyle } from 'primeng/chart';
import { CheckboxStyle } from 'primeng/checkbox';
import { ChipStyle } from 'primeng/chip';
import { ChipsStyle } from 'primeng/chips/style/chipsstyle';
import { ColorPickerStyle } from 'primeng/colorpicker';
import { CommonStyle } from 'primeng/common/style/commonstyle';
import { ConfirmDialogStyle } from 'primeng/confirmdialog';
import { ConfirmPopupStyle } from 'primeng/confirmpopup';
import { ContextMenuStyle } from 'primeng/contextmenu';
import { DataViewStyle } from 'primeng/dataview';
import { DatePickerStyle } from 'primeng/datepicker';
import { DialogStyle } from 'primeng/dialog';
import { DividerStyle } from 'primeng/divider';
import { DockStyle } from 'primeng/dock';
import { DrawerStyle } from 'primeng/drawer';
import { DropdownStyle } from 'primeng/dropdown';
import { DynamicDialogStyle } from 'primeng/dynamicdialog';
import { EditorStyle } from 'primeng/editor';
import { FieldsetStyle } from 'primeng/fieldset';
import { FileUploadStyle } from 'primeng/fileupload';
import { FloatLabelStyle } from 'primeng/floatlabel';
import { FluidStyle } from 'primeng/fluid';
import { GalleriaStyle } from 'primeng/galleria';
import { IconFieldStyle } from 'primeng/iconfield';
import { IftaLabelStyle } from 'primeng/iftalabel';
import { ImageStyle } from 'primeng/image';
import { ImageCompareStyle } from 'primeng/imagecompare';
import { InplaceStyle } from 'primeng/inplace';
import { InputGroupStyle } from 'primeng/inputgroup';
import { InputGroupAddonStyle } from 'primeng/inputgroupaddon';
import { InputIconStyle } from 'primeng/inputicon';
import { InputMaskStyle } from 'primeng/inputmask';
import { InputNumberStyle } from 'primeng/inputnumber';
import { InputOtpStyle } from 'primeng/inputotp';
import { InputSwitchStyle } from 'primeng/inputswitch';
import { InputTextStyle } from 'primeng/inputtext';
import { TextareaStyle as InputTextareaStyle } from 'primeng/inputtextarea';
import { KnobStyle } from 'primeng/knob';
import { ListBoxStyle } from 'primeng/listbox';
import { MegaMenuStyle } from 'primeng/megamenu';
import { MenuStyle } from 'primeng/menu';
import { MenuBarStyle } from 'primeng/menubar';
import { MessageStyle } from 'primeng/message';
import { MessagesStyle } from 'primeng/messages';
import { MeterGroupStyle } from 'primeng/metergroup';
import { MultiSelectStyle } from 'primeng/multiselect';
import { OrderListStyle } from 'primeng/orderlist';
import { OrganizationChartStyle } from 'primeng/organizationchart';
import { OverlayStyle } from 'primeng/overlay';
import { OverlayBadgeStyle } from 'primeng/overlaybadge';
import { PopoverStyle as OverlayPanelStyle } from 'primeng/overlaypanel';
import { PaginatorStyle } from 'primeng/paginator';
import { PanelStyle } from 'primeng/panel';
import { PanelMenuStyle } from 'primeng/panelmenu';
import { PasswordStyle } from 'primeng/password';
import { PickListStyle } from 'primeng/picklist';
import { PopoverStyle } from 'primeng/popover';
import { ProgressBarStyle } from 'primeng/progressbar';
import { ProgressSpinnerStyle } from 'primeng/progressspinner';
import { RadioButtonStyle } from 'primeng/radiobutton';
import { RatingStyle } from 'primeng/rating';
import { RippleStyle } from 'primeng/ripple';
import { ScrollerStyle } from 'primeng/scroller';
import { ScrollPanelStyle } from 'primeng/scrollpanel';
import { ScrollTopStyle } from 'primeng/scrolltop';
import { SelectStyle } from 'primeng/select';
import { SelectButtonStyle } from 'primeng/selectbutton';
import { DrawerStyle as SidebarStyle } from 'primeng/sidebar';
import { SkeletonStyle } from 'primeng/skeleton';
import { SliderStyle } from 'primeng/slider';
import { SpeedDialStyle } from 'primeng/speeddial';
import { SplitButtonStyle } from 'primeng/splitbutton';
import { SplitterStyle } from 'primeng/splitter';
import { StepperStyle } from 'primeng/stepper';
import { StepsStyle } from 'primeng/steps';
import { TableStyle } from 'primeng/table';
import { TabMenuStyle } from 'primeng/tabmenu';
import { TabsStyle } from 'primeng/tabs';
import { TabsStyle as TabViewStyle } from 'primeng/tabview';
import { TagStyle } from 'primeng/tag';
import { TerminalStyle } from 'primeng/terminal';
import { TextareaStyle } from 'primeng/textarea';
import { TieredMenuStyle } from 'primeng/tieredmenu';
import { TimelineStyle } from 'primeng/timeline';
import { ToastStyle } from 'primeng/toast';
import { ToggleButtonStyle } from 'primeng/togglebutton';
import { ToggleSwitchStyle } from 'primeng/toggleswitch';
import { ToolbarStyle } from 'primeng/toolbar';
import { TooltipStyle } from 'primeng/tooltip';
import { TreeStyle } from 'primeng/tree';
import { TreeSelectStyle } from 'primeng/treeselect';
import { TreeTableStyle } from 'primeng/treetable';

const Services = [
    AccordionStyle,
    AutoCompleteStyle,
    AvatarStyle,
    AvatarGroupStyle,
    BadgeStyle,
    BaseStyle,
    BaseComponentStyle,
    BlockUiStyle,
    BreadCrumbStyle,
    ButtonStyle,
    ButtonGroupStyle,
    CalendarStyle,
    CardStyle,
    CarouselStyle,
    CascadeSelectStyle,
    ChartStyle,
    CheckboxStyle,
    ChipStyle,
    ChipsStyle,
    ColorPickerStyle,
    CommonStyle,
    ConfirmDialogStyle,
    ConfirmPopupStyle,
    ContextMenuStyle,
    DataViewStyle,
    DatePickerStyle,
    DialogStyle,
    DividerStyle,
    DockStyle,
    DrawerStyle,
    DropdownStyle,
    DynamicDialogStyle,
    EditorStyle,
    FieldsetStyle,
    FileUploadStyle,
    FloatLabelStyle,
    FluidStyle,
    GalleriaStyle,
    IconFieldStyle,
    IftaLabelStyle,
    ImageStyle,
    ImageCompareStyle,
    InplaceStyle,
    InputGroupStyle,
    InputGroupAddonStyle,
    InputIconStyle,
    InputMaskStyle,
    InputNumberStyle,
    InputOtpStyle,
    InputSwitchStyle,
    InputTextStyle,
    InputTextareaStyle,
    KnobStyle,
    ListBoxStyle,
    MegaMenuStyle,
    MenuStyle,
    MenuBarStyle,
    MessageStyle,
    MessagesStyle,
    MeterGroupStyle,
    MultiSelectStyle,
    OrderListStyle,
    OrganizationChartStyle,
    OverlayStyle,
    OverlayBadgeStyle,
    OverlayPanelStyle,
    PaginatorStyle,
    PanelStyle,
    PanelMenuStyle,
    PasswordStyle,
    PickListStyle,
    PopoverStyle,
    ProgressBarStyle,
    ProgressSpinnerStyle,
    RadioButtonStyle,
    RatingStyle,
    RippleStyle,
    ScrollerStyle,
    ScrollPanelStyle,
    ScrollTopStyle,
    SelectStyle,
    SelectButtonStyle,
    SidebarStyle,
    SkeletonStyle,
    SliderStyle,
    SpeedDialStyle,
    SplitButtonStyle,
    SplitterStyle,
    StepperStyle,
    StepsStyle,
    TableStyle,
    TabMenuStyle,
    TabsStyle,
    TabViewStyle,
    TagStyle,
    TerminalStyle,
    TextareaStyle,
    TieredMenuStyle,
    TimelineStyle,
    ToastStyle,
    ToggleButtonStyle,
    ToggleSwitchStyle,
    ToolbarStyle,
    TooltipStyle,
    TreeStyle,
    TreeSelectStyle,
    TreeTableStyle
];

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    providers: Services,
    templateUrl: './app.component.html'
})
export class AppComponent {
    public config: PrimeNG = inject(PrimeNG);
    theme: string = '';
    variables: string = '';

    constructor(private injector: Injector) {}

    get styleOptions() {
        return { nonce: this.config?.csp().nonce };
    }

    ngOnInit() {
        this.loadServices();
    }

    loadServices() {
        Object.values(Services).forEach((service) => {
            const instance = this.injector.get(service);

            const { css, style } = instance.getComponentTheme?.(undefined) || {};

            instance.load(css, { name: `${instance.name}-variables`, ...this.styleOptions });
            instance.loadTheme({ name: `${instance.name}-style`, ...this.styleOptions }, style);
        });
        const css = getCSS();
        console.log('css', css);
        this.theme = css.finalCss;
        this.variables = css.finalVariables;
    }
}
