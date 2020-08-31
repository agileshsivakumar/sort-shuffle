import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TileModule } from './tile/tile.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, TileModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
