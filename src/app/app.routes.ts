import { Routes } from '@angular/router';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { CreatprofileComponent } from './Components/creatprofile/creatprofile.component';
import { BringsyoutoComponent } from './Components/bringsyouto/bringsyouto.component';
import { FooterComponent } from './Components/footer/footer.component';

export const routes: Routes = [
    {path:'', component:LoginFormComponent},
    {path:'profile',component:CreatprofileComponent},
    {path:'brings',component:BringsyoutoComponent},
    {path:'last',component:FooterComponent}
];
