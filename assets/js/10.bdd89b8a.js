(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{304:function(e,t,a){e.exports=a.p+"assets/img/loading.07ef565a.png"},381:function(e,t,a){e.exports=a.p+"assets/img/azure_offer.c78bd559.png"},382:function(e,t,a){e.exports=a.p+"assets/img/aws_offer.70c9cb34.png"},423:function(e,t,a){"use strict";a.r(t);var r=a(43),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"getting-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),r("p",[e._v("Epirus supports a number of different hosting options which all come with support from the Web3 Labs team:")]),e._v(" "),r("ol",[r("li",[e._v("Cloud - you can find it in the "),r("a",{attrs:{href:"https://web3labs.com/aws-offer",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://web3labs.com/azure-offer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure"),r("OutboundLink")],1),e._v(" marketplaces")]),e._v(" "),r("li",[e._v("SaaS - we also provide a hosted or on-premise "),r("a",{attrs:{href:"#enterprise"}},[e._v("Enterprise")]),e._v(" version")])]),e._v(" "),r("p",[e._v("There is also a basic "),r("a",{attrs:{href:"#free"}},[e._v("Free")]),e._v(" version.")]),e._v(" "),r("p",[e._v("This documentation reflects the features of our AWS, Azure and Enterprise versions.")]),e._v(" "),r("h2",{attrs:{id:"azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure"}},[e._v("#")]),e._v(" Azure")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://web3labs.com/azure-offer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Marketplace offer"),r("OutboundLink")],1),e._v(" is the simplest full version of Epirus\nto get up and running with. It requires an active Azure cloud subscription")]),e._v(" "),r("p",[r("img",{attrs:{src:a(381),alt:"Azure Marketplace offer"}})]),e._v(" "),r("p",[e._v("You will need to provide details of your managed ledger (or Ethereum/Quorum/Hyperledger Besu) node. In your Azure portal, navigate to the Azure Blockchain Service instance you wish to use. From here click "),r("code",[e._v("Transaction nodes -> <your-transaction-node> -> Connection strings")])]),e._v(" "),r("p",[e._v("Then copy the HTTPS access keys with node URL, such as "),r("code",[e._v("https://<your-service>.blockchain.azure.com:3200/<acess-key>")])]),e._v(" "),r("p",[e._v("You will be able to access the Explorer UI via "),r("code",[e._v("http://<instance-name>-<uuid>.<region>.cloudapp.azure.com")])]),e._v(" "),r("p",[e._v("To view the actual URL, navigate to the Overview page for the resource group you used for Epirus, then head to "),r("code",[e._v("Deployments -> blk-technologies.... -> Outputs -> epirusUrl")]),e._v(".")]),e._v(" "),r("p",[e._v("Please allow a few minutes for the service to fully initialise and display data when initially run. You will see the below loading screen while it is initially loading.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(304),alt:"loading screen"}})]),e._v(" "),r("p",[e._v("Please note, it can take a while (multiple hours) to display token and contract details as it needs to process the entire blockchain history.")]),e._v(" "),r("h2",{attrs:{id:"aws"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aws"}},[e._v("#")]),e._v(" AWS")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://web3labs.com/aws-offer",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Marketplace offer"),r("OutboundLink")],1),e._v(" provides a pre-configured VM with\nEpirus already installed. It requires an active AWS subscription.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(382),alt:"AWS Marketplace offer"}})]),e._v(" "),r("p",[e._v("You will need to provide details of the RPC endpoint for your Hyperledger Besu/Quorum/Ethereum node.")]),e._v(" "),r("p",[e._v("Copy the RPC endpoint for your node, such as "),r("code",[e._v("http://<your-service-url>:8545")]),e._v(" (the default RPC port is 8545). This is the same URL you use to attach a console to your node - i.e. "),r("code",[e._v("geth attach http://<your-service-url>:8545")]),e._v(" (for more information, head "),r("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/JSON-RPC#json-rpc-endpoint",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(").")]),e._v(" "),r("p",[e._v("Once the virtual machine has been deployed, launch a terminal on the machine:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" -i "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("keyfile"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ubuntu@"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("machine name"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),r("p",[e._v("Then copy the HTTPS access keys with node URL, such as "),r("code",[e._v("http://<your-service-url>")])]),e._v(" "),r("p",[e._v("Once the virtual machine has been deployed, launch a terminal on the machine. Then run the following command to configure the node ("),r("strong",[e._v("please note AWS requires authentication credentials to be configured")]),e._v("):")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" epirus setup\nConfiguring Epirus instance\n\nPlease enter a username: "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("enter username"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nNew password: "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("enter password"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nRe-type new password: "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("re-enter password"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nAdding password "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" user "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("username"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\nPlease enter node URL: http://"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-service-url"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nSuccessfully connected to http://"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-service-url"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nConfiguration written to /usr/local/src/epirus/epirus.conf\n\nYou can "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v(" start the Epirus service:\n\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl start epirus.service\n")])])]),r("p",[e._v("You will be able to access the Explorer UI via "),r("code",[e._v("http://vm-ip-address-or-hostname")]),e._v(", providing the authentication credentials you specified when prompted.")]),e._v(" "),r("p",[e._v("Please allow a few minutes for the service to fully initialise and display data when initially run. It will automatically start up on subsequent reboots.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(304),alt:"loading screen"}})]),e._v(" "),r("p",[e._v("Please note, it can take a while (multiple hours) to display token and contract details as it needs to process the entire blockchain history.")]),e._v(" "),r("p",[e._v("If you need to modify or create additional access credentials, you can use the following command:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" epirus "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("passwd")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("new or existing username"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),r("h2",{attrs:{id:"enterprise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enterprise"}},[e._v("#")]),e._v(" Enterprise")]),e._v(" "),r("p",[e._v("Web3 Labs also provides hosted Blockchain Explorer instances - these can be hosted within your cloud subscription or hosted by us.")]),e._v(" "),r("p",[e._v("Some of the features include:")]),e._v(" "),r("ul",[r("li",[e._v("SSO authentication (Active Directory, SAML, Okta, etc)")]),e._v(" "),r("li",[e._v("Dedicated database")]),e._v(" "),r("li",[e._v("Data encryption at rest and in transit")]),e._v(" "),r("li",[e._v("Continuous backup and point in time data recovery")]),e._v(" "),r("li",[e._v("Full access to backups")]),e._v(" "),r("li",[e._v("Tableau integration support")])]),e._v(" "),r("p",[e._v("For further information please "),r("a",{attrs:{href:"mailto:hi@web3labs.com"}},[e._v("email us")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"free"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#free"}},[e._v("#")]),e._v(" Free")]),e._v(" "),r("p",[e._v("A free, feature limited version of Epirus is available. This version is updated periodically, unlike the Azure and SaaS offerings which are constantly being updated with the latest features.")]),e._v(" "),r("p",[e._v("To get started with the free version, you'll need "),r("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),r("OutboundLink")],1),e._v(" installed and an Ethereum, Hyperledger Besu or Quorum node endpoint.")]),e._v(" "),r("p",[e._v("Run the following command to download Epirus:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/epirus-io/epirus-free.git\n")])])]),r("p",[e._v("Navigate to the "),r("code",[e._v("epirus-free")]),e._v(" directory directory and run the instance with:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" epirus-free\n"),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("NODE_ENDPOINT")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("node_endpoint"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" docker-compose up\n")])])]),r("p",[e._v("Note that if setting "),r("code",[e._v("NODE_ENDPOINT")]),e._v(" to a local Ethereum instance, you may need to use the IP address associated with the Docker bridged interface, often denoted by "),r("code",[e._v("docker0")]),e._v(".")]),e._v(" "),r("p",[e._v("Append the "),r("code",[e._v("-d")]),e._v(" argument to run the containers in the backgroud")]),e._v(" "),r("p",[e._v("You will be able to access the Explorer UI via:")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://localhost/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("To stop the containers use:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("docker-compose down\n")])])]),r("p",[e._v("To connect to new network you should remove the volumes associated with the old network")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("docker-compose down -v\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);