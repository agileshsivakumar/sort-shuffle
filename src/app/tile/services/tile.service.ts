import { Injectable } from '@angular/core';
import { Tile } from '../models/tile';

@Injectable({
    providedIn: 'root',
})
export class TileService {
    getTiles(): Tile[] {
        return [
            {
                id: 1,
                color: '#6F98A8',
            },
            {
                id: 2,
                color: '#2B8EAD',
            },
            {
                id: 3,
                color: '#333333',
            },
            {
                id: 4,
                color: '#2B8EAD',
            },
            {
                id: 5,
                color: '#333333',
            },
            {
                id: 6,
                color: '#BFBFBF',
            },
            {
                id: 7,
                color: '#BFBFBF',
            },
            {
                id: 8,
                color: '#6F98A8',
            },
            {
                id: 9,
                color: '#333333',
            },
        ];
    }
}
