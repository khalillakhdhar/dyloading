import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';

@Component({
  selector: 'app-dynamic-loader',
  templateUrl: './dynamic-loader.component.html',
  styleUrls: ['./dynamic-loader.component.css']
})
export class DynamicLoaderComponent {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
DynamicComponentComponent!: ViewContainerRef;
componentRef!:ComponentRef<DynamicComponentComponent>;
inputMessage: string="";
time=new Date();
constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
loadComponent()
{
  const componentFactory =this.componentFactoryResolver.resolveComponentFactory(DynamicComponentComponent);
  this.componentRef =this.DynamicComponentComponent.createComponent(componentFactory);
  this.componentRef.instance.message = this.inputMessage;
  this.componentRef.instance.time = this.time;
this.inputMessage='';
}

}
