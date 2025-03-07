import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        title: 'Home page',
    },
    { 
        path: 'about', 
        component: AboutComponent,
        title: 'About',
    },
    { 
        path: 'contact', 
        component: ContactComponent,
        title: 'Contact',
    },
    { 
        path: 'gallery', 
        component: GalleryComponent,
        title: 'Gallery',
    },
    { 
        path: 'menu', 
        component: MenuComponent,
        title: 'Menu',
    },
];
