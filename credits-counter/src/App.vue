<template>
  <div id="app">
    <div class="container">
      <h1>工学部講義検索システム</h1>
      <div class="filter" id="appFilter">
        <div class="filter-cond">
          <label>検索対象</label>
          <div class="input-group mb-3">
            <select
              class="form-select"
              v-model="filter.department"
              v-on:change="filterAll()"
            >
              <option value="Z">全学共通科目</option>
              <option value="T" selected>工学部専門科目</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <select
              class="form-select"
              v-on:change="
                validateSerectFaculty();
                filterAll();
              "
              v-model="filter.faculty"
            >
              <option value="." selected>科目領域を選択</option>
              <option value="[AT]">社会基盤工学科</option>
              <option value="[BT]">機械工学科</option>
              <option value="[CT]">化学・生命工学科</option>
              <option value="[DT]">電気電子・情報工学科</option>
              <option value="P">工学部開講全共科目</option>
              <option value="T">その他</option>

            </select>
          </div>

          <div class="input-group mb-3">
            <select
              class="form-select"
              v-on:change="
                validateSerectCourse();
                filterAll();
              "
              v-model="filter.course"
            >
              <option value="." selected>コースを選択</option>
              <option value="[0A1EFG]">環境コース</option>
              <option value="[0A2EFG]">防災コース</option>
              <option value="[0B3EFG]">機械コース</option>
              <option value="[0B4EFG]">知能機械コース</option>
              <option value="[0C5EFG]">物質化学コース</option>
              <option value="[0C6EFG]">生命化学コース</option>
              <option value="[0D7EFG]">電気電子コース</option>
              <option value="[0D8EFG]">情報コース</option>
              <option value="[0D9EFG]">応用物理コース</option>
            </select>
          </div>

          <label>開講情報</label>
          <div class="row">
            <div class="col-md">
              <select
                class="form-select"
                v-on:change="filterAll()"
                v-model="filter.grade"
              >
                <option value=".">対象学年(全て)</option>
                <option value="1">1年生</option>
                <option value="2">2年生</option>
                <option value="3">3年生</option>
                <option value="4">4年生</option>
              </select>
            </div>
            <div class="col-md">
              <select
                class="form-select"
                v-on:change="filterAll()"
                v-model="filter.semester"
              >
                <option value=".">開講時期(全て)</option>
                <option value="1">前期</option>
                <option value="2">後期</option>
                <option value="3">通年</option>
              </select>
            </div>
            <div class="col-md">
              <select
                class="form-select"
                v-on:change="filterAll()"
                v-model="filter.weekday"
              >
                <option value=".">曜日(全て)</option>
                <option value="月曜日">月曜</option>
                <option value="火曜日">火曜</option>
                <option value="水曜日">水曜</option>
                <option value="木曜日">木曜</option>
                <option value="金曜日">金曜</option>
                <option value="集中">集中講義</option>
              </select>
            </div>
            <div class="col-md">
              <select
                class="form-select"
                v-model="filter.time"
                v-on:change="filterAll()"
              >
                <option value="." selected>時限(全て)</option>
                <option value="1">1限</option>
                <option value="2">2限</option>
                <option value="3">3限</option>
                <option value="4">4限</option>
                <option value="5">5限</option>
              </select>
            </div>
            <div class="col-md">
              <select
                class="form-select"
                v-on:change="filterAll()"
                v-model="filter.category"
              >
                <option value=".">科目分類(全て)</option>
                <option value="0">基礎科目</option>
                <option value="[A-D]">学科共通科目</option>
                <option value="[1-9]">コース科目</option>
                <option value="[E-G]">その他</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          一部の教職科目で、絞り込んだコースとは別コース向けの講義が表示される場合があります。シラバスを確認してください。
        </p>
      </div>
    </div>

    <div class="container mobbile" v-show="display.mobbile">
      <div class="card shadow rounded" v-for="(item, id) in table" :key="id">
        <a class="card-body" v-bind:href="item.url">
          <div class="h5 card-title mb-2 bold">{{ item.title }}</div>
          <div class="card-subtitle mb-2 text-muted">
            {{ item.grade }}年 / {{ item.category }}
            <span class="badge rounded-pill bg-primary">{{
              item.semester
            }}</span>
            <span class="badge rounded-pill bg-primary">{{
              item.weekday
            }}</span>
            <span class="badge rounded-pill bg-primary">{{ item.time }}</span>
          </div>
        </a>
      </div>
    </div>
    <div class="pc" v-show="display.pc">
      <table class="table">
        <thead>
          <tr>
            <th>履修コード</th>
            <th>科目名</th>
            <th>分類</th>
            <th>学年</th>
            <!-- <th>シラバスURL</th> -->
            <th>開講時期</th>
            <th>曜日</th>
            <th>時限</th>
            <th>教員</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, id) in table" :key="id">
            <td>
              <a v-bind:href="item.url" target="_blank">{{ id }}</a>
            </td>
            <td>
              {{ item.title }}
            </td>
            <td>{{ item.category }}</td>
            <td>{{ item.grade }}</td>
            <td>{{ item.semester }}</td>
            <td>{{ item.weekday }}</td>
            <td>{{ item.time }}</td>
            <td style="max-width: 20rem">{{ item.teacher }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import data from "/courseList_2021_kougaku.json";
import axios from "axios";
// const data = require("/courseList_2021_kougaku.json");
export default {
  name: "App",
  data() {
    return {
      courses: "",
      table: "",
      filter: {
        department: "T",
        faculty: ".",
        semester: ".",
        weekday: ".",
        time: ".",
        teacher: "",
        grade: ".",
        course: ".",
        category: ".",
      },
      display: {
        pc: true,
        mobbile: false,
      },
      COURSE_NAME: {
        "[0A1EFG]": "環境コース",
        "[0A2EFG]": "防災コース",
        "[0B3EFG]": "機械コース",
        "[0B4EFG]": "知能機械コース",
        "[0C5EFG]": "物質化学コース",
        "[0C6EFG]": "生命化学コース",
        "[0D7EFG]": "電気電子コース",
        "[0D8EFG]": "情報コース",
        "[0D9EFG]": "応用物理コース",
        A: "社会基盤工学科",
        B: "機械工学科",
        C: "化学・生命工学科",
        D: "電気電子・情報工学科",
        ".": ".*",
      },
    };
  },
  mounted() {
    axios.get("/courseList_2021_kougaku.json").then((response) => {
      const data = response.data;
      window.addEventListener("resize", this.handleResize);
      for (let index in data) {
        let category = "";
        if (index.match(/^.T..0/)) {
          category = "基礎科目";
        } else if (index.match(/^.T..[A-D]/)) {
          category = "学科共通科目";
        } else if (index.match(/^.T..[1-9]/)) {
          category = "コース科目";
        } else if (index.match(/^.T..E/)) {
          category = "金型創成技術科目";
        } else if (index.match(/^.T..F/)) {
          category = "教職科目";
        } else if (index.match(/^.T..G/)) {
          category = "航空宇宙生産技術科目";
        } else if (index.match(/^.ZZI/)) {
          category = "人文科学";
        } else if (index.match(/^.ZSY/)) {
          category = "社会科学";
        } else if (index.match(/^.ZSI/)) {
          category = "自然科学";
        } else if (index.match(/^.ZFU/)) {
          category = "複合領域";
        } else if (index.match(/^.ZSK/)) {
          category = "健康科学";
        } else if (index.match(/^.Z../)) {
          category = "その他";
        }
        data[index]["category"] = category;
      }
      // console.log(data);
      this.courses = data;
      this.table = data;
      this.filterAll();
    });
  },
  methods: {
    filterAll() {
      this.table = {};
      const regexp = new RegExp(
        `^${this.filter.semester}${this.filter.department}${this.filter.faculty}.${this.filter.course}`
      );
      // console.log("filter", regexp);

      for (let index in this.courses) {
        if (!index.match(regexp)) {
          continue;
        }
        // console.log(this.filter.course, this.COURSE_NAME[this.filter.course]);
        if (index.match(/^.T..[A-D0]/)) {
          // 学科共通科目の場合
          const courseMatch = this.courses[index].title.match(
            new RegExp(this.COURSE_NAME[this.filter.course])
          );
          const facultyMatch = this.courses[index].title.match(
            new RegExp(this.COURSE_NAME[this.filter.faculty])
          );
          const otherCourseMatch = this.courses[index].title.match(
            new RegExp("コース")
          );
          if (!(courseMatch || (facultyMatch && !otherCourseMatch))) {
            continue;
          }
        }
        if (
          !String(this.courses[index]["grade"]).match(
            new RegExp(this.filter.grade)
          )
        ) {
          continue;
        }
        console.log(
          String(this.courses[index]["grade"]),
          new RegExp(this.filter.grade)
        );
        if (
          !this.courses[index]["weekday"].match(new RegExp(this.filter.weekday))
        ) {
          continue;
        }
        if (!this.courses[index]["time"].match(new RegExp(this.filter.time))) {
          continue;
        }
        if (
          !index.match(
            new RegExp(
              `^${this.filter.semester}${this.filter.department}${this.filter.faculty}.${this.filter.category}`
            )
          )
        ) {
          continue;
        }
        this.table[index] = this.courses[index];
        // console.log(index);
      }
    },
    validateSerectCourse() {
      if (this.filter.course != ".") {
        this.filter.faculty = "["+this.filter.course.split("")[2]+"T]";
      }
    },
    validateSerectFaculty() {
      if (this.filter.faculty != ".") {
        this.filter.course = ".";
      }
    },
    handleResize() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      const width = window.innerWidth;
      if (width > 680) {
        this.display.pc = true;
        this.display.mobbile = false;
      } else {
        this.display.pc = false;
        this.display.mobbile = true;
      }
    },
  },
};
</script>

