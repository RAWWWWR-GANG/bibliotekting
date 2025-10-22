function updateRegisterBook(){
    const book = model.viewState.registerBook;
    const statusList = model.data.readingstatus;

    let content = "";
    for (let key in book) {
        if (key === "readingStatus") continue;
        content += `
        <label>${key}</label>
      <input type="text" value="${book[key] || ''}"
             oninput="model.viewState.registerBook.${key} = this.value">
    `;
  }

  // Lag dropdown for readingStatus
  const statusField = `
    <label>Reading Status</label>
    <select onchange="model.viewState.registerBook.readingStatus = this.value">
      ${statusList.map(s => `
        <option value="${s.id}" ${s.id == book.readingStatus ? 'selected' : ''}>
          ${s.status}
        </option>`).join('')}
    </select>
  `;

  // Samle alt og vis
  document.getElementById('app').innerHTML = `
    <h2>Register New Book</h2>
    ${content}
    ${statusField}
    <button onclick="saveNewBook()">Save</button>
    <button onclick="goToPage('home')">Cancel</button>
  `;
}