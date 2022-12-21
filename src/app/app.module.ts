import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InnerHtmlBindingComponent } from '../InnerHtmlExample/innerHtml.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [InnerHtmlBindingComponent],
  bootstrap: [InnerHtmlBindingComponent],
})
export class AppModule {}
