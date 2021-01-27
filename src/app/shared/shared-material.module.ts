import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule}  from "@angular/material/card";
import { MatStepperModule } from "@angular/material/stepper";
import { MatRippleModule} from "@angular/material/core";
import { MatExpansionModule} from "@angular/material/expansion";
import { MatButtonToggleModule} from "@angular/material/button-toggle";
import { MatChipsModule} from "@angular/material/chips";
import { MatIconModule} from "@angular/material/icon";
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatProgressBarModule} from "@angular/material/progress-bar";
import { MatDialogModule} from "@angular/material/dialog";
import { MatTooltipModule} from "@angular/material/tooltip";
import { MatSnackBarModule} from "@angular/material/snack-bar";
import { MatTableModule} from "@angular/material/table";
import { MatSortModule} from "@angular/material/sort";
import { MatPaginatorModule} from "@angular/material/paginator";
import { MatNativeDateModule} from "@angular/material/core";
import { MatTreeModule} from "@angular/material/tree";
import { MatBadgeModule} from "@angular/material/badge";
import { MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { MatDividerModule} from "@angular/material/divider";

import { MatButtonModule} from "@angular/material/button";
import { MatInputModule} from "@angular/material/input";
import { MatAutocompleteModule} from "@angular/material/autocomplete";
import { MatDatepickerModule} from "@angular/material/datepicker";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatRadioModule} from "@angular/material/radio";
import { MatSelectModule} from "@angular/material/select";
import { MatSliderModule} from "@angular/material/slider";
import { MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MatMenuModule} from "@angular/material/menu";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatGridListModule} from "@angular/material/grid-list";
import { MatCheckboxModule} from "@angular/material/checkbox";
import { MatListModule} from "@angular/material/list";
import { MatTabsModule} from "@angular/material/tabs";

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatTreeModule,
    MatRippleModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatDividerModule,
    FlexLayoutModule,
    NgxDatatableModule
  ]
})
export class SharedMaterialModule {}
