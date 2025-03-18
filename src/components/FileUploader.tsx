import React, { ChangeEvent } from "react";

interface FileUploaderProps {
  onUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onUpload }) => {
  return (
    <div className="file-uploader">
      <input
        type="file"
        id="file-upload"
        onChange={onUpload}
        style={{ display: "none" }}
      />
      <label htmlFor="file-upload" className="custom-file-upload">
        🌸 Оберіть файл
      </label>
    </div>
  );
};

export default FileUploader;
