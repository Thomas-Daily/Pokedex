export class PokeList {
  constructor(data) {
    this.name = data.name
    this.url = data.url
  }

  get pokeListTemplate() {
    return `
    <div class="selectable no-select p-3">
  <p class="mb-0"><b>${this.name}</b></p>
    </div>
    `
  }
}

