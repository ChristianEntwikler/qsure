import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ClientsComponent } from './user/clients/clients.component';
import { ClientsonlyComponent } from './user/clientsonly/clientsonly.component';
import { ItemsComponent } from './user/items/items.component';
import { ShopsComponent } from './user/shops/shops.component';
import { ShopsonlyComponent } from './user/shopsonly/shopsonly.component';
import { ClickfreqComponent } from './user/clickfreq/clickfreq.component';
import { CreateclientComponent } from './user/createclient/createclient.component';
import { CreateshopComponent } from './user/createshop/createshop.component';
import { CreateitemComponent } from './user/createitem/createitem.component';
import { UsersComponent } from './user/users/users.component';
import { AgentComponent } from './user/agent/agent.component';
import { UserlogComponent } from './user/userlog/userlog.component';
import { UsersonlyComponent } from './user/usersonly/usersonly.component';
import { RolesetupComponent } from './user/rolesetup/rolesetup.component';
import { RolesComponent } from './user/roles/roles.component';
import { UserroleComponent } from './user/userrole/userrole.component';

const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
  path: "profile",
  component: ProfileComponent
  },
  {
    path: "clients",
    component: ClientsComponent
  },
  {
    path: "clientso",
    component: ClientsonlyComponent
  },
  {
    path: "shops",
    component: ShopsComponent
  },
  {
    path: "shopso",
    component: ShopsonlyComponent
  },
  {
    path: "items",
    component: ItemsComponent
  },
  {
    path: "clickfreq",
    component: ClickfreqComponent
  },
  {
    path: "reg/client",
    component: CreateclientComponent
  },
  {
    path: "reg/shop",
    component: CreateshopComponent
  },
  {
    path: "reg/item",
    component: CreateitemComponent
  },
  {
    path: "reg/user",
    component: UsersComponent
  },
  {
    path: "reg/agent",
    component: AgentComponent
  },
  {
    path: "report/usertrail",
    component: UserlogComponent
  },
  {
    path: "report/userrole",
    component: UserroleComponent
  },
  {
    path: "report/userso",
    component: UsersonlyComponent
  },
  {
    path: "reg/role",
    component: RolesetupComponent
  },
  {
    path: "report/role",
    component: RolesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
