"use client";
import { useDropzone } from "react-dropzone";
import React, { useState } from "react";
import { Inbox } from "lucide-react";

export default function Home() {
  const [file, setFile] = useState<File>();
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    try {
      const data = new FormData();
      data.set("file", file);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      // handle the error
      if (res.ok) throw new Error(await res.text());

      setMessage("File uploaded successfully!");  // Update message on success
    } catch (e: any) {
      // Handle errors here
      console.error(e);
      setMessage("Failed to upload file.");  // Update message on error
    }
  };

  return (
    <main>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <input type="submit" value="Upload" />
      </form>
      {message && <h3>{message}</h3>}
    </main>
  );
}
 