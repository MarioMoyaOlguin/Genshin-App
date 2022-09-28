export const sliderDefaultStyles = `
    .container-className {
        width: 100%;
        padding: 40px 0 40px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }
    .pos-relative {
        position: relative;
    }
    .nav-icon-container {
        position: absolute;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 20;
        backdrop-filter: blur(8px);
    }
    .nav-icon {
        width: 3.5rem;
        height: 3.5rem;
        transform-origin: center;
        padding: 6px;
        stroke: white;
    }
    .transitions {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
    .nav-icon:hover {
        transform: scale(1.1);
    }
    .right {
        right: 0px;
    }
    .left {
        left: 0px;
    }
    .overflow {
        overflow: hidden;
    }
    .array-container {
        display: flex;
        flex-shrink: 0;
    }
    .navigation-panel {
        display: flex;
        height: 40px;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
    .nav-items {
        height: 8px;
        border-radius: 9999px;
        transform-origin: center;
    }
    .nav-items:hover {
        background-color: rgba(242, 106, 28, 0.8);
    }
    .bg-nav-item-inactive {
        background-color: rgba(173, 220, 252, 0.8);
    }
    .bg-nav-item-active {
        background-color: rgba(242, 106, 28, 0.8);
    }
    `