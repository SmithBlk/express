var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
  // QRコードAPIのURL
  const qrCodeUrl =
    'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example';

  // APIから画像データを取得して直接レスポンスとして返す
  request
    .get(qrCodeUrl)
    .on('error', function (error) {
      // エラー処理
      res.status(500).send('Error: ' + error.message);
    })
    .pipe(res); // res へ直接ストリームする
});

module.exports = router;
