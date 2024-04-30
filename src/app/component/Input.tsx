import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "../globals.css";
registerPlugin(FilePondPluginImagePreview);

function FileInputComponent({
  file,
  setFile,
}: {
  file: any;
  setFile: React.Dispatch<React.SetStateAction<any>>;
}) {
  const handleUpdateFiles = (fileItems: any) => {
    setFile(fileItems.length > 0 ? fileItems[0].file : null);
  };

  return (
    <FilePond
      className="w-96 h-80"
      files={file ? [file] : []}
      allowMultiple={false}
      allowProcess={true}
      name="file"
      onupdatefiles={handleUpdateFiles}
      acceptedFileTypes={["image/jpeg", "image/png", "image/gif"]}
      labelIdle='<span class="filepond--label-idle"> Drag & Drop your image or </span><span class="filepond--label-action">Browse</span>'
    />
  );
}

export default FileInputComponent;
