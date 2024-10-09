import { readFileSync, writeFileSync, existsSync } from 'fs';
import { parse, stringify } from 'json2csv';
import path from 'path';

// Path to the Excel file
const FILE_PATH = path.resolve('./public/feedback.csv');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, feedback } = req.body;

    try {
      // Read the existing feedback data
      let feedbackData = [];
      if (existsSync(FILE_PATH)) {
        const csvData = readFileSync(FILE_PATH, 'utf8');
        feedbackData = csvData ? parse(csvData, { header: true }) : [];
      }

      // Check if the email already exists
      const existingFeedback = feedbackData.find((entry) => entry.email === email);
      if (existingFeedback) {
        return res.status(400).json({ message: 'This email has already submitted feedback.' });
      }

      // Add the new feedback to the data
      feedbackData.push({ email, feedback });

      // Convert data back to CSV and write to the file
      const csvString = stringify(feedbackData);
      writeFileSync(FILE_PATH, csvString, 'utf8');

      return res.status(200).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'An error occurred while submitting feedback.' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
