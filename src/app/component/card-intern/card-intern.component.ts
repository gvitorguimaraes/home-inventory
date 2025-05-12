import {ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Item } from '../../model/Item';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-card-intern',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './card-intern.component.html',
  styleUrl: './card-intern.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardInternComponent {

  @Input() public item: Item = new Item();
  
  readonly dialog = inject(MatDialog);
  
  public showDetailModal()
  {
    const dialogRef = this.dialog.open(DetailDialogComponent,
      {data : this.item}
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
