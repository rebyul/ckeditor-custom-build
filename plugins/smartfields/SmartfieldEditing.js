import {
  toWidget,
  viewToModelPositionOutsideModelElement,
  Widget
} from '@ckeditor/ckeditor5-widget'

import InsertSmartfieldCommand from './commands/InsertSmartfieldCommand'
import Plugin from '@ckeditor/ckeditor5-core/src/plugin'

export default class SmartfieldEditing extends Plugin {
  static get requires() {
    return [Widget]
  }

  init() {
    this._defineSchema()
    this._defineConverters()

    this.editor.commands.add(
      'insert_smartfield',
      new InsertSmartfieldCommand(this.editor)
    )

    this.editor.editing.mapper.on(
      'viewToModelPosition',
      viewToModelPositionOutsideModelElement(this.editor.model, (viewElement) =>
        viewElement.hasClass('smartfield')
      )
    )

    this.editor.config.define('smartfieldProps', {
      types: []
    })

    this.editor.config.define('smartfieldBrackets', {
      open: '{',
      close: '}'
    })
  }

  _defineSchema() {
    const { schema } = this.editor.model

    schema.register('smartfield', {
      allowWhere: '$text',
      isInline: true,
      isObject: true,
      allowAttributes: [
        // Recheck this list to match smartfield properties
        // Best if it's short and has referential synchronisity with
        // document metadata smartfields array
        'color',
        'counterPartyToProvide',
        'id',
        'showCounterPartyToProvideCheckbox',
        'signatureVariable',
        'title',
        'value'
      ]
    })
  }

  _defineConverters() {
    const { conversion, config } = this.editor

    // UI to Model
    conversion.for('upcast').elementToElement({
      view: {
        name: 'span',
        classes: ['smartfield']
      },
      model: (viewElement, writer) => {
        // Extract the "value" from {value}
        // const value = viewElement
        //   .getChild(0)
        //   .data.slice(
        //     config.get('smartfieldBrackets.open').length,
        //     0 - config.get('smartfieldBrackets.close').length
        //   )

        const modelWriter = writer.writer

        return modelWriter.createElement(
          'smartfield',
          constructAttributesObject(viewElement.getAttributes())
        )
      }
    })

    // Model to HTML View
    conversion.for('editingDowncast').elementToElement({
      model: 'smartfield',
      view: (modelItem, writer) => {
        const viewWriter = writer.writer

        const widgetElement = createSmartfieldView(modelItem, viewWriter)

        // Enable widget handling on placeholder element inside editing view.
        const resultWidget = toWidget(widgetElement, viewWriter)

        return resultWidget
      }
    })

    // Model to HTML View
    conversion.for('dataDowncast').elementToElement({
      model: 'smartfield',
      view: (modelItem, writer) => {
        const viewWriter = writer.writer

        return createSmartfieldView(modelItem, viewWriter)
      }
    })

    function createSmartfieldView(modelItem, viewWriter) {
      const value = modelItem.getAttribute('value')
      const title = modelItem.getAttribute('title')

      const smartfieldView = viewWriter.createContainerElement('span', {
        class: 'smartfield',
        title,
        value,
        ...constructAttributesObject(modelItem.getAttributes())
      })

      const innerText = viewWriter.createText(
        config.get('smartfieldBrackets.open') +
          (value || title) +
          config.get('smartfieldBrackets.close')
      )

      viewWriter.insert(
        viewWriter.createPositionAt(smartfieldView, 0),
        innerText
      )
      return smartfieldView
    }

    function constructAttributesObject(attributesArray) {
      const attributesObject = {}

      for (const a in attributesArray) {
        attributesObject[a[0]] = a[1]
      }

      return attributesObject
    }
  }
}
