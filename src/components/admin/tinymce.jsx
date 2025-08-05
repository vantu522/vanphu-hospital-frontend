import { Editor } from '@tinymce/tinymce-react';

export default function MyEditor({ value, onChange }) {
  return (
    <Editor
      apiKey="sforedwga8ob3lada6i7lh3wirhsnw3hkwjl0wohz70ugrs8"
      value={value}
      onEditorChange={onChange}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap preview anchor',
          'searchreplace visualblocks visualchars code fullscreen',
          'insertdatetime media table paste help wordcount',
          'textcolor colorpicker',
          'hr pagebreak nonbreaking',
          'emoticons codesample directionality',
          'quickbars template',
        ],
        toolbar:
          'undo redo | formatselect fontselect fontsizeselect | ' +
          'bold italic underline strikethrough forecolor backcolor | ' +
          'alignleft aligncenter alignright alignjustify | ' +
          'bullist numlist outdent indent | link image media codesample | ' +
          'hr pagebreak | emoticons charmap | removeformat | fullscreen code | help',
        content_style:
          'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',

        // Tùy chọn thêm nếu muốn
        fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
        font_formats:
          'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier; ' +
          'Georgia=georgia,palatino; Tahoma=tahoma,arial,helvetica,sans-serif; ' +
          'Times New Roman=times new roman,times; Verdana=verdana,geneva;',
        quickbars_selection_toolbar:
          'bold italic | quicklink h2 h3 blockquote',
        quickbars_insert_toolbar:
          'image media table hr codesample',
        toolbar_mode: 'sliding',
        image_title: true,
        automatic_uploads: true,
        file_picker_types: 'image media',
        contextmenu: 'link image inserttable | cell row column deletetable',
      }}
    />
  );
}
