import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileComponent } from './tile.component';

describe('TileComponent', () => {
    let component: TileComponent;
    let fixture: ComponentFixture<TileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TileComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should populate tiles', () => {
        expect(component.tiles).toBeDefined();
    });

    it('should sort tiles', () => {
        component.tiles = [
            {
                id: 3,
                color: 'white',
            },
            {
                id: 1,
                color: 'black',
            },
            {
                id: 2,
                color: 'red',
            },
        ];
        component.sort();
        expect(component.tiles[0].id).toBe(1);
        expect(component.isShuffled).toBe(false);
    });

    it('should shuffle tiles', () => {
        component.tiles = [
            {
                id: 1,
                color: 'white',
            },
            {
                id: 2,
                color: 'black',
            },
            {
                id: 3,
                color: 'red',
            },
        ];
        component.shuffle();
        expect(component.tiles[0].id).not.toBe(1);
        expect(component.isShuffled).toBe(true);
    });
});
