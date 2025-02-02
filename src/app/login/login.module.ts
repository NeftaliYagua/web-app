/** Angular Imports */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

/** Custom Components */
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Login Module
 *
 * All components related to user authentication should be declared here.
 */
@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
    TranslateModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    ResetPasswordComponent,
    TwoFactorAuthenticationComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class LoginModule {}
