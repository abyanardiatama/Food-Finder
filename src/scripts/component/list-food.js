class ListFood extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="listFood" class="row justify-content-center">
        </div>
        `;
    }
}

customElements.define("list-food", ListFood)