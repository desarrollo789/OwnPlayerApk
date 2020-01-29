import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './main/gallery/gallery.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [GalleryComponent],
    exports: [
        GalleryComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})

export class ComponentsModule { }
