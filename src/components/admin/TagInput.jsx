// components/form/TagsInput.js
import React, { useState } from "react";

const TagsInput = ({ value = [], onChange }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!value.includes(input.trim())) {
        onChange([...value, input.trim()]);
      }
      setInput("");
    }
  };

  const removeTag = (index) => {
    const newTags = value.filter((_, i) => i !== index);
    onChange(newTags);
  };

  return (
    <div className="border rounded-md p-2">
      <div className="flex flex-wrap gap-2 mb-2">
        {value.map((tag, index) => (
          <div
            key={index}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center"
          >
            {tag}
            <button
              onClick={() => removeTag(index)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Nhấn Enter để thêm"
        className="w-full px-2 py-1 border rounded"
      />
    </div>
  );
};

export default TagsInput;
