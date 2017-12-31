/**
 * Created by chenhaoact on 2017/12/20.
 */
import mind from './data/index';
import './index.scss';

// options：jsmind的配置
var options = {
  container: 'jsmind_container', // [必选] 容器的ID，或者为容器的对象
  editable: false,  // [可选] 是否启用编辑
  theme: 'orange',  // [可选] 主题
  support_html: true,  // [可选] 是否支持节点里有HTML元素，默认为true，支持，故节点里可以放置 a标签链接，table等html元素
};

var jm = new jsMind(options);

jm.show(mind);
