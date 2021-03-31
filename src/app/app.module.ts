import { ConvertPipe } from "./convert.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ConverterPipe } from "./converter.pipe";

@NgModule({
  declarations: [AppComponent, ConverterPipe, ConvertPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
