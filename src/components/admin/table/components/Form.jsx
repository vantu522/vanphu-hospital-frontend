import React, { useState, useEffect } from "react";
import MyEditor from "../../tinymce";
import TagsInput from "../../TagInput";

const DataForm = ({ data, fields, onSubmit, onCancel, isEdit = false }) => {
  const [formData, setFormData] = useState(
    data || fields.reduce((acc, field) => ({ ...acc, [field.key]: "" }), {})
  );
  const [previews, setPreviews] = useState({});
  const normalizeFormData = (data, fields) => {
  const normalized = { ...data };
  fields.forEach((field) => {
    if (
      field.type === "select" &&
      typeof data[field.key] === "object" &&
      data[field.key]?._id
    ) {
      normalized[field.key] = data[field.key]._id;
    }
  });
  return normalized;
};
useEffect(() => {
  if (data) {
    const normalized = normalizeFormData(data, fields);
    setFormData(normalized);
  }
}, [data, fields]);


  useEffect(() => {
    const newPreviews = {};
    fields.forEach((field) => {
      const value = formData[field.key];
      if (field.type === "file") {
        if (field.multiple && Array.isArray(value)) {
          newPreviews[field.key] = value.map((file) =>
            typeof file === "string" ? file : URL.createObjectURL(file)
          );
        } else if (value) {
          newPreviews[field.key] =
            typeof value === "string" ? value : URL.createObjectURL(value);
        }
      }
    });
    

    setPreviews(newPreviews);
  }, [formData, fields]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));

    if (key === "images" && Array.isArray(value)) {
      const urls = value.map((file) =>
        typeof file === "string" ? file : URL.createObjectURL(file)
      );
      setPreviews((prev) => ({ ...prev, [key]: urls }));
    } else if (
      key === "avatar" &&
      (value instanceof File || typeof value === "string")
    ) {
      const url =
        typeof value === "string" ? value : URL.createObjectURL(value);
      setPreviews((prev) => ({ ...prev, [key]: url }));
    }
  };

  const handleSubmit = () => {
    const requiredFields = fields.filter((field) => field.required);
    for (let field of requiredFields) {
      if (
        !formData[field.key] ||
        (Array.isArray(formData[field.key]) &&
          formData[field.key].length === 0) ||
        formData[field.key].toString().trim() === ""
      ) {
        alert(`${field.label} is required`);
        return;
      }
    }
    onSubmit(formData);
  };

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.key}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
          </label>

          {field.type === "select" ? (
            <select
              value={formData[field.key] || ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select {field.label}</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              value={formData[field.key] || ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
            />
          ) : field.type === "tags" ? (
            <TagsInput
              value={formData[field.key] || []}
              onChange={(newTags) => handleChange(field.key, newTags)}
            />
          ) : field.type === "richtext" ? (
            <MyEditor
              value={formData[field.key] || ""}
              onChange={(value) => handleChange(field.key, value)}
              placeholder={field.placeholder || "Nhập nội dung..."}
            />
          ) : field.type === "file" ? (
            <>
              <input
                type="file"
                accept="image/*,application/pdf"
                multiple={field.multiple}
                onChange={(e) => {
                  const files = Array.from(e.target.files);
                  if (files.length > 0) {
                    handleChange(field.key, field.multiple ? files : files[0]);
                  }
                }}
                className="w-full"
              />

              {field.multiple && Array.isArray(previews[field.key]) ? (
                <div className="flex gap-2 mt-2 flex-wrap">
                  {previews[field.key].map((src, idx) => (
                    <div
                      key={idx}
                      className="w-24 h-24 relative border rounded overflow-hidden flex items-center justify-center"
                    >
                      {src.endsWith(".pdf") ? (
                        <a
                          href={src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-500 underline"
                        >
                          📄 Xem PDF
                        </a>
                      ) : (
                        <img
                          src={src}
                          alt={`preview-${idx}`}
                          className="object-cover w-full h-full"
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : previews[field.key] ? (
                <div className="mt-2 max-h-40 rounded border p-2">
                  {previews[field.key].endsWith(".pdf") ? (
                    <a
                      href={previews[field.key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 underline"
                    >
                      📄 Xem PDF
                    </a>
                  ) : (
                    <img
                      src={previews[field.key]}
                      className="max-h-40 object-cover"
                      alt="preview"
                    />
                  )}
                </div>
              ) : null}
            </>
        ) : field.type === "date" ? (
  <input
    type="date"
    value={formData[field.key] || ""}
    onChange={(e) => handleChange(field.key, e.target.value)}
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
  />
) : (
  <input
    type={field.type || "text"}
    value={formData[field.key] || ""}
    onChange={(e) => handleChange(field.key, e.target.value)}
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
  />
)
}
        </div>
      ))}

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Huỷ
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {isEdit ? "Cập nhật" : "Thêm"}
        </button>
      </div>
    </div>
  );
};

export default DataForm;
