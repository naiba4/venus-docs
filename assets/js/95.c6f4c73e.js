(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{479:function(v,e,a){"use strict";a.r(e);var n=a(17),s=Object(n.a)({},(function(){var v=this,e=v.$createElement,a=v._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"nv15升级指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nv15升级指南"}},[v._v("#")]),v._v(" nv15升级指南")]),v._v(" "),a("h2",{attrs:{id:"版本信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本信息"}},[v._v("#")]),v._v(" 版本信息")]),v._v(" "),a("ol",[a("li",[v._v("venus-wallet")]),v._v(" "),a("li",[v._v("venus")]),v._v(" "),a("li",[v._v("lotus兼容版本")]),v._v(" "),a("li",[v._v("chain-co")]),v._v(" "),a("li",[v._v("messager")]),v._v(" "),a("li",[v._v("venus-gateway")]),v._v(" "),a("li",[v._v("venus-miner")]),v._v(" "),a("li",[v._v("venus-market")]),v._v(" "),a("li",[v._v("venus-sealer")])]),v._v(" "),a("h2",{attrs:{id:"升级细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级细节"}},[v._v("#")]),v._v(" 升级细节")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("venus-auth: 可选择升级\n分支： v1.3.2\n影响功能: 无")])]),v._v(" "),a("li",[a("p",[v._v("venus： 升级\n分支：v1.2.1\n影响功能：支持新网络版本\n注意事项：")]),v._v(" "),a("ol",[a("li",[v._v("升级后检查vk文件是否完整")]),v._v(" "),a("li",[v._v("升级后检查配置文件，升级高度是否正常设置:")])]),v._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v('# cali\n"upgradeOhSnapHeight": 682006\n# mainnet\n"upgradeOhSnapHeight": 1594680\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[v._v("升级后检查mpool下maxfee配置是否由数字转换成xxFil形式")])]),v._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v('"mpool": {\n          "maxNonceGap": 100,\n          "maxFee": "10 FIL"\n},\n')])])]),a("ol",{attrs:{start:"4"}},[a("li",[v._v("升级后需检查是否正常同步区块")]),v._v(" "),a("li",[v._v("api版本发生变化，影响sealer的连接，升级方式需要按照大升级的方式来处理")])])]),v._v(" "),a("li",[a("p",[v._v("lotus兼容版本： 升级\n分支: venus/v1.14.0\n影响功能： 支持新网络版本\n注意事项:")]),v._v(" "),a("ol",[a("li",[v._v("检查是否正常同步")]),v._v(" "),a("li",[v._v("检查和venus-auth的连接是否完好（curl 命令验证）")])])]),v._v(" "),a("li",[a("p",[v._v("chain-co： 升级\n分支：v0.1.0\n注意事项：\n影响功能：")]),v._v(" "),a("ol",[a("li",[v._v("暴露新的接口MpoolPending/MpoolGetNonce")]),v._v(" "),a("li",[v._v("升级后检查两个接口是否存在，且能正常工作")])])]),v._v(" "),a("li",[a("p",[v._v("venus-messager： 升级\n分支:v1.4.0\n影响功能： 仅支持新的网络版本\n注意事项： 无")])]),v._v(" "),a("li",[a("p",[v._v("venus-miner： 升级\nTag： v1.4.0\n影响功能:\n1. 计算证明的接口(ComputeProof)参数发生变化\n注意事项:无")])]),v._v(" "),a("li",[a("p",[v._v("venus-gateway： 升级\n分支：v1.2.0\n影响功能：\n1. ComputeProof接口参数发生变化，\n2. 需同时支持新老两组接口\n注意事项：\n1. 升级后需检查是否v0/v1两组接口都在正常工作")])]),v._v(" "),a("li",[a("p",[v._v("venus-wallet： 可选择升级\nTag：v1.4.0\n影响功能：无")])]),v._v(" "),a("li",[a("p",[v._v("venus-market： 可选择升级\n分支： v2.0.0\n影响功能  新版本")])])]),v._v(" "),a("h2",{attrs:{id:"升级顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级顺序"}},[v._v("#")]),v._v(" 升级顺序")]),v._v(" "),a("ol",[a("li",[v._v("venus-wallet Tag:v1.4.0")]),v._v(" "),a("li",[v._v("venus v1.2.0")]),v._v(" "),a("li",[v._v("lotus for venuspool venus/v1.14.0")]),v._v(" "),a("li",[v._v("chain-co v0.1.0")]),v._v(" "),a("li",[v._v("venus-messager v1.4.0")]),v._v(" "),a("li",[v._v("venus-gateway v1.2.0")]),v._v(" "),a("li",[v._v("venus-miner Tag:v1.4.0")]),v._v(" "),a("li",[v._v("venus-market v2.0.0")]),v._v(" "),a("li",[v._v("venus-sealer v1.4.0")])]),v._v(" "),a("h2",{attrs:{id:"升级建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级建议"}},[v._v("#")]),v._v(" 升级建议")]),v._v(" "),a("ol",[a("li",[v._v("对于还有证明空窗期的用户， 选择一个安全的时间来升级。")]),v._v(" "),a("li",[v._v("对于已经不具备空窗期的用户，最好的办法是在建立一个环境来进行过度。")]),v._v(" "),a("li",[v._v("建议运行一个备用的兼容版本lotus用于备份。")])]),v._v(" "),a("p",[v._v("有任何关于升级的问题可以到disscusion讨论: https://github.com/filecoin-project/venus/discussions/4688")])])}),[],!1,null,null,null);e.default=s.exports}}]);