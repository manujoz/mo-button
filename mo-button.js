import { LitElement, html, css } from "lit";

export class MoButton extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <button><slot></slot></button>
        `;
    }
}
customElements.define("mo-button", MoButton);
