import { Component } from 'react';
import dynamic from 'next/dynamic';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';

class CKEditorWrapper extends Component {
  render() {
    return (
      <CKEditor
        editor={ClassicEditor}
        {...this.props}
        config={{ width: '100%' }}
      />
    );
  }
}

export default CKEditorWrapper;
