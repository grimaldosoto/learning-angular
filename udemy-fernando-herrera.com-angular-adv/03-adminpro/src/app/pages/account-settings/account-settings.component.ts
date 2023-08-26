import {Component, OnInit} from '@angular/core';
import _default from "chart.js/dist/plugins/plugin.tooltip";
import callbacks = _default.descriptors.callbacks;
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit{
  constructor(private settingService:SettingsService) {}
  ngOnInit(): void {
    this.settingService.checkCurrentTheme();

  }
  changeTheme(theme:string){
    this.settingService.changeTheme(theme);
  }

}
