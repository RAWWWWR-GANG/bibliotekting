function overviewView(model) {
  const book = model.viewState.overview;

  if (book.editBook) {
    // ✏️ Edit mode
    return `
      <div class="overview-edit">
        <h2>Edit Book</h2>

        <div class="form-group">
          <label>Title:</label>
          <input type="text" value="${book.title}" 
                 oninput="model.viewState.overview.title=this.value" />
        </div>

        <div class="form-group">
          <label>Publisher:</label>
          <input type="text" value="${book.publisher}" 
                 oninput="model.viewState.overview.publisher=this.value" />
        </div>

        <div class="form-group">
          <label>Language:</label>
          <input type="text" value="${book.language}" 
                 oninput="model.viewState.overview.language=this.value" />
        </div>

        <div class="form-group">
          <label>Pages:</label>
          <input type="number" value="${book.pages}" 
                 oninput="model.viewState.overview.pages=this.value" />
        </div>

        <div class="form-group">
          <label>ISBN:</label>
          <input type="text" value="${book.isbn}" 
                 oninput="model.viewState.overview.isbn=this.value" />
        </div>

        <div class="form-group">
          <label>Year:</label>
          <input type="text" value="${book.publisherYear}" 
                 oninput="model.viewState.overview.publisherYear=this.value" />
        </div>

        <div class="form-group">
          <label>Rating:</label>
          <input type="number" min="0" max="5" value="${book.rating}" 
                 oninput="model.viewState.overview.rating=this.value" />
        </div>

        <div class="form-group">
          <label>Reading Status:</label>
          <select onchange="model.viewState.overview.readingStatus=this.value">
            ${model.data.readingStatus.map(status => `
              <option value="${status.id}" ${status.id == book.readingStatus ? 'selected' : ''}>
                ${status.status}
              </option>
            `).join("")}
          </select>
        </div>

        <div class="form-group">
          <label>Details:</label>
          <textarea oninput="model.viewState.overview.details=this.value">${book.details}</textarea>
        </div>

        <div class="buttons">
          <button onclick="saveEditedBook(${book.id})">💾 Save</button>
          <button onclick="cancelEdit()">✖ Cancel</button>
        </div>
      </div>
    `;
  } else {
    // View mode
    return `
      <div class="overview">
        <h2>Book Overview</h2>

        <div class="book-details">
          <img src="${book.img}" alt="${book.title}" class="book-image" />

          <div class="book-info">
            <h3>${book.title || "Unknown Title"}</h3>
            <p><strong>Publisher:</strong> ${book.publisher}</p>
            <p><strong>Language:</strong> ${book.language}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>ISBN:</strong> ${book.isbn}</p>
            <p><strong>Year:</strong> ${book.publisherYear}</p>
            <p><strong>Rating:</strong> ${book.rating} / 5</p>
            <p><strong>Status:</strong> ${
              model.data.readingStatus.find(s => s.id == book.readingStatus)?.status || "unknown"
            }</p>
            <p><strong>Details:</strong> ${book.details}</p>
          </div>
        </div>

        <div class="buttons">
          <button onclick="goToPage('home')">← Back</button>
          <button onclick="startEditBook(${book.id})">✏️ Edit</button>
          <button onclick="deleteBook(${book.id})">🗑 Delete</button>
        </div>
      </div>
    `;
  }
}
