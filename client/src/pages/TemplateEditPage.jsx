import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import allTemplates from '../data/TemplatesData.json';
import TemplateRenderer from '../components/TemplateRenderer';

const TemplateEditPage = () => {
  const { categorySlug, templateId } = useParams();
  const template = allTemplates[categorySlug]?.find(t => t.id === templateId);

  const initialFormData = {};
  template?.fields.forEach((field, idx) => {
    initialFormData[`field_${idx}`] = field.defaultText || '';
  });

  const [formData, setFormData] = useState(initialFormData);

  if (!template) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-primary">Template Not Found</h2>
        <Link
          to="/"
          className="mt-6 inline-block bg-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-hover transition duration-200"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="py-10 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-primary hover:underline">&larr; Back</Link>

        <h2 className="text-3xl font-bold mt-4 mb-6 text-gray-800">Customize Your Invitation</h2>

        <form className="mb-10 grid md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md">
          {template.fields.map((field, idx) => (
            <div key={idx}>
              <label className="block mb-1 font-medium capitalize text-gray-700">
                Line {idx + 1} - {field.type}
              </label>
              <input
                type="text"
                value={formData[`field_${idx}`]}
                onChange={e =>
                  setFormData({ ...formData, [`field_${idx}`]: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={`Enter ${field.type}...`}
              />
            </div>
          ))}
        </form>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Live Preview</h3>
          <TemplateRenderer template={template} formData={formData} />
        </div>
      </div>
    </section>
  );
};

export default TemplateEditPage;
