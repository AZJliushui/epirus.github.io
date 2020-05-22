(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{414:function(t,e,a){t.exports=a.p+"assets/media/epirus-quickstart.7d1c2ec2.webm"},415:function(t,e,a){t.exports=a.p+"assets/img/explorer_contract.a8c55dce.png"},416:function(t,e,a){t.exports=a.p+"assets/img/explorer_helloworld.28d94222.png"},417:function(t,e,a){t.exports=a.p+"assets/img/explorer_wallet.cde95ba2.png"},418:function(t,e,a){t.exports=a.p+"assets/img/explorer_dashboard.583247bc.png"},434:function(t,e,a){"use strict";a.r(e);var s=a(9),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"quickstart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[t._v("#")]),t._v(" QuickStart")]),t._v(" "),s("p",[t._v("The Epirus Platform consists of a suite of tools and services to enable rapid and efficent development, deployment and monitoring of blockchain applications.")]),t._v(" "),s("p",[t._v("All it takes is three commands to go from zero to having your first live blockchain application:")]),t._v(" "),s("ol",[s("li",[t._v("Install the Epirus SDK")]),t._v(" "),s("li",[t._v("Create your first applicaiton")]),t._v(" "),s("li",[t._v("Deploy your application")])]),t._v(" "),s("p",[t._v("Read on to super-charge your blockchain journey!")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("To install the Epirus CLI run the following command in your terminal:")]),t._v(" "),s("CodeSwitcher",{attrs:{languages:{shell:"Mac/Linux",powershell:"Windows"}},scopedSlots:t._u([{key:"shell",fn:function(){return[s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L get.epirus.io "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/.epirus/source.sh\n")])])])]},proxy:!0},{key:"powershell",fn:function(){return[s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ExecutionPolicy Bypass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Scope "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Process")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Force"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iex")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/epirus-io/epirus-installer/master/installer.ps1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),s("p",[t._v("Alternatively, you can head "),s("a",{attrs:{href:"https://github.com/epirus-io/epirus-cli/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(" to download the latest release.")]),t._v(" "),s("h2",{attrs:{id:"account-creation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#account-creation"}},[t._v("#")]),t._v(" Account Creation")]),t._v(" "),s("p",[t._v("If you signed up for Epirus via the "),s("a",{attrs:{href:"https://www.web3labs.com/epirus-platform",target:"_blank",rel:"noopener noreferrer"}},[t._v("website"),s("OutboundLink")],1),t._v(" you should already have an account, if not you can create one via the CLI.")]),t._v(" "),s("video",{attrs:{width:"100%",controls:""}},[s("source",{attrs:{src:a(414),type:"video/mp4"}})]),t._v(" "),s("p",[t._v("In order to create a new account, use the command "),s("code",[t._v("epirus account create")]),t._v(", and enter your email address when prompted. You will be sent an activation email.")]),t._v(" "),s("p",[t._v("Once your email address has been confirmed, you will have an account on the Epirus platform and will be able to make use of all features.")]),t._v(" "),s("p",[t._v("You will need to be logged in to deploy Epirus applications. Use "),s("code",[t._v("epirus login")]),t._v(" and follow the prompt to do this.")]),t._v(" "),s("h2",{attrs:{id:"project-creation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-creation"}},[t._v("#")]),t._v(" Project Creation")]),t._v(" "),s("p",[t._v("After having created a new account, use the command "),s("code",[t._v("epirus new")]),t._v(" to create a new project. Epirus will use sensible defaults for all the questions asked during the project setup process, so if you hit enter on each question, the output should be similar to the following:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ epirus new\n  ______       _                \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ____"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("__   _ __  _ _ __ _   _ ___ \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  __"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_ \\| | '")]),t._v("__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" / __"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("____"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("__ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("______"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" .__/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("__,_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("___/\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                     \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                     \nPlease enter the project name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Web3App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\n\nPlease enter the package name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" your project "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("io.epirus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\n\nPlease enter the destination of your project "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/home/user/Web3App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": \n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Creating Web3App\nProject Created Successfully\n\nProject information\nWallet Address      0xd66aa9b52a33f0318fbe609142db46156c176c04\n\nCommands\n./gradlew run       Runs your application\n./gradlew "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("      Test your application\nepirus deploy       Deploys your application\n")])])]),s("p",[t._v("Epirus has now created and built a full project, which includes a "),s("em",[t._v("Hello World")]),t._v(" smart contract, and all the necessary code to interact with it, test it, and deploy it.")]),t._v(" "),s("h2",{attrs:{id:"deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[t._v("#")]),t._v(" Deployment")]),t._v(" "),s("p",[t._v("Using the "),s("code",[t._v("epirus deploy")]),t._v(" command, you will be able to deploy your code to the Rinkeby and Ropsten Ethereum test networks, from the wallet address that Epirus generated for you (this wallet will be automatically funded with testnet Ether by Epirus during the contract deploy process).")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ epirus deploy rinkeby\n  ______       _                \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ____"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("__   _ __  _ _ __ _   _ ___ \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  __"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_ \\| | '")]),t._v("__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" / __"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("____"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("__ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("______"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" .__/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("__,_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("___/\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                     \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                     \nPreparing to deploy your Web3App\n\nAccount status      ACTIVE \nWallet balance      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0984925612")]),t._v(" ETH\nUploading metadata  DONE\n\nDeploying your Web3App\n\nContract address    https://rinkeby.epirus.io/contracts/0xa12dda51eac72ffd6dc4f9ccc6fb6bbdd8b97892\nWallet address      https://rinkeby.epirus.io/accounts/0x1f17c4af8313f5923a05b1dc6c262bb0b9c90c27\n")])])]),s("p",[t._v("Once completed you can use the provided links to examine your live blockchain application and account!")]),t._v(" "),s("h2",{attrs:{id:"monitoring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[t._v("#")]),t._v(" Monitoring")]),t._v(" "),s("p",[t._v("Monitoring your application is achieved via the Epirus Explorer.")]),t._v(" "),s("p",[t._v("Two URLs are output by the Epirus SDK "),s("code",[t._v("deploy")]),t._v(" command following a successful deployment. They allow you to view details of the deployed smart contract and your Ethereum wallet account respectively.")]),t._v(" "),s("p",[t._v("If you head to the contract view, you can dig into details of your smart contract.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(415),alt:"View contract in Epirus Explorer"}})]),t._v(" "),s("p",[t._v("There will be a single transaction which was the transaction that deployed your contract.")]),t._v(" "),s("p",[t._v("If you hover over the "),s("code",[t._v("constructor")]),t._v(" field you will see the Hello World message that was in your smart contract that has now been deployed to the globally decentralized public Ethereum network!")]),t._v(" "),s("p",[s("img",{attrs:{src:a(416),alt:"View Hello World in Epirus Explorer"}})]),t._v(" "),s("p",[t._v("The other view provides details of all transactions associated with your recently created wallet file. This was created when you ran the "),s("code",[t._v("epirus new")]),t._v(" command, and funded with the cryptocurrency Ether when you ran "),s("code",[t._v("epirus deploy")]),t._v(". This funding activity allows you to pay for transactions on the public Ethereum network.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(417),alt:"View wallet in Epirus Explorer"}})]),t._v(" "),s("p",[t._v("Finally, click on the Dashboard link in Epirus Explorer to see an overview of the public Ethereum network your contract was deployed to.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(418),alt:"Epirus Explorer Dashboard"}})]),t._v(" "),s("p",[t._v("You can learn more about the Epirus Explorer "),s("a",{attrs:{href:"/explorer"}},[t._v("here")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),s("p",[t._v("From here you'll probably want to start digging further through the project code created by the Epirus SDK. Read more "),s("a",{attrs:{href:"/sdk"}},[t._v("here")]),t._v(".")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);