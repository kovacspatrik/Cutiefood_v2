import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';
import { RecipeListService } from 'src/app/Services/recipe-list.service';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss'],
})
export class RegistrationModalComponent {
  registerData: User = {
    userName: '',
    password: '',
  };

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private authService: AuthService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content, { size: 'md', backdrop: true });
  }

  registerUser() {
    if (
      this.registerData.userName.length > 3 &&
      this.registerData.password.length > 3
    ) {
      this.authService.register(this.registerData).subscribe((res) => {
        console.log(res);
      });
    } else {
      alert('Hibás felhasználónév vagy jelszó!');
    }
    this.modalService.dismissAll();
  }
}
