import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './main.page.html',
  styleUrls: ['main.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPage {
  constructor(
  ) {
  }
}
