import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-alert',
  styleUrl: 'alert.css',
  scoped: true,
})
export class MyAlert {
  /**
   * The text that has a default value
   */
  @Prop() text: string = "I don't know what we're laughing about!!";

  @Prop() kind: "info" | "warning" | "error";

  render() {
    return <p class="{this.kind}">{this.text}</p>; 
  }
}
