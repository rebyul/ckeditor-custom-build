import * as SignatureCommands from '../plugins/signature/commands';
import * as SignatureModule from '../plugins/signature';
// export default CkModule;
import * as SmartfieldsRepositoryCommands from '../plugins/smartfields-repository/commands';
import * as smartfieldQueries from '../plugins/smartfields-repository/queries';

/**
 * @license Copyright (c) 2014-2022, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import ContextBase from '@ckeditor/ckeditor5-core/src/context';
import DataFilter from '@ckeditor/ckeditor5-html-support/src/datafilter';
import DataSchema from '@ckeditor/ckeditor5-html-support/src/dataschema';
import DecoupledDocumentEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';
import ExportWord from '@ckeditor/ckeditor5-export-word/src/exportword';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import NarrowSidebar from '@ckeditor/ckeditor5-comments/src/annotations/narrowsidebar';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import Pagination from '@ckeditor/ckeditor5-pagination/src/pagination';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SignaturePlugin from '../plugins/signature/SignaturePlugin';
import { SmartfieldPlugin } from '../plugins/smartfields';
import { SmartfieldsRepository } from '../plugins/smartfields-repository';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext';
import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import TrackChanges from '@ckeditor/ckeditor5-track-changes/src/trackchanges';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import WideSidebar from '@ckeditor/ckeditor5-comments/src/annotations/widesidebar';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

class Context extends ContextBase {}
// An example of a plugin that provides user data for an editor
// // that uses `Comments` and `RevisionHistory` plugins.
// export class UsersIntegration extends Plugin {
//   // Plugins to include in the context.

//   builtinPlugins = [NarrowSidebar, WideSidebar];
//   // Configuration shared between editors:

//   defaultConfig = {
//     // Configuration shared between editors:
//     language: 'en'
//   };
//   static get requires() {
//     return ['Comments'];
//   }

//   init() {
//     const users = this.editor.plugins.get('Users');

//     // Provide user data from your database.
//     users.addUser({
//       id: 'u1',
//       name: 'Kate Smith'
//     });

//     users.addUser({
//       id: 'u2',
//       name: 'Joe Doe'
//     });

//     // Define the local user.
//     users.defineMe('u1');
//   }
// }

class Editor extends DecoupledDocumentEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  Base64UploadAdapter,
  BlockQuote,
  Bold,
  CloudServices,
  Code,
  CodeBlock,
  // Comments,
  DataFilter,
  DataSchema,
  Essentials,
  ExportPdf,
  ExportWord,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  HtmlEmbed,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  // List,
  ListStyle,
  // Markdown,
  MediaEmbed,
  MediaEmbedToolbar,
  Mention,
  PageBreak,
  Pagination,
  Paragraph,
  PasteFromOffice,
  // Placeholder,
  SignaturePlugin,
  SmartfieldPlugin,
  SmartfieldsRepository,
  RemoveFormat,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  StandardEditingMode,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  TextPartLanguage,
  TextTransformation,
  TodoList,
  TrackChanges,
  Underline,
  WordCount
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      'smartfield',
      'heading',
      '|',
      'fontFamily',
      'fontSize',
      '|',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'alignment',
      '|',
      'numberedList',
      'bulletedList',
      '|',
      'outdent',
      'indent',
      '|',
      'todoList',
      'link',
      'blockQuote',
      'imageUpload',
      'insertTable',
      'mediaEmbed',
      '|',
      'undo',
      'redo',
      // 'comment',
      'exportPdf',
      'exportWord',
      'findAndReplace',
      'highlight',
      'horizontalLine',
      'imageInsert',
      'pageNavigation',
      'pageBreak',
      'removeFormat',
      'specialCharacters',
      'restrictedEditingException',
      'subscript',
      'superscript'
      // 'placeholder',
    ]
  },
  language: 'en',
  image: {
    toolbar: [
      // 'comment',
      'imageTextAlternative',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      'linkImage'
    ]
  },
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      {
        model: 'heading1',
        view: { name: 'p', classes: 'ck-heading1' },
        title: 'Heading 1',
        class: 'ck-heading1'
      },
      {
        model: 'heading2',
        view: { name: 'p', classes: 'ck-heading2' },
        title: 'Heading 2',
        class: 'ck-heading2'
      },
      {
        model: 'heading3',
        view: { name: 'p', classes: 'ck-heading3' },
        title: 'Heading 3',
        class: 'ck-heading3'
      },
      {
        model: 'heading4',
        view: { name: 'p', classes: 'ck-heading4' },
        title: 'Heading 4',
        class: 'ck-heading4'
      },

    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties'
    ]
    // tableToolbar: ['comment']
  },
  pagination: {
    pageWidth: '21cm',
    pageHeight: '29.7cm',
    pageMargins: {
      top: '20mm',
      bottom: '20mm',
      left: '12mm',
      right: '12mm'
    }
  }
};

const packageVersion = 35,
  buildTime = new Date();

const CustomModule = {
  Editor,
  Context,
  packageVersion,
  buildTime,
  ...SignatureModule,
  ...smartfieldQueries,
  // Have to spread commands as part of module
  ...SmartfieldsRepositoryCommands,
  ...SignatureCommands
};

export default CustomModule;
