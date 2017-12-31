/**
 * Created by chenhaoact on 2017/12/30.
 */

/**
 * jsmind展示的数据
 * 分类和我的前端总结gitbook的前端技术，框架与类库下保持一致，这样对应起来好查找：https://github.com/chenhaoact/chenhaoact-fe-learn/blob/master/SUMMARY.md
 *
 * 目前默认就展示的只有：
 * 项目名称，一句话简介，github star数及链接；
 * 如果放上简介文本的话，图就太大了不好看，或者文本点上去再展示
 *
 * 注意：
 * 1. 平时觉得不错以后可能用到的库都可以整理进来，需要的全面，查的时候有更多的选择，不一定只有每周周报的推荐的库才整理；
 * */
const mind = {
  /* 元数据，定义思维导图的名称、作者、版本等信息 */
  "meta": {
    "name": "github-project-recommend",
    "author": "chenhaoact@gmail.com",
    "version": "1.0"
  },
  /* 数据格式声明 */
  "format": "node_tree",
  /* 数据内容 */
  "data": {
    "id": "root",
    "topic": "<a href='https://github.com/chenhaoact/github-project-recommend' target='_blank'>Github优秀开源项目整理</a>",
    "children": [
      {
        "id": "jichu",
        "topic": "编程基础",
        "direction": "right",
        "expanded": true,
        "children": [
          {
            "id": "jsjichu",
            "topic": "js基础",
            "children": [
              {
                "id": "You-Dont-Need-jQuery",
                "topic": "You-Dont-Need-jQuery"
              },
            ],
          },
          {
            "id": "bianchengxuexi",
            "topic": "编程学习资源",
            "children": [
              {
                "id": "free-programming-books-zh_CN",
                "topic": "free-programming-books-zh_CN<iframe src='https://ghbtns.com/github-btn.html?user=justjavac&repo=free-programming-books-zh_CN&type=star&count=true' frameborder='0' scrolling='0' width='116px' height='20px'></iframe>"
              },
              {
                "id": "learn-anything",
                "topic": "提供任何知识的学习路径与资源 learn-anything"
              }
            ],
          },
          {
            "id": "zengze",
            "topic": "正则表达式",
            "children": [
              {
                "id": "learn-regex",
                "topic": "learn-regex"
              },
            ],
          },
          {
            "id": "wangluoanquan",
            "topic": "网络安全",
            "children": [
              {
                "id": "Awesome-Hacking",
                "topic": "Awesome-Hacking"
              },
            ],
          },
        ],
      },
      {
        "id": "feFramework",
        "topic": "前端技术，框架与类库",
        "direction": "right",
        "expanded": true,
        "children": [
          {
            "id": "React",
            "topic": "React",
            "children": [
              {
                "id": "tyzj",
                "topic": "通用组件",
                "children": [
                  {
                    "id": "awesome-react-components",
                    "topic": "react组件大整理 awesome-react-components",
                  },
                  {
                    "id": "react-virtualized",
                    "topic": "高性能长列表 react-virtualized",
                  },
                  {
                    "id": "react-canvas",
                    "topic": "React组件渲染到canvas react-canvas",
                  },
                ],
              },
            ],
          },
          {
            "id": "Vue",
            "topic": "Vue",
            "children": [
              {
                "id": "zuijiashijian",
                "topic": "最佳实践",
                "children": [
                  {"id": "vue2-elm", "topic": "vue2-elm"},
                ],
              },
            ],
          },
          {
            "id": "Hybrid",
            "topic": "Hybrid",
            "children": [
              {"id": "VasSonic", "topic": "VasSonic"},
            ]
          },
          {
            "id": "pwa",
            "topic": "PWA",
            "children": [
              {"id": "Lighthouse", "topic": "Lighthouse"},
              {"id": "workbox", "topic": "Chrome官方推出的PWA技术 workbox"},
              {"id": "react-pwa", "topic": "react-pwa"},
              {"id": "PWA-Book-CN", "topic": "第一本PWA中文书 PWA-Book-CN"},
            ]
          },
          {
            "id": "desktop",
            "topic": "跨平台桌面客户端技术",
            "children": [
              {
                "id": "Electron",
                "topic": "Electron",
                "children": [
                  {
                    "id": "eleczjsj",
                    "topic": "最佳实践",
                    "children": [
                      {
                        "id": "nylas-mail",
                        "topic": "跨平台电子邮件客户端 nylas-mail",
                      },
                    ],
                  },
                ]
              },
              {"id": "yoga", "topic": "yoga"},
            ]
          },
          {
            "id": "Nodejs",
            "topic": "Nodejs",
            "children": [
              {
                "id": "ssr",
                "topic": "服务端渲染",
                "children": [
                  {
                    "id": "next",
                    "topic": "next.js",
                  },
                  {
                    "id": "serverless",
                    "topic": "serverless",
                  },
                ],
              },
            ]
          },
          {
            "id": "feproject",
            "topic": "前端工程化",
            "children": [
              {
                "id": "bglgj",
                "topic": "包管理工具",
                "children": [
                  {"id": "JS多包拆分管理 lerna", "topic": "lerna"},
                ],
              },
              {
                "id": "dbgjby",
                "topic": "打包构建与编译技术",
                "children": [
                  {"id": "rollup", "topic": "JS模块打包器 rollup"},
                  {"id": "Parcel", "topic": "极速、零配置Web应用打包工具 Parcel"},
                ],
              },
              {
                "id": "cdmkf",
                "topic": "命令行脚手架开发",
                "children": [
                  {"id": "Inquirerjs", "topic": "Inquirer.js"},
                ],
              },
              {
                "id": "dmgsh",
                "topic": "代码格式化",
                "children": [
                  {"id": "Prettier", "topic": "让团队保持代码风格一致 Prettier"},
                ],
              },
            ]
          },
          {
            "id": "fetest",
            "topic": "前端测试技术",
            "children": [
              {"id": "storybook", "topic": "UI组件交互式开发和测试 storybook"},
            ]
          },
          {
            "id": "browser",
            "topic": "浏览器相关技术",
            "children": [
              {"id": "puppeteer", "topic": "puppeteer"},
            ]
          },
          {
            "id": "tbyksh",
            "topic": "数据图表与可视化",
            "children": [
              {
                "id": "chartjs",
                "topic": "Chart.js"
              },
              {
                "id": "recharts",
                "topic": "React和D3构建的图表库 recharts"
              },
              {
                "id": "charts",
                "topic": "纯ES6+CSS的SVG图表库 charts"
              },
              {
                "id": "g2",
                "topic": "可视化编码的图形语法 g2"
              },
              {
                "id": "tbykshzjsj",
                "topic": "数据图表与可视化最佳实践",
                "children": [
                  {"id": "github-profile-summary", "topic": "Github用户可视化分析 github-profile-summary"},
                ],
              }
            ]
          },
          {
            "id": "uizujian",
            "topic": "通用UI组件与常见UI效果实现",
            "children": [
              {
                "id": "uizjk",
                "topic": "UI组件库",
                "children": [
                  {
                    "id": "bulma",
                    "topic": "基于Flexbox的现代CSS框架 bulma",
                  },
                  {
                    "id": "muuri",
                    "topic": "响应式可排序可拖动的网格布局 muuri",
                  }
                ],
              },
              {
                "id": "ymyydjjs",
                "topic": "页面应用搭建技术",
                "children": [
                  {
                    "id": "ant-design-pro",
                    "topic": "中后台应用搭建 ant-design-pro",
                  },
                  {
                    "id": "Docusaurus",
                    "topic": "快速生成开源项目文档站点 Docusaurus",
                  },
                ],
              },
              {
                "id": "donghua",
                "topic": "动画",
                "children": [
                  {
                    "id": "animejs",
                    "topic": "JS动画引擎 anime.js",
                  },
                  {
                    "id": "Introjs",
                    "topic": "产品使用分步引导 Intro.js",
                  },
                  {
                    "id": "lottie-web",
                    "topic": "AE动画直接用于移动端与网页 lottie-web",
                  },
                ],
              },
              {
                "id": "tuozhuai",
                "topic": "拖拽效果",
                "children": [
                  {
                    "id": "draggable",
                    "topic": "draggable",
                  },
                ],
              },
              {
                "id": "benwenbianjiqi",
                "topic": "富文本编辑器",
                "children": [
                  {
                    "id": "ORYEditor",
                    "topic": "ORY Editor",
                  },
                ],
              },
              {
                "id": "shipinbofangqi",
                "topic": "视频播放器",
                "children": [
                  {
                    "id": "videojs",
                    "topic": "video.js",
                  },
                ],
              },
              {
                "id": "filecl",
                "topic": "文件处理",
                "children": [
                  {
                    "id": "jsPDF",
                    "topic": "jsPDF",
                  },
                  {
                    "id": "js-xlsx",
                    "topic": "js-xlsx",
                  },
                  {
                    "id": "uppy",
                    "topic": "全新的浏览器Web文件上传组件 uppy",
                  },
                ],
              },
            ],
          },
          {
            "id": "qtcylk",
            "topic": "其他常用类库",
            "children": [
              {
                "id": "sjlk",
                "topic": "时间类库",
                "children": [
                  {
                    "id": "date-fns",
                    "topic": "轻量级的JS日期库 date-fns",
                  },
                ],
              },
              {
                "id": "sjlxsflk",
                "topic": "数据类型与算法类库",
                "children": [
                  {
                    "id": "ramda",
                    "topic": "js函数式编程 ramda",
                  },
                ],
              },
              {
                "id": "tbyb",
                "topic": "同步异步编程处理类库",
                "children": [
                  {
                    "id": "RxJS",
                    "topic": "js响应式编程库 RxJS",
                  },
                ],
              },
              {
                "id": "wlqq",
                "topic": "网络请求库",
                "children": [
                  {
                    "id": "axios",
                    "topic": "用于浏览器和nodejs的HTTP请求库 axios",
                  },
                ],
              },
              {
                "id": "jkmok",
                "topic": "接口模拟",
                "children": [
                  {
                    "id": "json-server",
                    "topic": "本地REST API模拟 json-server",
                  },
                ],
              },
            ],
          },
        ]
      },
      {
        "id": "tansuo",
        "topic": "前沿技术探索研究与实践",
        "direction": "right",
        "children": [
          {
            "id": "tuxiang",
            "topic": "图形学、图像识别、计算机视觉相关",
            "children": [
              {
                "id": "trackingjs",
                "topic": "tracking.js",
              },
              {
                "id": "tesseractjs",
                "topic": "图像语言识别 tesseract.js",
              },
            ],
          },
          {
            "id": "增强现实",
            "topic": "AR",
            "children": [
              {
                "id": "ARjs",
                "topic": "AR.js",
              }
            ],
          },
          {
            "id": "虚拟现实",
            "topic": "VR",
            "children": [
              {
                "id": "react-vr",
                "topic": "react-vr",
              }
            ],
          },
          {
            "id": "ai",
            "topic": "人工智能",
            "children": [
              {
                "id": "deeplearnjs",
                "topic": "deeplearn.js",
              },
              {
                "id": "hubot",
                "topic": "聊天机器人 hubot",
              },
              {
                "id": "keras-js",
                "topic": "浏览器上运行Keras模型 keras-js",
              },
            ],
          },
        ]
      },
      {
        "id": "kaifagongju",
        "topic": "开发工具",
        "direction": "right",
        "expanded": true,
        "children": [
          {
            "id": "jiekoumoni",
            "topic": "数据接口模拟与管理",
            "children": [
              {
                "id": "RAP",
                "topic": "RAP"
              },
            ],
          },
        ],
      },
    ]
  }
};

export default mind;
