import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';
import { AccountService } from 'src/app/services/backend-api/account/account.service';

const menu = [
  //{ routerLink: [{ outlets: { sidebar: null } }], iconClass: "fas fa-bars", position: "top", label: "Menu", click: "", subject: "Mapa" },
  { routerLink: [{ outlets: { sidebar: 'alarmes' } }], iconClass: "fa fa-bell", position: "top", label: "Alarmes", click: "", subject: "Alarme" },
  { routerLink: [{ outlets: { sidebar: 'cameras' } }], iconClass: "fas fa-video", position: "top", label: "Câmeras", click: "", subject: "Camera" },
  { routerLink: [{ outlets: { sidebar: 'ocorrencias' } }], iconClass: "fab fa-hotjar", position: "top", label: "Ocorrências", click: "", subject: "Ocorrencia" },
  { routerLink: [{ outlets: { sidebar: 'geoserver' } }], iconClass: "fas fa-map-marked-alt", position: "top", label: "Pesquisa no Mapa", click: "", subject: "Shape" },
  { routerLink: [{ outlets: { sidebar: 'veiculos' } }], iconClass: "fa fa-car-alt", position: "top", label: "Veículos", click: "", subject: "Veiculo" },
  { routerLink: [{ outlets: { sidebar: 'marcador' } }], iconClass: "fa fa-solid fa-thumbtack", position: "top", label: "Marcadores", click: "", subject: "Marcador" },
  { routerLink: [{ outlets: { sidebar: 'contatos' } }], iconClass: "fas fa-phone", position: "top", label: "Contatos", click: "", subject: "Contato" },
  { routerLink: "/main/mapa", iconClass: "far fa-map", position: "bottom", label: "Mapa", click: "", subject: "Mapa" },
  { routerLink: "/main/dashboard", iconClass: "fas fa-chart-bar", position: "bottom", label: "Dashboard", click: "", subject: "Dashboard" },
  { routerLink: [{ outlets: { sidebar: 'usuarios' } }], iconClass: "fas fa-user-alt", position: "bottom", label: "Usuários", click: "", subject: "Usuario" },
  { routerLink: "/login", iconClass: "fas fa-sign-out-alt", position: "bottom", label: "Sair", click: "exit", subject: "Logout" },
]
@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit, OnDestroy {
  menuItems: any;
  selectedSubject: string;

  constructor(
    private router: Router,
    private account: AccountService,
    private authorization: AuthorizationService,
  ) { }

  ngOnInit(): void {
    this.menuItems = menu;
  }

  ngOnDestroy(): void {
    this.selectedSubject = null;
  }

  closeSidebar() {
    this.router.navigate([{ outlets: { sidebar: null } }]);
  }

  menuClickEvent(item) {
    if(item.subject !== this.selectedSubject) {
      this.selectedSubject = item.subject;
      const newMenuItems = JSON.parse(JSON.stringify(menu));
      this.menuItems = newMenuItems.map(i => {
        if(i.subject === item.subject) {
          i.routerLink = [{ outlets: { sidebar: null } }];
        }
        return i;
      })
    } else {
      this.menuItems = menu;
      this.selectedSubject = null;
    } 

    switch (item?.click) {
      case "exit":
        this.account.logout();
        break;
      default:
        break;
    }
  }

  checkPermission(action, subject) {
    if(subject == "Mapa" || subject == "Logout") return true;
    return this.authorization.checkPermission(action, subject);
  }
}
