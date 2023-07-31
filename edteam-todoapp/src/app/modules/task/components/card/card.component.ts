import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TestCourseService } from '@shared/services/test-course.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @ViewChild('refId') elementRefId: ElementRef = new ElementRef('  hola');
  @Input() idOrder: string | number = 0;
  @Input() items: Array<any> = [];

  constructor(private testCourseService:TestCourseService) {}

  sendData(): void {
    this.testCourseService.setData('hola desde card :D');
  }
}
