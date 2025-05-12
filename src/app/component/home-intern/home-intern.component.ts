import { Component, inject } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardInternComponent } from '../card-intern/card-intern.component';
import { Item } from '../../model/Item';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-home-intern',
  imports: [
    TopbarComponent,
    MatButtonModule,
    MatIconModule,
    CardInternComponent,
    CommonModule
  ],
  templateUrl: './home-intern.component.html',
  styleUrl: './home-intern.component.css'
})
export class HomeInternComponent {

  readonly dialog = inject(MatDialog);
  dataService = inject(DataService);

  public itemsList = this.dataService.items;
  public newItem: Item = new Item();

  public constructor()
  {
  }

  public addNewItem(): void
  {
    // criar novo objeto item
    this.newItem = new Item();

    // abrir o modal
    const dialogRef = this.dialog.open(DetailDialogComponent,
          {data : this.newItem}
        );
      

    dialogRef.afterClosed().subscribe(item => {
      this.dataService.add(this.newItem);
    });
  }
}
