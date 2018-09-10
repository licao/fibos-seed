var fibos = require('fibos');
var fs = require("fs");

console.notice("start FIBOS ABI nodes");


fibos.config_dir = "./blockData"; //配置文件地址
fibos.data_dir = "./blockData"; //数据地址

console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);


fibos.load("http", {
	"http-server-address": "0.0.0.0:8870",
	"access-control-allow-origin": "*",
	"http-validate-host": false,
	"verbose-http-errors": true //打开报错
});


fibos.load("net", {
	"p2p-peer-address": [
		"seed.bitze.site:9870",
		"p2p-mainnet.fibos123.com:9977",
		"api.fibosgenesis.com:8870",
		"seed.fibos.rocks:10100",
		"seed-mainnet.fibscan.io:9103",
		"p2p.mainnet.fibos.me:80",
		"p2p.foshenzhenbp.com:9877",
		"p2p.eoschina.me:10300",
		"p2p-mainnet.ilovefibos.com:9876",
		"seed.fiboso.com:9965",
		"fibos-p2p.slowmist.io:9870",
		"185.133.193.1:9870",
		"fibos.qubitfund.com:9870"
	],
	"p2p-listen-endpoint": "0.0.0.0:9870"
});

fibos.load("producer", {
	'enable-stale-production': true,
	'max-transaction-time': 3000
});

fibos.load("chain", {
	// "contracts-console": true, //开启内容输出
	//'chain-state-db-size-mb': 8 * 1024,
	// "delete-all-blocks": true, //是否每次
	'genesis-json': 'genesis.json'
});
fibos.load("chain_api");
fibos.load("history");
fibos.load("history_api");

fibos.start();