/**
 * Created by chenhaoact on 2017/12/30.
 */
// import axios from 'axios';

/**
 * 此方法根据github项目链接生成github-btn；
 * 以免每个项目都需要自己手填 <iframe> ；
 * 自动会在前面加上项目名，所有不用再重复写了，如果要写项目简介则可以在最前面加；
 *
 * ！任何繁琐的重复性的工作都用代码封装成函数，工具代替，节省时间，提升效率！
 * */
function getGithubBtn(githubLink) {
  const githubLinkArray = githubLink.split('/');
  // console.log('githubLink githubLinkArray', githubLink, githubLinkArray);
  const userName = githubLinkArray[3];
  const projectName = githubLinkArray[4];
  // axios.get(`//api.github.com/repos/${userName}/${projectName}`)
  //   .then(function (response) {
  //     console.log('response', response);
  //   })
  //   .catch(function (error) {
  //     console.log('error', error);
  //   });
  // TODO 这里会受到github api访问的限制，上面发请求为权限验证最多只能发10个，看是否能优化下
  return `${projectName}<iframe src='https://ghbtns.com/github-btn.html?user=${userName}&repo=${projectName}&type=star&count=true' frameborder='0' scrolling='0' width='116px' height='20px'></iframe>`;
}

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
                "topic": `${getGithubBtn('https://github.com/nefe/You-Dont-Need-jQuery')}`
              },
            ],
          },
          {
            "id": "bianchengxuexi",
            "topic": "编程学习资源",
            "children": [
              {
                "id": "free-programming-books-zh_CN",
                "topic": `${getGithubBtn('https://github.com/justjavac/free-programming-books-zh_CN/')}`
              },
              {
                "id": "learn-anything",
                "topic": `提供任何知识的学习路径与资源 ${getGithubBtn('https://github.com/learn-anything/learn-anything')}`
              }
            ],
          },
          {
            "id": "zengze",
            "topic": "正则表达式",
            "children": [
              {
                "id": "learn-regex",
                "topic": `${getGithubBtn('https://github.com/zeeshanu/learn-regex')}`
              },
            ],
          },
          {
            "id": "wangluoanquan",
            "topic": "网络安全",
            "children": [
              {
                "id": "Awesome-Hacking",
                "topic": `${getGithubBtn('https://github.com/Hack-with-Github/Awesome-Hacking')}`
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
                    "topic": `react组件大整理 ${getGithubBtn('https://github.com/brillout/awesome-react-components')}`,
                  },
                  {
                    "id": "react-virtualized",
                    "topic": `高性能长列表 ${getGithubBtn('https://github.com/bvaughn/react-virtualized')}`,
                  },
                  {
                    "id": "react-canvas",
                    "topic": `React组件渲染到canvas ${getGithubBtn('https://github.com/Flipboard/react-canvas')}`,
                  },
                  {
                    "id": "react-content-loader",
                    "topic": `加载前的占位动画 ${getGithubBtn('https://github.com/danilowoz/react-content-loader')}`,
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
                  {"id": "vue2-elm", "topic": `${getGithubBtn('https://github.com/bailicangdu/vue2-elm')}`},
                ],
              },
            ],
          },
          {
            "id": "Hybrid",
            "topic": "Hybrid",
            "children": [
              {"id": "VasSonic", "topic": `${getGithubBtn('https://github.com/Tencent/VasSonic')}`},
            ]
          },
          {
            "id": "pwa",
            "topic": "PWA",
            "children": [
              {"id": "Lighthouse", "topic": `${getGithubBtn('https://github.com/GoogleChrome/lighthouse')}`},
              {"id": "workbox", "topic": `Chrome官方推出的PWA技术 ${getGithubBtn('https://github.com/GoogleChrome/workbox')}`},
              {"id": "react-pwa", "topic": `${getGithubBtn('https://github.com/Atyantik/react-pwa')}`},
              {"id": "PWA-Book-CN", "topic": `第一本PWA中文书 ${getGithubBtn('https://github.com/SangKa/PWA-Book-CN')}`},
            ]
          },
          {
            "id": "desktop",
            "topic": "跨平台桌面客户端技术",
            "children": [
              {
                "id": "Electron",
                "topic": `${getGithubBtn('https://github.com/electron/electron')}`,
                "children": [
                  {
                    "id": "eleczjsj",
                    "topic": "最佳实践",
                    "children": [
                      {
                        "id": "nylas-mail",
                        "topic": `跨平台电子邮件客户端 ${getGithubBtn('https://github.com/nylas/nylas-mail')}`,
                      },
                    ],
                  },
                ]
              },
              {"id": "yoga", "topic": `${getGithubBtn('https://github.com/facebook/yoga')}`},
            ]
          },
          {
            "id": "Nodejs",
            "topic": "Nodejs",
            "children": [
              {
                "id": "nodekuangjia",
                "topic": "Node框架",
                "children": [
                  {
                    "id": "eggjs",
                    "topic": `${getGithubBtn('https://github.com/eggjs/egg/')}`,
                  },
                ],
              },
              {
                "id": "ssr",
                "topic": "服务端渲染",
                "children": [
                  {
                    "id": "next",
                    "topic": `${getGithubBtn('https://github.com/zeit/next.js/')}`,
                  },
                  {
                    "id": "serverless",
                    "topic": `${getGithubBtn('https://github.com/serverless/serverless')}`,
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
                  {"id": "lerna", "topic": `JS多包拆分管理 ${getGithubBtn('https://github.com/lerna/lerna')}`},
                ],
              },
              {
                "id": "dbgjby",
                "topic": "打包构建与编译技术",
                "children": [
                  {"id": "rollup", "topic": `JS模块打包器 ${getGithubBtn('https://github.com/rollup/rollup')}`},
                  {"id": "Parcel", "topic": `极速、零配置Web应用打包工具 ${getGithubBtn('https://github.com/parcel-bundler/parcel')}`},
                ],
              },
              {
                "id": "cdmkf",
                "topic": "命令行脚手架开发",
                "children": [
                  {"id": "Inquirerjs", "topic": `${getGithubBtn('https://github.com/SBoudrias/Inquirer.js/')}`},
                ],
              },
              {
                "id": "dmgsh",
                "topic": "代码格式化",
                "children": [
                  {"id": "Prettier", "topic": `让团队保持代码风格一致 ${getGithubBtn('https://github.com/prettier/prettier')}`},
                ],
              },
            ]
          },
          {
            "id": "fetest",
            "topic": "前端测试技术",
            "children": [
              {"id": "storybook", "topic": `UI组件交互式开发和测试 ${getGithubBtn('https://github.com/storybooks/storybook')}`},
            ]
          },
          {
            "id": "browser",
            "topic": "浏览器相关技术",
            "children": [
              {"id": "puppeteer", "topic": `${getGithubBtn('https://github.com/GoogleChrome/puppeteer')}`},
            ]
          },
          {
            "id": "tbyksh",
            "topic": "数据图表与可视化",
            "children": [
              {
                "id": "chartjs",
                "topic": `${getGithubBtn('https://github.com/chartjs/Chart.js')}`
              },
              {
                "id": "recharts",
                "topic": `React和D3构建的图表库 ${getGithubBtn('https://github.com/recharts/recharts')}`
              },
              {
                "id": "charts",
                "topic": `纯ES6+CSS的SVG图表库 ${getGithubBtn('https://github.com/frappe/charts')}`
              },
              {
                "id": "g2",
                "topic": `可视化编码的图形语法 ${getGithubBtn('https://github.com/antvis/g2')}`
              },
              {
                "id": "tbykshzjsj",
                "topic": "数据图表与可视化最佳实践",
                "children": [
                  {"id": "github-profile-summary", "topic": `Github用户可视化分析 ${getGithubBtn('https://github.com/tipsy/github-profile-summary')}`},
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
                    "topic": `基于Flexbox的现代CSS框架 ${getGithubBtn('https://github.com/jgthms/bulma')}`,
                  },
                  {
                    "id": "muuri",
                    "topic": `响应式可排序可拖动的网格布局 ${getGithubBtn('https://github.com/haltu/muuri')}`,
                  }
                ],
              },
              {
                "id": "ymyydjjs",
                "topic": "页面应用搭建技术",
                "children": [
                  {
                    "id": "ant-design-pro",
                    "topic": `中后台应用搭建 ${getGithubBtn('https://github.com/ant-design/ant-design-pro')}`,
                  },
                  {
                    "id": "Docusaurus",
                    "topic": `快速生成开源项目文档站点 ${getGithubBtn('https://github.com/facebook/Docusaurus')}`,
                  },
                  {
                    "id": "Gatsby",
                    "topic": `React建站 ${getGithubBtn('https://github.com/gatsbyjs/gatsby')}`,
                  },
                ],
              },
              {
                "id": "donghua",
                "topic": "动画",
                "children": [
                  {
                    "id": "animejs",
                    "topic": `JS动画引擎 ${getGithubBtn('https://github.com/juliangarnier/anime')}`,
                  },
                  {
                    "id": "Introjs",
                    "topic": `产品使用分步引导 ${getGithubBtn('https://github.com/usablica/intro.js')}`,
                  },
                  {
                    "id": "lottie-web",
                    "topic": `AE动画直接用于移动端与网页 ${getGithubBtn('https://github.com/airbnb/lottie-web')}`,
                  },
                  {
                    "id": "react-motion",
                    "topic": `react动画库 ${getGithubBtn('https://github.com/chenglou/react-motion')}`,
                  },
                ],
              },
              {
                "id": "tuozhuai",
                "topic": "拖拽效果",
                "children": [
                  {
                    "id": "draggable",
                    "topic": `${getGithubBtn('https://github.com/Shopify/draggable')}`,
                  },
                ],
              },
              {
                "id": "benwenbianjiqi",
                "topic": "编辑器",
                "children": [
                  {
                    "id": "ORYEditor",
                    "topic": `ORY ${getGithubBtn('https://github.com/ory/editor')}`,
                  },
                  {
                    "id": "tui-editor",
                    "topic": `Markdown编辑器 ${getGithubBtn('https://github.com/nhnent/tui.editor')}`,
                  },
                ],
              },
              {
                "id": "shipinbofangqi",
                "topic": "视频播放器",
                "children": [
                  {
                    "id": "videojs",
                    "topic": `${getGithubBtn('https://github.com/videojs/video.js')}`,
                  },
                ],
              },
              {
                "id": "filecl",
                "topic": "文件处理",
                "children": [
                  {
                    "id": "jsPDF",
                    "topic": `${getGithubBtn('https://github.com/MrRio/jsPDF')}`,
                  },
                  {
                    "id": "js-xlsx",
                    "topic": `${getGithubBtn('https://github.com/SheetJS/js-xlsx')}`,
                  },
                  {
                    "id": "uppy",
                    "topic": `全新的浏览器Web文件上传组件 ${getGithubBtn('https://github.com/transloadit/uppy')}`,
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
                    "topic": `轻量级的JS日期库 ${getGithubBtn('https://github.com/date-fns/date-fns')}`,
                  },
                ],
              },
              {
                "id": "sjlxsflk",
                "topic": "数据类型与算法类库",
                "children": [
                  {
                    "id": "ramda",
                    "topic": `js函数式编程 ${getGithubBtn('https://github.com/ramda/ramda')}`,
                  },
                ],
              },
              {
                "id": "tbyb",
                "topic": "同步异步编程处理类库",
                "children": [
                  {
                    "id": "RxJS",
                    "topic": `js响应式编程库 ${getGithubBtn('https://github.com/ReactiveX/RxJS')}`,
                  },
                ],
              },
              {
                "id": "wlqq",
                "topic": "网络请求库",
                "children": [
                  {
                    "id": "axios",
                    "topic": `用于浏览器和nodejs的HTTP请求库 ${getGithubBtn('https://github.com/axios/axios')}`,
                  },
                ],
              },
              {
                "id": "jkmok",
                "topic": "接口模拟",
                "children": [
                  {
                    "id": "json-server",
                    "topic": `本地REST API模拟 ${getGithubBtn('https://github.com/typicode/json-server')}`,
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
                "topic": `${getGithubBtn('https://github.com/eduardolundgren/tracking.js')}`,
              },
              {
                "id": "tesseractjs",
                "topic": `图像语言识别 ${getGithubBtn('https://github.com/naptha/tesseract.js')}`,
              },
            ],
          },
          {
            "id": "增强现实",
            "topic": "AR",
            "children": [
              {
                "id": "ARjs",
                "topic": `${getGithubBtn('https://github.com/jeromeetienne/AR.js')}`,
              }
            ],
          },
          {
            "id": "虚拟现实",
            "topic": "VR",
            "children": [
              {
                "id": "react-vr",
                "topic": `${getGithubBtn('https://github.com/facebook/react-vr')}`,
              }
            ],
          },
          {
            "id": "ai",
            "topic": "人工智能",
            "children": [
              {
                "id": "deeplearnjs",
                "topic": `${getGithubBtn('https://github.com/PAIR-code/deeplearnjs')}`,
              },
              {
                "id": "hubot",
                "topic": `聊天机器人 ${getGithubBtn('https://github.com/hubotio/hubot')}`,
              },
              {
                "id": "keras-js",
                "topic": `浏览器上运行Keras模型 ${getGithubBtn('https://github.com/transcranial/keras-js')}`,
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
                "topic": `${getGithubBtn('https://github.com/thx/RAP')}`
              },
            ],
          },
          {
            "id": "shejigongju",
            "topic": "设计工具",
            "children": [
              {
                "id": "react-sketchapp",
                "topic": `React代码生成Sketch${getGithubBtn('https://github.com/airbnb/react-sketchapp')}`
              },
            ],
          },
          {
            "id": "pythongongju",
            "topic": "python工具",
            "children": [
              {
                "id": "wechatjumpgame",
                "topic": `python微信《跳一跳》辅助${getGithubBtn('https://github.com/wangshub/wechat_jump_game')}`
              },
            ],
          },
        ],
      },
    ]
  }
};

export default mind;
