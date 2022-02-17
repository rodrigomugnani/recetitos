import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
_parentElement = document.querySelector('.results');
_errorMessage = 'Capo/a, tenes que buscar en ingles, no hay milanesas aca.'
_message = '';

_generateMarkup() {
  
return this._data.map(result => previewView.render(result, false)).join('')

}
};

export default new ResultsView();

// <div class="preview__user-generated">
//<svg>
//<use href="${icons}#icon-user"></use>
//</svg>