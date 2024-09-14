# 注意事項

- 此區為正式區，勿將測試檔案上傳，以利檔案管理！
- main 分支僅提供 git clone 使用，請勿自主更新該分支【 Harry 會將放共用版型在 main，各位伙伴請在自己的分支(如：dev_harry)開發負責的 html 頁面!】
- spacer / font-family 已經調整過，無需再設定，可以直接使用！
- customer_utils.scss 可以放自定義的通用類別
- customer_variable 裡面有設計稿中所有的色號變數
- vite.cofig.js 裡面的路徑，記得要改才抓得到 gitpage
  - 地端的寫法：'/'
  - 上傳的寫法：'/Repository 的名稱/'

## 指令列表

- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

## 資料夾結構

- assets # 靜態資源放置處

  - images # 圖片放置處
  - scss # SCSS 的樣式放置處
  - utils
    -customer_utils # 可以放自定義的通用類別

- layout # ejs 模板放置處
- pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案
