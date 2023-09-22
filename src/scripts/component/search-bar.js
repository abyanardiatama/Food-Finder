class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.querySelector("#inputFood").value;
    }

    render() {
        this.innerHTML = `
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title m-0 py-2">Cari Menu</h4>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="inputFood" class="h5 pt-1 pb-2">Nama Makanan</label>
                            <input id="inputFood" type="text" class="form-control py-4" placeholder="Masukkan Nama Makanan...">
                        </div>
                        
                        <div class="form-group">
                            <button id="SearchButton" class=" btn btn-info btn-lg btn-block py-3 display-4 fs-1">Cari Makanan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       `;

        this.querySelector("#SearchButton").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);