https://www.cnblogs.com/raion/p/8053799.html
webpack --config webpack/webpack.config.js
webpack --config webpack/webpack.build.config.js


npm install react react-dom --save
npm install webpack --save-dev 

因为我们使用了react，react是使用jsx语法实现的，而jsx不能直接被浏览器识别和执行，所以这里需要引入Babel库进行转码
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save

	babel-loader: babel加载器

	babel-preset-es2015: 支持es2015

	babel-preset-react: jsx 转换成js
	
npm install style-loader css-loader --save-dev

npm install webpack-dev-server --save-dev　


npm install react-router-dom --save
npm install react-router --save

npm install html-webpack-plugin --save-dev


/***************/
npm install webpack-cli -D
npm install webpack-command -g

npm install webpack --save-dev
npm install webpack-dev-server --save-dev　　



npm install -g webpack


http://192.168.0.102:8081//dist/0.1.0/bundle.js