<style>
.badge {
  margin-right: 1rem;
}
nav {
  background-color: #e9474d;
}

input:focus {
  outline: none;
}

.card {
  margin: 10px 0;
}
.card-body {
  padding: 0.5rem;
}

/* body {
  font-family: "Noto Sans JP";
} */

.bold {
  font-weight: 500;
}

.card a {
  color: black;
  text-decoration: none;
}

footer li {
  border-right: white solid 1px;
}

header {
  text-align: center;
  height: 3rem;
}
header img {
  margin-top: 0.5rem;
  max-height: 2rem;
}

ul {
  padding: 0;
  margin: 0;
}

.push {
  height: 70px; /*フッターと同じ高さに指定*/
}

#fix-under-menu {
  position: fixed;
  width: 100%;
  bottom: 0px;
  font-size: 0;
  /* opacity: 0.9; */
  z-index: 2;
}

#fix-under-menu li {
  display: inline-block;
  width: 33.3333333%;
  font-size: 14px;
  /* border-right: 1px solid #fff; */
}

#fix-under-menu li a {
  color: #fff;
  width: 1%;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 60px;
  text-decoration: none;
}
#fix-under-menu li:not(.except) a {
  background: #f7921c;
}
#fix-under-menu li.except a {
  background: #c17217;
}

.counter {
  padding: 3px;
  margin: 0 0.1rem;
}

.main-title {
  margin-top: 1rem;
}
</style>
