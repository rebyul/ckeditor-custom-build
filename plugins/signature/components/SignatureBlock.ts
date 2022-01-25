import './SignatureBlock.css';

import { ContextPlugin, Plugin } from '@ckeditor/ckeditor5-core';
import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget';

import { InsertSignatureBlockCommand } from '../commands';
import SmartfieldsRepository from '../../smartfields-repository/SmartfieldsRepository';

export default class SignatureBlock extends Plugin {
  static get requires(): Array<typeof Plugin | typeof ContextPlugin | string> {
    return [SmartfieldsRepository];
  }

  init(): void {
    this._defineConverters();
    this._defineSchema();

    const { editor } = this;

    editor.commands.add(
      InsertSignatureBlockCommand.eventId,
      new InsertSignatureBlockCommand(editor)
    );
  }

  _defineSchema(): void {
    const { schema } = this.editor.model;

    schema.register('signatureBlock', {
      allowWhere: '$block',
      isObject: true,
      allowContentOf: '$block',
      allowAttributes: ['blockId']
    });

    schema.register('signingParty', {
      allowIn: 'signatureBlock',
      allowContentOf: '$block',
      isLimit: true,
      allowAttributes: ['smartfieldId']
    });

    schema.register('signatureField', {
      isLimit: true,
      allowIn: 'signatureBlock',
      allowChildren: ['$text']
    });

    schema.register('signerName', {
      isLimit: true,
      allowIn: 'signatureBlock',
      allowContentOf: '$block',
      isBlock: true,
      allowAttributes: ['smartfieldId']
    });
  }

  _defineConverters(): void {
    const { conversion } = this.editor;

    // Signature block
    conversion.for('upcast').elementToElement({
      model: 'signatureBlock',
      view: {
        name: 'section',
        classes: 'signature-block'
      }
    });
    conversion.for('dataDowncast').elementToElement({
      model: 'signatureBlock',
      view: {
        name: 'section',
        classes: 'signature-block'
      }
    });
    conversion.for('editingDowncast').elementToElement({
      model: 'signatureBlock',
      view: (modelElement, { writer: viewWriter }) => {
        const section = viewWriter.createContainerElement('section', {
          class: 'signature-block'
        });

        return toWidget(section, viewWriter, {
          label: 'Signature Block Widget'
        });
      }
    });

    // Signing party
    conversion.for('upcast').elementToElement({
      model: 'signingParty',
      view: {
        name: 'p',
        classes: 'signing-party'
      }
    });
    conversion.for('dataDowncast').elementToElement({
      model: 'signingParty',
      view: {
        name: 'p',
        classes: 'signing-party'
      }
    });
    conversion.for('editingDowncast').elementToElement({
      model: 'signingParty',
      view: (modelElement, { writer: viewWriter }) => {
        // Note: You use a more specialized createEditableElement() method here.
        const p = viewWriter.createEditableElement('p', {
          class: 'signing-party'
        });

        return toWidgetEditable(p, viewWriter);
      }
    });

    // Signature field
    conversion.elementToElement({
      model: 'signatureField',
      view: {
        name: 'button',
        classes: 'signature-field'
      }
    });

    // Signer name
    conversion.for('upcast').elementToElement({
      model: 'signerName',
      view: {
        name: 'p',
        classes: 'signer-name'
      }
    });
    conversion.for('dataDowncast').elementToElement({
      model: 'signerName',
      view: {
        name: 'p',
        classes: 'signer-name'
      }
    });
    conversion.for('editingDowncast').elementToElement({
      model: 'signerName',
      view: (modelElement, { writer: viewWriter }) => {
        // Note: You use a more specialized createEditableElement() method here.
        const p = viewWriter.createEditableElement('p', {
          class: 'signer-name'
        });

        p.on('change', (...changes) =>
          console.log('ALKDJALSDJALSDKJAJDALKDJALSDKJ', changes)
        );
        return toWidgetEditable(p, viewWriter);
      }
    });
  }
}