(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){t.exports=n(20)},16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),s=n(2),a=n.n(s),r=n(3),l=n(4),c=n(6),p=n(5),h=n(7),u=n(9),d=n(1),m=(n(16),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(c.a)(this,Object(p.a)(e).call(this,t))).resize=function(){n.setState({componentWidth:a.a.findDOMNode(n.refs.wrapperElement).getBoundingClientRect().width})},n.state={position:n.props.position||50,componentWidth:void 0},n.wrapperElement=null,n.onMouseMove=n.onMouseMove.bind(Object(d.a)(Object(d.a)(n))),n.onClick=n.onClick.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"setPosition",value:function(t){t<0?t=0:t>100&&(t=100),this.setState({position:t})}},{key:"onMouseMove",value:function(t){var e=t.touches?t.touches[0].clientX:t.clientX;this.setPosition((e-t.currentTarget.offsetLeft)/t.currentTarget.clientWidth*100)}},{key:"onClick",value:function(t){}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize),this.resize()}},{key:"render",value:function(){var t={position:"absolute",height:"auto",top:"50%",transform:"translateY(-50%)"};this.state.componentWidth>0?t.width=this.state.componentWidth+"px":t.display="none";var e=this.props.children,n=i.a.cloneElement(e[0],{style:Object(u.a)({},e[0].props.style,t,{left:0})}),o=i.a.cloneElement(e[1],{style:Object(u.a)({},e[1].props.style,t,{right:0})});return i.a.createElement("div",{ref:"wrapperElement",className:"tstx_jaxtapose_wr",onTouchMove:this.onMouseMove,onMouseMove:this.onMouseMove,onClick:this.onClick},i.a.createElement("div",{className:"tstx_jax_slide __left",style:{width:this.state.position+"%"}},n),i.a.createElement("div",{className:"tstx_jax_slide __right",style:{width:100-this.state.position+"%"}},o),i.a.createElement("div",{className:"tstx-jaxtapose_delimeter",style:{left:this.state.position+"%",borderColor:this.props.delimeterColor}}),i.a.createElement("p",{className:"tstx_jax_label __left",style:{fontSize:this.props.fontSize+"px"}},this.props.leftText),i.a.createElement("p",{className:"tstx_jax_label __right",style:{fontSize:this.props.fontSize+"px"}},this.props.rightText))}}]),e}(i.a.Component)),f=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(m,{leftText:"Left title",rightText:"Right title"},i.a.createElement("img",{className:"123",src:"http://localhost:3000/1.jpg",alt:""}),i.a.createElement("img",{src:"http://localhost:3000/2.jpg",alt:""}))}}]),e}(i.a.Component);n(18);window.start=function(){a.a.render(i.a.createElement(f,null),document.getElementById("root"))},window.start()}},[[11,2,1]]]);
//# sourceMappingURL=main.005fdcec.chunk.js.map