import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ngxUiLoaderConfig } from './config/LoaderConfig';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, children: [{
    path: "", loadChildren: () =>
      import("./shared/home/home.module").then(
        (home) => home.HomeModule
      ),
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
