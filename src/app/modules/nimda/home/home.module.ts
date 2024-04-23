import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShopsComponent } from './user/shops/shops.component';
import { ShopsonlyComponent } from './user/shopsonly/shopsonly.component';
import { ClientsComponent } from './user/clients/clients.component';
import { ClientsonlyComponent } from './user/clientsonly/clientsonly.component';
import { ItemsComponent } from './user/items/items.component';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ClickfreqComponent } from './user/clickfreq/clickfreq.component';
import { CreateclientComponent } from './user/createclient/createclient.component';
import { CreateshopComponent } from './user/createshop/createshop.component';
import { CreateitemComponent } from './user/createitem/createitem.component';
import { UsersComponent } from './user/users/users.component';
import { UserlogComponent } from './user/userlog/userlog.component';
import { AgentComponent } from './user/agent/agent.component';
import { RolesetupComponent } from './user/rolesetup/rolesetup.component';
import { RolesComponent } from './user/roles/roles.component';
import { UserroleComponent } from './user/userrole/userrole.component';
import { UsersonlyComponent } from './user/usersonly/usersonly.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    DashboardComponent,
    ProfileComponent,
    ShopsComponent,
    ShopsonlyComponent,
    ClientsComponent,
    ClientsonlyComponent,
    ItemsComponent,
    ClickfreqComponent,
    CreateclientComponent,
    CreateshopComponent,
    CreateitemComponent,
    UsersComponent,
    UserlogComponent,
    AgentComponent,
    RolesetupComponent,
    RolesComponent,
    UserroleComponent,
    UsersonlyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatPaginatorModule
  ]
})
export class AdminHomeModule { }
