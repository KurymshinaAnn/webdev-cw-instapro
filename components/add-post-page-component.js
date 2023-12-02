import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";
import { uploadImage } from "../api.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    let loadingImageUrl;

    // TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
      <div class="form">
       <h3 class="form-title">Добавить пост</h3>
       <div class="form-inputs">
        <div class="upload-image-container"></div>
        <div>
         <label for="photo-text">Опишите фотографию:</label>
         <textarea id="photo-text" class="textarea input"></textarea>
        </div>
        <button class="button" id="add-button">Добавить</button>
       </div>
      </div>
    </div>
  `;

    appEl.innerHTML = appHtml;

    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });

    renderUploadImageComponent({
      element: document.querySelector(".upload-image-container"),
      onImageUrlChange(newImageUrl) {
        loadingImageUrl = newImageUrl;
      },
    });

    document.getElementById("add-button").addEventListener("click", () => {
      const description = document.getElementById("photo-text").value;
      if (description === null || description.trim() === "") {
        alert("Соси бибу, пиши текст");
        return;
      }
      if (loadingImageUrl === undefined) {
        alert("Соси бибу, грузи фото");
        return;
      }
      onAddPostClick({
        description: description,
        imageUrl: loadingImageUrl,
      });
    });
  };

  render();
}
