<!DOCTYPE html>
<html>
<head>
	<title>33333</title>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.7/vue.min.js"></script>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="vue2.css">
</head>
<body>
	<div id="app">
	<table border="1" cellspacing="0" width="600px" height="200px">
		<thead>
			<tr>
				<th>序号</th>
				<th>歌曲</th>  
				<th>歌手</th>
				<th>时长</th>
			</tr>
		</thead>
		<tr v-for="music in musics">
			<td>{{music.id}}</td>
			<td>{{music.name}}</td>
			<td>{{music.singer}}</td>
			<td>{{music.time}}</td>
			<td align="center">
				<button @click="del(music)">删除</button>
			</td>
		</tr>
	</table>
	<div class="box">
		<table>
			<tr>
				<td>歌曲：</td>
				<td>
					<input type="text" v-model="music.name">
				</td>
			</tr>
			<tr>
				<td>歌手：</td>
				<td>
					<input type="text" v-model="music.singer">
				</td>
			</tr>
			<tr>
				<td>时长:</td>
				<td>
					<input type="text" v-model="music.time">
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<button @click="add()">添加</button>
				</td>
			</tr>
		</table>
	</div>
	</div>
	<script type="text/javascript" src="vue2.js"></script>
</body>
</html>
