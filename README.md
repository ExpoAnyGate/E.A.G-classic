# 注意事項

- 此區為正式區，勿將測試檔案上傳，以利檔案管理！
- main 分支僅提供 git clone 使用，請勿自主更新該分支【 Harry 會將放共用版型在 main，各位伙伴請在自己的分支(如：dev\_{your_name})開發負責的 html 頁面!】
- spacer / font-family 已經調整過，無需再設定，可以直接使用！
- customer*utils.scss 已放 Harry 自定義的通用類別，如需新增個人通用類別，請新建一個 customer_utils_{your_name}.scss，不要改 customer_utils.scss。
- customer_variable 裡面有設計稿中所有的色號變數
- vite.cofig.js 裡面的路徑，記得要改才抓得到 gitpage
  - 地端的寫法：'/'
  - 上傳的寫法：'/E.A.G-primary/'

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

## 開發小撇步：

1. 開自己的分支：`git checkout -b dev_<name>`
2. 把自己的分支設定上游：`git push -u origin dev_<name>`; 確認上游:可用 `git branch -vv`  如果是 * dev_commitID [origin/dev_]，表示本地  `dev_<name>`  正在追蹤  `origin/dev_<name>`（設置成功）
3. 準備開始寫程式前，先將遠端的 main 拉下來自己的分支： `git pull origin main`
4. 開始寫程式.....
5. 加入自己修改過的檔案：`git add <file>`
6. 加入 commit ：`git commit -m "一些內容（改了哪些/新增了哪些）"`
7. 推上去自己的遠端分支： `git push` **（要確認上游就是自己的遠端分支）**
8. 在 github 上面開啟一個 pull request (pr), 將自己遠端的分支 merge 到 遠端的 main **（記得要設定 review 的審核人員）**
9. 如果出現 conflict 可以直接在 github 上編輯即可
10. 有至少 1 人審核通過，就可以 開心地按下 merge 啦～～～～
11. （輪迴到步驟 3.)
