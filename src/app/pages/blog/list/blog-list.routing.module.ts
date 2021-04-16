import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list.component';

const routes: Routes = [
    {
        path: '',
        component: BlogListComponent,
        data: { title: 'Blogposztok - My_favourites.e' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogListRoutingModule { }
