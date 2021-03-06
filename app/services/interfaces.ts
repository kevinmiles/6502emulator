import {ICompiler, ICpuExtended} from '../emulator/interfaces';

import {EventEmitter} from 'angular2/core';

export interface IConsoleService {
    lines: string[];
    logEvent: EventEmitter<string>;
    log(message: string);
} 
    
export interface ICpuService {
    getCpu(): ICpuExtended;    
    getCompiler(): ICompiler;    
}
    
export interface IDisplayService {
    pixels: number[];
    draw(address: number, value: number): void;
    callback: (address: number, value: number) => void;
}