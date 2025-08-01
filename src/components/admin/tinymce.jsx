import { Editor } from '@tinymce/tinymce-react';

export default function MyEditor({ value, onChange }) {
  return (
   
<Editor
  apiKey="sforedwga8ob3lada6i7lh3wirhsnw3hkwjl0wohz70ugrs8"
  value={value}
  onEditorChange={onChange}
  init={{
    height: 400,
    menubar: true,
    plugins: [
      'advlist autolink lists link image charmap preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste help wordcount',
      'textcolor colorpicker', // màu chữ
      'fontselect fontsizeselect' // font và cỡ chữ
    ],
    toolbar:
      'undo redo | formatselect | fontselect fontsizeselect | ' +
      'bold italic underline strikethrough forecolor backcolor | ' +
      'alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist outdent indent | removeformat | help',
    content_style:
      'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  }}
/>

 

  );
}


