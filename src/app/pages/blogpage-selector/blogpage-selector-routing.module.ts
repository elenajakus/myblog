import { BlogpageSelectorComponent } from './blogpage-selector.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component:  BlogpageSelectorComponent,
        data: { title: 'Blogposztok - My_favourites.E' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogpageSelectorRoutingModule { }
