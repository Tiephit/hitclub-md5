const express = require('express');
const fetch = require('node-fetch'); // Nếu Node 18+ thì dùng fetch trực tiếp

const app = express();
const PORT = process.env.PORT || 3000;
const SOURCE_URL = 'https://tintuc-thoisu-neoy.onrender.com/data';

app.get('/data', async (req, res) => {
  try {
    const response = await fetch(SOURCE_URL);
    const data = await response.json();

    res.json(data); // Trả về đúng JSON gốc
  } catch (error) {
    console.error('Lỗi khi fetch dữ liệu:', error.message);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu từ API nguồn.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
