import React from "react";
import { UploadCloud } from "lucide-react";
import { Button } from "../../../components/ui/button";

const CreateNewResume: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-center  ">
        <div className="border-2 border-dashed rounded-3xl bg-[#f6f8fa] border-gray-300 h-[450px] flex flex-col items-center justify-center text-center gap-4">
          <UploadCloud className="w-14 h-14 text-primary" strokeWidth={1.5} />

          <h2 className="text-3xl font-medium">
            Drag & Drop or <span className="text-primary">Choose File</span> to
            Upload
          </h2>

          <p className="text-lg text-gray-400">
            DOCX, PDF, TEX formats, up to 10 MB
          </p>

          <Button size="lg" variant="outline" className="mt-4 px-12">
            Browse
          </Button>

          <input type="file" className="hidden" id="resume-upload" />
        </div>
      </div>
    </>
  );
};

export default CreateNewResume;
