import { Component, OnInit } from '@angular/core';
import { Tile } from '../models/tile';
import { TileService } from '../services/tile.service';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
    public tiles: Tile[];
    public isShuffled = false;

    constructor(private tileService: TileService) {}

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
