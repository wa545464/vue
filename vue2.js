new Vue({
  el:'#app',
  data:{
    music:{
      id:0,
      name:'',
      singer:'',
      time:''
    },
    musics:[{
      id:1,
      name:'Superheros',
      singer:'The Script',
      time:'04:03'
    },
    {
      id:2,
      name:'作曲家',
      singer:'李荣浩',
      time:'04:23'
    }]
  },
  methods:{

    add:function(){
      this.id=this.musics.length+1;
      this.musics.push(this.music);
      this.music='';
    },
    del:function(music){
      this.musics.$remove(music);
    }
    }
  
  
})