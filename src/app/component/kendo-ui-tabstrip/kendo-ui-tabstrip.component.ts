import { Component, OnInit } from '@angular/core';

interface ITab {
  caption: string;
  closable: boolean;
  content: string;
}

const PAGE_SIZE: number = 3;


@Component({
  selector: 'fg-app-kendo-ui-tabstrip',
  templateUrl: './kendo-ui-tabstrip.component.html',
  styleUrls: ['./kendo-ui-tabstrip.component.scss']
})
export class KendoUiTabstripComponent implements OnInit {

  public valueHorizontal: number = 5;
  public valueVertical: number = 5;
  public min: number = 0;
  public max: number = 15;
  public smallStep: number = 1;

  private _hiddenTabIndex: number;
  public get startTabIndex(): number {
    return this._hiddenTabIndex + 1;
  };  
  public get endTabIndex(): number {
    return this.startTabIndex + PAGE_SIZE;
  };  

  public tabsContent: Array<ITab>;

  public get totalPages(): number {
    return this.tabsContent.length - PAGE_SIZE;
  }
  
  public selectedIndex: number = 0;
  

  constructor () { }
 
  ngOnInit() {
    this._hiddenTabIndex = -1;
    this.tabsContent = [
      {
        caption: 'Fusce laoreet sed justo 1',
        closable: true,
        content: `Donec volutpat at eros at aliquam. Nullam a cursus turpis. Pellentesque euismod viverra nunc eu 
          aliquet. Pellentesque placerat, turpis at finibus pharetra, nulla metus dapibus nisi, hendrerit cursus 
          mauris risus ac ipsum. Aenean ornare mi sit amet velit ullamcorper porta sed id velit. Aenean fermentum
          sapien sed mauris sagittis, vel vehicula mauris vehicula. Vestibulum sagittis mi tortor, et dictum tellus
          dignissim feugiat. Nullam nec aliquam erat. Nunc posuere ornare tortor, eget egestas libero imperdiet sed.`
      },
      {
        caption: 'Nullam bibendum ante vitae 2',
        closable: true,
        content: `Nam convallis lorem porttitor arcu lacinia, vel bibendum urna tempus. Nunc auctor tincidunt velit, 
          eget aliquam ante convallis vel. Pellentesque accumsan elementum elit, nec scelerisque tellus blandit ac.
          Nulla pretium porta orci vitae porttitor. Quisque tincidunt, sapien id mollis accumsan, urna metus aliquam 
          odio, ac ultricies nisl lacus sed libero. Cras et augue non metus accumsan volutpat vel at elit. Aliquam at 
          urna gravida, euismod quam eleifend, fringilla ex. Etiam tincidunt tellus dolor. Vestibulum lacinia consequat 
          ornare. Suspendisse hendrerit nibh sit amet nunc volutpat, eget ultrices sem interdum. Donec sodales, quam et 
          egestas gravida, justo nulla elementum odio, non rutrum eros arcu quis dui. Sed vehicula molestie ante et dapibus.`
      },
      {
        caption: 'Etiam vehicula libero sit amet 3',
        closable: true,
        content: `Maecenas sapien mi, tincidunt sed ligula sit amet, facilisis gravida velit. In non consequat lacus, 
          non aliquam eros. Curabitur risus metus, porttitor id ex ac, auctor molestie erat. Nam sit amet rhoncus elit.
          Nulla ac ante sed purus blandit imperdiet eu ac tellus. Pellentesque porta massa ac leo venenatis, ac hendrerit
          risus feugiat. Donec tincidunt commodo mattis. Cras vestibulum purus et consectetur finibus.`
      },
      {
        caption: 'Morbi vel urna diam 4',
        closable: true,
        content: `Sed congue nunc lorem, quis ultricies felis aliquam vel. Nam ac blandit erat. In rhoncus dictum mi, ut
          sollicitudin felis convallis ac. Proin ex felis, porttitor ut dapibus et, aliquet vel nibh. Suspendisse sit amet
          erat lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;`
      },
      {
        caption: 'Fusce laoreet sed justo 5',
        closable: true,
        content: `Donec volutpat at eros at aliquam. Nullam a cursus turpis. Pellentesque euismod viverra nunc eu 
          aliquet. Pellentesque placerat, turpis at finibus pharetra, nulla metus dapibus nisi, hendrerit cursus 
          mauris risus ac ipsum. Aenean ornare mi sit amet velit ullamcorper porta sed id velit. Aenean fermentum
          sapien sed mauris sagittis, vel vehicula mauris vehicula. Vestibulum sagittis mi tortor, et dictum tellus
          dignissim feugiat. Nullam nec aliquam erat. Nunc posuere ornare tortor, eget egestas libero imperdiet sed.`
      },
      {
        caption: 'Nullam bibendum ante vitae 6',
        closable: true,
        content: `Nam convallis lorem porttitor arcu lacinia, vel bibendum urna tempus. Nunc auctor tincidunt velit, 
          eget aliquam ante convallis vel. Pellentesque accumsan elementum elit, nec scelerisque tellus blandit ac.
          Nulla pretium porta orci vitae porttitor. Quisque tincidunt, sapien id mollis accumsan, urna metus aliquam 
          odio, ac ultricies nisl lacus sed libero. Cras et augue non metus accumsan volutpat vel at elit. Aliquam at 
          urna gravida, euismod quam eleifend, fringilla ex. Etiam tincidunt tellus dolor. Vestibulum lacinia consequat 
          ornare. Suspendisse hendrerit nibh sit amet nunc volutpat, eget ultrices sem interdum. Donec sodales, quam et 
          egestas gravida, justo nulla elementum odio, non rutrum eros arcu quis dui. Sed vehicula molestie ante et dapibus.`
      },
      {
        caption: 'Etiam vehicula libero sit amet 7',
        closable: true,
        content: `Maecenas sapien mi, tincidunt sed ligula sit amet, facilisis gravida velit. In non consequat lacus, 
          non aliquam eros. Curabitur risus metus, porttitor id ex ac, auctor molestie erat. Nam sit amet rhoncus elit.
          Nulla ac ante sed purus blandit imperdiet eu ac tellus. Pellentesque porta massa ac leo venenatis, ac hendrerit
          risus feugiat. Donec tincidunt commodo mattis. Cras vestibulum purus et consectetur finibus.`
      },
      {
        caption: 'Morbi vel urna diam 8',
        closable: true,
        content: `Sed congue nunc lorem, quis ultricies felis aliquam vel. Nam ac blandit erat. In rhoncus dictum mi, ut
          sollicitudin felis convallis ac. Proin ex felis, porttitor ut dapibus et, aliquet vel nibh. Suspendisse sit amet
          erat lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;`
      },
      {
        caption: 'Fusce laoreet sed justo 9',
        closable: true,
        content: `Donec volutpat at eros at aliquam. Nullam a cursus turpis. Pellentesque euismod viverra nunc eu 
          aliquet. Pellentesque placerat, turpis at finibus pharetra, nulla metus dapibus nisi, hendrerit cursus 
          mauris risus ac ipsum. Aenean ornare mi sit amet velit ullamcorper porta sed id velit. Aenean fermentum
          sapien sed mauris sagittis, vel vehicula mauris vehicula. Vestibulum sagittis mi tortor, et dictum tellus
          dignissim feugiat. Nullam nec aliquam erat. Nunc posuere ornare tortor, eget egestas libero imperdiet sed.`
      },
      {
        caption: 'Nullam bibendum ante vitae 10',
        closable: true,
        content: `Nam convallis lorem porttitor arcu lacinia, vel bibendum urna tempus. Nunc auctor tincidunt velit, 
          eget aliquam ante convallis vel. Pellentesque accumsan elementum elit, nec scelerisque tellus blandit ac.
          Nulla pretium porta orci vitae porttitor. Quisque tincidunt, sapien id mollis accumsan, urna metus aliquam 
          odio, ac ultricies nisl lacus sed libero. Cras et augue non metus accumsan volutpat vel at elit. Aliquam at 
          urna gravida, euismod quam eleifend, fringilla ex. Etiam tincidunt tellus dolor. Vestibulum lacinia consequat 
          ornare. Suspendisse hendrerit nibh sit amet nunc volutpat, eget ultrices sem interdum. Donec sodales, quam et 
          egestas gravida, justo nulla elementum odio, non rutrum eros arcu quis dui. Sed vehicula molestie ante et dapibus.`
      },
      {
        caption: 'Etiam vehicula libero sit amet 11',
        closable: true,
        content: `Maecenas sapien mi, tincidunt sed ligula sit amet, facilisis gravida velit. In non consequat lacus, 
          non aliquam eros. Curabitur risus metus, porttitor id ex ac, auctor molestie erat. Nam sit amet rhoncus elit.
          Nulla ac ante sed purus blandit imperdiet eu ac tellus. Pellentesque porta massa ac leo venenatis, ac hendrerit
          risus feugiat. Donec tincidunt commodo mattis. Cras vestibulum purus et consectetur finibus.`
      },
      {
        caption: 'Morbi vel urna diam 12',
        closable: true,
        content: `Sed congue nunc lorem, quis ultricies felis aliquam vel. Nam ac blandit erat. In rhoncus dictum mi, ut
          sollicitudin felis convallis ac. Proin ex felis, porttitor ut dapibus et, aliquet vel nibh. Suspendisse sit amet
          erat lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;`
      }
    ];
  }

  public existsNextPage(): boolean {
    return this._hiddenTabIndex <= this.tabsContent.length - PAGE_SIZE - 2;
  }
  public nextPage() {
    if (this.existsNextPage()) {
      this._hiddenTabIndex++; 
    }      
  }

  public existsPreviousPage(): boolean {
    return this._hiddenTabIndex >= 0;
  }
  public previousPage() {
    if (this.existsPreviousPage()) {
      this._hiddenTabIndex--;      
    }   
  }

  public closeTab(index: number): void {
    this.tabsContent.splice(this._hiddenTabIndex + index + 1, 1);
    this.selectedIndex = index; // must be corrected
    if (!this.existsNextPage()) { 
      this.previousPage();
    }
  }

  public sliderChange($event): void {
    this._hiddenTabIndex = $event;
  }

  public needASlider(): boolean {
    return this.totalPages >= 1;
  }

}
