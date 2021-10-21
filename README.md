# static-nasa-vue

## Introduction

😃面向就业编程:

这是一个利用NASA的开放式API开发的图像检索网站

1. 按日期 经纬度 分辨率 检索陆地资源卫星拍摄的地球区域 图像
2. 按日期 火星车 相机名称 检索好奇号 机遇号 精神号火星车相机 图像
3. 按日期区间检索向NASA投稿的每日天文图 图像
4. 按关键词 检索有关NASA的新闻报道历史 图像
5. 近地小天体信息

## Init config

申请NASA开放式接口密钥[NASA APIs](https://api.nasa.gov/) 
修改 src/apis/request下面的DEMO_KEY

```javascript
export const DEMO_KEY = '您个人申请的DEMO_KEY'
```

## Project setup

```
npm install 
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
