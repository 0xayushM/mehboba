import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, feedback } = req.body;

    // Define the file path for the Excel sheet
    const filePath = path.resolve(process.cwd(), 'data', 'feedback.xlsx');

    // Load the existing Excel file if it exists, otherwise create a new one
    let workbook;
    try {
      workbook = fs.existsSync(filePath) ? xlsx.readFile(filePath) : xlsx.utils.book_new();
    } catch (error) {
      return res.status(500).json({ error: 'Error reading Excel file' });
    }

    // Add the data to a new row in the sheet
    const worksheet = workbook.Sheets['Feedback'] || xlsx.utils.aoa_to_sheet([['Name', 'Email', 'Feedback']]);
    const newRow = [[name, email, feedback]];
    xlsx.utils.sheet_add_aoa(worksheet, newRow, { origin: -1 });

    // Update the worksheet in the workbook and write the file
    workbook.Sheets['Feedback'] = worksheet;
    try {
      xlsx.writeFile(workbook, filePath);
      res.status(200).json({ message: 'Feedback saved successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Error writing to Excel file' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
