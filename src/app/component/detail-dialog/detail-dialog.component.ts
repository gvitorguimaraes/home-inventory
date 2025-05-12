import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { Item } from '../../model/Item';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Category } from '../../model/Category';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-detail-dialog',
  imports: [
    MatDialogModule, 
    MatButtonModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    CommonModule
  ],
  templateUrl: './detail-dialog.component.html',
  styleUrl: './detail-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailDialogComponent implements OnInit{
  private _snackBar = inject(MatSnackBar);
  
  readonly dialogRef = inject(MatDialogRef<DetailDialogComponent>);
  readonly data = inject<Item>(MAT_DIALOG_DATA);
  readonly categoryOptions = Object.values(Category);
  public editMode = false;
  
  ngOnInit(): void
  {
    this.editMode = false;
  }

  onNoClick(): void 
  {
    this.dialogRef.close();
  }

  changeToEdit(): void
  {
    this.editMode = true;
  }

  saveItem() {
    this._snackBar.open("Item saved", 'Ok',{
      duration: 3000
    });
  }
}
