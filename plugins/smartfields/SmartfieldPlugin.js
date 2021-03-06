import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import SmartfieldEditing from './SmartfieldEditing';
import SmartfieldsToolbar from './components/SmartfieldsToolbar';

export default class SmartfieldPlugin extends Plugin {
  static get pluginName() {
    return 'Smartfield';
  }

  static get requires() {
    return [SmartfieldEditing, SmartfieldsToolbar];
  }
}
