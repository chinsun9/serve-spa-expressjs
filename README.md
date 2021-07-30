# serve spa expressjs

nodejs express로 spa 서빙하는 간단한 코드

## 각자 수정해야 하는 부분

### port

```js index.js:5
const port = 5000; // 원하는 포트로 수정
```

### staticDir (spa path)

```js index.js:7
const staticDir = path.join(__dirname, "../build"); // 빌드된 spa 경로
```
