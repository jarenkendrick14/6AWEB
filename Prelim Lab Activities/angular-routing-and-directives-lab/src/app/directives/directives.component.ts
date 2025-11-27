import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { CommonModule } from '@angular/common'; // Good practice to include

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  // -- Structural Directives Variables --
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;

  // -- Else If Variables --
  monthNameStatic: string = 'Mar';
  monthNameDynamic: string = 'Mar';

  // -- For Loop Variables --
  cityList: string[] = ["Angeles", "San Fernando", "Mabalacat", "Tarlac", "Bataan"];

  // -- Object Array --
  studentList: any[] = [
    { stud_name: 'D Esquivel', course: 'Web Development', isActive: false },
    { stud_name: 'J Dizon', course: 'Network Administration', isActive: false },
    { stud_name: 'F Alejandro', course: 'Systems Development', isActive: false },
    { stud_name: 'J David', course: 'CyberSecurity', isActive: false },
    { stud_name: 'C Quintana', course: 'Web Development', isActive: true },
  ];

  // -- Methods --
  showNote() {
    this.isNoteVisible = true;
  }

  hideNote() {
    this.isNoteVisible = false;
  }

  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
