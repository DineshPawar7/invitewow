import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadsDir = path.join(__dirname, '..', '..', 'temp_downloads');
if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir, { recursive: true });
}

/**
 * @param {object} customizationData
 * @param {string} format
 * @param {string} orderId
 * @returns {Promise<string>}
 */
export const generateFile = async (customizationData, format, orderId) => {
    const fileName = `template-${orderId}.${format}`;
    const filePath = path.join(downloadsDir, fileName);

    const fileContent = `This is a dummy ${format.toUpperCase()} file for order ${orderId}.\n\nCustomization Data:\n${JSON.stringify(customizationData, null, 2)}`;
    
    await fs.promises.writeFile(filePath, fileContent);

    console.log(`Generated mock file at: ${filePath}`);
    return filePath;
};

/**
 * @param {string} filePath
 */
export const deleteFileAfterDownload = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Error deleting file ${filePath}:`, err);
        } else {
            console.log(`Successfully deleted temporary file: ${filePath}`);
        }
    });
};