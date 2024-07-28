"use client";

// components/DownloadButton.js
import React from "react";
import { Button } from "@/components/ui/button";
interface Props {
  fileUrl: string;
  fileName: string;
  children: JSX.Element;
}
const DownloadButton = ({ fileUrl, fileName, children, ...props }: Props) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      {...props}
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
    >
      <>{children}</>
    </Button>
  );
};

export default DownloadButton;
