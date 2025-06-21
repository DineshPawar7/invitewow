import React from 'react';

const TemplateRenderer = ({ template, formData }) => {
  return (
    <div className="relative text-center">
      <div className="relative inline-block w-full max-w-3xl mx-auto">
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-auto max-h-[600px] object-contain rounded"
        />
        {template.fields.map((field, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              ...field.style,
            }}
            className="drop-shadow-lg"
          >
            <div style={{ fontSize: field.style.fontSize, color: field.style.color }}>
              {formData[field.type] || field.defaultText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateRenderer;
