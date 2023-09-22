class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-dark bg-info text-center py-3 rounded">
            <h4 class="text-center text-white mx-auto font-weight-bold font-montserrat">Dicoding's Restaurant</h4>
        </nav>
            `;
    }
}

customElements.define("app-bar", AppBar)