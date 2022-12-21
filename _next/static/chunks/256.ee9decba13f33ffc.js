"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[256],{94256:function(t,a,r){r.r(a),r.d(a,{Vote:function(){return d}});var e=r(94871),o=r(42208),s=r(49242),n=r(2593),i=r(32046),c=r(35553),p=r(64146);r(13550),r(25025),r(70332),r(8455),r(59189),r(71770),r(54098),r(62555),r(23565),r(26219),r(68834),r(61303),r(71497),r(70565),r(13670),r(79120),r(42328),r(97604),r(8187),r(19362),r(54730),r(36250),r(85725),r(38730),r(48507),r(38398),r(2090),r(52876),r(86841),r(49561),r(80580),r(54253),r(91559),r(40553),r(26),r(69392),r(62822),r(82037),r(2162),r(64063),r(34161),r(50266),r(98839),r(51375),r(43320),r(65815),r(40721),r(29526),r(24601),r(46878),r(20583),r(92355),r(84194),r(51121),r(32484),r(78435);class d{get chainId(){return this._chainId}constructor(t,a,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new o.cB(t,a,n,s);(0,e._)(this,"contractWrapper",void 0),(0,e._)(this,"storage",void 0),(0,e._)(this,"abi",void 0),(0,e._)(this,"metadata",void 0),(0,e._)(this,"encoder",void 0),(0,e._)(this,"estimator",void 0),(0,e._)(this,"events",void 0),(0,e._)(this,"interceptor",void 0),(0,e._)(this,"_chainId",void 0),this._chainId=i,this.abi=n,this.contractWrapper=c,this.storage=r,this.metadata=new o.aj(this.contractWrapper,o.cV,this.storage),this.encoder=new o.ai(this.contractWrapper),this.estimator=new o.aT(this.contractWrapper),this.events=new o.aU(this.contractWrapper),this.interceptor=new o.aV(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(t){const a=(await this.getAll()).filter((a=>a.proposalId.eq(n.O$.from(t))));if(0===a.length)throw new Error("proposal not found");return a[0]}async getAll(){return Promise.all((await this.contractWrapper.readContract.getAllProposals()).map((async t=>({proposalId:t.proposalId,proposer:t.proposer,description:t.description,startBlock:t.startBlock,endBlock:t.endBlock,state:await this.contractWrapper.readContract.state(t.proposalId),votes:await this.getProposalVotes(t.proposalId),executions:t[3].map(((a,r)=>({toAddress:t.targets[r],nativeTokenValue:a,transactionData:t.calldatas[r]})))}))))}async getProposalVotes(t){const a=await this.contractWrapper.readContract.proposalVotes(t);return[{type:o.b2.Against,label:"Against",count:a.againstVotes},{type:o.b2.For,label:"For",count:a.forVotes},{type:o.b2.Abstain,label:"Abstain",count:a.abstainVotes}]}async hasVoted(t,a){return a||(a=await this.contractWrapper.getSignerAddress()),this.contractWrapper.readContract.hasVoted(t,a)}async canExecute(t){await this.ensureExists(t);const a=await this.get(t),r=a.executions.map((t=>t.toAddress)),e=a.executions.map((t=>t.nativeTokenValue)),o=a.executions.map((t=>t.transactionData)),s=i.id(a.description);try{return await this.contractWrapper.callStatic().execute(r,e,o,s),!0}catch(n){return!1}}async balance(){const t=await this.contractWrapper.readContract.provider.getBalance(this.contractWrapper.readContract.address);return{name:"",symbol:"",decimals:18,value:t,displayValue:c.formatUnits(t,18)}}async balanceOfToken(t){const a=new p.CH(t,s,this.contractWrapper.getProvider());return await(0,o.b4)(this.contractWrapper.getProvider(),t,await a.balanceOf(this.contractWrapper.readContract.address))}async ensureExists(t){try{await this.contractWrapper.readContract.state(t)}catch(a){throw Error(`Proposal ${t} not found`)}}async settings(){const[t,a,r,e,s]=await Promise.all([this.contractWrapper.readContract.votingDelay(),this.contractWrapper.readContract.votingPeriod(),this.contractWrapper.readContract.token(),this.contractWrapper.readContract["quorumNumerator()"](),this.contractWrapper.readContract.proposalThreshold()]),n=await(0,o.b5)(this.contractWrapper.getProvider(),r);return{votingDelay:t.toString(),votingPeriod:a.toString(),votingTokenAddress:r,votingTokenMetadata:n,votingQuorumFraction:e.toString(),proposalTokenThreshold:s.toString()}}async propose(t,a){a||(a=[{toAddress:this.contractWrapper.readContract.address,nativeTokenValue:0,transactionData:"0x"}]);const r=a.map((t=>t.toAddress)),e=a.map((t=>t.nativeTokenValue)),o=a.map((t=>t.transactionData)),s=await this.contractWrapper.sendTransaction("propose",[r,e,o,t]);return{id:this.contractWrapper.parseLogs("ProposalCreated",s?.logs)[0].args.proposalId,receipt:s}}async vote(t,a){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return await this.ensureExists(t),{receipt:await this.contractWrapper.sendTransaction("castVoteWithReason",[t,a,r])}}async execute(t){await this.ensureExists(t);const a=await this.get(t),r=a.executions.map((t=>t.toAddress)),e=a.executions.map((t=>t.nativeTokenValue)),o=a.executions.map((t=>t.transactionData)),s=i.id(a.description);return{receipt:await this.contractWrapper.sendTransaction("execute",[r,e,o,s])}}async call(t){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];return this.contractWrapper.call(t,...r)}}}}]);