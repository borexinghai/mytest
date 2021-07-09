<template>
  <div id="app">
    <div class="add">
      <h2>新增:</h2>
      <input
        type="text"
        v-model="value"
        placeholder="提示：+回车即可添加任务"
      />
      <button @click="addLIstData">添加</button>
    </div>

    <div class="oper">
      <h2>选择:</h2>
      <button
        v-for="item in oper"
        :key="item.id"
        v-on:click="cutList(item.id)"
        :class="{ act: item.id === selected }"
      >
        {{ item.btn }}
      </button>
    </div>

    <ul class="list">
      <h2>列表</h2>
      <li v-for="item in showList" :key="item.id">
        <span v-bind:class="{ done: item.isTodo == 'true' }">{{
          item.value
        }}</span>
        <button v-on:click="finish(item.id)">完成</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "",
      addList: [],
      showList: [],
      selected: "all",
      oper: [
        {
          btn: "所有",
          id: "all",
        },
        {
          btn: "完成",
          id: "true",
        },
        {
          btn: "未完成",
          id: "false",
        },
      ],
    };
  },
  methods: {
    addLIstData: function () {
      this.addList.push({
        id: new Date().getTime(),
        value: this.value,
        isTodo: "false",
      });
      this.value = "";
      this.showList = this.addList.filter(
        (item) => this.selected == "all" || item.isTodo == this.selected
      );
    },
    finish: function (id) {
      const index = this.showList.findIndex((item) => item.id == id);
      this.showList[index].isTodo = "true";
      this.showList = this.addList.filter(
        (item) => this.selected == "all" || item.isTodo == this.selected
      );
    },

    cutList: function (id) {
      this.selected = id;
      this.showList = this.addList.filter(
        (item) => id == "all" || item.isTodo == id
      );
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  margin: 0 auto;
  padding: 1px;
  border: rgb(231, 235, 3) 8px solid;
  width: 50%;
}

li {
  list-style: square;
  line-height: 26px;
}

.add {
  border: 3px solid #123;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
}

.list {
  border: 3px solid #123;
  padding-bottom: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  width: 100%;
}

.oper {
  margin-top: 30px;
  margin-bottom: 30px;
  border: 3px solid #700;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  display: flex;
}

.oper button {
  margin-left: 20px;
  padding: 5px;
}

h2 {
  margin: 10px;
  font-size: 20px;
  line-height: 26px;
  color: rgb(18, 87, 238);
}

input {
  margin-right: 20px;
}

.act {
  background-color: rgb(213, 0, 0);
  color: aliceblue;
}

.done {
  text-decoration: line-through;
}
</style>
