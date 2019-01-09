import UIkit from 'uikit/src/js/api/index';
import Boot from 'uikit/src/js/api/boot';

// import Accordion from 'uikit/src/js/core/accordion';
// import Alert from 'uikit/src/js/core/alert';
import Core from 'uikit/src/js/core/core';
// import Cover from 'uikit/src/js/core/cover';
import Drop from 'uikit/src/js/core/drop';
// import Dropdown from 'uikit/src/js/core/dropdown';
// import FormCustom from 'uikit/src/js/core/form-custom';
// import Gif from 'uikit/src/js/core/gif';
// import Grid from 'uikit/src/js/core/grid';
// import HeightMatch from 'uikit/src/js/core/height-match';
// import HeightViewport from 'uikit/src/js/core/height-viewport';
// import Img from 'uikit/src/js/core/img';
// import Leader from 'uikit/src/js/core/leader';
// import Margin from 'uikit/src/js/core/margin';
// import Modal from 'uikit/src/js/core/modal';
// import Nav from 'uikit/src/js/core/nav';
import Navbar from 'uikit/src/js/core/navbar';
// import Offcanvas from 'uikit/src/js/core/offcanvas';
// import OverflowAuto from 'uikit/src/js/core/overflow-auto';
// import Responsive from 'uikit/src/js/core/responsive';
// import Scroll from 'uikit/src/js/core/scroll';
// import Scrollspy from 'uikit/src/js/core/scrollspy';
// import ScrollspyNav from 'uikit/src/js/core/scrollspy-nav';
// import Sticky from 'uikit/src/js/core/sticky';
// import Svg from 'uikit/src/js/core/svg';
// import Switcher from 'uikit/src/js/core/switcher';
// import Tab from 'uikit/src/js/core/tab';
import Toggle from 'uikit/src/js/core/toggle';
// import Video from 'uikit/src/js/core/video';

// core components
// UIkit.component('accordion', Accordion);
// UIkit.component('alert', Alert);
// UIkit.component('cover', Cover);
UIkit.component('drop', Drop);
// UIkit.component('dropdown', Dropdown);
// UIkit.component('formCustom', FormCustom);
// UIkit.component('gif', Gif);
// UIkit.component('grid', Grid);
// UIkit.component('heightMatch', HeightMatch);
// UIkit.component('heightViewport', HeightViewport);
// UIkit.component('img', Img);
// UIkit.component('leader', Leader);
// UIkit.component('margin', Margin);
// UIkit.component('modal', Modal);
// UIkit.component('nav', Nav);
UIkit.component('navbar', Navbar);
// UIkit.component('offcanvas', Offcanvas);
// UIkit.component('overflowAuto', OverflowAuto);
// UIkit.component('responsive', Responsive);
// UIkit.component('scroll', Scroll);
// UIkit.component('scrollspy', Scrollspy);
// UIkit.component('scrollspyNav', ScrollspyNav);
// UIkit.component('sticky', Sticky);
// UIkit.component('svg', Svg);
// UIkit.component('switcher', Switcher);
// UIkit.component('tab', Tab);
UIkit.component('toggle', Toggle);
// UIkit.component('video', Video);

// core functionality
UIkit.use(Core);

Boot(UIkit);

export default UIkit;
