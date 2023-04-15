import { Component } from '@angular/core';
import { EffectAllowed } from 'ngx-drag-drop';

export interface DraggableItem {
  content: string;
  effectAllowed: EffectAllowed;
  disable: boolean;
  handle: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do';


  firstItems: DraggableItem[] = [
    {
      content: 'First Item',
      effectAllowed: 'move',
      disable: false,
      handle: false
    },
    {
      content: 'Second Item',
      effectAllowed: 'move',
      disable: false,
      handle: false
    }
  ];

  secondItems: DraggableItem[] = [
    {
      content: 'Third Item',
      effectAllowed: 'move',
      disable: false,
      handle: false
    },
    {
      content: 'Fourth Item',
      effectAllowed: 'move',
      disable: false,
      handle: false
    }
  ];

  innerSecondItems: DraggableItem[] =[];

  onDrop(destList: DraggableItem[], event: any) {
    console.log('onDrop', destList, event);
    if (event.data) {
      if (event.index) {
        destList.splice(event.index - 1, 0, event.data);
      } else {
        destList.push(event.data);
      }
    }
  }

  onDragged(item: DraggableItem, srcList: DraggableItem[], action: string) {
    console.log('onDragged', item, srcList, action);
    if (action === 'move') {
      srcList.splice(srcList.indexOf(item), 1);
    }
  }


}
