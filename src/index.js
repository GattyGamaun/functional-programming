import initModel from './Model';
import update from './Update';
import view from './View';
import app from './App';

const node = document.querySelector('.main');
app(initModel, update, view, node)