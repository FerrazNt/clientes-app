import { AfterViewInit, Component } from '@angular/core';

// Esse Meu import está diferente da versão do Professor
import * as $ from 'jquery';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(){
    (function($) {
      "use strict";
  
      // Add active state to sidbar nav links
      var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
              // Alterei a Forma de Chamada do href
              if ($(this).attr('href') === path) {
                  $(this).addClass("active");
              }
          });
  
      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }

}
