/** Angular Imports */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Custom Directives */
import { HasPermissionDirective } from './has-permission/has-permission.directive';
import { FormatAmountDirective } from './format-amount.directive';

/**
 *  Directives Module
 *
 *  All custom directives should be declared and exported here.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  declarations: [
    HasPermissionDirective,
    FormatAmountDirective
  ],
  exports: [
    HasPermissionDirective,
    FormatAmountDirective
  ]
})
export class DirectivesModule {}
