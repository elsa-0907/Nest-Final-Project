import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { Products } from "./pages/products/products";
import { Productdetails } from "./pages/productdetails/productdetails";

export const routes: Routes = [
    {
        path:"",
        component:Home

    },
    {
        path:"About",
        component:About
    },
    {
        path:"Contact",
        component:Contact
    },
    {
        path:"Products",
        component:Products
    },
    {
        path:"product/:id",
        component:Productdetails
    }

];
