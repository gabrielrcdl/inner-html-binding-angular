import { Component } from '@angular/core';

@Component({
  selector: 'app-inner-html-binding',
  templateUrl: './innerHtml.component.html',
  styles: ['.valor-interpolado{l}'],
})
export class InnerHtmlBindingComponent {
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
}
