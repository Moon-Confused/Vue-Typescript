declare module 'mint-ui/lib/toast' {
    interface toastOption {
        message?: string
        position?: 'middle' | 'top' | 'bottom'
        duration?: number
        className?: string
        iconClass?: string
    }
    interface toast {
        close(): void
    }
    export default function Toast(option: string | toastOption): toast
}

declare module 'mint-ui/lib/indicator' {
    interface indicatorOption {
        text: string
        spinnerType: 'snake' | 'fading-circle' | 'double-bounce' | 'triple-bounce'
    }
    namespace Indicator {
        function open(option: string | indicatorOption): void
    }
    export default Indicator
}

declare module 'mint-ui/lib/loadmore' {
    namespace Loadmore {
        const name: 'mtLoadmore'
    }
    export default Loadmore
}

declare module 'mint-ui/lib/infinite-scroll' {
    const InfiniteScroll: any
    export default InfiniteScroll
}

declare module 'mint-ui/lib/message-box' {
    interface messageBoxOption {
        title?: string
        message: string
        showConfirmButton?: boolean
        showCancelButton?: boolean
        confirmButtonText?: string
        confirmButtonHighlight?: boolean
        confirmButtonClass?: string
        cancelButtonText?: string
        cancelButtonHighlight?: string
        cancelButtonClass?: string
        closeOnClickModal?: boolean
        showInput?: boolean
        inputType?: 'text' | 'number' | 'password'
        inputValue?: string | number
        inputPlaceholder?: string
    }
    function MessageBox(option: string | messageBoxOption, message: string | null): void
    interface prompt {
        value: string | number
        action: string | null
    }
    namespace MessageBox {
        function alert(message: string, title?: string): Promise<string | null>
        function confirm(message: string, title?: string): Promise<string | null>
        function prompt(message: string, title?: string): Promise<prompt>
    }
    export default MessageBox
}

declare module 'mint-ui/lib/actionsheet' {
    namespace Actionsheet {
        const name: 'mtActionsheet'
    }
    export default Actionsheet
}

declare module 'mint-ui/lib/popup' {
    namespace Popup {
        const name: 'mtPopup'
    }
    export default Popup
}

declare module 'mint-ui/lib/swipe' {
    namespace Swipe {
        const name: 'mtSwipe'
    }
    export default Swipe
}

declare module 'mint-ui/lib/swipe-item' {
    namespace SwipeItem {
        const name: 'mtSwipeItem'
    }
    export default SwipeItem
}

declare module 'mint-ui/lib/lazyload' {
    const Lazyload: any
    export default Lazyload
}

declare module 'mint-ui/lib/range' {
    namespace Range {
        const name: 'mtRange'
    }
    export default Range
}

declare module 'mint-ui/lib/progress' {
    namespace Progress {
        const name: 'mtProgress'
    }
    export default Progress
}

declare module 'mint-ui/lib/picker' {
    namespace Picker {
        const name: 'mtPicker'
    }
    export default Picker
}

declare module 'mint-ui/lib/datetime-picker' {
    namespace DatetimePicker {
        const name: 'mtDatetimePicker'
    }
    export default DatetimePicker
}

declare module 'mint-ui/lib/index-list' {
    namespace IndexList {
        const name: 'mtIndexList'
    }
    export default IndexList
}

declare module 'mint-ui/lib/index-section' {
    namespace IndexSection {
        const name: 'mtIndexSection'
    }
    export default IndexSection
}

declare module 'mint-ui/lib/palette-button' {
    namespace PaletteButton {
        const name: 'mtPaletteButton'
    }
    export default PaletteButton
}

declare module 'mint-ui/lib/header' {
    namespace Header {
        const name: 'mtHeader'
    }
    export default Header
}

declare module 'mint-ui/lib/tabbar' {
    namespace Tabbar {
        const name: 'mtTabbar'
    }
    export default Tabbar
}

declare module 'mint-ui/lib/tab-item' {
    namespace TabItem {
        const name: 'mtTabItem'
    }
    export default TabItem
}

declare module 'mint-ui/lib/navbar' {
    namespace Navbar {
        const name: 'mtNavbar'
    }
    export default Navbar
}

declare module 'mint-ui/lib/button' {
    namespace Button {
        const name: 'mtButton'
    }
    export default Button
}

declare module 'mint-ui/lib/cell' {
    namespace Cell {
        const name: 'mtCell'
    }
    export default Cell
}

declare module 'mint-ui/lib/cell-swipe' {
    namespace CellSwipe {
        const name: 'mtCellSwipe'
    }
    export default CellSwipe
}

declare module 'mint-ui/lib/spinner' {
    namespace Spinner {
        const name: 'mtSpinner'
    }
    export default Spinner
}

declare module 'mint-ui/lib/tab-container' {
    namespace TabContainer {
        const name: 'mtTabContainer'
    }
    export default TabContainer
}

declare module 'mint-ui/lib/tab-container-item' {
    namespace TabContainerItem {
        const name: 'mtTabContainerItem'
    }
    export default TabContainerItem
}

declare module 'mint-ui/lib/search' {
    namespace Search {
        const name: 'mtSearch'
    }
    export default Search
}

declare module 'mint-ui/lib/switch' {
    namespace Switch {
        const name: 'mtSwitch'
    }
    export default Switch
}

declare module 'mint-ui/lib/checklist' {
    namespace Checklist {
        const name: 'mtChecklist'
    }
    export default Checklist
}

declare module 'mint-ui/lib/radio' {
    namespace Radio {
        const name: 'mtRadio'
    }
    export default Radio
}

declare module 'mint-ui/lib/field' {
    namespace Field {
        const name: 'mtField'
    }
    export default Field
}

declare module 'mint-ui/lib/badge' {
    namespace Badge {
        const name: 'mtBadge'
    }
    export default Badge
}
