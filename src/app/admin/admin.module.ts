import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashbordPageComponent } from './dashbord-page/dashbord-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        LoginPageComponent,
        DashbordPageComponent,
        CreatePageComponent,
        EditPageComponent
    ],
    imports: [
        CommonModule,   
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    {path: '', redirectTo:'/admin/login', pathMatch: 'full'},
                    {path: 'login', component: LoginPageComponent},
                    {path: 'dashbord', component: DashbordPageComponent},
                    {path: 'create', component: CreatePageComponent},
                    {path: 'post/:id/edit', component: EditPageComponent}
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AdminModule {

}