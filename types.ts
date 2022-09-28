import { ReactElement, ReactNode } from 'react';


export interface SliderOptions {
    children:ReactNode;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    navIconContainer?:string;
    containerClassName?:string;
    sliderContainerClassName?:string;
    windowWidth:string;
    windowHeight:string;
    navPanel?:string;
    arrayContainer?:string;
    navItemClassName?:string;
    navItemInactive?:string;
    navItemActive?:string;
    navItemActiveWidth?:string;
    navItemInactiveWidth?:string;
}