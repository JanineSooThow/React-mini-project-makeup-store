import { join } from 'path';

export default function handler(req, res) {
  try {
    const filePath = join(process.cwd(), 'public/api/apidata.json');
    const fileContents = require(filePath);
    res.status(200).json(fileContents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the data.' });
  }
}
