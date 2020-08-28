import { Component, OnInit, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TileService {
    getTiles(): Tile[] {
        return [
            {
                id: 1,
                color: '#6F98A8'
            },
            {
                id: 2,
                color: '#2B8EAD'
            },
            {
                id: 3,
                color: '#333333'
            },
            {
                id: 4,
                color: '#2B8EAD'
            },
            {
                id: 5,
                color: '#333333'
            },
            {
                id: 6,
                color: '#BFBFBF'
            },
            {
                id: 7,
                color: '#BFBFBF'
            },
            {
                id: 8,
                color: '#6F98A8'
            },
            {
                id: 9,
                color: '#333333'
            },
        ];
    }
}

export interface Tile {
    id: number;
    color: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public tiles: Tile[];
    public isShuffled = false;

    constructor(private tileService: TileService) { }

    ngOnInit(): void {
        this.tiles = this.tileService.getTiles();
    }

    public sort() {
        for (let i = 1; i < this.tiles.length; i++) {
            for (let j = 0; j < i; j++) {
                if (this.tiles[i].id < this.tiles[j].id) {
                    const tempTile = this.tiles[i];
                    this.tiles[i] = this.tiles[j];
                    this.tiles[j] = tempTile;
                }
            }
        }
        this.isShuffled = false;
    }

    public shuffle() {
        for (let i = this.tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tempTile = this.tiles[i];
            this.tiles[i] = this.tiles[j];
            this.tiles[j] = tempTile;
        }
        this.isShuffled = true;
    }

}
